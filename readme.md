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

Flavorweaver documents what happens after a recipe, restaurant meal, family memory, cultural tradition, or ingredient idea enters the Amy & Don Kitchen.

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
* Homemade elements
* Pickles, herbs, or acid for balance
* Comfort elevated through complexity
* Bold but balanced seasoning
* Components that work together rather than compete

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

Some older pages may exist at a flatter path while the site is being aligned, but new world-culture recipe work should use the category-aware pattern unless Amy explicitly approves another structure.

World-culture recipes are chef-level developed recipes from the Amy & Don Kitchen. They may be inspired by restaurants, cultures, flavor memories, research, experiments, substitutions, ingredient access limitations, or printed/source recipes, but the final recipe should reflect what Amy and Don would want to make again.

## World-Cuisine Recipe Research Standard

For cultural and world-cuisine recipes, especially cuisines that are new or still being learned, do not treat the first simple internet recipe as canon.

Flavorweaver development should search for the best version of a dish that can be found: top-tier, chef-level, cookbook-quality, restaurant-quality, and Michelin-star mindset where applicable. Amy and Don are not spending multi-hour project-meal effort to produce a mediocre dish. The goal is to study excellent patterns first, then build an Amy & Don version that is practical, repeatable, and worth the work.

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

Do not destabilize components that tested at a very high level just because the full plate needs improvement. If a component tests around 9.5/10, preserve it unless there is a clear reason to change it. Improve the weaker supporting components, contrast, workflow, plating, or make-ahead structure instead.

For example, the Ethiopian platter test showed that the Doro Wat-style chicken and eggs, Split Pea Alicha, and naan were each approximately 9.5/10 and should not be casually changed. The lower-performing components were the Timatim and Atakilt Wat, which needed comparison against stronger Ethiopian recipe patterns before canon-locking. The correction was not just fixing blandness; it was upgrading the source standard and improving plate balance.

The goal is not random authenticity and not random adjustment.

The goal is chef-quality Flavorweaver adaptation.

When documenting this research, clearly distinguish between:

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

New world-culture Markdown recipes should begin from:

```text
docs/templates/world-culture-recipe-source-template.md
```

Supporting structure reference:

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

World-culture HTML pages should mirror the premium recipe page design already used by canon examples such as:

```text
docs/recipes/korean/bowls-and-mains/bold-bulgogi-bowls.html
docs/recipes/vietnamese/bowls-and-mains/lemongrass-chicken-bowls.html
docs/recipes/vietnamese/appetizers/fresh-vegetable-spring-rolls.html
docs/recipes/ethiopian/bowls-and-mains/ethiopian-inspired-doro-wat-platter.html
```

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

Public HTML pages should show the cook-facing recipe content:

- title and summary
- culture / category / status kicker
- prep, cook, total, marinate, rest, yield, or servings as appropriate
- tags
- ingredient list by component
- measured ingredients
- required components and their role on the plate, when applicable
- plating and serving architecture for complete meal plates
- integrated preparation order inside instructions for complete meal plates
- complete cook-critical workflow when converted from images or printouts
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

---

# 🍽️ Complete Meal Plate Rule

Some Don & Amy world-culture recipes represent a complete restaurant-style meal plate rather than a single isolated dish.

In those cases, the main dish recipe should keep the full meal build together as the canonical recipe. This may include the protein or central dish, rice, noodles, bread, vegetables, sauces, pickles, garnishes, assembly instructions, and any other required elements needed to make the plate feel complete.

The complete meal recipe must allow the cook to visualize the finished plate before cooking and understand the order of work while cooking.

A complete meal plate recipe should contain four distinct layers:

## 1. Ingredient List = Full Plate Shopping and Prep View

The Ingredient List should show everything required to make the whole plate, even when some required elements also exist as standalone reusable component recipes.

When a required element has its own recipe, link it by name while still listing the ingredients needed for that component.

Correct pattern:

