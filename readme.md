# 🧵 Flavorweaver

> A living tapestry of recipes, culinary discoveries, kitchen standards, and flavor architecture from the Amy & Don Kitchen.
>
> Recipes enter as inspiration.
>
> They leave as something uniquely our own.

---

# 🌟 What is Flavorweaver?

Flavorweaver is more than a recipe collection.

It is a living record of culinary exploration, experimentation, refinement, adaptation, testing, and discovery.

The goal is not merely to preserve recipes.

The goal is to preserve what was learned along the way.

Flavorweaver documents what happens after a recipe, restaurant meal, family memory, cultural tradition, ingredient idea, source image, or kitchen test enters the Amy & Don Kitchen.

The final question is always:

> Would Amy and Don be excited to make this again?

If the answer is yes, the recipe belongs in Flavorweaver.

---

# 🧭 Culinary Philosophy

Meals that consistently succeed tend to share:

* Richness balanced by freshness
* Strong sauces and condiments
* Layered flavor
* Interactive assembly
* Homemade elements when they improve the meal
* Pickles, herbs, or acid for balance
* Comfort elevated through complexity
* Bold but balanced seasoning
* Components that work together rather than compete
* A workflow that can actually be cooked without chaos

The goal is not merely authenticity.

The goal is creating meals worth remembering.

---

# 📂 Current Repository Structure

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
│   ├── family-recipe-data.js
│   ├── world-recipe-data.js
│   ├── recipe-search.json
│   ├── recipe-search-live.json
│   ├── site.css
│   ├── styles.css
│   ├── readability.css
│   ├── premium-recipe.css
│   ├── recipe-print.css
│   ├── templates/
│   │   ├── complete-meal-creation-canon.md
│   │   ├── featured-meal-master-template.md
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

## Active Template System

Use these templates together. Do not add another world-culture recipe template unless Amy explicitly approves a new template category.

| File | Purpose |
|---|---|
| `docs/templates/complete-meal-creation-canon.md` | Rules and standards for complete meal cards. This is the canon/rules document, not a copy-paste recipe body. |
| `docs/templates/featured-meal-master-template.md` | Markdown source template for Don & Amy featured meals, complete bowls, complete plates, platters, and project meals. |
| `docs/templates/world-culture-recipe-canon-template.html` | Public HTML layout template for Don & Amy world-culture recipe pages. |
| `docs/templates/world-culture-recipe-source-template.md` | Markdown source template for standalone world-culture recipes and reusable components. |
| `docs/templates/family-recipe-source-template.md` | Markdown source template for family archive recipes. |

## Canonical Live World-Culture Layout Reference

The current canonical live public HTML reference for the world-culture premium recipe layout is:

```text
docs/recipes/vietnamese/vietnamese-bo-kho-style-brisket-stew-plate.html
```

This file currently represents the active complete-meal layout standard, even though the historical file slug still contains `plate`. Use the rendered structure as the live reference for:

- premium recipe shell
- public recipe header/kicker/title/summary
- meta grid
- recipe tag row
- print button and print behavior
- Kitchen Execution Summary
- Before Cooking Day / Advance Prep
- Service Countdown
- Full Bowl / Full Plate Ingredient Roll-Up
- Measured Ingredients by Component
- Cross-Component Prep Map
- Stage-Based Prep Bowls
- Do Not Forget
- Full Cooking Timeline and Instructions
- Final Taste Target
- Chef's Notes
- Required Components sidebar

The matching Markdown source reference is:

```text
recipes/vietnamese/featured-meals/vietnamese-bo-kho-style-brisket-stew-plate.md
```

---

# 🧬 Two Recipe Systems

Flavorweaver contains two related but different recipe systems.

They must not be merged, flattened, or treated as interchangeable.

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

Some older public pages may exist at a flatter path while the site is being aligned. Do not move or rename an established public page only for neatness unless links, search data, and page references are updated together.

World-culture recipes are chef-level developed recipes from the Amy & Don Kitchen. They may be inspired by restaurants, cultures, flavor memories, research, experiments, substitutions, ingredient access limitations, or printed/source recipes, but the final recipe should reflect what Amy and Don would want to make again.

