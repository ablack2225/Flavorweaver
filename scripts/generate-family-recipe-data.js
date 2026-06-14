const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const familyRoot = path.join(repoRoot, 'family-recipes', 'recipes');
const outputPath = path.join(repoRoot, 'docs', 'family-recipe-data.js');

const CATEGORY_LABELS = {
  appetizers: 'Appetizers',
  beverages: 'Beverages',
  breads: 'Breads',
  breakfast: 'Breakfast',
  cakes: 'Cakes',
  'cake-frostings': 'Cake Frostings',
  'candy-and-snacks': 'Candy and Snacks',
  cookies: 'Cookies',
  desserts: 'Desserts',
  'gravies-and-sauces': 'Gravies and Sauces',
  'homemade-pickles': 'Homemade Pickles',
  'main-dishes': 'Main Dishes',
  pies: 'Pies',
  'salads-slaws-and-dips': 'Salads, Slaws, and Dips',
  sides: 'Sides',
  'soups-and-stews': 'Soups and Stews'
};

const CATEGORY_ORDER = [
  'pies',
  'cakes',
  'cake-frostings',
  'breads',
  'cookies',
  'main-dishes',
  'sides',
  'beverages',
  'breakfast',
  'desserts',
  'candy-and-snacks',
  'gravies-and-sauces',
  'homemade-pickles',
  'salads-slaws-and-dips',
  'soups-and-stews',
  'appetizers'
];

function titleFromSlug(slug) {
  return String(slug || '')
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
}

function slugFromFilename(filename) {
  return path.basename(filename, '.md');
}

function isRecipeMarkdownFile(filename) {
  return filename.endsWith('.md') && slugFromFilename(filename).toLowerCase() !== 'readme';
}

function normalizeLine(line) {
  return line.replace(/\s+/g, ' ').trim();
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  const result = {};
  if (!match) return result;

  match[1].split('\n').forEach((line) => {
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) return;
    const key = pair[1].trim();
    const value = pair[2].trim().replace(/^['"]|['"]$/g, '');
    result[key] = value;
  });

  return result;
}

function extractRecipePreview(content) {
  const recipeCardStart = content.indexOf('<!-- recipe-card:start -->');
  const scopedContent = recipeCardStart >= 0 ? content.slice(recipeCardStart) : content;
  const lines = scopedContent.split(/\r?\n/);

  let h1Seen = false;
  let previewLines = [];

  for (const line of lines) {
    if (!h1Seen) {
      if (/^#\s+/.test(line.trim())) h1Seen = true;
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed && previewLines.length) break;
    if (trimmed.startsWith('>')) {
      previewLines.push(normalizeLine(trimmed.replace(/^>\s?/, '')));
      continue;
    }
    if (previewLines.length) break;
  }

  return previewLines.join(' ').trim();
}

function readMarkdownRecipe(categorySlug, recipeSlug) {
  const sourcePath = `family-recipes/recipes/${categorySlug}/${recipeSlug}.md`;
  const absolutePath = path.join(repoRoot, sourcePath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  const frontmatter = extractFrontmatter(content);
  const preview = extractRecipePreview(content);

  return {
    recipeSlug,
    sourcePath,
    title: frontmatter.name || titleFromSlug(recipeSlug),
    category: frontmatter.category || CATEGORY_LABELS[categorySlug] || categorySlug,
    preview
  };
}

function readCategory(categorySlug) {
  const categoryPath = path.join(familyRoot, categorySlug);
  if (!fs.existsSync(categoryPath)) return [];

  return fs.readdirSync(categoryPath)
    .filter(isRecipeMarkdownFile)
    .map(slugFromFilename)
    .sort((a, b) => a.localeCompare(b));
}

function buildCategories() {
  const discoveredCategories = fs.readdirSync(familyRoot)
    .filter((entry) => fs.statSync(path.join(familyRoot, entry)).isDirectory());

  const orderedCategories = [
    ...CATEGORY_ORDER.filter((slug) => discoveredCategories.includes(slug)),
    ...discoveredCategories.filter((slug) => !CATEGORY_ORDER.includes(slug)).sort()
  ];

  return orderedCategories.reduce((acc, categorySlug) => {
    const recipes = readCategory(categorySlug);
    if (recipes.length) acc[categorySlug] = recipes;
    return acc;
  }, {});
}

function buildOutput() {
  const categories = buildCategories();
  const previewMap = {};

  Object.entries(categories).forEach(([categorySlug, recipeSlugs]) => {
    recipeSlugs.forEach((recipeSlug) => {
      const recipe = readMarkdownRecipe(categorySlug, recipeSlug);
      if (recipe.preview) previewMap[recipe.sourcePath] = recipe.preview;
    });
  });

  return `window.FLAVORWEAVER_FAMILY_RECIPE_CATEGORIES = ${JSON.stringify(categories)};\n\n` +
`window.FLAVORWEAVER_FAMILY_CATEGORY_LABELS = ${JSON.stringify(CATEGORY_LABELS, null, 2)};\n\n` +
`window.FLAVORWEAVER_FAMILY_RECIPE_PREVIEWS = ${JSON.stringify(previewMap, null, 2)};\n\n` +
`window.FLAVORWEAVER_TITLE_FROM_SLUG = (slug) => String(slug || '')\n` +
`  .split('-')\n` +
`  .map((word, index) => {\n` +
`    const small = ['and', 'or', 'with', 'for', 'of', 'to'];\n` +
`    if (index > 0 && small.includes(word)) return word;\n` +
`    if (word === '10' || word === '30') return word;\n` +
`    return word.charAt(0).toUpperCase() + word.slice(1);\n` +
`  })\n` +
`  .join(' ')\n` +
`  .replace('Jimmies', "Jimmie's")\n` +
`  .replace('Jalapeno', 'Jalapeño')\n` +
`  .replace('Oreo', 'Oreo')\n` +
`  .replace('Mac and Cheese', 'Mac and Cheese');\n\n` +
`window.FLAVORWEAVER_FAMILY_RECIPES = Object.entries(window.FLAVORWEAVER_FAMILY_RECIPE_CATEGORIES)\n` +
`  .flatMap(([categorySlug, recipeSlugs]) => recipeSlugs.map((recipeSlug) => {\n` +
`    const category = window.FLAVORWEAVER_FAMILY_CATEGORY_LABELS[categorySlug] || categorySlug;\n` +
`    const sourcePath = \`family-recipes/recipes/\${categorySlug}/\${recipeSlug}.md\`;\n` +
`    return {\n` +
`      title: window.FLAVORWEAVER_TITLE_FROM_SLUG(recipeSlug),\n` +
`      path: sourcePath === 'family-recipes/recipes/pies/apple-pie.md'\n` +
`        ? 'recipes/family/pies/apple-pie.html'\n` +
`        : \`recipes/family/recipe-card.html?source=\${encodeURIComponent(sourcePath)}\`,\n` +
`      sourcePath,\n` +
`      collection: 'Family Cookbook',\n` +
`      culture: '',\n` +
`      category,\n` +
`      preview: window.FLAVORWEAVER_FAMILY_RECIPE_PREVIEWS[sourcePath] || '',\n` +
`      status: '',\n` +
`      ingredients: [],\n` +
`      tags: []\n` +
`    };\n` +
`  }));\n`;
}

const output = buildOutput();
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Generated ${path.relative(repoRoot, outputPath)}`);
