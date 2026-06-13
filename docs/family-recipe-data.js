window.FLAVORWEAVER_FAMILY_RECIPE_CATEGORIES = {"pies":["pecan-pie","millionaire-pie","chocolate-pecan-pie","pumpkin-pie","chocolate-fudge-pie","chocolate-chess-pie","lemon-ice-box-pie","pie-crust","chocolate-cream-pie-with-meringue-or-cool-whip","fresh-peach-pie","pie-crust-for-fried-pies","triple-chocolate-brownie-pie","apple-pie","egg-custard-pie","coconut-cream-pie-with-meringue-or-cool-whip","fresh-strawberry-pie","streusel-topped-creamy-pumpkin-pie","strawberry-mousse-pie"],"cakes":["coffee-cake","eclair-cake","banana-split-cake","fluffy-strawberry-angel-cake","pineapple-cake","apricot-nectar-cake","pineapple-cream-cake","earthquake-cake","turtle-cake","apple-sauce-cake","chocolate-dream-cake","applesauce-fruitcake","pineapple-banana-hummingbird-mini-loaves","german-chocolate-pound-cake","carrot-cake","coconut-sour-cream-cake","german-chocolate-cake","sock-it-to-me-cake","different-cupcakes"],"cake-frostings":["cream-cheese-frosting","angel-mallow-frosting","vanilla-butter-frosting"],"breads":["cornbread","30-minute-rolls","hushpuppies","hot-yeast-rolls","ginger-bread","broccoli-cornbread","jalapeno-corn-bread","banana-or-pumpkin-bread","fried-hot-water-cornbread","butterflake-biscuits","zucchini-bread"],"cookies":["fudge-brownies","snickerdoodles","cowboy-cookies","russian-teacakes","no-bake-oatmeal-cookies","neverland-cookies","banana-date-bars","chewy-oatmeal-cookies","chocolate-crackle-cookies","molasses-sugar-cookies","peanut-butter-blossoms","ultimate-sugar-cookies","chocolate-chip-peanut-butter-cookies","ultimate-chocolate-chip-cookies","pecan-sandies","peanut-butter-cookies","peanut-butter-brownie-cookies","gingerbread-cookies","spiced-holiday-sugar-cookies","crispy-chewy-cornflake-cookies","oatmeal-scotchies","double-date-delight-oatmeal-cookie","new-orleans-date-bars"],"main-dishes":["mexican-cabbage","10-minute-spaghetti-sauce","hamburger-stroganoff","easy-chicken-fajita-skillet","taco-mac-and-cheese","burrito-casserole","tator-tot-casserole","meatball-stroganoff","chicken-stroganoff","tortilla-casserole","souper-meat-loaf","old-fashioned-salmon-patties","southwestern-chicken-skillet","chicken-spaghetti","hobo-dinners","cabbage-rolls","taco-casserole","oven-fried-cajun-chicken","chicken-tortilla-casserole","pepper-steak","scalloped-eggplant","beef-and-potatoes","headquarters-chili-pie","beef-and-bean-enchiladas","stuffed-green-peppers","sour-cream-chicken-enchiladas","beef-fajita-quesadillas"],"sides":["potato-patties","harvard-beets","packet-potatoes","sweet-potato-casserole","zesty-green-beans","scalloped-potatoes","squash-casserole","cabbage-wedges-with-cheese","western-fries","candied-sweet-potatoes","creamy-mashed-potato-bake","sweet-corn-pudding","green-bean-casserole","pickled-beets","cheese-potatoes","orange-pecan-sweet-potatoes","cornbread-dressing"],"beverages":["fruit-punch","hot-cocoa-mix","instant-russian-tea","eggnog","strawberry-punch","grape-juice-crush"],"breakfast":["favorite-pancakes","spiced-oatmeal-and-raisins","weekend-brunch-casserole","thanksgiving-french-toast"],"desserts":["cherry-crunch","banana-pudding","apple-cobbler","oreo-supreme","vanilla-cherry-cream-dessert","homemade-vanilla-ice-cream","chocolate-delight","rice-pudding"],"candy-and-snacks":["peanut-brittle","chex-muddy-buddies","texas-millionaires","texas-trash-spicy-chex-mix","fantasy-fudge-microwave","caramel-popcorn","jimmies-caramel-popcorn","golden-nut-crunch","southern-pralines","peanut-butter-fudge"],"gravies-and-sauces":["giblet-gravy","mop-for-barbecue"],"homemade-pickles":["pickled-okra","sweet-lime-pickles","dill-pickles"],"salads-slaws-and-dips":["guacamole","cole-slaw","waldorf-salad","pink-salad","german-potato-salad","cranberry-salad","lemon-lime-jello-salad","crack-macaroni-salad","orange-salad-delight"],"soups-and-stews":["chili","taco-soup","vegetable-soup","creole-chicken-gumbo","chicken-and-dumplings","cream-of-broccoli-soup"],"appetizers":["cheese-rolls","easy-grands-pepperoni-pizzas"]};

window.FLAVORWEAVER_FAMILY_CATEGORY_LABELS = {
  "appetizers": "Appetizers",
  "beverages": "Beverages",
  "breads": "Breads",
  "breakfast": "Breakfast",
  "cakes": "Cakes",
  "cake-frostings": "Cake Frostings",
  "candy-and-snacks": "Candy and Snacks",
  "cookies": "Cookies",
  "desserts": "Desserts",
  "gravies-and-sauces": "Gravies and Sauces",
  "homemade-pickles": "Homemade Pickles",
  "main-dishes": "Main Dishes",
  "pies": "Pies",
  "salads-slaws-and-dips": "Salads, Slaws, and Dips",
  "sides": "Sides",
  "soups-and-stews": "Soups and Stews"
};

window.FLAVORWEAVER_TITLE_FROM_SLUG = (slug) => String(slug || '')
  .split('-')
  .map((word, index) => {
    const small = ['and', 'or', 'with', 'for', 'of', 'to'];
    if (index > 0 && small.includes(word)) return word;
    if (word === '10' || word === '30') return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(' ')
  .replace('Jimmies', "Jimmie's")
  .replace('Jalapeno', 'Jalapeño')
  .replace('Oreo', 'Oreo')
  .replace('Mac and Cheese', 'Mac and Cheese');

window.FLAVORWEAVER_FAMILY_RECIPES = Object.entries(window.FLAVORWEAVER_FAMILY_RECIPE_CATEGORIES)
  .flatMap(([categorySlug, recipeSlugs]) => recipeSlugs.map((recipeSlug) => {
    const category = window.FLAVORWEAVER_FAMILY_CATEGORY_LABELS[categorySlug] || categorySlug;
    const sourcePath = `family-recipes/recipes/${categorySlug}/${recipeSlug}.md`;
    return {
      title: window.FLAVORWEAVER_TITLE_FROM_SLUG(recipeSlug),
      path: sourcePath === 'family-recipes/recipes/pies/apple-pie.md'
        ? 'recipes/family/pies/apple-pie.html'
        : `recipes/family/recipe-card.html?source=${encodeURIComponent(sourcePath)}`,
      sourcePath,
      collection: 'Family Cookbook',
      culture: '',
      category,
      status: 'Family Recipe',
      ingredients: [],
      tags: ['family recipe', 'family cookbook', category.toLowerCase(), categorySlug.replaceAll('-', ' ')]
    };
  }));
