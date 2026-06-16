# Complete Meal Creation Canon

This canon governs Don & Amy world-culture complete meals, including complete plates, complete bowls, project meals, and featured meal master cards.

## Canon Purpose

A complete meal master card is not just a list of linked component recipes.

It is the kitchen execution system for the entire meal.

The master card must allow the cook to:

- visualize the finished bowl or plate before cooking,
- see every ingredient needed for the full meal,
- prep shared ingredients once when quality allows,
- divide ingredients intentionally by use,
- stage prep bowls in actual cooking order,
- make required components without leaving the main execution flow,
- and cook from the instructions without building a separate schedule.

## Current Template System

Use these files together. Do not create additional template files unless Amy explicitly approves a new category of template.

| File | Purpose |
|---|---|
| `docs/templates/complete-meal-creation-canon.md` | Rules and standards for complete meal cards. Not a copy/paste recipe template. |
| `docs/templates/featured-meal-master-template.md` | Markdown source template for Don & Amy featured meals, complete bowls, complete plates, and project meals. |
| `docs/templates/world-culture-recipe-canon-template.html` | Public HTML layout template for Don & Amy world-culture recipe pages. |
| `docs/templates/world-culture-recipe-source-template.md` | Markdown source template for standalone world-culture recipes and reusable components. |

## Master Card Versus Component Recipe

Use `featured-meal-master-template.md` when the recipe is the complete eating experience: a bowl, plate, platter, or project meal with multiple components.

Use `world-culture-recipe-source-template.md` when the recipe is a standalone dish or reusable component: stew-only, sauce-only, bread-only, condiment-only, side-only, salad-only, etc.

A complete meal card may reference component recipes, but the cook-facing execution must still be integrated into the master card.

## Required Component Integration

Required components must be integrated into the master card.

Do not list required components only as links.

Required component ingredients must appear in the full bowl or full plate ingredient roll-up, including bread, rice, noodles, sauces, pickles, garnishes, salads, sides, and any other component necessary to make the meal complete.

Correct pattern:

```text
Noodle Base
- Wide rice noodles
- Water for cooking or soaking noodles, according to package instructions
```

Correct pattern:

```text
Bread Component
- all-purpose flour
- bread flour
- yeast
- water
- salt
- fat
- steam or baking setup, if required
```

Incorrect pattern:

```text
Required component: linked recipe only
```

That is not enough for a project meal master card.

## Full Bowl / Full Plate Ingredient Roll-Up

The roll-up must combine the full shopping and prep view for the meal.

It should answer:

```text
Component
Ingredients needed
Prep style when relevant
Where the component appears in final service
```

If the same ingredient appears multiple times, calculate or show the total when the component recipes provide enough measured information.

Do not invent missing quantities. If component recipes do not provide enough measured information to calculate the roll-up, flag the missing data before canon-locking.

## Cross-Component Prep Map

Complete meal cards must include a prep map when ingredients appear across multiple components.

Canon rule:

> Prep once when quality is preserved. Prep separately when timing, freshness, or cooking order requires it.

Examples:

```text
Garlic
Prep once: yes, if used same day.
Divide into: marinade bowl; aromatic bowl.
Keep portions separate after mincing.

Lime
Prep once: partially.
Use for pickle finish, sauce finish, stew finish, or garnish wedges as needed.
Wedges and fresh finishes should stay close to service.

Herbs
Prep once: usually no.
Cut close to service unless a specific recipe test proves quality holds.
```

## Stage-Based Prep Bowls

Stage-based prep bowls must be grouped by workflow area and ordered by when they enter the cooking process.

The numbering follows cooking sequence, not broad ingredient category.

Canon format:

```text
Workflow Area Bowls
Bowl 1 — First item or stage
Bowl 2 — Second item or stage
Bowl 3 — Third item or stage
```

Prep bowls must include measurements whenever the recipe has measured amounts.

A prep bowl without amounts is not cook-ready. It is only an ingredient reminder.

Correct:

```text
Bowl 2 — Garlic, Ginger & Lemongrass
- 2 cloves garlic, minced
- 1 Tbsp ginger, grated or paste
- 1 Tbsp lemongrass paste
- Add after onion softens; cook 30-60 seconds
```

Incorrect:

```text
Bowl 2 — Garlic, Ginger & Lemongrass
- garlic
- ginger
- lemongrass
```

## Required Workflow Areas for Project Meals

Use only the groups that apply to the specific meal.

Common groups include:

```text
Bread / Starch / Noodle Bowls
Protein / Main Bowls
Aromatic Bowls
Braise / Sauce / Liquid Bowls
Vegetable Bowls
Pickle / Salad Bowls
Fresh Finish / Garnish Bowls
Table Finish Bowls
```

## Full Cooking Timeline and Instructions

The master card instructions must integrate all required components.

They must show:

- what begins before cooking day,
- what begins first on cooking day,
- what can simmer while another component cooks, rises, soaks, rests, or drains,
- what must stay fresh until the end,
- what cooks last for best quality,
- when sauces, pickles, bread, noodles, rice, herbs, garnishes, and final adjustments enter the flow,
- and final assembly.

Instructions should repeat enough measurements that the cook does not need to constantly scroll back to the ingredient list.

For bread or dough components, include yeast temperature, rise timing, bake timing, and service timing inside the master card timeline.

For noodle, pasta, or rice components that vary by product, write: **cook according to package instructions**, then state how to drain, hold, divide, or serve.

## Public Versus Source Content

Public HTML pages should stay cook-facing.

Do not surface internal live-test notes, research notes, change logs, or decision records on public HTML unless Amy explicitly asks for that content to be public.

Markdown source files may include Source / Research Notes, test notes, kitchen observations, and change logs.

## Canon Lock

Future Don & Amy complete meal creation should follow this template system unless Amy explicitly approves a different pattern for a specific recipe.