```markdown
| Atakilt Wat | [Atakilt Wat](../sides/atakilt-wat.md): cabbage, carrot, potato, onion, butter or oil, garlic, ginger, turmeric, cumin, coriander |
```

Do not replace full-plate ingredient visibility with only a link.

## 2. Linked Required Components = Role on the Plate

The Linked Required Components section should explain how each component functions in the final dish.

This section should not repeat the full ingredient list.

Correct pattern:

```markdown
| 1 batch | [Atakilt Wat](../sides/atakilt-wat.md) | Soft vegetable component that rounds out the plate and adds gentle sweetness |
```

Use this section to explain balance, contrast, texture, sauce role, freshness, scoopability, richness, acidity, heat, crunch, or comfort.

## 3. Plating & Serving Architecture = Story of the Finished Plate

Complete meal plates should include a Plating & Serving Architecture section.

This section should describe:

- serving size and per-plate portioning
- where each component goes visually
- what gets spooned over what
- what should remain fresh, cool, bright, crispy, saucy, or scoopable
- how the components should be eaten together
- what the final plate should feel like to the eater

The goal is the holy grail of instruction: the cook should be able to envision the plate in their mind.

These main plate recipes tell a story.

## 4. Instructions = Integrated Preparation Order and Cook Flow

For complete meal plates, preparation order belongs inside the Instructions section, not as an isolated note that the cook may miss.

The Instructions should answer the chef's practical timing questions:

- what must be done the day before
- what starts first on cooking day
- what can simmer or hold warm
- what must stay fresh until the end
- what should be prepared earlier but cooked or reheated close to serving
- when sauces, breads, pickles, salads, garnishes, and other required components enter the flow
- when final assembly and plating happen

Do not imply a required component is quick or last-minute when it is not. For example, homemade naan dough, injera, long-simmering legumes, marinades, fermented components, and chilled components must be timed honestly.

The cook should be able to follow the Instructions from start to finish without needing to build a separate prep schedule.

## Component Breakout Rule

Reusable components may be broken out into separate recipes when they are useful beyond the original meal.

Required components should not be listed as required unless they have enough recipe content to cook them. If the component is substantial or reusable, create and link a separate source Markdown file and public HTML page for it.

Current complete-meal test cases:

```text
Bold Bulgogi Bowls
Lemongrass Chicken Bowls
Ethiopian-Inspired Doro Wat Platter
```

The Ethiopian-Inspired Doro Wat Platter is the first expanded test case showing a full meal card with linked required component recipes, component role notes, plating architecture, and integrated preparation order.

Bold Bulgogi Bowls and Lemongrass Chicken Bowls should be normalized to this complete-meal layer so the pattern remains consistent.

`Pairs Well With` is reserved for optional companion dishes, add-ons, sides, drinks, or menu-style pairings that would go well beside the meal but are not required for the identity of the main dish.

---

# 🧠 Kitchen Execution Systems

Flavorweaver recipes must become pleasant to cook from, not merely accurate to read.

For individual component recipes, the recipe should teach how to cook that one component clearly.

For complete plates and featured meals, the recipe must function as a kitchen execution system. It must read every component recipe as if the cook is actually making the whole plate, then rebuild the work into the correct sequence.

Core rule:

> Echo must interpret the recipes as a cook, not just format them as files.

A featured meal master card is the sequenced cooking brain for the whole plate. Component recipes are references, but the master card must make the kitchen workflow clear enough to cook without chaos.

## Complete Capture Before Design

Before improving layout or usability, all usable source information must be captured.

Do not flatten meaningful information into generic steps. Preserve:

- ingredient amounts and total quantities
- cut sizes and cut styles
- ingredient temperature requirements
- prep timing and holding limits
- cooking order
- which ingredients must stay separate
- equipment needs and warnings
- visual doneness cues
- simmer, reduction, rest, bloom, proof, marinate, and hold timing
- troubleshooting and rescue notes
- live test notes and ratings
- what worked and should not be casually changed
- what failed and needs research or redesign

