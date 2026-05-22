# nolagrouptravel.com — ROADMAP

## Site Goals

1. Be the ultimate online resource for planning large group trips (10–30 people) to New Orleans.
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
7. **11–30 Group Section** — Explicit section calling out the large-group accommodation challenge, featuring both Castleday and The Syd with working links
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
- Primary CTA placement is the 11–30 group section
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

- `_neighborhoods/uptown.md` — Uptown neighborhood guide (Audubon Park, Tulane, Magazine Street upper half, local vibe)
- `_neighborhoods/warehouse-district.md` — Warehouse District / Arts District guide (galleries, Cochon/Pêche cluster, Convention Center)
- `_neighborhoods/mid-city.md` — Mid-City guide (City Park, Fair Grounds, Bayou St. John, local restaurants)
- `_guides/activities-guide.md` — Master activities guide: swamp tours, plantation tours, cooking classes, ghost tours, biking, golf — with group logistics for each
- `_guides/budget-guide.md` — Full budget breakdown guide: what a NOLA group trip costs at budget / mid-range / luxury, line by line
- `_guides/itinerary-3-day.md` — Fully built 3-day group itinerary with morning/afternoon/evening slots, for groups of 10-30
- `_guides/itinerary-5-day.md` — 5-day extended group itinerary with neighborhood rotation and dining anchors
- `_guides/packing-guide.md` — What to pack for New Orleans: season-by-season, group-specific items, what to leave home
- `_guides/essence-festival.md` — Essence Festival group guide (largest event in the city, July weekend, 500k+ attendees)

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

---

## Changelog

2026-05-21 14:00 UTC — content: add _neighborhoods/lower-garden-district.md and ROADMAP.md
2026-05-22 00:00 UTC — content: add _neighborhoods/french-quarter.md — group travel guide for the French Quarter
2026-05-22 10:00 UTC — content: add _neighborhoods/marigny.md — Frenchmen Street and Marigny neighborhood guide for groups
2026-05-22 10:15 UTC — content: add _guides/mardi-gras-group-guide.md — Mardi Gras logistics guide for groups of 10-30
2026-05-22 10:30 UTC — content: add _guides/jazz-fest-group-guide.md — Jazz Fest planning guide for large groups
2026-05-22 10:45 UTC — content: add _guides/restaurant-guide.md — large-group restaurant guide by neighborhood and occasion
2026-05-22 11:00 UTC — content: add _guides/transportation-guide.md — getting around NOLA with 10-30 people
2026-05-22 11:15 UTC — content: add _guides/sports-weekend.md — Saints gameday and sports weekend group guide
2026-05-22 11:30 UTC — content: add _neighborhoods/garden-district.md — Garden District neighborhood guide for groups
