(function () {
  const recipes = window.FLAVORWEAVER_WORLD_RECIPES || [];
  const recipe = recipes.find((item) => item.path === 'recipes/thai/thai-inspired-bang-bang-shrimp-bowls.html');
  if (!recipe) return;

  recipe.ingredients = [
    'shrimp',
    'mayonnaise',
    'guajillo chiles',
    'garlic',
    'rice vinegar',
    'sugar',
    'sweet chili sauce',
    'chili garlic paste',
    'coconut milk',
    'basmati rice',
    'lime',
    'garlic oyster broccoli',
    'toasted coconut',
    'crispy fried onions',
    'mint',
    'cornstarch',
    'green onion'
  ];

  recipe.tags = [
    'Thai-Inspired',
    'thai-inspired',
    'Asian-Inspired',
    'asian-inspired',
    'bang bang shrimp',
    'shrimp bowls',
    'complete bowl',
    'coconut lime rice',
    'garlic oyster broccoli',
    'toasted coconut',
    'crispy fried onions',
    'sweet chili sauce',
    'crispy shrimp',
    'project meal'
  ];
})();