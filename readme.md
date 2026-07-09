# 🧵 Flavorweaver

> A living tapestry of recipes, culinary discoveries, kitchen standards, and flavor architecture from the Amy & Don Kitchen.
>
> Recipes enter as inspiration.
>
> They leave as something uniquely our own.

---

# 🌟 Flavorweaver Standard

Flavorweaver world-cuisine recipes are developed to the highest possible standard.

The default target is **not** “good home cooking,” “restaurant-style,” “high-quality home version,” “technically composed,” “pretty on paper,” or “good enough.”

The default target is:

- **Best possible version** within Amy and Don’s actual pantry, budget, equipment, and timing constraints
- **Michelin-minded / top-tier chef-level** flavor, technique, texture, structure, and service
- **9.5+ minimum target** before canon lock
- **Bold Amy-and-Don-calibrated flavor intensity**
- Traditional, regional, chef, cookbook, restaurant, and top-tier versions researched before building
- Ingredient choices, substitutions, and technique decisions justified
- Recipe architecture discussed with Amy before MD/HTML creation
- Public recipe pages created only after the high-ceiling version is locked

## Amy & Don Boldness Requirement

A recipe cannot be rated as Flavorweaver-level merely because it is balanced, plausible, restaurant-adjacent, or neatly structured. For Amy and Don, the dish must have **clear flavor impact**.

Flavorweaver boldness means:

- Strong, memorable seasoning that carries through the entire bite
- Sauces, marinades, spice blends, acids, aromatics, and finishing elements that are assertive enough to matter
- Layered flavor architecture, not generic “warm spice” background notes
- A clear identity: the dish should immediately taste like itself, not like a mild bowl template
- Enough intensity that Amy and Don would be excited to eat leftovers or make it again
- No bland, generic, muted, or “technically fine but forgettable” plates

If a dish reads as bland, soft, generic, under-seasoned, or not worth finishing, it fails Flavorweaver regardless of how polished the structure looked during development.

Canon shorthand:

> **If it is not bold enough for Amy and Don, it is not a 9.5.**

## Flavor Profile Calibration

Amy and Don consistently respond best to cuisines and dishes with **bold, saturated, highly legible flavor profiles**. The successful pattern is not tied to one region; it is tied to intensity, contrast, and identity.

Known success anchors include:

- **Thai** — chile, lime, fish sauce, aromatics, coconut, basil, sweet-salty-acidic tension, high-impact sauces
- **Indian** — bloomed spices, browned onion gravies, ginger-garlic depth, cream/cashew richness, layered masalas, bright finishing acid
- **Ethiopian** — berbere-style depth, long-cooked onions, spiced butter direction, lentil/chicken stew intensity, scoopable plate architecture
- **Chinese** — soy/oyster/ginger/garlic depth, wok-style intensity, sticky sauces, crisp textures, bold sweet-salty-savory balance
- **Vietnamese** — fish sauce, lime, herbs, pickles, chile, lemongrass, bright dipping sauces, fresh-acidic contrast
- **Bold German comfort plates** — strong sweet-sour cabbage, mustard/lemon/acid contrast, crisp fried textures, savory-fat balance, clear plate identity

Future Flavorweaver development must compare new dishes against this profile. A dish should not be approved simply because it is from a cuisine Amy and Don usually enjoy. It must carry the kind of boldness that makes those cuisines successful in the Amy & Don Kitchen.

Low-impact bowls, lightly seasoned patties, mild rice bases, soft salads, polite sauces, and generic “fresh + creamy + protein” structures are danger signs unless the flavor architecture is aggressively upgraded.

If a concept cannot be made bold, memorable, and worth repeating, it should not be built into public HTML.

If a recipe has not gone through this development pass, it remains a draft/test recipe and should not be treated as canon.

## Required Recipe Development Workflow

Before creating or substantially updating MD/HTML for a new world-cuisine recipe:

1. Research traditional, regional, and top-tier chef versions first.
2. Identify what makes the elite version work: flavor architecture, texture, ingredient quality, cooking method, plating, and service.
3. Compare the elite version against Amy and Don’s pantry, budget, equipment, time, and taste constraints.
4. Stress-test whether the dish is bold enough for the Amy & Don flavor profile, not merely balanced or plausible.
5. Compare the proposed dish against known success anchors: Thai, Indian, Ethiopian, Chinese, Vietnamese, and bold German-style comfort plates.
6. Discuss the proposed architecture with Amy before building.
7. Confirm the 9.5+ target version.
8. Only then create or update the Markdown source and public HTML.
9. Mark as test recipe until live-cooked, rated, and refined.

Canon shorthand:

> **Best possible first. Build second.**

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
```