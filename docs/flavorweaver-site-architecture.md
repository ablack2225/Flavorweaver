# Flavorweaver Website Architecture

Status: Active Direction
Last Updated: 2026-06-12

## Purpose

Flavorweaver is growing into a large recipe archive. Before adding another large batch of recipes, the website/search structure needs to be locked in so the archive remains pleasant to browse, searchable, and scalable.

This document captures the current direction for the Flavorweaver GitHub Pages website and the relationship between the repository, Markdown recipe files, generated HTML recipe pages, and the public search interface.

## Core Principle

The repository is storage.

The website is usability.

Markdown recipes remain the source of truth.

HTML recipe pages are generated from the Markdown source files.

Recipes should not be manually duplicated into separate hand-maintained webpages.

## Design Direction

Flavorweaver should feel like a usable recipe website with a distinct Myriath / SoulWeave atmosphere.

The visual direction is:

- dark celestial study
- open recipe/formula book on a worktable
- candle-gold warmth
- cyan-blue potion bottle glow
- deep midnight blue foundation
- warm wood / parchment / recipe desk energy
- culinary alchemy rather than generic fantasy
- recipe-site usability rather than decorative landing-page design

The site should remain readable, searchable, and practical.

## Website Structure Direction

The site should move from a simple search prototype into a proper recipe archive structure.

Recommended public structure:

```text
docs/
├── index.html
├── recipes.html
├── recipe-search.json
├── styles.css
├── recipes/
│   ├── korean/
│   │   └── bold-bulgogi-bowls.html
│   ├── vietnamese/
│   │   └── lemongrass-chicken-bowls.html
│   ├── condiments/
│   │   └── gochujang-crema.html
│   └── family/
│       └── pies/
│           └── apple-pie.html
└── assets/
    └── future images, icons, or generated assets
```

The exact generated URL structure may evolve, but generated recipe pages should live under `docs/recipes/` so GitHub Pages can serve them directly.

## Source Recipe Structure

Current source recipes may remain where they are while the website layer improves.

Current source examples:

```text
recipes/korean/bold-bulgogi-bowls.md
recipes/vietnamese/main-dishes/lemongrass-chicken-bowls.md
condiments/gochujang-crema.md
condiments/asian-pickled-garden-vegetables.md
family-recipes/recipes/pies/apple-pie.md
```

The website/search layer should reduce anxiety about folder placement by making recipes discoverable by title, cuisine, category, status, ingredients, and tags.

## Recipe Page Direction

Each public recipe page should eventually include:

- site header / navigation
- recipe title
- cuisine / category / status
- prep time / cook time / total time
- servings or yield
- tags
- short description
- ingredients
- instructions
- chef notes when useful to the cook
- pairs-well-with section when available
- source/provenance section for family cookbook recipes when appropriate
- link back to search / archive

The page should feel like a polished recipe website page, not a GitHub Markdown view.

## Public vs Internal Recipe Data

The public website should not expose every section contained in the Markdown source files.

The Markdown files are allowed to hold both reader-facing recipe content and private working notes for recipe development.

### Don & Amy / Flavorweaver recipes

Public pages for Don & Amy recipes should include the cooking content a reader needs:

- title and summary
- dashboard fields such as status, timing, servings or yield, and difficulty
- tags as clickable search filters
- ingredient overview
- measured ingredients
- instructions
- pairs well with
- chef notes when they help the cook
- storage, texture goal, best uses, and flavor balance guides when relevant

Public pages for Don & Amy recipes should **exclude** working/archive sections used for modifications, scoring, history, and internal development tracking:

- Final Verdict
- Flavorweaver Decision checkboxes
- Flavor Architecture details
- Flavorweaver Direction details
- Timing Notes
- Testing Notes
- Kitchen Notes
- Tasting Notes
- Change Log
- scoring systems
- internal modification history

These internal sections should remain in the Markdown source files, but the public generator should not render them into the public HTML recipe pages by default.

### Family cookbook recipes

Family cookbook pages are different because source, provenance, memory, and preservation notes are part of the public archive value.

Public family cookbook pages should include:

- family source when known
- printed category when useful
- estimate/documentation status when useful
- recipe dashboard
- ingredient overview
- measured ingredients
- instructions
- family notes and provenance
- preservation context when present

Family cookbook pages should not be forced into Don & Amy testing or scoring structures unless those sections actually exist and are intentionally marked public.

## Search Direction

The public search page should search across:

- title
- cuisine
- category
- status
- ingredients
- tags
- source path

Search results should show:

- recipe title
- cuisine
- category
- status
- tags
- key ingredients
- link to the generated HTML recipe page

For the prototype, links may still point to GitHub Markdown files. The next phase should shift sample recipes to generated HTML pages and update the search index links accordingly.

## Generation Direction

A generation script should eventually:

1. Scan Markdown recipe files.
2. Read frontmatter and recipe content.
3. Generate themed HTML recipe pages under `docs/recipes/`.
4. Generate or refresh `docs/recipe-search.json`.
5. Preserve Markdown files as the source of truth.

Manual HTML pages are acceptable only for early prototypes. They should not become the long-term maintenance process.

## Near-Term Implementation Plan

Phase 1: Lock site direction

- Preserve this architecture decision.
- Keep GitHub Pages publishing from `/docs`.
- Continue refining visual theme using the SoulWeave-inspired dark culinary worktable direction.

Phase 2: Improve public website shell

- Add proper recipe-site navigation.
- Improve the homepage structure.
- Add sections such as featured recipes, house staples, cuisines, family cookbook, and recently added.

Phase 3: Build sample recipe pages

Create a small set of generated-style HTML pages by hand or semi-manually to prove the recipe-page layout:

- Bold Bulgogi Bowls
- Gochujang Crema
- Asian Pickled Garden Vegetables
- Lemongrass Chicken Bowls
- one family cookbook recipe

Update `recipe-search.json` so these sample entries open HTML pages instead of GitHub Markdown.

Phase 4: Build generator

Create a script or GitHub Action to generate recipe pages and the search index from Markdown recipes.

Phase 5: Normalize forward recipe entry

As new recipes are created, ensure they include enough structured metadata for the future generator:

- name
- culture or origin
- category
- status
- prep/cook/total time when known
- servings or yield
- tags
- ingredients
- instructions
- notes/provenance when relevant

## Current Decision

Do not reorganize all existing recipe folders yet.

Do not manually duplicate 200+ recipes into HTML pages.

Do build the public website and generated-page workflow now, before continuing large-scale recipe entry.
