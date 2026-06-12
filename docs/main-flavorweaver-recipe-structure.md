# Main Flavorweaver Recipe Structure

Status: Canon Structure  
Applies to: Main Flavorweaver recipe repository  
Family recipe exception: `family-recipes/` uses the same clean recipe-card foundation, but a lighter ending structure

---

## Purpose

This document locks the canonical structure for main Flavorweaver recipe files.

Main Flavorweaver recipes are designed to work as:

- clean GitHub Markdown recipe files
- future GitHub Pages recipe pages
- manually printable recipe cards
- searchable recipe data through YAML frontmatter
- living kitchen records with testing notes and Flavorweaver notes

The goal is to build the repository correctly from the beginning so it can become a recipe website later without a major redesign.

---

## Folder Structure

Main recipes should be organized by world/culture first, then recipe type.

Recommended pattern:

```text
recipes/
└── vietnamese/
    ├── main-dishes/
    │   └── lemongrass-chicken-bowls.md
    ├── appetizers/
    │   └── fresh-lemongrass-chicken-spring-rolls.md
    ├── sides/
    ├── soups-and-stews/
    ├── breads/
    ├── desserts/
    └── readme.md
```

Existing world/culture folders may be expanded with recipe-type folders over time.

Do not duplicate a recipe body just because it belongs in more than one browsing category. Use one canonical file and multi-category metadata.

Example:

```yaml
primary_category: Appetizer
categories:
  - Appetizer
  - Side
```

---

## File Naming

Use simple lowercase kebab-case file names.

Examples:

```text
bold-bulgogi-bowls.md
lemongrass-chicken-bowls.md
fresh-lemongrass-chicken-spring-rolls.md
```

Recipe titles should be clean and readable.

Use:

```markdown
# Bold Bulgogi Bowls
```

Avoid adding personal ownership to every recipe title. The repository already carries the Flavorweaver kitchen identity.

---

## YAML Frontmatter

Main recipe files should begin with YAML frontmatter.

For single-category recipes:

```yaml
---
name:
culture:
category:
status:
difficulty:
prep_time:
cook_time:
total_time:
servings:
measurement_status:

rating_note:
repeat_worthy:
hall_of_fame_candidate:
hall_of_fame:

tags:
  - 

pairs_well_with:
  - 

last_updated:
---
```

For recipes that should appear in more than one category:

```yaml
---
name:
culture:
primary_category:
categories:
  - 
  - 
status:
difficulty:
prep_time:
cook_time:
total_time:
servings:
measurement_status:
---
```

Use practical difficulty and time values. Avoid chef-brain estimates. Prep time should account for chopping, slicing, sauce mixing, rice rinsing, assembly, and other real kitchen work.

---

## Timing Fields

Use separate timing fields when possible:

```yaml
prep_time: 35m
cook_time: 40m
total_time: 1h 15m
```

Add additional timing fields when relevant:

```yaml
marinate_time: 2-4h
cool_time: 30m
rest_time: 10m
```

Total time should either include the extra time or make the relationship obvious.

---

## Recipe Card Section

Each main recipe should include a contiguous recipe card section that can be manually highlighted and printed.

Use invisible markers:

```markdown
<!-- recipe-card:start -->

# Recipe Title

## Recipe Dashboard

## Ingredient List

## Measured Ingredients

## Instructions

<!-- recipe-card:end -->
```

The markers do not show in GitHub rendering, but they preserve a clean target for future automation or GitHub Pages print layouts.

The recipe card section should contain only the practical cooking information needed in the kitchen.

---

## Standard Recipe Page Order

Use this order for main recipe files:

1. YAML frontmatter
2. `<!-- recipe-card:start -->`
3. Recipe title
4. Short description
5. Recipe Dashboard
6. Ingredient List
7. Measured Ingredients
8. Instructions
9. `<!-- recipe-card:end -->`
10. Pairs Well With
11. Chef's Notes
12. Final Verdict
13. Collapsible Flavorweaver sections

Recommended collapsible sections:

```markdown
<details>
<summary>Flavor Architecture</summary>

...

</details>

<details>
<summary>Flavorweaver Direction</summary>

...

</details>

<details>
<summary>Timing Notes</summary>

...

</details>

<details>
<summary>Testing Notes</summary>

...

</details>

<details>
<summary>Kitchen Notes</summary>

...

</details>

<details>
<summary>Change Log</summary>

...

</details>
```

