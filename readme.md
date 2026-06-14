# 🧵 Flavorweaver

> A living tapestry of recipes, culinary discoveries, kitchen standards, and flavor architecture from the Amy & Don Kitchen.
>
> Recipes enter as inspiration.
>
> They leave as something uniquely our own.

---

# 🌟 What is Flavorweaver?

Flavorweaver is more than a recipe collection.

It is a living record of culinary exploration, experimentation, refinement, and discovery.

The goal is not merely to preserve recipes.

The goal is to preserve what was learned along the way.

Every recipe begins somewhere.

A cookbook.

A restaurant.

A family memory.

A cultural tradition.

A recommendation.

Flavorweaver documents what happens after that recipe enters the Amy & Don Kitchen.

It is tested.

Modified.

Refined.

Adapted.

Sometimes transformed completely.

The result is not simply a collection of dishes.

It is a growing flavor ecosystem.

---

# 🧭 Culinary Philosophy

Over time, Flavorweaver revealed recurring patterns.

Meals that consistently succeed tend to share:

* Richness balanced by freshness
* Strong sauces and condiments
* Layered flavor
* Interactive assembly
* Homemade elements
* Pickles, herbs, or acid for balance
* Comfort elevated through complexity
* Bold but balanced seasoning
* Components that work together rather than compete

The goal is not merely authenticity.

The goal is creating meals worth remembering.

---

# 📂 Repository Structure

```text
Flavorweaver/
│
├── readme.md
│
├── docs/
│   ├── culinary-philosophy.md
│   ├── kitchen-standards.md
│   ├── hall-of-fame.md
│   ├── exploration-roadmap.md
│   ├── pantry-staples.md
│   ├── repository-changelog.md
│   ├── recipe-search.json
│   ├── recipe-search-live.json
│   ├── family-recipe-data.js
│   └── recipes/
│       ├── korean/
│       ├── vietnamese/
│       ├── condiments/
│       └── family/
│
├── recipes/
│   ├── korean/
│   ├── chinese/
│   ├── japanese/
│   ├── vietnamese/
│   │   ├── main-dishes/
│   │   ├── appetizers/
│   │   ├── sides/
│   │   ├── soups-and-stews/
│   │   ├── breads/
│   │   └── condiments/
│   ├── thai/
│   ├── indian/
│   ├── greek/
│   ├── italian/
│   ├── lebanese/
│   ├── turkish/
│   ├── halal-cart/
│   ├── ethiopian/
│   ├── moroccan/
│   ├── cape-malay/
│   ├── mexican/
│   └── american/
│
├── family-recipes/
│   ├── readme.md
│   └── recipes/
│       ├── appetizers/
│       ├── breads/
│       ├── cakes/
│       ├── cookies/
│       ├── main-dishes/
│       ├── pies/
│       └── sides/
│
├── inventory/
│   ├── README.md
│   ├── inventory-equipment.md
│   ├── inventory-proteins.md
│   ├── inventory-spices-seasonings.md
│   └── other inventory references
│
├── condiments/        # Transitional legacy location; migrate into recipes/<culture>/condiments/ over time.
├── breads/            # Transitional legacy location; migrate into recipes/<culture>/breads/ over time.
│
├── pantry/
│   ├── pantry-standards.md
│   ├── ingredient-reviews.md
│   ├── spice-reference.md
│   └── shopping-discoveries.md
│
├── experiments/
│   ├── flavor-notes.md
│   ├── failed-experiments.md
│   ├── ingredient-comparisons.md
│   └── restaurant-recreations.md
│
├── hall-of-fame/
│   ├── top-10-meals.md
│   ├── permanent-recipes.md
│   └── legendary-meals.md
│
└── templates/
    ├── main-recipe-template.md
    ├── recipe-template.md
    ├── restaurant-recreation-template.md
    ├── ingredient-review-template.md
    └── experiment-template.md
```

---

# 🧬 Two Recipe Systems

Flavorweaver contains two related but different recipe systems.

They should not be merged, flattened, or treated as interchangeable.

## Don & Amy World Culture Collection

The main Don & Amy collection lives under:

```text
recipes/
```

This collection is organized by world culture or flavor identity first, then by recipe category.

Preferred pattern:

```text
recipes/<culture>/<recipe-category>/<recipe-file>.md
```

Examples:

```text
recipes/vietnamese/main-dishes/lemongrass-chicken-bowls.md
recipes/vietnamese/appetizers/fresh-vegetable-spring-rolls.md
recipes/korean/bold-bulgogi-bowls.md
```

As cultures grow, each culture folder may contain category subfolders such as:

```text
main-dishes/
appetizers/
sides/
soups-and-stews/
breads/
condiments/
desserts/
```

