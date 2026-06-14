(() => {
  const normalize = (value) => String(value || '').toLowerCase().trim();
  const tokenize = (value) => normalize(value).match(/[a-z0-9]+/g) || [];
  const encodeQuery = (value) => encodeURIComponent(value);
  const allRecipes = () => [
    ...(window.FLAVORWEAVER_WORLD_RECIPES || []),
    ...(window.FLAVORWEAVER_FAMILY_RECIPES || [])
  ];

  const termMatchesRecipe = (recipe, term) => {
    const termTokens = tokenize(term);
    if (!termTokens.length) return true;
    const fields = [
      recipe.title,
      recipe.collection,
      recipe.culture,
      recipe.category,
      recipe.status,
      ...(recipe.ingredients || []),
      ...(recipe.tags || [])
    ].filter(Boolean);
    return fields.some((field) => {
      const fieldText = normalize(field);
      const fieldTokens = tokenize(field);
      if (fieldText.includes(normalize(term))) return true;
      return termTokens.every((token) => fieldTokens.includes(token));
    });
  };

  const matchesAny = (recipe, values, getter) => {
    if (!values || !values.length) return true;
    return values.some((value) => normalize(getter(recipe)).includes(normalize(value)));
  };

  const matchesAnyArray = (recipe, values, getter) => {
    if (!values || !values.length) return true;
    const recipeValues = getter(recipe).map(normalize);
    return values.some((value) => recipeValues.includes(normalize(value)));
  };

  const buildIndex = (config) => {
    return allRecipes().filter((recipe) => {
      if (config.collections && !matchesAny(recipe, config.collections, (item) => item.collection)) return false;
      if (config.cultures && !matchesAny(recipe, config.cultures, (item) => item.culture)) return false;
      if (config.categories && !matchesAny(recipe, config.categories, (item) => item.category)) return false;
      if (config.statuses && !matchesAny(recipe, config.statuses, (item) => item.status)) return false;
      if (config.tags && !matchesAnyArray(recipe, config.tags, (item) => item.tags || [])) return false;
      if (config.include && !config.include(recipe)) return false;
      return true;
    });
  };

  const recipeCard = (recipe) => {
    const ingredients = (recipe.ingredients || []).slice(0, 6).join(', ');
    const meta = [recipe.culture, recipe.category, recipe.status].filter(Boolean).join(' · ');
    return `<article class="feature-card" data-search-card><h3>${recipe.title}</h3><p>${meta || recipe.collection || 'Recipe'}</p>${ingredients ? `<p><strong>Key ingredients:</strong> ${ingredients}</p>` : ''}<a href="${recipe.path}">Open recipe</a></article>`;
  };

  const searchRecipeCards = (recipes, query) => {
    const terms = tokenize(query);
    return terms.length ? recipes.filter((recipe) => terms.every((term) => termMatchesRecipe(recipe, term))) : recipes;
  };

  const render = (mount, recipes, emptyText) => {
    mount.innerHTML = recipes.length
      ? recipes.map(recipeCard).join('')
      : `<article class="feature-card"><h3>No matches yet</h3><p>${emptyText || 'Try a broader search term.'}</p></article>`;
  };

  window.FLAVORWEAVER_PATH_PAGE_SEARCH = {
    init(config) {
      const searchInput = document.getElementById(config.searchInputId);
      const resultMount = document.getElementById(config.resultMountId);
      const filterMount = document.getElementById(config.filterMountId);
      if (!searchInput || !resultMount) return;

      const pageRecipes = buildIndex(config);
      const quickFilters = config.quickFilters || [];
      if (filterMount) {
        filterMount.innerHTML = quickFilters
          .map((label) => `<button type="button" data-filter="${label}">${label}</button>`)
          .join('');
      }

      const runSearch = () => render(resultMount, searchRecipeCards(pageRecipes, searchInput.value), config.emptyText);
      searchInput.addEventListener('input', runSearch);
      if (filterMount) {
        filterMount.querySelectorAll('[data-filter]').forEach((button) => {
          button.addEventListener('click', () => {
            searchInput.value = button.dataset.filter;
            runSearch();
            searchInput.focus();
          });
        });
      }
      render(resultMount, pageRecipes, config.emptyText);
    }
  };
})();