---

## Ingredient Sections

Use both an Ingredient List and Measured Ingredients.

### Ingredient List

The Ingredient List is a quick scan by component.

Example:

```markdown
| Component | Ingredients |
|---|---|
| Rice | Basmati rice, chicken broth, butter, onion, bay leaf, salt |
| Sauce | Soy sauce, dark soy sauce, brown sugar, honey, sesame oil, pear, ginger, garlic, vinegar, gochujang |
```

### Measured Ingredients

Measured Ingredients should be cook-ready.

Example:

```markdown
### Sauce

| Amount | Ingredient | Notes |
|---:|---|---|
| 3 Tbsp | Soy sauce |  |
| 1 Tbsp | Dark soy sauce |  |
| 3 Tbsp | Mashed canned pear | Secret ingredient |
```

If exact amounts are missing, use `As needed` and set:

```yaml
measurement_status: partial
```

---

## Pairs Well With Links

Pairs Well With sections should use clickable Markdown links when the target file exists.

Use this:

```markdown
[Peanut Dipping Sauce](../../../condiments/peanut-sauce.md)
```

Do not use this for visible recipe links:

```markdown
`../../../condiments/peanut-sauce.md`
```

Backticked paths render as code and are not clickable links.

Preferred table format:

```markdown
| Type | Pairing | Notes |
|---|---|---|
| Condiment | [Peanut Dipping Sauce](../../../condiments/peanut-sauce.md) | Primary dipping sauce |
| Side | Kimchi | Fermented heat and acid |
```

If a pairing does not have a recipe file yet, keep it as plain text.

---

## Self-Contained Recipes vs Reusable Components

Some recipes should stay self-contained because their components define the dish.

Example: Bold Bulgogi Bowls should keep its rice, pickled cucumbers, sauce, vegetables, crema, and assembly inside the main recipe because those components belong to the bowl's identity.

Other recipes should split reusable components into separate files.

Example: Lemongrass Chicken Bowls and Fresh Lemongrass Chicken Spring Rolls share reusable sauces, so Restaurant-Style Ginger Nuoc Cham and Peanut Dipping Sauce belong in `condiments/`.

Guiding question:

> Is this component required for the identity of this specific dish, or is it a reusable building block across multiple dishes?

If required for the specific dish, keep it in the main recipe.

If reusable across multiple dishes, create or update a separate component file and link to it.

Some components may eventually exist both ways: included in a signature recipe for convenience, and later broken out as standalone recipes when they become useful elsewhere.

---

## Family Recipes Exception

The `family-recipes/` section uses a simpler preservation structure.

Family recipes should keep the same useful cooking layout:

1. YAML frontmatter
2. `<!-- recipe-card:start -->`
3. Recipe title
4. Short description, if helpful
5. Recipe Dashboard
6. Ingredient List
7. Measured Ingredients
8. Instructions
9. `<!-- recipe-card:end -->`
10. Notes, only if useful

Family recipes should not use the heavier main-repo ending by default.

Remove or avoid these sections for normal family recipes:

- Final Verdict
- Flavorweaver Decision
- Flavor Architecture
- Flavorweaver Direction
- Testing Notes
- Kitchen Notes
- Change Log

Family recipes do not need creator or contributor metadata by default. They are family recipes; the folder context is enough.

Family recipe files should stay warm, simple, and easy to print. Add preservation/source context only when it genuinely matters.

A separate family recipe template should be maintained for that branch.

---

## Canon Examples

Current recipe examples that reflect this structure:

```text
recipes/korean/bold-bulgogi-bowls.md
recipes/vietnamese/main-dishes/lemongrass-chicken-bowls.md
recipes/vietnamese/appetizers/fresh-lemongrass-chicken-spring-rolls.md
condiments/ginger-nuoc-cham.md
condiments/peanut-sauce.md
```

---

## Final Rule

Flavorweaver should remain easy to cook from, easy to browse, easy to print, and ready for a future GitHub Pages recipe site.

Build cleanly now so the site does not require rebuilding later.
