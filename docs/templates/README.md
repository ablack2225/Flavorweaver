# Flavorweaver HTML Templates

## Locked Canon: World-Culture Recipe Page

Template file:

```text
world-culture-recipe-canon-template.html
```

Canonical live reference:

```text
docs/recipes/korean/bold-bulgogi-bowls.html
```

This template is cloned from the Bold Bulgogi Bowls public recipe page and should be treated as the locked visual/layout standard for world-culture recipe HTML pages.

## Rules

- Do not casually change the template.
- If the public recipe-page layout changes, update the template first.
- Then migrate existing world-culture recipe pages from the template.
- World-culture recipes use individual public HTML pages, not the family cookbook dynamic recipe renderer.
- Required component recipes belong in the Ingredient List and Measured Ingredients sections as direct links.
- Pairs Well With is reserved for companion dishes, not required components.
- Chef's Notes should remain a premium callout inside the main recipe card.
- Public HTML pages should use only public recipe-card content from the source Markdown.
- Do not expose internal owner notes, test notes, flavor architecture details, change logs, or Markdown source paths on public pages.

## Canon structural markers

The canon layout uses:

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
