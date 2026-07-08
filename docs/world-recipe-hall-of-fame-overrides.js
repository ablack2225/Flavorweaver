(function () {
  const recipes = window.FLAVORWEAVER_WORLD_RECIPES || [];

  const doroWat = recipes.find((item) => item.path === 'recipes/ethiopian/bowls-and-mains/ethiopian-inspired-doro-wat-platter.html');
  if (doroWat) {
    doroWat.title = 'Ethiopian-Inspired Doro Wat with Misir Wat Platter';
    doroWat.status = 'Hall of Fame · Top 10 Meal';
    doroWat.ingredients = ['chicken thighs', 'hard-boiled eggs', 'paprika', 'cayenne', 'fenugreek', 'onion', 'garlic', 'ginger', 'tomato paste', 'red lentils', 'misir wat', 'berbere', 'chicken broth', 'naan', 'onion zucchini bhaji fritters', 'carrot coconut peanut chutney'];
    doroWat.tags = ['Ethiopian-Inspired', 'ethiopian-inspired', 'Doro Wat', 'doro wat', 'Misir Wat', 'misir wat', 'red lentils', 'complete meal plate', 'berbere-style', 'Naan', 'naan', 'onion zucchini bhaji', 'carrot coconut peanut chutney', 'Top 10 Meal', 'top 10 meal', 'Hall of Fame', 'hall of fame', 'Amy and Don canon'];
  }
})();
