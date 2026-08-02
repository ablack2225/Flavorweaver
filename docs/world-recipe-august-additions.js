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
})();