If the recipe or test note contains a detail that would prevent confusion in the kitchen, capture it.

## Full Ingredient Roll-Up

Complete plates and featured meals need a total prep view before cooking begins.

The roll-up should combine shared ingredients across all component recipes so the cook can prep once and divide intentionally.

Examples of roll-up ingredients:

- onions
- garlic
- ginger
- tomatoes
- cucumbers
- herbs
- potatoes
- carrots
- cabbage
- spices
- broth
- eggs
- butter or oil
- lemon, lime, or vinegar

The roll-up should show:

```text
Ingredient
Total amount needed
Prep style
Which component receives which portion
```

If the same ingredient needs different cuts, list each cut separately.

Example:

```text
Onion total: ___
- Doro Wat: finely diced for sauce reduction
- Atakilt Wat: thin half-moons for onion base
- Timatim Salad: fine raw onion presence
```

Do not invent missing quantities. If component recipes do not provide enough measured information to calculate a total, flag the missing data before canon-locking.

## Stage-Based Prep Bowls

Prep bowls must preserve cooking order.

Do not combine ingredients merely because they belong to the same component recipe.

Group prep by when ingredients enter the pan.

Correct Atakilt Wat logic:

```text
Stage 1 — Onion Base
- sliced onion

Stage 2 — Aromatics & Spices
- garlic
- ginger
- turmeric
- cumin
- coriander
- optional chile or researched aromatic direction

Stage 3 — Bulk Vegetables
- cabbage
- carrot
- Yukon potatoes

Stage 4 — Finish / Adjustment
- salt
- black pepper
- water or broth
- optional acid if flat
```

Incorrect logic:

```text
Atakilt Bowl
- onion
- cabbage
- carrot
- potato
```

That breaks the cooking order because the onion needs to cook first.

Canon rule:

> Prep ahead, but do not combine ingredients that enter the pan at different stages.

## Advance Prep Quality Standard

Advance prep should reduce chaos, not reduce standards.

Make-ahead is not automatically better. For Amy & Don, quality comes first; the master timeline exists so high-quality day-of cooking is possible.

Advance prep is allowed only when it preserves or improves final quality.

Good advance prep may include:

- spice blends
- marinades
- doughs that require fermentation, rise, or rest timing
- dry equipment setup
- ingredient verification
- printed or written prep maps
- soaking legumes only when the recipe or technique calls for it

Do not prep ahead when quality, texture, freshness, flavor, or appearance would suffer.

For the Ethiopian platter test case:

- do not cut potatoes the day before; they can oxidize or brown
- do not cut tomatoes, cucumbers, herbs, or raw-salad onions the day before
- do not boil eggs the day before if the refrigerator will dull texture or flavor
- do not cook Split Pea Alicha ahead unless a future test proves quality is preserved or improved
- do not rely on microwave reheating or leftover-style treatment for main dishes
- naan should start first on cooking day if made from scratch, but cook close to serving so it is fresh, soft, bubbly, and scoopable

Canon lines:

> The Featured Meal Master Card should reduce chaos, not reduce standards.

> Advance prep should never turn fresh components into leftover components.

## Full Cooking Timeline

A complete plate must have one full cooking timeline that sequences all components together.

The timeline should answer:

- what begins before cooking day
- what begins first on cooking day
- what starts while another item rises, simmers, reduces, or rests
- what can hold warm without quality loss
- what must be made fresh near service
- what cooks last for best quality
- when to reduce sauces
- when to add delicate items such as eggs, herbs, salad dressing, or fresh bread
- when final plating begins

For example:

```text
Naan starts first if made from scratch, because the dough needs time.
Naan cooks last because it is best fresh.
Eggs are boiled day-of during a simmer window.
Timatim is dressed near the end so it stays bright.
Atakilt is cooked fresh with onion first, aromatics second, bulk vegetables third.
```

