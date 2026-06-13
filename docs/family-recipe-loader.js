const REPO_RAW_BASE = 'https://raw.githubusercontent.com/ablack2225/Flavorweaver/main/';

const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const titleFromSlug = (sourcePath) => {
  const slug = String(sourcePath || '').split('/').pop().replace(/\.md$/, '');
  return slug
    .split('-')
    .map((word, index) => {
      const lowerWords = ['and', 'or', 'with', 'for', 'of', 'to'];
      if (index > 0 && lowerWords.includes(word)) return word;
      if (word === '10' || word === '30') return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .replace('Jimmies', "Jimmie's")
    .replace('Jalapeno', 'Jalapeño')
    .replace('Oreo', 'Oreo');
};

const normalizeLabel = (value) => String(value || '')
  .trim()
  .replace(/_/g, ' ')
  .replace(/\s+/g, ' ')
  .replace(/\b\w/g, (letter) => letter.toUpperCase());

const parseFrontMatter = (markdown) => {
  if (!markdown.startsWith('---')) return { meta: {}, body: markdown };
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) return { meta: {}, body: markdown };
  const yaml = markdown.slice(3, end).trim();
  const body = markdown.slice(end + 4).trim();
  const meta = {};
  let currentKey = null;

  yaml.split(/\r?\n/).forEach((line) => {
    const listMatch = line.match(/^\s*-\s+(.*)$/);
    if (listMatch && currentKey) {
      meta[currentKey] = Array.isArray(meta[currentKey]) ? meta[currentKey] : [];
      meta[currentKey].push(listMatch[1].trim());
      return;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();
      meta[currentKey] = value || [];
    }
  });

  return { meta, body };
};

const extractRecipeCard = (body) => {
  const start = body.indexOf('<!-- recipe-card:start -->');
  const end = body.indexOf('<!-- recipe-card:end -->');
  if (start !== -1 && end !== -1 && end > start) {
    return body.slice(start + '<!-- recipe-card:start -->'.length, end).trim();
  }
  return body.trim();
};

const extractAfterRecipeCard = (body) => {
  const end = body.indexOf('<!-- recipe-card:end -->');
  if (end === -1) return '';
  return body.slice(end + '<!-- recipe-card:end -->'.length).trim();
};

const inlineMarkdown = (text) => escapeHtml(text)
  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.*?)\*/g, '<em>$1</em>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');

const parseTable = (lines) => {
  const rows = lines
    .filter((line) => line.includes('|'))
    .map((line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim()));

  if (rows.length < 2) return { header: [], body: [] };
  return { header: rows[0], body: rows.slice(2) };
};

const renderRawTable = (lines) => {
  const { header, body } = parseTable(lines);
  if (!header.length) return '';
  return `
    <div class="family-raw-table">
      <details>
        <summary>View preserved table</summary>
        <table>
          <thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead>
          <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </details>
    </div>
  `;
};

const renderComponentTable = (lines) => {
  const { header, body } = parseTable(lines);
  if (header[0] !== 'Component' || !body.length) return renderRawTable(lines);
  return `
    <div class="family-component-grid">
      ${body.map((row) => `
        <div class="family-component-card">
          <strong>${inlineMarkdown(row[0] || 'Component')}</strong>
          <p>${inlineMarkdown(row[1] || '')}</p>
        </div>
      `).join('')}
    </div>
  `;
};

const renderIngredientTable = (lines, groupTitle = 'Ingredients') => {
  const { header, body } = parseTable(lines);
  if (header[0] !== 'Amount' || header[1] !== 'Ingredient' || !body.length) return renderRawTable(lines);

  return `
    <div class="family-ingredient-group">
      <h3>${inlineMarkdown(groupTitle || 'Ingredients')}</h3>
      <ul class="family-ingredient-list">
        ${body.map((row) => `
          <li class="family-ingredient-item">
            <span class="family-ingredient-amount">${inlineMarkdown(row[0] || '')}</span>
            <span class="family-ingredient-name">
              ${inlineMarkdown(row[1] || '')}
              ${row[2] ? `<span class="family-ingredient-note">${inlineMarkdown(row[2])}</span>` : ''}
            </span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
};

