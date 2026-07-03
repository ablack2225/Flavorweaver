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

  const drunkenNoodles = recipes.find((item) => item.path === 'recipes/thai/thai-inspired-drunken-noodles-with-shrimp-bacon-and-egg.html');
  if (drunkenNoodles) {
    drunkenNoodles.title = 'Thai-Inspired Drunken Noodles with Shrimp & Egg';
    drunkenNoodles.status = 'Flavorweaver Successful Live Test';
    drunkenNoodles.ingredients = [
      'shrimp',
      'eggs',
      'fresh wide rice noodles',
      'dry wide rice noodles fallback',
      'oyster sauce',
      'soy sauce',
      'dark soy sauce',
      'fish sauce',
      'honey',
      'brown sugar',
      'garlic',
      'Thai chiles',
      'shallot',
      'onion',
      'red bell pepper',
      'vine tomato',
      'Thai basil',
      'bacon drippings'
    ];
    drunkenNoodles.tags = [
      'Thai-Inspired',
      'thai-inspired',
      'Asian-Inspired',
      'asian-inspired',
      'drunken noodles',
      'pad kee mao inspired',
      'wide rice noodles',
      'fresh wide rice noodles',
      'dry noodle fallback',
      'package-cooked dry noodles',
      'shrimp',
      'egg',
      'Thai basil',
      'Thai chiles',
      'red bell pepper',
      'vine tomato',
      'chunky garlic',
      'bacon drippings',
      'doubled sauce',
      'successful live test',
      'high-heat stir-fry'
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

  const pecanChicken = recipes.find((item) => item.path === 'recipes/southern/pecan-fried-chicken-makers-mark-french-toast-bourbon-sauce.html');
  if (pecanChicken) {
    pecanChicken.status = 'Don Hall of Fame / Canon-Lock Candidate';
    pecanChicken.ingredients = ['chicken breast', 'buttermilk', 'egg', 'pecans', 'all-purpose flour', 'cornstarch', 'paprika', 'garlic powder', 'onion powder', 'neutral oil', 'butter', 'maple syrup', 'brown sugar', "Maker's Mark bourbon", 'vanilla', 'cinnamon', 'Honeycrisp apples', 'Granny Smith apples', 'Southern cinnamon fried apples', 'yeast rolls', 'honey butter', 'broccoli', 'garlic', 'lemon'];
    pecanChicken.tags = ['Southern-Inspired', 'southern-inspired', 'pecan fried chicken', 'fried chicken', 'bourbon sauce', "Maker's Mark", 'French toast sauce', 'fried apples', 'Southern cinnamon fried apples', 'yeast rolls', 'honey butter rolls', 'house yeast rolls', 'garlic broccoli', 'Don memory plate', 'Don Hall of Fame', 'canon-lock candidate', 'best food Don has ever had', 'Amy surpassed chef skill', 'special treat dinner', 'project meal'];
  }

  if (!recipes.some((item) => item.path === 'recipes/southern/pecan-fried-chicken-makers-mark-french-toast-bourbon-sauce.html')) {
    recipes.push({
      title: "Pecan Fried Chicken with Maker's Mark French Toast Bourbon Sauce",
      path: 'recipes/southern/pecan-fried-chicken-makers-mark-french-toast-bourbon-sauce.html',
      collection: 'House Recipes',
      culture: 'Southern Inspired',
      category: 'Main Dish',
      status: 'Don Hall of Fame / Canon-Lock Candidate',
      ingredients: ['chicken breast', 'buttermilk', 'egg', 'pecans', 'all-purpose flour', 'cornstarch', 'paprika', 'garlic powder', 'onion powder', 'neutral oil', 'butter', 'maple syrup', 'brown sugar', "Maker's Mark bourbon", 'vanilla', 'cinnamon', 'Honeycrisp apples', 'Granny Smith apples', 'Southern cinnamon fried apples', 'yeast rolls', 'honey butter', 'broccoli', 'garlic', 'lemon'],
      tags: ['Southern-Inspired', 'southern-inspired', 'pecan fried chicken', 'fried chicken', 'bourbon sauce', "Maker's Mark", 'French toast sauce', 'fried apples', 'Southern cinnamon fried apples', 'yeast rolls', 'honey butter rolls', 'house yeast rolls', 'garlic broccoli', 'Don memory plate', 'Don Hall of Fame', 'canon-lock candidate', 'best food Don has ever had', 'Amy surpassed chef skill', 'special treat dinner', 'project meal']
    });
  }

  if (!recipes.some((item) => item.path === 'recipes/german/pork-loin-schnitzel-with-rotkohl.html')) {
    recipes.push({
      title: 'Pork Loin Schnitzel with Rotkohl',
      path: 'recipes/german/pork-loin-schnitzel-with-rotkohl.html',
      collection: 'House Recipes',
      culture: 'German Inspired',
      category: 'Main Dish',
      status: 'Recreation Candidate / Don Comfort Plate',
      ingredients: ['pork loin', 'pork cutlets', 'flour', 'eggs', 'breadcrumbs', 'panko', 'neutral oil', 'lemon', 'purple cabbage', 'red cabbage', 'yellow onion', 'Granny Smith apple', 'apple cider vinegar', 'brown sugar', 'butter', 'bay leaf', 'cinnamon', 'cloves', 'Dijon mustard'],
      tags: ['German-Inspired', 'german-inspired', 'pork schnitzel', 'schnitzel', 'pork loin', 'rotkohl', 'sweet sour red cabbage', 'purple cabbage', 'red cabbage', 'Don comfort plate', 'comfort food', 'plate recipe']
    });
  }

  if (!recipes.some((item) => item.path === 'recipes/german/bratkartoffeln-style-german-fried-potatoes.html')) {
    recipes.push({
      title: 'Bratkartoffeln-Style German Fried Potatoes',
      path: 'recipes/german/bratkartoffeln-style-german-fried-potatoes.html',
      collection: 'House Recipes',
      culture: 'German Inspired',
      category: 'Side Dish',
      status: 'Recreation Candidate / Schnitzel Side',
      ingredients: ['cubed hashbrown potatoes', 'bacon', 'onion', 'butter', 'kosher salt', 'black pepper', 'garlic powder', 'plain paprika', 'caraway seed', 'dried marjoram', 'dried thyme', 'green onion'],
      tags: ['German-Inspired', 'german-inspired', 'bratkartoffeln', 'German fried potatoes', 'bacon onion potatoes', 'hashbrown shortcut', 'schnitzel side', 'rotkohl pairing', 'electric skillet']
    });
  }
})();