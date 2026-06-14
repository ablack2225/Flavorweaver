# Flavorweaver Templates

This folder is the canon home for active Flavorweaver templates.

Root-level `templates/` is no longer an active template location.

## Locked Canon: World-Culture Recipe HTML Page

Template file:

```text
world-culture-recipe-canon-template.html
```

Canonical live reference:

```text
docs/recipes/korean/bold-bulgogi-bowls.html
```

This template is cloned from the Bold Bulgogi Bowls public recipe page and should be treated as the locked visual/layout standard for world-culture recipe HTML pages.

## Canon: World-Culture Recipe Source Markdown

Template file:

```text
world-culture-recipe-source-template.md
```

This template is the source-of-truth Markdown structure for Don & Amy world-culture recipes.

It includes:

- YAML frontmatter
- `<!-- recipe-card:start -->` and `<!-- recipe-card:end -->`
- Recipe Dashboard
- Ingredient List
- Measured Ingredients
- Instructions
- Pairs Well With
- Chef's Notes
- Final Verdict
- collapsible Flavorweaver development sections

## Canon: Family Recipe Source Markdown

Template file:

```text
family-recipe-source-template.md
```

This template is the source Markdown starting point for preserved family recipes.

Family recipes remain type-first under:

```text
family-recipes/recipes/<category>/<recipe-slug>.md
```

They are not built from the world-culture HTML canon unless Amy approves a special feature page.

## Rules

- Do not casually change canon templates.
- If the public recipe-page layout changes, update the HTML canon template first.
- Then migrate existing world-culture recipe pages from the HTML template.
- New world-culture source Markdown should begin from the world-culture source Markdown template.
- New family source Markdown should begin from the family source Markdown template.
- World-culture recipes use individual public HTML pages, not the family cookbook dynamic recipe renderer.
- Required component recipes belong in the Ingredient List and Measured Ingredients sections as direct links.
- Pairs Well With is reserved for companion dishes, not required components.
- Chef's Notes should remain a premium callout inside the main recipe card on public HTML pages.
- Public HTML pages should use only public recipe-card content from the source Markdown.
- Do not expose internal owner notes, test notes, flavor architecture details, change logs, or Markdown source paths on public pages.

## Canon structural markers

The canon public HTML layout uses:

```html
<main class="page-shell recipe-page premium-recipe">
```

and loads:

```html
<link rel="stylesheet" href="../../premium-recipe.css?v=20260613-04" />
```

The canon sidebar format is:

```html
<aside class="recipe-sidebar-card">
  <h2>Pairs Well With</h2>
  <ul class="pairing-menu">
    <li><strong>Pairing Title</strong><span>Pairing note.</span></li>
  </ul>
</aside>
```
