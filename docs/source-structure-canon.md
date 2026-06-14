# Flavorweaver Source Structure Canon

This document locks the active source-folder structure for Flavorweaver recipe Markdown files.

## Core Rule

World-culture / Don & Amy recipe sources must be organized culture-first, then category-second:

```text
recipes/<culture-or-path>/<locked-category>/<recipe-slug>.md
```

Examples:

```text
recipes/korean/main-dishes/bold-bulgogi-bowls.md
recipes/korean/condiments/gochujang-crema.md
recipes/vietnamese/main-dishes/lemongrass-chicken-bowls.md
recipes/vietnamese/appetizers/fresh-vegetable-spring-rolls.md
recipes/vietnamese/condiments/ginger-nuoc-cham.md
recipes/vietnamese/condiments/peanut-sauce.md
recipes/asian-inspired/condiments/asian-pickled-garden-vegetables.md
```

## Locked Subfolder Categories

Use these category folder names exactly unless Amy approves a new canon category:

```text
appetizers/
beverages/
breads/
breakfast/
condiments/
desserts/
main-dishes/
pickles-and-bright-things/
salads-slaws-and-dips/
sides/
soups-and-stews/
```

## Category Rules

- Use `main-dishes/` for full meals, bowls, entrees, and primary dinner builds.
- Use `appetizers/` for spring rolls, starters, small plates, and finger foods.
- Use `condiments/` for sauces, cremas, dipping sauces, finishing sauces, marinades, spice blends, and reusable meal components.
- Use `breads/` for bread, rolls, flatbreads, wraps, and dough-based culture recipes.
- Use `pickles-and-bright-things/` only when a recipe is primarily a bright side/acid/crunch item and does not function better as a condiment.
- Use `desserts/` as the public-facing dessert source category unless Amy later approves dessert subcategories.

## Root Folder Rule

Root-level folders such as:

```text
condiments/
breads/
```

are not active canon source locations for world-culture recipes.

After existing files are relocated into `recipes/<culture-or-path>/<locked-category>/`, the old root folders should be removed. Do not add new active recipes to root `condiments/` or root `breads/`.

## Public HTML Rule

Public HTML pages do not have to mirror the source Markdown folder depth.

Source Markdown:

```text
recipes/<culture-or-path>/<locked-category>/<recipe-slug>.md
```

Public page:

```text
docs/recipes/<culture-or-path>/<recipe-slug>.html
```

For shared public component pages, `docs/recipes/condiments/<slug>.html` may remain user-friendly while the source Markdown lives under its culture/path home.

## Search Metadata Rule

World-culture / Don & Amy recipes keep individual public HTML pages on purpose.

Those public HTML pages are indexed through:

```text
docs/world-recipe-data.js
```

The shared archive search engine lives in:

```text
docs/recipe-search.js
```

Family recipe index data remains separate in:

```text
docs/family-recipe-data.js
```

When adding a new world-culture recipe, update all three layers as needed:

1. source Markdown under `recipes/<culture-or-path>/<locked-category>/`
2. public recipe HTML under `docs/recipes/...`
3. search/index metadata in `docs/world-recipe-data.js`

Do not add world-culture recipe metadata directly inside `docs/recipes.html`.

## Required Move Protocol

Before relocating a source Markdown file:

1. Fetch the current source file and confirm the current SHA.
2. Create the new file at the canon location.
3. Update Markdown links inside the moved file.
4. Search for references to the old path.
5. Update related Markdown links, public HTML links if needed, search JSON/data files, and documentation references.
6. Verify the new file exists.
7. Delete the old file only after verification.
8. Remove obsolete root-folder placeholder README files after active files are migrated.

## Family Recipe Exception

This canon does not apply to the family recipe archive.

Family recipes remain type-first:

```text
family-recipes/recipes/<category>/<recipe-slug>.md
```

Family recipes are surfaced through shared search/card rendering unless Amy explicitly approves a special static public page.
