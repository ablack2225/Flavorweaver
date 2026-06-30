(function () {
  const recipes = window.FLAVORWEAVER_WORLD_RECIPES || [];

  const bangBangShrimp = recipes.find((item) => item.path === 'recipes/thai/thai-inspired-bang-bang-shrimp-bowls.html');
  if (bangBangShrimp) {
    bangBangShrimp.ingredients = [
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

    bangBangShrimp.tags = [
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
  }

  if (!recipes.some((item) => item.path === 'recipes/indian/aloo-pakora-inspired-potato-fritters.html')) {
    recipes.push({
      title: 'Aloo Pakora-Inspired Potato Fritters',
      path: 'recipes/indian/aloo-pakora-inspired-potato-fritters.html',
      collection: 'House Recipes',
      culture: 'Indian Inspired',
      category: 'Side Dish',
      status: 'Live Test',
      ingredients: ['potatoes', 'all-purpose flour', 'cornstarch', 'ginger garlic paste', 'coriander', 'garam masala', 'paprika', 'chili powder', 'turmeric', 'dried thyme', 'cumin seed', 'neutral oil', 'lemon', 'lime'],
      tags: ['Indian-Inspired', 'indian-inspired', 'aloo pakora', 'potato pakora', 'potato fritters', 'crispy potato side', 'fried side', 'korma pairing', 'palak paneer pairing']
    });
  }
})();