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

# 📂 Current Repository Structure

This structure reflects the active working model for Flavorweaver.

```text
Flavorweaver/
│
├── readme.md
│
├── docs/
│   ├── index.html
│   ├── recipes.html
│   ├── family-cookbook.html
│   ├── dedication.html
│   ├── cultures-and-cuisines.html
│   ├── house-staples.html
│   ├── family-recipe-data.js
│   ├── world-recipe-data.js
│   ├── recipe-search.json
│   ├── recipe-search-live.json
│   ├── site.css
│   ├── styles.css
│   ├── readability.css
│   ├── premium-recipe.css
│   ├── templates/
│   │   ├── README.md
│   │   ├── world-culture-recipe-canon-template.html
│   │   ├── world-culture-recipe-source-template.md
│   │   └── family-recipe-source-template.md
│   └── recipes/
│       ├── family/
│       └── <culture-or-path>/
│           └── <category>/
│               └── <recipe-slug>.html
│
├── recipes/
│   └── <culture-or-path>/
│       └── <category>/
│           └── <recipe-slug>.md
│
├── family-recipes/
│   ├── readme.md
│   ├── dedication-and-legacy.md
│   └── recipes/
│       └── <category>/
│           └── <recipe-slug>.md
│
├── inventory/
├── pantry/
├── experiments/
├── hall-of-fame/
└── scripts/
    └── generate-family-recipe-data.js
```

## Active Template Location

The active canon template home is:

```text
docs/templates/
```

Root-level `templates/` is not the active template location. Do not create new recipe templates there.

Active recipe templates:

```text
docs/templates/world-culture-recipe-canon-template.html
docs/templates/world-culture-recipe-source-template.md
docs/templates/family-recipe-source-template.md
```

---

# 🧬 Two Recipe Systems

Flavorweaver contains two related but different recipe systems.

They should not be merged, flattened, or treated as interchangeable.

Before adding any recipe, determine which system it belongs to.

---

# 🌍 Don & Amy World-Culture Collection

The Don & Amy world-culture collection lives under:

```text
recipes/
```

This collection is organized by world culture or flavor identity first, then recipe category.

Preferred Markdown source pattern:

```text
recipes/<culture-or-path>/<category>/<recipe-slug>.md
```

Preferred public HTML pattern:

```text
docs/recipes/<culture-or-path>/<category>/<recipe-slug>.html
```

Some older pages may exist at a flatter path while the site is being aligned, but new world-culture recipe work should use the category-aware pattern unless Amy explicitly approves another structure.

Examples:

```text
recipes/korean/bowls-and-mains/bold-bulgogi-bowls.md
recipes/vietnamese/bowls-and-mains/lemongrass-chicken-bowls.md
recipes/vietnamese/appetizers/fresh-vegetable-spring-rolls.md
```

World-culture recipes are chef-level developed recipes from the Amy & Don kitchen. They may be inspired by restaurants, cultures, flavor memories, research, or experiments, but the final recipe should reflect what Amy and Don would want to make again.

## Required Outputs

Every new world-culture recipe should produce both:

```text
recipes/<culture-or-path>/<category>/<recipe-slug>.md
docs/recipes/<culture-or-path>/<category>/<recipe-slug>.html
```

The Markdown file is the source-of-truth kitchen record.

The HTML file is the public recipe page used by the GitHub Pages website.

Do not treat Don & Amy world-culture recipes like family recipes. They do not use the family recipe card renderer as their primary public format.

## Markdown Source Format

New world-culture Markdown recipes should begin from:

```text
docs/templates/world-culture-recipe-source-template.md
```

The supporting structure reference is:

