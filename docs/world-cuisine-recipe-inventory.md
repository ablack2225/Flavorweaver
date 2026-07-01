# World-Cuisine Recipe Inventory

Status: Working inventory  
Last updated: 2026-06-30  
Source layers: `docs/world-recipe-data.js` plus active additions in `docs/world-recipe-overrides.js`

---

## Summary Count

| Culture / Flavor Path | Count |
|---|---:|
| Asian Inspired | 2 |
| Chinese Inspired | 4 |
| Ethiopian Inspired / Ethiopian | 6 |
| Indian Inspired | 8 |
| Korean Inspired | 2 |
| Middle Eastern Inspired | 1 |
| Thai Inspired | 2 |
| Vietnamese Inspired | 7 |
| **Total** | **32** |

---

# Asian Inspired

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Asian Pickled Garden Vegetables | Condiment | Working Recipe | `docs/recipes/condiments/asian-pickled-garden-vegetables.html` |
| Garlic-Oyster Broccoli with Ginger, Lime & White Pepper | Vegetable Side | Flavorweaver Test Recipe | `docs/recipes/asian/garlic-oyster-broccoli-with-ginger-lime-and-white-pepper.html` |

---

# Chinese Inspired

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Top-Shelf Mongolian Brisket Beef | Main Dish | Top 10 Meal | `docs/recipes/chinese/top-shelf-mongolian-brisket-beef.html` |
| Chinese Orange Chicken | Main Dish | Working Recipe | `docs/recipes/chinese/chinese-orange-chicken.html` |
| Restaurant-Style Fried Rice | Side Dish | Working Recipe | `docs/recipes/chinese/restaurant-style-fried-rice.html` |
| Premium Crab Rangoon | Appetizer | Working Recipe | `docs/recipes/chinese/premium-crab-rangoon.html` |

---

# Ethiopian Inspired / Ethiopian

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Ethiopian-Inspired Doro Wat Platter | Main Dish | Working Recipe | `docs/recipes/ethiopian/bowls-and-mains/ethiopian-inspired-doro-wat-platter.html` |
| Split Pea Alicha | Side Dish | First Test | `docs/recipes/ethiopian/sides/split-pea-alicha.html` |
| Misir Wat | Side Dish | Working Recipe | `docs/recipes/ethiopian/sides/misir-wat.html` |
| Atakilt Wat | Side Dish | Working Recipe | `docs/recipes/ethiopian/sides/atakilt-wat.html` |
| Timatim Salad | Salads, Slaws & Dips | Working Recipe | `docs/recipes/ethiopian/salads/timatim-salad.html` |
| Teff Starter & Real Injera | Bread | Traditional Technique | `docs/recipes/ethiopian/breads/teff-starter-and-real-injera.html` |

---

# Indian Inspired

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Butter Chicken over Basmati Rice | Main Dish | Working Recipe | `docs/recipes/indian/butter-chicken-over-basmati-rice.html` |
| Mughlai-Style Chicken Korma | Main Dish | Flavorweaver Test Recipe | `docs/recipes/indian/mughlai-style-chicken-korma.html` |
| Restaurant-Style Malai Kofta | Main Dish | House Favorite | `docs/recipes/indian/restaurant-style-malai-kofta.html` |
| Palak Paneer | Main Dish | Working Recipe | `docs/recipes/indian/palak-paneer.html` |
| Onion Bhaji-Inspired Fritters with Quick Green Chutney | Appetizer | Emergency Pantry Version | `docs/recipes/indian/onion-bhaji-inspired-fritters-with-green-chutney.html` |
| Fluffy Skillet Naan | Bread | House Staple | `docs/recipes/indian/breads/fluffy-skillet-naan.html` |
| Aloo Pakora-Inspired Potato Fritters | Side Dish | Tested / Rotation Recipe | `docs/recipes/indian/aloo-pakora-inspired-potato-fritters.html` |
| Bold Carrot Coconut Peanut Chutney | Condiment | Tested / Rotation Recipe | `docs/recipes/indian/bold-carrot-coconut-peanut-chutney.html` |

---

# Korean Inspired

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Bold Bulgogi Bowls | Main Dish | Hall of Fame Candidate | `docs/recipes/korean/bold-bulgogi-bowls.html` |
| Gochujang Crema | Condiment | House Staple | `docs/recipes/condiments/gochujang-crema.html` |

---

# Middle Eastern Inspired

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Don's Food-Truck Memory Falafel Naan Wraps | Featured Meal | Top 10 Candidate · Canon-Lock Candidate | `docs/recipes/middle-eastern/dons-food-truck-memory-falafel-naan-wraps.html` |

---

# Thai Inspired

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Thai-Inspired Spicy Crispy Tofu Coconut Red Curry Soup Bowls | Main Dish | Working Recipe | `docs/recipes/thai/thai-inspired-spicy-crispy-tofu-coconut-red-curry-soup-bowls-v2.html` |
| Thai-Inspired Bang Bang Shrimp Bowls | Featured Meal | Flavorweaver Test Recipe | `docs/recipes/thai/thai-inspired-bang-bang-shrimp-bowls.html` |

---

# Vietnamese Inspired

| Recipe | Category | Status | Public Path |
|---|---|---|---|
| Lemongrass Chicken Bowls | Main Dish | Hall of Fame Candidate | `docs/recipes/vietnamese/lemongrass-chicken-bowls.html` |
| Vietnamese Bò Kho-Style Brisket Stew | Main Dish | Working Recipe | `docs/recipes/vietnamese/vietnamese-bo-kho-style-brisket-stew.html` |
| Bánh Mì Không-Style Dipping Rolls | Bread | Working Recipe | `docs/recipes/vietnamese/banh-mi-khong-style-dipping-rolls.html` |
| Vietnamese Bò Kho-Style Brisket Stew Bowl | Featured Meal | Working Recipe | `docs/recipes/vietnamese/vietnamese-bo-kho-style-brisket-stew-plate.html` |
| Fresh Vegetable Spring Rolls | Appetizer | Working Recipe | `docs/recipes/vietnamese/fresh-vegetable-spring-rolls.html` |
| Restaurant-Style Ginger Nuoc Cham | Condiment | Working Recipe | `docs/recipes/condiments/ginger-nuoc-cham.html` |
| Peanut Dipping Sauce | Condiment | Working Recipe | `docs/recipes/condiments/peanut-sauce.html` |

---

## Notes / Cleanup Flags

- `docs/world-recipe-data.js` still lists Mughlai-Style Chicken Korma as `Flavorweaver Test Recipe`, while the live-test record indicates it was very highly rated and should be part of rotation with a final salt adjustment note.
- `docs/world-recipe-overrides.js` currently supplies newer entries for Aloo Pakora-Inspired Potato Fritters and Bold Carrot Coconut Peanut Chutney.
- Several component recipes live in shared public condiment paths rather than culture-specific public folders, including Gochujang Crema, Asian Pickled Garden Vegetables, Ginger Nuoc Cham, and Peanut Dipping Sauce.
- Future inventory improvements could add source Markdown path, rating, repeat-worthiness, Hall of Fame status, and whether the public HTML has been upgraded to the newest canon layout.