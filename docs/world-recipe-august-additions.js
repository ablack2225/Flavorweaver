(function () {
  const recipes = window.FLAVORWEAVER_WORLD_RECIPES || [];

  if (!recipes.some((item) => item.path === 'recipes/korean/korean-smoky-plum-bbq-pork.html')) {
    recipes.push({
      title: 'Korean Smoky-Plum BBQ Pork',
      path: 'recipes/korean/korean-smoky-plum-bbq-pork.html',
      collection: 'House Recipes',
      culture: 'Korean Inspired',
      category: 'Main Dish',
      status: 'Flavorweaver Test Recipe',
      ingredients: ['pork butt', 'fresh plums', 'gochujang', 'less-sodium soy sauce', 'rice vinegar', 'honey', 'brown sugar', 'sweet onion', 'garlic', 'fresh ginger', 'green onions', 'gochugaru', 'black pepper', 'MSG', 'toasted sesame oil', 'chicken broth', 'tomato paste', 'smoked paprika'],
      tags: ['Korean-Inspired', 'korean-inspired', 'Korean BBQ pork', 'smoky plum pork', 'fresh plum glaze', 'gochujang', 'pork butt', 'sear braise lacquer', 'sticky charred pork', 'sandwich filling', 'rice bowl protein', 'lettuce wraps', 'freezer friendly', 'Flavorweaver Test Recipe', 'html page']
    });
  }

  if (!recipes.some((item) => item.path === 'recipes/mexican/chipotle-guajillo-lime-brisket-with-blackened-fresh-plum-salsa.html')) {
    recipes.push({
      title: 'Chipotle-Guajillo Lime Brisket Bowls with Blackened Fresh-Plum Salsa',
      path: 'recipes/mexican/chipotle-guajillo-lime-brisket-with-blackened-fresh-plum-salsa.html',
      collection: 'House Recipes',
      culture: 'Mexican Inspired',
      category: 'Complete Bowl',
      status: 'Flavorweaver Test Recipe',
      ingredients: ['thin-sliced brisket', 'brisket', 'dried guajillo chiles', 'chipotle in adobo', 'orange juice', 'lime zest', 'lime juice', 'less-sodium soy sauce', 'honey', 'cumin', 'coriander', 'Mexican oregano', 'smoked paprika', 'black pepper', 'MSG', 'sweet onion', 'garlic', 'fresh plums', 'Roma tomatoes', 'jalapeno', 'fresh hot red Mexican chile', 'green onions', 'cilantro', 'rice vinegar', 'white vinegar', 'long-grain rice', 'chicken broth', 'bell pepper', 'corn', 'brisket tallow', 'fresh corn tortillas'],
      tags: ['Mexican-Inspired', 'mexican-inspired', 'chipotle guajillo brisket bowl', 'cilantro lime rice', 'charred corn', 'bell pepper onion corn', 'blackened fresh plum salsa', 'fresh plum salsa', 'food processor salsa', 'skillet charred salsa', 'guajillo honey reduction', 'complete bowl', 'rice bowl', 'corn tortilla option', 'Flavorweaver Test Recipe', 'html page']
    });
  }
})();