```text
docs/main-flavorweaver-recipe-structure.md
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

World-culture HTML pages should mirror the premium recipe page design already used by canon examples such as:

```text
docs/recipes/korean/bowls-and-mains/bold-bulgogi-bowls.html
docs/recipes/vietnamese/bowls-and-mains/lemongrass-chicken-bowls.html
docs/recipes/vietnamese/appetizers/fresh-vegetable-spring-rolls.html
```

If a current live example still exists at an older flat path, use the most current working page as the visual reference and preserve the category-aware structure for new work.

The locked public HTML template is:

```text
docs/templates/world-culture-recipe-canon-template.html
```

The HTML page should use the existing site shell and premium recipe layout rather than inventing a new design.

Required stylesheet pattern should be adjusted for the HTML page depth:

```html
<link rel="stylesheet" href="../../../styles.css?v=..." />
<link rel="stylesheet" href="../../../site.css?v=..." />
<link rel="stylesheet" href="../../../readability.css?v=..." />
<link rel="stylesheet" href="../../../premium-recipe.css?v=..." />
```

Use `../../` instead of `../../../` only when a public recipe page is intentionally placed one folder shallower.

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

## Complete Meal Plate Rule

Some Don & Amy world-culture recipes represent a complete restaurant-style meal plate rather than a single isolated dish.

In those cases, the main dish recipe should keep the full meal build together as the canonical recipe. This may include the protein or central dish, rice, noodles, bread, vegetables, sauces, pickles, garnishes, assembly instructions, and any other required elements needed to make the plate feel complete.

The Ingredient List and Measured Ingredients sections should show everything required to make the whole plate, even when some of those required elements also exist as standalone reusable component recipes.

When a required element has its own recipe file or public HTML page, link to that component directly from the main recipe so the cook can move cleanly between the complete meal and the reusable component.

Reusable components may be broken out into separate recipes when they are useful beyond the original meal, but the main dish should still clearly show that they are required for the full plate.

`Pairs Well With` is reserved for optional companion dishes, add-ons, sides, drinks, or menu-style pairings that would go well beside the meal but are not required for the identity of the main dish.

Bold Bulgogi Bowls is the current canon example of this pattern: the bowl remains the complete main recipe, while required components can be included, linked, and reused without turning them into optional pairings.

## Required Components vs Pairs Well With

Required components belong in the Ingredient List and Measured Ingredients sections.

Examples of required components:

- sauces required to complete the dish
- rice, noodles, bread, or base
- pickles or vegetables required for balance
- garnishes required for the intended final plate
- crema, dipping sauce, dressing, or finishing sauce required for the recipe identity

`Pairs Well With` is only for optional companion dishes or add-ons that would make a good menu around the recipe.

## Component Placement Rule

Reusable sauces, condiments, breads, pickles, and other meal components should live under the most appropriate world-culture recipe folder when they belong to the Don & Amy collection.

Preferred pattern:

```text
recipes/<culture-or-path>/<category>/<component>.md
```

Common component categories include:

```text
condiments/
breads/
sides/
pickles-and-bright-things/
```

Public component pages should use:

```text
docs/recipes/<culture-or-path>/<category>/<component>.html
```

If a component is genuinely cross-cultural, pause before moving it and decide whether it needs:

- a primary culture home,
- a shared metadata strategy,
- a special house-staple treatment,
- or a temporary legacy location until the site structure can support it cleanly.

Do not bury a cross-cultural house staple inside one culture folder without reviewing links, search behavior, and future browsing needs.

## Search and Link Requirements

When adding or moving a world-culture recipe, update all related discovery and navigation files.

Check and update as needed:

```text
docs/world-recipe-data.js
docs/recipe-search.json
docs/recipe-search-live.json
Markdown links in recipes/
HTML links in docs/recipes/
README and documentation references
component links and pairings
category pages and cards
```

When a source file moves, search for old path references before deleting or relocating the original.

Update both Markdown links and HTML links. The source Markdown and public HTML site are connected, but they are not the same layer.

---

# 👨‍👩‍👧 Family Recipe Archive

The family recipe archive lives under:

```text
family-recipes/
```

This archive preserves inherited recipes, family cookbook recipes, holidays, gatherings, handwritten card context, original source context, and family memory.

Family recipes are organized by recipe type, not world culture:

```text
family-recipes/recipes/<category>/<recipe-slug>.md
```

Family recipes generally do not receive one individual hand-built HTML file per recipe.

Instead, family recipes are surfaced through shared site code, search data, and reusable card rendering. Current family recipe search/card behavior is driven by:

```text
docs/family-recipe-data.js
```

The generator for family recipe data is:

```text
scripts/generate-family-recipe-data.js
```

The workflow for family recipe data is:

```text
.github/workflows/generate-family-recipe-data.yml
```

New family recipe Markdown should begin from:

```text
docs/templates/family-recipe-source-template.md
```

Family recipes use a lighter preservation structure:

1. YAML frontmatter.
2. `<!-- recipe-card:start -->`.
3. Recipe title.
4. Short description, if helpful.
5. Recipe Dashboard.
6. Ingredient List.
7. Measured Ingredients.
8. Instructions.
9. `<!-- recipe-card:end -->`.
10. Notes, only if useful.

Family recipes should not use the heavier world-culture ending by default.

Avoid these sections for normal family recipes:

- Final Verdict
- Flavorweaver Decision checkboxes
- Flavor Architecture
- Flavorweaver Direction
- Testing Notes
- Kitchen Notes
- Change Log

Special public feature pages may exist for family cookbook presentation, dedication, or legacy material, but the default family recipe model is data-driven search/card rendering rather than one manually maintained HTML page per recipe.

---

# 🕯️ Family Cookbook Dedication

The public dedication page lives at:

```text
docs/dedication.html
```

The source/legacy dedication record lives at:

```text
family-recipes/dedication-and-legacy.md
```

The currently locked public dedication sections are:

- A message to my mother
- Sue's Original Dedication

Do not redesign those sections unless Amy explicitly asks.

---

# 🌿 House Staples

Some recipes transcend individual cuisines and become part of the identity of the kitchen itself.

Current examples include:

* Asian Pickled Garden Vegetables
* Ginger Restaurant-Style Nuoc Cham
* Peanut Sauce

House staples should be linked through metadata, category pages, and generated site search rather than duplicated.

When a house staple is also required for a complete meal plate, link it from the main recipe while keeping the whole plate readable and cookable.

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

# 🏆 Hall of Fame

Hall of Fame recipes have earned permanent placement in the Amy & Don Kitchen.

These are meals that consistently generate excitement, requests for repeats, and lasting memories.

For the complete Hall of Fame list see:

```text
docs/hall-of-fame.md
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

# ✅ Working Process

When editing the repository:

1. Fetch the current file first.
2. Use the returned SHA for updates.
3. Replace the full file content when updating through GitHub.
4. Commit in small, clear steps.
5. Only claim completion after GitHub confirms the commit.

When adding recipes:

1. Determine whether the recipe belongs to the Family Recipe Archive or the Don & Amy World-Culture Collection.
2. Use the correct active template from `docs/templates/`.
3. Create the Markdown source file in the correct location.
4. For world-culture recipes, create the public HTML page.
5. Update search/index/navigation data as needed.
6. Verify internal links, component links, category pages, and public page paths.

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