Reusable sauces, condiments, pickles, breads, and other meal components should belong inside the appropriate culture folder when they are part of the Don & Amy world-culture collection.

The root-level `condiments/` and `breads/` folders are transitional legacy locations. They should be migrated carefully into `recipes/<culture>/<category>/` over time.

Before moving any file out of `condiments/` or `breads/`, search all related references and update Markdown links, generated HTML links, search JSON entries, and documentation references.

World culture recipes receive individual generated or hand-built HTML recipe pages under:

```text
docs/recipes/<culture>/<recipe>.html
```

These pages may use layouts and cards designed specifically for the Don & Amy world-culture collection.

## Family Recipe Archive

The family recipe archive lives under:

```text
family-recipes/
```

This archive preserves inherited recipes, family cookbook recipes, holidays, gatherings, original source context, and family memory.

Family recipes are organized by recipe type, not world culture:

```text
family-recipes/recipes/<category>/<recipe-file>.md
```

Family recipes do not generally receive one individual hand-built HTML file per recipe.

Instead, family recipes are surfaced through shared site code, search data, and reusable card rendering. Current family recipe search/card behavior is driven by:

```text
docs/family-recipe-data.js
```

This keeps the family archive scalable while preserving family-source metadata and category browsing.

Exceptions may exist for special feature pages, but the default family recipe model is data-driven search/card rendering rather than one manually maintained HTML page per recipe.

---

# 🧾 Don & Amy World Culture Recipe Build Standard

This section records the working format for new Don & Amy world-culture recipes.

Use this standard before importing, converting, moving, or publishing any new main collection recipe.

## Required Outputs

Every new world-culture recipe should produce both a Markdown source file and a public HTML recipe page.

```text
recipes/<culture>/<recipe-category>/<recipe-slug>.md
docs/recipes/<culture>/<recipe-slug>.html
```

The Markdown file is the source-of-truth kitchen record.

The HTML file is the public recipe page used by the GitHub Pages website.

Do not treat Don & Amy world-culture recipes like family recipes. They do not use the family recipe card renderer as their primary public format.

## Markdown Source Format

New world-culture Markdown recipes should follow:

```text
docs/main-flavorweaver-recipe-structure.md
templates/main-recipe-template.md
```

Required Markdown structure:

1. YAML frontmatter.
2. `<!-- recipe-card:start -->`.
3. Recipe title.
4. Short recipe summary.
5. Recipe Dashboard.
6. Ingredient List by component.
7. Measured Ingredients with cook-ready amounts and notes.
8. Instructions.
9. `<!-- recipe-card:end -->`.
10. Pairs Well With.
11. Chef's Notes.
12. Final Verdict.
13. Collapsible Flavorweaver sections.

Recommended collapsible sections:

```text
Flavor Architecture
Flavorweaver Direction
Timing Notes
Testing Notes
Kitchen Notes
Change Log
```

YAML frontmatter should include practical searchable metadata such as:

```yaml
name:
culture:
category:
status:
difficulty:
prep_time:
cook_time:
total_time:
servings:
yield:
measurement_status:
rating_note:
repeat_worthy:
hall_of_fame_candidate:
hall_of_fame:
tags:
required_components:
pairs_well_with:
last_updated:
```

Use `primary_category` and `categories` when a recipe belongs in more than one browsing category.

Do not duplicate the full recipe body just because it belongs to more than one category. Use one canonical Markdown file and metadata for cross-category discovery.

## HTML Recipe Page Format

World-culture HTML pages should mirror the existing premium recipe page design already used by examples such as:

```text
docs/recipes/korean/bold-bulgogi-bowls.html
docs/recipes/vietnamese/lemongrass-chicken-bowls.html
docs/recipes/vietnamese/fresh-vegetable-spring-rolls.html
```

The HTML page should use the existing site shell and premium recipe layout rather than inventing a new design.

Required stylesheet pattern:

```html
<link rel="stylesheet" href="../../styles.css?v=..." />
<link rel="stylesheet" href="../../site.css?v=..." />
<link rel="stylesheet" href="../../readability.css?v=..." />
<link rel="stylesheet" href="../../premium-recipe.css?v=..." />
```

Required layout classes and regions:

```text
site-topbar
site-nav
page-shell recipe-page premium-recipe
recipe-page-card
recipe-kicker
recipe-title
recipe-summary
recipe-meta-grid
recipe-tag-row
recipe-section
premium-component-grid
premium-component-card
premium-ingredient-group
premium-ingredient-list
premium-ingredient-row
instruction-list
premium-chef-notes
recipe-sidebar-card
pairing-menu
```

