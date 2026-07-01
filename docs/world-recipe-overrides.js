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
      status: 'Tested / Rotation Recipe',
      ingredients: ['potatoes', 'all-purpose flour', 'cornstarch', 'ginger garlic paste', 'coriander', 'garam masala', 'paprika', 'chili powder', 'turmeric', 'dried thyme', 'cumin seed', 'neutral oil', 'lemon', 'lime'],
      tags: ['Indian-Inspired', 'indian-inspired', 'aloo pakora', 'potato pakora', 'potato fritters', 'crispy potato side', 'fried side', 'korma pairing', 'palak paneer pairing', 'carrot coconut peanut chutney pairing', 'rotation recipe', 'tested favorite']
    });
  }

  if (!recipes.some((item) => item.path === 'recipes/indian/bold-carrot-coconut-peanut-chutney.html')) {
    recipes.push({
      title: 'Bold Carrot Coconut Peanut Chutney',
      path: 'recipes/indian/bold-carrot-coconut-peanut-chutney.html',
      collection: 'House Recipes',
      culture: 'Indian Inspired',
      category: 'Condiment',
      status: 'Tested / Rotation Recipe',
      ingredients: ['carrot', 'sweetened coconut flakes', 'peanut butter', 'cashews', 'sesame seeds', 'ginger garlic paste', 'cumin seed', 'curry powder', 'garam masala', 'cayenne', 'chili powder', 'kosher salt', 'lime juice', 'lemon juice', 'water', 'soy sauce'],
      tags: ['Indian-Inspired', 'indian-inspired', 'carrot chutney', 'coconut chutney', 'peanut chutney', 'pakora chutney', 'bold chutney', 'spicy chutney', 'aloo pakora pairing', 'korma plate contrast', 'naan pairing', 'rotation recipe', 'tested favorite']
    });
  }

  if (!recipes.some((item) => item.path === 'recipes/southern/pecan-fried-chicken-makers-mark-french-toast-bourbon-sauce.html')) {
    recipes.push({
      title: "Pecan Fried Chicken with Maker's Mark French Toast Bourbon Sauce",
      path: 'recipes/southern/pecan-fried-chicken-makers-mark-french-toast-bourbon-sauce.html',
      collection: 'House Recipes',
      culture: 'Southern Inspired',
      category: 'Main Dish',
      status: 'Recreation Candidate / Don Memory Plate',
      ingredients: ['chicken breast', 'buttermilk', 'egg', 'pecans', 'all-purpose flour', 'cornstarch', 'paprika', 'garlic powder', 'onion powder', 'neutral oil', 'butter', 'maple syrup', 'brown sugar', "Maker's Mark bourbon", 'vanilla', 'cinnamon', 'Honeycrisp apples', 'Granny Smith apples', 'sweet potatoes', 'honey', 'broccoli', 'garlic', 'lemon'],
      tags: ['Southern-Inspired', 'southern-inspired', 'pecan fried chicken', 'fried chicken', 'bourbon sauce', "Maker's Mark", 'French toast sauce', 'fried apples', 'Southern cinnamon fried apples', 'honey butter sweet potatoes', 'garlic broccoli', 'Don memory plate', 'special treat dinner', 'project meal']
    });
  }
})();