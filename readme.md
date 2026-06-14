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