## Paragraph-Style Instructions With Measurements

Ingredient lists are for shopping, planning, and prep.

Instructions are for cooking.

For cook-facing recipes, especially project meals and full plates, instructions should repeat enough measurements that the cook does not need to constantly scroll back to the ingredient list.

Weak pattern:

```text
Add garlic, ginger, turmeric, cumin, and coriander.
```

Preferred pattern:

```text
Add 1 clove minced garlic, 1 tsp grated ginger, 1/2 tsp turmeric, 1/4 tsp cumin, and 1/4 tsp coriander. Cook 30-45 seconds, stirring constantly, until fragrant. Do not let the garlic burn.
```

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

A full plate can score lower because one component, contrast layer, or workflow failed.

Do not automatically revise every component.

If a component tests around 9.5/10, preserve it unless Amy identifies a specific reason to change it.

Focus refinement where the plate actually failed:

- underbuilt supporting component
- lack of contrast
- weak dressing
- poor sequencing
- prep chaos
- unclear instructions
- plating imbalance
- missing make-ahead or day-of timeline guidance

The Ethiopian platter test case preserved the Doro Wat-style chicken and eggs, Split Pea Alicha, and naan as high-performing components while identifying Timatim, Atakilt Wat, and workflow as the refinement targets.

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
Complete Meal Plate
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
* Full-plate workflow lessons

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

When adding world-culture recipes:

1. Determine the culture/path and category.
2. Create the Markdown source file.
3. Create the public HTML page.
4. If developing or revising a cultural/world-cuisine recipe, research stronger chef, cookbook, restaurant, reputable publication, top-tier, and common/traditional patterns before canon-locking an Amy & Don adaptation.
5. Preserve 9.5/10-level tested components unless there is a clear reason to change them; improve weaker components, contrast, workflow, or plating instead.
6. If converting from recipe images, printouts, cards, or screenshots, review the entire source before writing and preserve all cook-critical details.
7. For complete plates and featured meals, read every component recipe as if cooking the whole plate and build one sequenced kitchen execution system.
8. Build a full ingredient roll-up for shared prep items across all components.
9. Create stage-based prep bowls that preserve cooking order.
10. Separate advance prep from day-of prep, and only recommend advance prep that preserves or improves quality.
11. Write a full cooking timeline showing what starts first, what waits, what holds, what cooks last, and when plating begins.
12. Use paragraph-style instruction steps with ingredient amounts repeated when it prevents scrolling or confusion.
13. Break out substantial required components into their own source and public pages.
14. Ensure the main complete-meal recipe still shows full ingredient visibility for the entire plate.
15. Use Required Components to explain component roles on the plate.
16. Add Plating & Serving Architecture for complete meal plates.
17. Integrate preparation order directly into Instructions for complex complete plates.
18. Update active and legacy search/index files.
19. Add new search tags for new cultures, dishes, components, and major concepts.
20. Update category/path pages and cache query strings as needed.
21. Verify links and discovery paths.
22. Verify the final Markdown and public HTML against the source material before calling the recipe complete.

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
13. Build toward top-tier, chef-quality plates; do not spend project-meal effort on mediocre results.
14. Protect high-scoring components and focus refinement where the plate actually failed.
15. Recipes should be pleasant to cook from, not just accurate to read.
16. Featured meals need one master cooking brain, not five separate recipe brains.
17. Reduce chaos, not standards.
18. Make-ahead is only useful when it preserves or improves final quality.
19. Stage bowls must preserve cooking order.
20. Instructions should carry enough measurements and cues to cook without constant scrolling.

---

# 💜 Final Principle

Success is not measured by authenticity alone.

Success is not measured by complexity.

Success is not measured by rarity of ingredients.

Success is measured by a simple question:

> Would Amy and Don be excited to make this again?

If the answer is yes, the recipe belongs in Flavorweaver.