## World-Cuisine Recipe Research Standard

For cultural and world-cuisine recipes, especially cuisines that are new or still being learned, do not treat the first simple internet recipe as canon.

Flavorweaver development should search for the best version of a dish that can be found: top-tier, chef-level, cookbook-quality, restaurant-quality, and Michelin-star mindset where applicable. Amy and Don are not spending multi-hour project-meal effort to produce a mediocre dish.

The development path should be:

```text
top-tier / chef / cookbook-style source first
→ compare patterns
→ then adapt for Amy & Don
```

Before revising or canon-locking a world-cuisine recipe, look for:

- chef-written recipes
- cookbook excerpts
- restaurant-connected recipes
- reputable food publications
- multiple traditional or common versions
- award-winning, destination, or top-10 style interpretations when useful

Then compare the shared structure before creating or revising the Amy & Don house version.

Do not jump straight from a test result such as “this was bland” to generic fixes. First ask whether the tested recipe was underbuilt compared with stronger source patterns.

Do not destabilize components that tested at a very high level just because the full bowl, plate, or platter needs improvement. If a component tests around 9.5/10, preserve it unless there is a clear reason to change it. Improve the weaker supporting components, contrast, workflow, plating, or make-ahead structure instead.

When documenting research, clearly distinguish between:

- what comes from stronger sourced patterns,
- what appears across multiple traditional/common versions,
- what is a chef/cookbook/restaurant direction,
- and what is an Amy & Don house variation after testing.

## Required Outputs

Every new world-culture recipe should produce both:

```text
recipes/<culture-or-path>/<category>/<recipe-slug>.md
docs/recipes/<culture-or-path>/<category>/<recipe-slug>.html
```

The Markdown file is the source-of-truth kitchen record.

The HTML file is the public recipe page used by the GitHub Pages website.

World-culture recipes do not use the family recipe renderer as their primary public format.

---

# 🧾 World-Culture Markdown Source Format

Use the correct source template for the recipe type.

## Standalone / Component Recipe Source

Use this template when the recipe is a standalone dish or reusable component:

```text
docs/templates/world-culture-recipe-source-template.md
```

Examples:

- stew-only component
- sauce
- bread
- condiment
- side
- salad
- pickle
- reusable garnish or table finish

Standalone source files include recipe development sections such as Final Verdict, Flavor Architecture, Flavorweaver Direction, Timing Notes, Testing Notes, Kitchen Notes, and Change Log when useful.

## Featured Meal / Complete Meal Source

Use this template when the recipe is the complete eating experience:

```text
docs/templates/featured-meal-master-template.md
```

Examples:

- complete bowl
- complete plate
- platter
- project meal
- featured meal master card

Complete meal source files must integrate all required components into one cookable workflow.

They should include:

1. YAML frontmatter.
2. `<!-- recipe-card:start -->`.
3. Recipe title.
4. Short complete-meal summary.
5. Kitchen Execution Summary.
6. Before Cooking Day / Advance Prep.
7. Service Countdown.
8. Full Bowl / Full Plate / Full Platter Ingredient Roll-Up.
9. Measured Ingredients by Component.
10. Cross-Component Prep Map.
11. Stage-Based Prep Bowls.
12. Do Not Forget.
13. Full Cooking Timeline and Instructions.
14. Final Taste Target.
15. Chef's Notes.
16. `<!-- recipe-card:end -->`.
17. Source / Research Notes and testing notes when useful.

YAML frontmatter should include practical searchable metadata such as:

```yaml
name:
culture:
category:
status:
difficulty:
prep_time:
cook_time:
marinate_time:
total_time:
yield:
measurement_status:
primary_category:
categories:
tags:
required_components:
pairs_well_with:
last_updated:
```

Use `primary_category` and `categories` when a recipe belongs in more than one browsing category.

Do not duplicate the full recipe body just because it belongs to more than one category. Use one canonical Markdown file and metadata for cross-category discovery.

---

# 📸 Canon Reminder: Recipe Image & Printout Conversion

