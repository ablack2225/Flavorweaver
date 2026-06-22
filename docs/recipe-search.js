(() => {
  const normalize = (value) => String(value || '').toLowerCase().trim();
  const encodeQuery = (value) => encodeURIComponent(value);
  const tokenize = (value) => normalize(value).match(/[a-z0-9]+/g) || [];

  const dedupeLabels = (labels) => {
    const seen = new Set();
    return labels.filter((label) => {
      const key = normalize(label);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const searchableFields = (recipe) => [
    recipe.title,
    recipe.collection,
    recipe.culture,
    recipe.category,
    recipe.status,
    ...(recipe.ingredients || []),
    ...(recipe.tags || [])
  ].filter(Boolean);

  const termMatchesRecipe = (recipe, term) => {
    const normalizedTerm = normalize(term);
    if (!normalizedTerm) return true;
    return searchableFields(recipe).some((field) => {
      const normalizedField = normalize(field);
      const fieldTokens = tokenize(field);
      const termTokens = tokenize(normalizedTerm);
      if (normalizedField === normalizedTerm) return true;
      if (termTokens.length > 1 && normalizedField.includes(normalizedTerm)) return true;
      return termTokens.every((token) => fieldTokens.includes(token));
    });
  };

  const categoryMatchesRecipe = (recipe, category) => normalize(recipe.category) === normalize(category);

  const publicTagsForRecipe = (recipe) => {
    const hidden = new Set(dedupeLabels([
      recipe.collection,
      recipe.category,
      recipe.status,
      'family recipe',
      'family cookbook'
    ]).map(normalize));
    return dedupeLabels(recipe.tags || []).filter((tag) => !hidden.has(normalize(tag)));
  };

  const buildRecipeIndex = () => [
    ...(window.FLAVORWEAVER_WORLD_RECIPES || []),
    ...(window.FLAVORWEAVER_FAMILY_RECIPES || [])
  ];

  const buildQuickFilters = (recipes) => {
    const priority = [
      'house staple',
      'Korean Inspired',
      'Vietnamese Inspired',
      'Chinese Inspired',
      'Ethiopian Inspired',
      'Indian Inspired',
      'Middle Eastern Inspired',
      'Asian Inspired',
      'Main Dish',
      'Side Dish',
      'Bread',
      'Appetizer',
      'Condiment',
      'complete meal plate',
      'doro wat',
      'falafel',
      'naan',
      'injera',
      'top 10 meal'
    ];
    const labels = [];
    recipes.forEach((recipe) => {
      labels.push(recipe.culture, recipe.category, recipe.status, ...(recipe.tags || []));
    });
    const deduped = dedupeLabels(labels);
    const byKey = new Map(deduped.map((label) => [normalize(label), label]));
    const ordered = priority
      .map((label) => byKey.get(normalize(label)))
      .filter(Boolean);
    const remaining = deduped
      .filter((label) => !ordered.some((item) => normalize(item) === normalize(label)))
      .sort((a, b) => a.localeCompare(b));
    return [...ordered, ...remaining].slice(0, 28);
  };

  const renderRecipes = (items, label = '') => {
    const resultsEl = document.getElementById('results');
    const countEl = document.getElementById('result-count');
    if (!resultsEl || !countEl) return;
    countEl.textContent = label
      ? `Showing ${items.length} result${items.length === 1 ? '' : 's'} for “${label}”.`
      : `Showing ${items.length} recipe pages.`;
    if (!items.length) {
      resultsEl.innerHTML = '<div class="empty-state">No matches yet. Try a broader word like chicken, Korean, Vietnamese, Chinese, Ethiopian, Indian, Middle Eastern, falafel, naan, injera, pie, cookies, sides, or sauce.</div>';
      return;
    }
    resultsEl.innerHTML = items.map((recipe) => {
      const tags = publicTagsForRecipe(recipe)
        .map((tag) => `<a class="tag" href="recipes.html?q=${encodeQuery(tag)}" data-filter="${tag}">${tag}</a>`)
        .join('');
      const ingredients = (recipe.ingredients || []).slice(0, 8).join(', ');
      const cultureRow = recipe.culture
        ? `<span><strong>Culture:</strong> <a class="inline-filter" href="recipes.html?q=${encodeQuery(recipe.culture)}" data-filter="${recipe.culture}">${recipe.culture}</a></span>`
        : '';
      const statusRow = recipe.status
        ? `<span><strong>Status:</strong> <a class="inline-filter" href="recipes.html?q=${encodeQuery(recipe.status)}" data-filter="${recipe.status}">${recipe.status}</a></span>`
        : '';
      return `<article class="result-card"><h3>${recipe.title}</h3><div class="meta"><span><strong>Collection:</strong> <a class="inline-filter" href="recipes.html?q=${encodeQuery(recipe.collection)}" data-filter="${recipe.collection}">${recipe.collection}</a></span>${cultureRow}<span><strong>Category:</strong> <a class="inline-filter" href="recipes.html?category=${encodeQuery(recipe.category)}" data-category-filter="${recipe.category}">${recipe.category}</a></span>${statusRow}</div>${ingredients ? `<p><strong>Key ingredients:</strong> ${ingredients}</p>` : ''}${tags ? `<div class="tag-row">${tags}</div>` : ''}<a class="result-link" href="${recipe.path}">Open recipe</a></article>`;
    }).join('');
  };

  const mountQuickFilters = (recipes) => {
    const mount = document.getElementById('quick-searches');
    if (!mount) return;
    mount.innerHTML = buildQuickFilters(recipes)
      .map((label) => `<button type="button" data-search="${label}">${label}</button>`)
      .join('');
  };

  window.FLAVORWEAVER_RECIPE_SEARCH = {
    initArchiveSearch() {
      const recipes = buildRecipeIndex();
      const searchInput = document.getElementById('recipe-search');
      const resultsEl = document.getElementById('results');
      if (!searchInput || !resultsEl) return;
      mountQuickFilters(recipes);

      const setCategoryFilter = (category, updateUrl = true) => {
        searchInput.value = '';
        const filtered = recipes.filter((recipe) => categoryMatchesRecipe(recipe, category));
        if (updateUrl) window.history.replaceState({}, '', `recipes.html?category=${encodeQuery(category)}`);
        renderRecipes(filtered, category);
      };

      const runSearch = (updateUrl = true) => {
        const query = searchInput.value.trim();
        const terms = tokenize(query);
        const filtered = terms.length
          ? recipes.filter((recipe) => terms.every((term) => termMatchesRecipe(recipe, term)))
          : recipes;
        if (updateUrl) window.history.replaceState({}, '', query ? `recipes.html?q=${encodeQuery(query)}` : 'recipes.html');
        renderRecipes(filtered, query);
      };

      document.querySelectorAll('[data-search]').forEach((button) => {
        button.addEventListener('click', () => {
          searchInput.value = button.dataset.search;
          runSearch();
          searchInput.focus();
        });
      });

      resultsEl.addEventListener('click', (event) => {
        const categoryLink = event.target.closest('[data-category-filter]');
        if (categoryLink) {
          event.preventDefault();
          setCategoryFilter(categoryLink.dataset.categoryFilter);
          searchInput.focus();
          return;
        }
        const filterLink = event.target.closest('[data-filter]');
        if (!filterLink) return;
        event.preventDefault();
        searchInput.value = filterLink.dataset.filter;
        runSearch();
        searchInput.focus();
      });

      searchInput.addEventListener('input', () => runSearch());
      const params = new URLSearchParams(window.location.search);
      const initialCategory = params.get('category') || '';
      const initialQuery = params.get('q') || '';
      if (initialCategory) setCategoryFilter(initialCategory, false);
      else {
        searchInput.value = initialQuery;
        runSearch(false);
      }
    }
  };
})();