const renderInstructionTable = (lines) => {
  const { header, body } = parseTable(lines);
  if (header[0] !== 'Step' || header[1] !== 'Action' || !body.length) return renderRawTable(lines);
  return `<ol class="family-instruction-list">${body.map((row) => `<li>${inlineMarkdown(row[1] || row[0] || '')}</li>`).join('')}</ol>`;
};

const collectSections = (markdown) => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const sections = [];
  let current = { title: '', lines: [] };

  lines.forEach((line) => {
    const heading = line.trim().match(/^##\s+(.*)$/);
    if (heading) {
      if (current.title || current.lines.some((entry) => entry.trim())) sections.push(current);
      current = { title: heading[1].trim(), lines: [] };
      return;
    }

    if (!line.trim().startsWith('# ')) current.lines.push(line);
  });

  if (current.title || current.lines.some((entry) => entry.trim())) sections.push(current);
  return sections.filter((section) => section.title !== 'Recipe Dashboard');
};

const simpleMarkdownToHtml = (markdown) => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let paragraph = [];
  let list = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      html.push(`<ul class="recipe-list">${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      list = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const heading = trimmed.match(/^#{3,4}\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      html.push(`<h3>${inlineMarkdown(heading[1])}</h3>`);
      return;
    }

    const listItem = trimmed.match(/^[-*]\s+(.*)$/);
    if (listItem) {
      flushParagraph();
      list.push(listItem[1]);
      return;
    }

    if (trimmed.startsWith('>')) {
      flushParagraph();
      flushList();
      html.push(`<p class="recipe-note">${inlineMarkdown(trimmed.replace(/^>\s?/, ''))}</p>`);
      return;
    }

    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  return html.join('\n');
};

const renderSection = (section) => {
  const title = section.title;
  const lines = section.lines;
  const nonEmpty = lines.filter((line) => line.trim());
  const tableLines = nonEmpty.filter((line) => line.includes('|'));
  const h3 = nonEmpty.find((line) => /^###\s+/.test(line.trim()))?.trim().replace(/^###\s+/, '');

  if (title === 'Ingredient List') {
    return `<section class="family-recipe-section"><h2 class="family-section-title">Ingredient List</h2>${renderComponentTable(tableLines)}</section>`;
  }

  if (title === 'Measured Ingredients') {
    return `<section class="family-recipe-section"><h2 class="family-section-title">Measured Ingredients</h2><div class="family-ingredient-groups">${renderIngredientTable(tableLines, h3 || 'Ingredients')}</div></section>`;
  }

  if (title === 'Instructions') {
    return `<section class="family-recipe-section"><h2 class="family-section-title">Instructions</h2>${renderInstructionTable(tableLines)}</section>`;
  }

  const contentWithoutH3 = lines.filter((line) => !/^###\s+/.test(line.trim())).join('\n').trim();
  return `<section class="family-recipe-section"><h2 class="family-section-title">${inlineMarkdown(title || 'Recipe Notes')}</h2>${simpleMarkdownToHtml(contentWithoutH3)}</section>`;
};

const renderNotes = (notesMarkdown) => {
  if (!notesMarkdown.trim()) return '';
  const cleaned = notesMarkdown.replace(/^##\s+Notes\s*/m, '').trim();
  if (!cleaned) return '';
  return `
    <section class="family-recipe-section">
      <h2 class="family-section-title">Family Notes</h2>
      <div class="family-note-grid">
        <div class="family-note-card">${simpleMarkdownToHtml(cleaned)}</div>
      </div>
    </section>
  `;
};

const buildSourceUrl = (sourcePath) => `${REPO_RAW_BASE}${encodeURI(sourcePath).replace(/#/g, '%23')}`;

const loadFamilyRecipeCard = async () => {
  const params = new URLSearchParams(window.location.search);
  const sourcePath = params.get('source');
  const mount = document.getElementById('family-recipe-card');
  const rawLink = document.getElementById('source-link');
  const sourceLine = document.getElementById('family-source-line');
  const categorySearchLink = document.getElementById('category-search-link');

  if (!sourcePath) {
    mount.innerHTML = '<div class="empty-state">No family recipe source was provided.</div>';
    return;
  }

  const rawUrl = buildSourceUrl(sourcePath);
  rawLink.href = rawUrl;
  rawLink.hidden = false;

  try {
    const response = await fetch(rawUrl);
    if (!response.ok) throw new Error(`Unable to load source recipe (${response.status})`);

    const markdown = await response.text();
    const { meta, body } = parseFrontMatter(markdown);
    const recipeCard = extractRecipeCard(body);
    const notes = extractAfterRecipeCard(body);
    const title = meta.name || titleFromSlug(sourcePath);
    const summaryMatch = recipeCard.match(/^>\s+(.*)$/m);
    const summary = summaryMatch ? summaryMatch[1] : 'A preserved family recipe from the Flavorweaver family cookbook archive.';
    const tags = Array.isArray(meta.tags) ? meta.tags : [];
    const category = meta.category || 'Family Cookbook';

    document.title = `${title} | Flavorweaver`;
    document.getElementById('recipe-title').textContent = title;
    document.getElementById('recipe-summary').textContent = summary;
    document.getElementById('recipe-kicker').textContent = `Family Cookbook · ${category}`;

    categorySearchLink.href = `../../recipes.html?q=${encodeURIComponent(category)}`;
    categorySearchLink.textContent = `Search ${category}`;

    const sourcePills = [
      ['Source', meta.family_source || 'Family recipe archive'],
      ['Category', category],
      ['Status', meta.status || 'Preserved']
    ];

    sourceLine.hidden = false;
    sourceLine.innerHTML = sourcePills
      .map(([label, value]) => `<span class="family-source-pill">${escapeHtml(label)}: ${escapeHtml(value)}</span>`)
      .join('');

    const dashboard = [
      ['Prep', meta.prep_time || meta.printed_prep_time || 'Not specified'],
      ['Bake/Cook', meta.bake_time || meta.cook_time || 'Not specified'],
      ['Total', meta.total_time || meta.printed_prep_time || 'Not specified'],
      ['Serves', meta.servings || 'Not specified']
    ];

    const sections = collectSections(recipeCard)
      .map(renderSection)
      .join('\n');

    mount.innerHTML = `
      <section class="recipe-section">
        <h2>Recipe Dashboard</h2>
        <div class="recipe-meta-grid">
          ${dashboard.map(([label, value]) => `<div class="recipe-meta-item"><strong>${escapeHtml(label)}</strong>${escapeHtml(value)}</div>`).join('')}
        </div>
      </section>

      ${sections}

      ${renderNotes(notes)}

      ${tags.length ? `<section class="recipe-section"><h2>Tags</h2><div class="recipe-tag-row">${tags.map((tag) => `<a class="recipe-tag" href="../../recipes.html?q=${encodeURIComponent(tag)}">${escapeHtml(tag)}</a>`).join('')}</div></section>` : ''}

      <section class="family-recipe-section">
        <h2 class="family-section-title">Preservation</h2>
        <div class="family-provenance-card">
          <strong>Source path</strong>
          <p>${escapeHtml(sourcePath)}</p>
        </div>
      </section>
    `;
  } catch (error) {
    mount.innerHTML = `
      <div class="empty-state">
        This recipe card could not load from the Markdown source.
        <a href="${rawUrl}">Open the source recipe</a>.
      </div>
    `;
  }
};

document.addEventListener('DOMContentLoaded', loadFamilyRecipeCard);