When converting a recipe from photos, screenshots, scanned cards, printed pages, handwritten notes, or source images, do not flatten the recipe into generic steps.

The conversion must preserve the cook-critical workflow exactly enough that Amy or Don could cook from the GitHub recipe without returning to the image.

For image/printout conversions, review every visible section before committing:

- ingredient notes, temperatures, room-temperature requirements, substitutions, and quantity clarifications
- proofing, resting, marinating, chilling, rising, blooming, simmering, cooling, or holding times
- shape, size, thickness, cutting, rolling, folding, scoring, sealing, stuffing, or plating details
- equipment guidance such as cast iron, skillet type, thermometer use, pan warnings, towels, lids, trays, or bowls
- heat level, pan preparation, oiling method, cook timing, visual doneness cues, and when to adjust heat
- optional variations such as garlic butter, cheese filling, make-ahead workflow, storage, reheating, or alternate finishes
- source notes that affect success, such as no-knead handling, second proof, make-ahead timing, or ingredient temperature

Never assume a short summary is enough for a house staple or complex technique. If a printed recipe has notes, those notes may contain the most important success instructions.

Before marking an image-converted recipe complete, compare the finished Markdown and public HTML against the source images and ask:

> Could the cook follow this without unanswered questions?

If not, keep refining.

---

# 🌐 World-Culture Public HTML Format

World-culture HTML pages should use the active premium recipe page design and the public HTML template:

```text
docs/templates/world-culture-recipe-canon-template.html
```

The canonical live reference is:

```text
docs/recipes/vietnamese/vietnamese-bo-kho-style-brisket-stew-plate.html
```

The HTML page should use the existing site shell and premium recipe layout rather than inventing a new design.

Required stylesheet pattern should be adjusted for the HTML page depth:

```html
<link rel="stylesheet" href="../../../styles.css?v=..." />
<link rel="stylesheet" href="../../../site.css?v=..." />
<link rel="stylesheet" href="../../../readability.css?v=..." />
<link rel="stylesheet" href="../../../premium-recipe.css?v=..." />
<link rel="stylesheet" href="../../../recipe-print.css?v=..." />
```

Use `../../` instead of `../../../` only when a public recipe page is intentionally placed one folder shallower.

Public HTML pages should show cook-facing recipe content:

- title and summary
- culture / category / status or complete-meal kicker
- prep, cook, total, marinate, rest, yield, or servings as appropriate
- tags
- print button when the page should print cleanly
- Kitchen Execution Summary
- ingredient list / full bowl or plate roll-up
- measured ingredients by component
- prep notes / service countdown when applicable
- cross-component prep map when applicable
- stage-based prep bowls
- do-not-forget reminders
- full cooking timeline and instructions for complete meals
- final taste target
- chef notes
- required components sidebar when applicable

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
- internal live-test decision sections

Those sections stay in the Markdown source file for kitchen development, testing history, and future automation unless Amy explicitly wants them surfaced publicly.

---

# 🍽️ Complete Meal Bowl / Plate Rule

Some Don & Amy world-culture recipes represent a complete restaurant-style eating experience rather than a single isolated dish.

This may be a complete bowl, plate, platter, or project meal.

In those cases, the master recipe should keep the full meal build together as the canonical recipe. This may include the protein or central dish, rice, noodles, bread, vegetables, sauces, pickles, garnishes, assembly instructions, and any other required elements needed to make the meal feel complete.

The complete meal recipe must allow the cook to visualize the finished bowl or plate before cooking and understand the order of work while cooking.

Use the complete meal canon for detailed standards:

```text
docs/templates/complete-meal-creation-canon.md
```

Use the featured meal master template for the Markdown source:

```text
docs/templates/featured-meal-master-template.md
```

Use the world-culture HTML canon template for the public page:

```text
docs/templates/world-culture-recipe-canon-template.html
```

## Required Component Integration

Required components must be integrated into the master card.

Do not list required components only as links.

Required component ingredients must appear in the full bowl or full plate ingredient roll-up, including bread, rice, noodles, sauces, pickles, garnishes, salads, sides, and any other component necessary to make the meal complete.