Public HTML pages should show the cook-facing recipe content:

- title and summary
- culture / category / status kicker
- prep, cook, total, marinate, rest, yield, or servings as appropriate
- tags
- ingredient list by component
- measured ingredients
- instructions
- chef notes
- pairs-well-with sidebar

Public HTML pages should not render internal development sections by default:

- Final Verdict
- Flavorweaver Decision checkboxes
- Flavor Architecture
- Flavorweaver Direction
- Timing Notes
- Testing Notes
- Kitchen Notes
- Tasting Notes
- Change Log

Those sections stay in the Markdown source file for kitchen development, testing history, and future automation.

## Search and Link Requirements

When adding or moving a world-culture recipe, update all related discovery and navigation files.

Check and update as needed:

```text
docs/recipe-search.json
docs/recipe-search-live.json
Markdown links in recipes/
HTML links in docs/recipes/
README and documentation references
component links and pairings
```

When a source file moves, search for old path references before deleting or relocating the original.

Update both Markdown links and HTML links. The source Markdown and public HTML site are connected, but they are not the same layer.

## Component Placement Rule

Reusable sauces, condiments, breads, pickles, and other meal components should live under the most appropriate world-culture recipe folder when they belong to the Don & Amy collection.

Preferred pattern:

```text
recipes/<culture>/condiments/<component>.md
recipes/<culture>/breads/<component>.md
```

Public pages should use:

```text
docs/recipes/<culture>/<component>.html
```

If a component is genuinely cross-cultural, pause before moving it and decide whether it needs:

- a primary culture home,
- a shared metadata strategy,
- a special house-staple treatment,
- or a temporary legacy location until the site structure can support it cleanly.

Do not bury a cross-cultural house staple inside one culture folder without reviewing links, search behavior, and future browsing needs.

## Family Recipe Exception

Do not apply this build standard to the family recipe archive.

Family recipes live under:

```text
family-recipes/recipes/<category>/<recipe>.md
```

Family recipes are surfaced through shared data/search/card rendering, especially:

```text
docs/family-recipe-data.js
```

They generally do not receive one hand-built premium HTML page per recipe.

---

# 🏆 Hall of Fame

Hall of Fame recipes have earned permanent placement in the Amy & Don Kitchen.

These are meals that consistently generate excitement, requests for repeats, and lasting memories.

For the complete Hall of Fame list see:

```text
docs/hall-of-fame.md
```

---

# 🌿 House Staples

Some recipes transcend individual cuisines and become part of the identity of the kitchen itself.

Current examples include:

* Asian Pickled Garden Vegetables
* Ginger Restaurant-Style Nuoc Cham
* Peanut Sauce

These are documented in:

```text
docs/pantry-staples.md
```

As root-level component folders are migrated, house staples should be placed under the most appropriate world-culture recipe path and linked through metadata and generated site search rather than duplicated.

---

# 🔪 Kitchen Standards

Flavorweaver currently follows several repository-wide standards.

### Butter

* Unsalted Butter Only

### Ground Beef

* Fresh Ground Brisket Preferred

### Bread

* Homemade Whenever Practical

### Philosophy

* Control salt intentionally
* Prioritize ingredient quality
* Build reusable pantry systems

Full standards are documented in:

```text
docs/kitchen-standards.md
```

The operational inventory canon is documented in:

```text
inventory/README.md
```

---

# 🗺️ Exploration Roadmap

Flavorweaver actively tracks future cuisines, dishes, and culinary discoveries.

Current high-interest areas include:

* Lebanese
* Turkish
* Greek
* Halal Cart
* Moroccan
* Ethiopian
* Cape Malay

The complete roadmap is maintained in:

```text
docs/exploration-roadmap.md
```

---

# 🧪 Experiments & Research

Not every discovery begins as a recipe.

Flavorweaver preserves:

* Ingredient comparisons
* Failed experiments
* Recipe evolution
* Restaurant recreations
* Flavor notes
* Culinary research

Current active investigations include:

* Chinese Comfort Chicken Identification
* Frank's Fig & Pig Recreation Project

---

# 📈 Flavorweaver Principles

1. Preserve discoveries.
2. Record iterations.
3. Document failures.
4. Refine relentlessly.
5. Build house standards.
6. Let recipes evolve.
7. Learn from every cook.
8. Respect traditions while embracing adaptation.
9. Share what works.
10. Keep curiosity alive.

---

# 💜 Final Principle

Success is not measured by authenticity alone.

Success is not measured by complexity.

Success is not measured by rarity of ingredients.

Success is measured by a simple question:

> Would Amy and Don be excited to make this again?

If the answer is yes, the recipe belongs in Flavorweaver.
