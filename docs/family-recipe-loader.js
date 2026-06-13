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

const inlineMarkdown = (text) => escapeHtml(text)
  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.*?)\*/g, '<em>$1</em>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');

const renderTable = (lines) => {
  const rows = lines
    .filter((line) => line.includes('|'))
    .map((line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => inlineMarkdown(cell.trim())));

  if (rows.length < 2) return '';
  const header = rows[0];
  const body = rows.slice(2);
  return `
    <div class="recipe-table-wrap">
      <table>
        <thead><tr>${header.map((cell) => `<th>${cell}</th>`).join('')}</tr></thead>
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  `;
};

const markdownToHtml = (markdown) => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let paragraph = [];
  let list = [];
  let table = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      list = [];
    }
  };

  const flushTable = () => {
    if (table.length) {
      html.push(renderTable(table));
      table = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushTable();
      return;
    }

    if (trimmed.includes('|') && !trimmed.startsWith('>')) {
      flushParagraph();
      flushList();
      table.push(trimmed);
      return;
    }

    flushTable();

    const heading = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = Math.min(heading[1].length + 1, 4);
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
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
      html.push(`<blockquote>${inlineMarkdown(trimmed.replace(/^>\s?/, ''))}</blockquote>`);
      return;
    }

    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  flushTable();

  return html.join('\n');
};

const buildSourceUrl = (sourcePath) => `${REPO_RAW_BASE}${encodeURI(sourcePath).replace(/#/g, '%23')}`;

const loadFamilyRecipeCard = async () => {
  const params = new URLSearchParams(window.location.search);
  const sourcePath = params.get('source');
  const mount = document.getElementById('family-recipe-card');
  const rawLink = document.getElementById('source-link');

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
    const title = meta.name || titleFromSlug(sourcePath);
    const summaryMatch = recipeCard.match(/^>\s+(.*)$/m);
    const summary = summaryMatch ? summaryMatch[1] : 'A preserved family recipe from the Flavorweaver family cookbook archive.';
    const tags = Array.isArray(meta.tags) ? meta.tags : [];

    document.title = `${title} | Flavorweaver`;
    document.getElementById('recipe-title').textContent = title;
    document.getElementById('recipe-summary').textContent = summary;
    document.getElementById('recipe-kicker').textContent = meta.category ? `Family Cookbook · ${meta.category}` : 'Family Cookbook';

    const dashboard = [
      ['Status', meta.status || 'Family Recipe'],
      ['Source', meta.family_source || 'Family recipe archive'],
      ['Total Time', meta.total_time || meta.printed_prep_time || 'Not specified'],
      ['Servings', meta.servings || 'Not specified']
    ];

    mount.innerHTML = `
      <section class="recipe-section">
        <h2>Recipe Dashboard</h2>
        <div class="recipe-meta-grid">
          ${dashboard.map(([label, value]) => `<div class="recipe-meta-item"><strong>${escapeHtml(label)}</strong>${escapeHtml(value)}</div>`).join('')}
        </div>
      </section>

      <section class="recipe-section recipe-source-card">
        ${markdownToHtml(recipeCard)}
      </section>

      ${tags.length ? `<section class="recipe-section"><h2>Tags</h2><div class="recipe-tag-row">${tags.map((tag) => `<a class="recipe-tag" href="../../recipes.html?q=${encodeURIComponent(tag)}">${escapeHtml(tag)}</a>`).join('')}</div></section>` : ''}
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