For noodle, pasta, or rice components that vary by product, write:

```text
Cook according to package instructions.
```

Then state how to drain, hold, divide, or serve.

## Full Ingredient Roll-Up

Complete bowls, plates, platters, and featured meals need a total prep view before cooking begins.

The roll-up should show:

```text
Component
Ingredients needed
Prep style when relevant
Where the component appears in final service
```

If the same ingredient needs different cuts, list each cut separately.

Do not invent missing quantities. If component recipes do not provide enough measured information to calculate a total, flag the missing data before canon-locking.

## Stage-Based Prep Bowls

Prep bowls must preserve cooking order.

Do not combine ingredients merely because they belong to the same component recipe.

Group prep by when ingredients enter the pan, pot, oven, bowl, or service flow.

Canon rule:

> Prep ahead, but do not combine ingredients that enter the recipe at different stages.

## Full Cooking Timeline

A complete meal must have one full cooking timeline that sequences all components together.

The timeline should answer:

- what begins before cooking day
- what begins first on cooking day
- what starts while another item rises, simmers, reduces, soaks, drains, or rests
- what can hold warm without quality loss
- what must be made fresh near service
- what cooks last for best quality
- when to reduce sauces
- when to add delicate items such as herbs, salad dressing, noodles, fresh bread, or garnish
- when final assembly begins

## Paragraph-Style Instructions With Measurements

Ingredient lists are for shopping, planning, and prep.

Instructions are for cooking.

For cook-facing recipes, especially project meals and complete bowls/plates, instructions should repeat enough measurements that the cook does not need to constantly scroll back to the ingredient list.

Each step should include, when useful:

- the action
- the amount
- the ingredient
- timing
- heat level
- sensory cue
- caution
- where the step fits in the larger timeline

This is especially important for recipes cooked from a phone or tablet in the kitchen.

## Protect High-Scoring Components

A full bowl, plate, or platter can score lower because one component, contrast layer, or workflow failed.

Do not automatically revise every component.

If a component tests around 9.5/10, preserve it unless Amy identifies a specific reason to change it.

Focus refinement where the meal actually failed:

- underbuilt supporting component
- lack of contrast
- weak dressing
- poor sequencing
- prep chaos
- unclear instructions
- plating imbalance
- missing make-ahead or day-of timeline guidance

---

# 🧩 Component Placement Rule

Reusable sauces, condiments, breads, pickles, salads, sides, and other meal components should live under the most appropriate world-culture recipe folder when they belong to the Don & Amy collection.

Preferred pattern:

```text
recipes/<culture-or-path>/<category>/<component>.md
```

Common component categories include:

