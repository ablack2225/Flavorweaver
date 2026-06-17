# Flavorweaver Nutrition Reference

This folder stores verified product nutrition labels and household nutrition standards used to calculate recipe macros.

The purpose is to make recipe nutrition repeatable, traceable, and easier to pull into Vitalweaver.

---

## Reference Types

| Folder | Purpose |
|---|---|
| `products/` | Brand-specific packaged ingredients with nutrition label values. |
| `standards/` | Household standards and calculated references for items without exact labels, such as home-ground brisket. |

---

## Verification Language

Use these terms consistently:

| Status | Meaning |
|---|---|
| Verified label | Nutrition came from a product label, product page, or user-provided label text/photo. |
| Calculated standard | Nutrition is based on a stable household method or standard food reference. |
| Estimated pending label | Temporary value only; replace when the actual label is available. |
| Portion-adjusted | Recipe total was calculated first, then adjusted for actual serving size. |

---

## How Echo Should Use This Folder

When calculating Flavorweaver recipe nutrition:

1. Check this folder for existing product or standard references.
2. Use verified label values when available.
3. Use household standards when no packaged label exists.
4. Clearly mark any ingredient that is estimated or pending.
5. Add new product documents when Amy provides labels or product details.
6. Use recipe totals to create standard serving and Vitalweaver portion guidance.

---

## Privacy Note

This folder should store product and recipe nutrition references only.

Do not store Amy's personal health data, daily intake logs, vitals, body measurements, symptoms, or medical details here.
