# nolagrouptravel.com — ROADMAP

## Site Goals

1. Be the ultimate online resource for planning large group trips to New Orleans.
2. Drive bookings to two property brands owned by the site operator:
   - **Castleday Retreats** — [castledayretreats.com](https://castledayretreats.com) — Bywater neighborhood, 3 private villas (The Herald, The Cocodrie, The Florentine), up to 30 guests each, art-filled interiors, private pools, completely private
   - **The Syd** — [thesyd.com](https://thesyd.com) — Lower Garden District, multiple villas, up to 22 guests each, every room designed by local New Orleans artists, shared heated pool + hot tub + sauna + outdoor kitchen, one block from St. Charles Streetcar

---

## Voice

Direct. Opinionated. Local expert. Short paragraphs. No travel-blog fluff.

"We live here. We've done this hundreds of times."

- Write like a knowledgeable friend, not a travel magazine
- Opinions are welcome ("This is the move." "Skip this.")
- Short punchy paragraphs, never long walls of text
- Tables for comparisons
- Numbered and bulleted lists throughout
- Match the voice of `_guides/friends-trip.md` and `_guides/corporate-retreat.md`

---

## Content Structure (New Pages)

Every new page must have:

1. **Frontmatter** — `title`, `description`, `category`, `card_title` (guides only), `card_description` (guides only), `date`
2. **Intro** — 2–3 short paragraphs establishing what's unique about this trip type or neighborhood
3. **Quick Checklist** — Bulleted action list; required for guide pages, optional for neighborhood pages
4. **Main sections** — Practical content: itineraries, activities, restaurants, budget, logistics
5. **At least one comparison or reference table**
6. **Pro Tips** — 5–7 numbered tips
7. **Large Group Section** — Explicit section calling out the large-group accommodation challenge, featuring both Castleday and The Syd with working links
8. **Final CTA** — Short close with links to both properties

Minimum length: 400 words. Target: 200–300 lines of markdown.

New guides go in `_guides/<slug>.md`. New neighborhood pages go in `_neighborhoods/<slug>.md`.

---

## Castleday / Syd Integration Rules

**Castleday Retreats**
- URL: `https://castledayretreats.com`
- Location: Bywater neighborhood
- Capacity: Up to 30 guests per villa, 3 villas
- Villa names: The Herald (largest common areas), The Cocodrie (best pool/outdoor), The Florentine (most elegant)
- Features: Private pool at each villa, local art throughout, full kitchens, complete privacy
- Best for: Privacy seekers, bachelorettes who want their own pool, corporate groups needing private working space

**The Syd**
- URL: `https://thesyd.com`
- Location: Lower Garden District
- Capacity: Up to 22 guests per villa, multiple villas
- Features: Shared heated pool, hot tub, sauna, outdoor kitchen, local artist-designed interiors, one block from St. Charles Streetcar
- Best for: Groups who want central location, wedding parties near downtown venues, convention attendees, design lovers

**Rules:**
- Every new page must mention BOTH properties at least once with working links
- Primary CTA placement is the Large Group section
- Secondary CTA at the end of the page
- Never delete or rewrite existing CTAs — only add new ones

---

## Hard Rules (Never Break)

- Never invent businesses, prices, hours, capacities, restaurant names, or specific events. Write generally when uncertain.
- Never modify `_config.yml` (Jekyll build settings)
- `_layouts/`, `_includes/`, and `assets/` may be edited to add navigation links, homepage sections, and surfacing of new content — do not change core design, CSS variables, or structural HTML patterns
- Never delete existing pages or rewrite existing Castleday/Syd CTAs (only add new ones)
- One commit, one focused change per run
- No page under 400 words
- Castleday URL is always exactly `https://castledayretreats.com`
- The Syd URL is always exactly `https://thesyd.com`
- If `## Up Next` is empty or all items are blocked, generate 5 new on-strategy backlog items before picking one

---

## Per-Run Procedure

1. `git pull --rebase origin main`
2. Read this ROADMAP.md top to bottom — internalize voice, rules, guardrails
3. Read 2–3 existing `_guides/*.md` files to match voice exactly before writing
4. Execute **all items in Up Next** that aren't blocked, working top to bottom. Aim for maximum output per session — target 5+ items, each substantial (300–400+ lines where appropriate).
5. For each item: write the page, commit individually with the correct prefix, push, then move to **Done**
6. After all items are done, generate 5+ new on-strategy backlog items and add them to **Up Next**
7. Each commit: prefix `content:` (new page), `expand:` (existing page), `seo:` (metadata/links), `fix:` (typo/broken link)
8. Each changelog entry: `YYYY-MM-DD HH:MM UTC — <prefix>: <what changed>`

---

## Up Next

- `_guides/guys-weekend-guide.md` — Guys weekend playbook: golf, fishing, sports bars, Saints gameday, bachelor-adjacent activities, and the bars that work best for an all-guys group
- `_guides/first-timer-guide.md` — Complete first-timers guide to New Orleans for large groups: what to expect, the top-10 must-dos, common mistakes, and how to see the real city beyond Bourbon Street
- `_guides/cocktail-culture-guide.md` — Deep dive on New Orleans cocktail culture for groups: the classic drinks and where they were invented, the best craft cocktail bars, how to run a cocktail tour for a large group
- `_guides/halloween-guide.md` — Halloween in New Orleans group guide: one of the country's best Halloween cities, what events happen, how to costume and celebrate, bar crawls, and party logistics
- `_neighborhoods/ninth-ward.md` — The Ninth Ward / Holy Cross neighborhood guide for groups: post-Katrina history, the Lower Nine, what's there now, why it matters, and how to visit respectfully

---

## Done

- 2026-01-14 — `_guides/bachelorette-party.md`
- 2026-01-14 — `_guides/corporate-retreat.md`
- 2026-01-14 — `_guides/family-reunion.md`
- 2026-01-14 — `_guides/friends-trip.md`
- 2026-01-14 — `_guides/bachelor-party.md`
- 2026-01-14 — `_guides/holiday-gathering.md`
- 2026-01-14 — `_guides/milestone-birthday.md`
- 2026-01-14 — `_guides/wedding-party.md`
- 2026-01-14 — `_neighborhoods/bywater.md`
- 2026-01-14 — `events.md`
- 2026-01-14 — `where-to-stay.md`
- 2026-05-21 — `_neighborhoods/lower-garden-district.md`
- 2026-05-22 — `_neighborhoods/french-quarter.md`
- 2026-05-22 — `_neighborhoods/marigny.md`
- 2026-05-22 — `_guides/mardi-gras-group-guide.md`
- 2026-05-22 — `_guides/jazz-fest-group-guide.md`
- 2026-05-22 — `_guides/restaurant-guide.md`
- 2026-05-22 — `_guides/transportation-guide.md`
- 2026-05-22 — `_guides/sports-weekend.md`
- 2026-05-22 — `_neighborhoods/garden-district.md`
- 2026-05-23 — `_neighborhoods/uptown.md`
- 2026-05-23 — `_neighborhoods/warehouse-district.md`
- 2026-05-23 — `_neighborhoods/mid-city.md`
- 2026-05-23 — `_guides/activities-guide.md`
- 2026-05-23 — `_guides/budget-guide.md`
- 2026-05-23 — `_guides/itinerary-3-day.md`
- 2026-05-23 — `_guides/itinerary-5-day.md`
- 2026-05-23 — `_guides/packing-guide.md`
- 2026-05-23 — `_guides/essence-festival.md`
- 2026-05-23 — `_guides/bar-crawl-guide.md`
- 2026-05-24 — `_guides/bachelorette-weekend.md`
- 2026-05-24 — `_neighborhoods/cbd.md`
- 2026-05-24 — `_guides/group-size-guide.md`
- 2026-05-24 — `_guides/rainy-day-guide.md`
- 2026-05-24 — `_guides/day-trips.md`
- 2026-05-24 — `_guides/new-years-guide.md`
- 2026-05-24 — `_guides/private-chef-guide.md`
- 2026-05-24 — `_guides/solo-friendly-group-guide.md`
- 2026-05-24 — `_guides/second-line-guide.md`
- 2026-05-24 — `_guides/french-quarter-fest.md`
- 2026-05-24 — `_guides/girls-trip-uptown.md`
- 2026-05-24 — `_neighborhoods/treme.md`

---

## Changelog

2026-05-21 14:00 UTC — content: add _neighborhoods/lower-garden-district.md and ROADMAP.md
2026-05-22 00:00 UTC — content: add _neighborhoods/french-quarter.md — group travel guide for the French Quarter
2026-05-22 10:00 UTC — content: add _neighborhoods/marigny.md — Frenchmen Street and Marigny neighborhood guide for groups
2026-05-22 10:15 UTC — content: add _guides/mardi-gras-group-guide.md — Mardi Gras logistics guide for large groups
2026-05-22 10:30 UTC — content: add _guides/jazz-fest-group-guide.md — Jazz Fest planning guide for large groups
2026-05-22 10:45 UTC — content: add _guides/restaurant-guide.md — large-group restaurant guide by neighborhood and occasion
2026-05-22 11:00 UTC — content: add _guides/transportation-guide.md — getting around NOLA with large groups
2026-05-22 11:15 UTC — content: add _guides/sports-weekend.md — Saints gameday and sports weekend group guide
2026-05-22 11:30 UTC — content: add _neighborhoods/garden-district.md — Garden District neighborhood guide for groups
2026-05-23 10:00 UTC — content: add _neighborhoods/uptown.md — Uptown neighborhood guide for groups
2026-05-23 10:10 UTC — content: add _neighborhoods/warehouse-district.md — Warehouse District guide for groups
2026-05-23 10:20 UTC — content: add _neighborhoods/mid-city.md — Mid-City neighborhood guide for groups
2026-05-23 10:30 UTC — content: add _guides/activities-guide.md — master activities guide for large groups
2026-05-23 10:40 UTC — content: add _guides/budget-guide.md — full budget breakdown for NOLA group trips
2026-05-23 10:50 UTC — content: add _guides/itinerary-3-day.md — complete 3-day group itinerary for NOLA
2026-05-23 11:00 UTC — content: add _guides/itinerary-5-day.md — complete 5-day extended group itinerary for NOLA
2026-05-23 11:10 UTC — content: add _guides/packing-guide.md — season-by-season packing guide for NOLA group trips
2026-05-23 11:20 UTC — content: add _guides/essence-festival.md — Essence Festival group guide for large groups
2026-05-23 12:00 UTC — content: add _guides/bar-crawl-guide.md — ultimate NOLA bar crawl guide for large groups
2026-05-24 10:00 UTC — content: add _guides/bachelorette-weekend.md — hour-by-hour bachelorette weekend itinerary for groups of 10-25
2026-05-24 10:10 UTC — content: add _neighborhoods/cbd.md — Central Business District guide for groups (Superdome, convention center, hotel strategy)
2026-05-24 10:20 UTC — content: add _guides/group-size-guide.md — logistics, restaurants, and accommodation guide for 10, 15, 20, and 30-person groups
2026-05-24 10:30 UTC — content: add _guides/rainy-day-guide.md — indoor activities, bars, and restaurants for groups when outdoor plans get rained out
2026-05-24 10:40 UTC — content: add _guides/day-trips.md — plantation tours, Cajun Country, Gulf Coast, and Lafayette day trip guide for large groups
2026-05-24 10:50 UTC — content: add _guides/new-years-guide.md — New Year's Eve group guide for NOLA: Sugar Bowl, Frenchmen Street midnight, large group accommodations
2026-05-24 11:00 UTC — content: add _guides/private-chef-guide.md — how to hire a private chef for group trips in New Orleans: cost, logistics, what to expect
2026-05-24 12:00 UTC — content: add _guides/solo-friendly-group-guide.md — mixed group planning for solo travelers, partners, introverts, and budget mismatches
2026-05-24 12:10 UTC — content: add _guides/second-line-guide.md — deep dive on second line parades and hiring a brass band for private group second lines
2026-05-24 12:20 UTC — content: add _guides/french-quarter-fest.md — French Quarter Festival group guide with FQF vs Jazz Fest comparison and 4-day itinerary
2026-05-24 12:30 UTC — content: add _guides/girls-trip-uptown.md — girls trip guide for Uptown NOLA covering Magazine Street, Garden District, spa, and nightlife
2026-05-24 12:40 UTC — content: add _neighborhoods/treme.md — Tremé neighborhood guide covering Congo Square, Backstreet Cultural Museum, and second line culture