```text
condiments/
breads/
sides/
salads/
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

---

# 🔎 Search, Index, and Link Requirements

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

Every new culture, culture-path, component name, dish name, ingredient pattern, and major searchable concept introduced by a recipe should be represented in the active search data tags. Do not rely only on the recipe title or body text.

Examples of tags that must be added when introduced:

```text
Ethiopian-Inspired
Ethiopian Inspired
Indian-Inspired
Indian Inspired
Doro Wat
Split Pea Alicha
Atakilt Wat
Timatim Salad
Injera
Teff
Naan
Complete Bowl
Complete Plate
Complete Meal
Kitchen Execution System
Featured Meal Master Card
Stage-Based Prep Bowls
```

Use both readable display terms and practical lowercase/hyphenated search terms when useful. This helps quick filters, typed search, and future category/path pages find the recipe reliably.

When index/data files are changed, bump the query-string version on any HTML page that loads them if GitHub Pages or browser caching may hide the change.

Path pages must load the data layer needed for the recipes they are expected to show. For example, a breads page that should show both family breads and world-culture breads must load both `family-recipe-data.js` and `world-recipe-data.js`.

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
* Fluffy Skillet Naan

House staples should be linked through metadata, category pages, and generated site search rather than duplicated.

When a house staple is also required for a complete bowl or plate, link it from the main recipe while keeping the whole meal readable and cookable.

---

# 🔪 Kitchen Standards

Flavorweaver currently follows several repository-wide standards.

### Butter

* Unsalted Butter Only

### Ground Beef

* Fresh Ground Brisket Preferred

### Bread

* Homemade Whenever Practical
* Preserve bread technique details; bread recipes often depend on temperature, timing, proofing, shaping, pan choice, and visual cues.

### Philosophy

* Control salt intentionally
* Prioritize ingredient quality
* Build reusable pantry systems
* Reduce kitchen chaos without lowering food quality
* Never use make-ahead shortcuts that turn fresh components into leftover-style components

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
* Kitchen execution failures and fixes
* Full-bowl and full-plate workflow lessons

---

# ✅ Working Process

When editing the repository:

1. Fetch the current file first.
2. Use the returned SHA for updates.
3. Replace the full file content when updating through GitHub.
4. Commit in small, clear steps.
5. Only claim completion after GitHub confirms the commit.

When adding world-culture recipes:

1. Determine the culture/path and category.
2. Decide whether this is a standalone/component recipe or a complete meal master card.
3. For standalone/component recipes, begin from `docs/templates/world-culture-recipe-source-template.md`.
4. For complete bowls, plates, platters, project meals, and featured meals, begin from `docs/templates/featured-meal-master-template.md`.
5. Use `docs/templates/world-culture-recipe-canon-template.html` for the public HTML page.
6. Use `docs/recipes/vietnamese/vietnamese-bo-kho-style-brisket-stew-plate.html` as the canonical live public layout reference.
7. If developing or revising a cultural/world-cuisine recipe, research stronger chef, cookbook, restaurant, reputable publication, top-tier, and common/traditional patterns before canon-locking an Amy & Don adaptation.
8. Preserve 9.5/10-level tested components unless there is a clear reason to change them; improve weaker components, contrast, workflow, or plating instead.
9. If converting from recipe images, printouts, cards, or screenshots, review the entire source before writing and preserve all cook-critical details.
10. For complete meals and featured meals, read every component recipe as if cooking the whole meal and build one sequenced kitchen execution system.
11. Build a full ingredient roll-up for shared prep items across all components.
12. Create stage-based prep bowls that preserve cooking order.
13. Separate advance prep from day-of prep, and only recommend advance prep that preserves or improves quality.
14. Write a full cooking timeline showing what starts first, what waits, what holds, what cooks last, and when plating/assembly begins.
15. Use paragraph-style instruction steps with ingredient amounts repeated when it prevents scrolling or confusion.
16. Break out substantial reusable required components into their own source and public pages when useful.
17. Ensure the main complete-meal recipe still shows full ingredient visibility for the entire bowl, plate, or platter.
18. Use Required Components to explain component roles.
19. Integrate preparation order directly into Instructions for complex complete meals.
20. Update active and legacy search/index files.
21. Add new search tags for new cultures, dishes, components, and major concepts.
22. Update category/path pages and cache query strings as needed.
23. Verify links and discovery paths.
24. Verify the final Markdown and public HTML against the source material before calling the recipe complete.

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
11. Preserve the real cooking workflow, not just the ingredient list.
12. Research stronger world-cuisine patterns before turning test feedback into recipe changes.
13. Build toward top-tier, chef-quality meals; do not spend project-meal effort on mediocre results.
14. Protect high-scoring components and focus refinement where the meal actually failed.
15. Recipes should be pleasant to cook from, not just accurate to read.
16. Featured meals need one master cooking brain, not several disconnected recipe brains.
17. Reduce chaos, not standards.
18. Make-ahead is only useful when it preserves or improves final quality.
19. Stage bowls must preserve cooking order.
20. Instructions should carry enough measurements and cues to cook without constant scrolling.
21. Public HTML should stay cook-facing unless Amy explicitly asks for internal notes to appear publicly.

---

# 💜 Final Principle

Success is not measured by authenticity alone.

Success is not measured by complexity.

Success is not measured by rarity of ingredients.

Success is measured by a simple question:

> Would Amy and Don be excited to make this again?

If the answer is yes, the recipe belongs in Flavorweaver.
