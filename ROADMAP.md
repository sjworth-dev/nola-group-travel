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

- `_guides/group-vendor-directory.md` — Curated directory of NOLA vendors and services that work with large groups: charter transport, private chefs, photographers, brass bands, florists, and event rental companies
- `_guides/multi-group-trip-guide.md` — Planning when you have multiple sub-groups on the same trip: different budgets, different schedules, different preferences, and how to structure a trip that works for all of them
- `_neighborhoods/bywater-deep-dive.md` — Extended Bywater guide: Bacchanal Wine, the levee walk, art scene by block, specific streets, and a walking tour structure for groups visiting for the first time
- `_guides/group-gifting-guide.md` — How to organize group gifts for a bachelorette, birthday, or milestone trip: local NOLA vendors, custom items, and experiences that can be gifted within the group
- `_guides/nola-weather-guide.md` — Month-by-month weather reality for NOLA group trips: heat, humidity, hurricane season, Mardi Gras cold snaps, and how weather shapes every planning decision

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
- 2026-05-25 — `_guides/guys-weekend-guide.md`
- 2026-05-25 — `_guides/first-timer-guide.md`
- 2026-05-25 — `_guides/cocktail-culture-guide.md`
- 2026-05-25 — `_guides/halloween-guide.md`
- 2026-05-25 — `_neighborhoods/ninth-ward.md`
- 2026-05-25 — `_guides/live-music-guide.md`
- 2026-05-25 — `_guides/outdoor-activities-guide.md`
- 2026-05-25 — `_guides/lgbtq-group-guide.md`
- 2026-05-25 — `_guides/convention-group-guide.md`
- 2026-05-25 — `_neighborhoods/algiers.md`
- 2026-05-26 — `_guides/nightlife-guide.md`
- 2026-05-26 — `_guides/wedding-weekend-guide.md`
- 2026-05-26 — `_guides/spa-wellness-guide.md`
- 2026-05-26 — `_neighborhoods/lakeview.md`
- 2026-05-26 — `_guides/haunted-history-guide.md`
- 2026-05-26 — `_guides/culinary-tour-guide.md`
- 2026-05-26 — `_guides/budget-villa-guide.md`
- 2026-05-26 — `_guides/group-booking-guide.md`
- 2026-05-26 — `_guides/music-history-guide.md`
- 2026-05-26 — `_neighborhoods/mid-city-deep-dive.md`
- 2026-05-26 — `_guides/kids-families-guide.md`
- 2026-05-26 — `_guides/group-photography-guide.md`
- 2026-05-27 — `_guides/accessible-group-guide.md`
- 2026-05-27 — `_guides/volunteer-trip-guide.md`
- 2026-05-27 — `_guides/pre-wedding-activities-guide.md`
- 2026-05-27 — `_guides/hotel-vs-villa-guide.md`
- 2026-05-27 — `_neighborhoods/riverbend-carrollton.md`
- 2026-05-27 — `_guides/group-games-activities-guide.md`
- 2026-05-27 — `_guides/new-orleans-music-venues-guide.md`
- 2026-05-27 — `_guides/corporate-team-building-guide.md`
- 2026-05-27 — `_neighborhoods/gentilly.md`
- 2026-05-27 — `_guides/budget-itinerary-guide.md`
- 2026-05-27 — `_guides/shoulder-season-guide.md`
- 2026-05-28 — `_guides/itinerary-weekend-warrior.md`
- 2026-05-28 — `_guides/group-size-mega-guide.md`
- 2026-05-28 — `_guides/lgbtq-southern-decadence-guide.md`
- 2026-05-28 — `_guides/anniversary-milestone-guide.md`
- 2026-05-28 — `_neighborhoods/bayou-st-john.md`
- 2026-05-29 — `_guides/festival-season-calendar.md`
- 2026-05-29 — `_guides/bachelorette-itinerary-bywater.md`
- 2026-05-29 — `_guides/group-communication-guide.md`
- 2026-05-29 — `_neighborhoods/irish-channel.md`
- 2026-05-29 — `_guides/saints-gameday-mega-guide.md`
- 2026-05-29 — `_guides/new-orleans-weddings-guide.md`
- 2026-05-29 — `_guides/sober-group-guide.md`
- 2026-05-29 — `_guides/extended-family-reunion-guide.md`
- 2026-05-29 — `_guides/group-grocery-cooking-guide.md`
- 2026-05-29 — `_guides/itinerary-10-day.md`
- 2026-05-30 — `_guides/group-welcome-packet-guide.md`
- 2026-05-30 — `_guides/bachelorette-vs-bach-party-guide.md`
- 2026-05-30 — `_guides/corporate-offsite-productivity-guide.md`
- 2026-05-30 — `_neighborhoods/central-city.md`
- 2026-05-30 — `_guides/group-arrival-departure-guide.md`

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
2026-05-25 10:00 UTC — content: add _guides/guys-weekend-guide.md — guys weekend playbook with golf, fishing, sports bars, Saints gameday, and large-group bar logistics
2026-05-25 10:10 UTC — content: add _guides/first-timer-guide.md — complete first-timers guide for large groups covering must-dos, neighborhoods, common mistakes, and real city beyond Bourbon Street
2026-05-25 10:20 UTC — content: add _guides/cocktail-culture-guide.md — NOLA cocktail history, the classic drinks and their origins, craft bar tour routes, and group logistics
2026-05-25 10:30 UTC — content: add _guides/halloween-guide.md — Halloween group guide covering Voodoo Fest, Krewe of Boo, bar crawl routes, costume logistics, and October trip planning
2026-05-25 10:40 UTC — content: add _neighborhoods/ninth-ward.md — Lower Ninth Ward and Holy Cross guide with post-Katrina history, respectful visit logistics, and community context
2026-05-25 11:00 UTC — content: add _guides/live-music-guide.md — live music deep dive for large groups covering Frenchmen Street, Preservation Hall, Tipitina's, brass bands, and how to structure a full music trip
2026-05-25 11:10 UTC — content: add _guides/outdoor-activities-guide.md — outdoor and active activities for large groups: kayaking, swamp tours, golf, fishing, City Park, cycling, and active day structure
2026-05-25 11:20 UTC — content: add _guides/lgbtq-group-guide.md — NOLA for LGBTQ+ large groups covering Southern Decadence, Pride, the Bourbon Street gay scene, and welcoming neighborhoods
2026-05-25 11:30 UTC — content: add _guides/convention-group-guide.md — attending conventions in NOLA with large groups: hotel vs. villa strategy, Convention Center logistics, evening planning
2026-05-25 11:40 UTC — content: add _neighborhoods/algiers.md — Algiers Point neighborhood guide for groups with free ferry logistics, levee views, and architecture walk
2026-05-26 10:00 UTC — content: add _guides/nightlife-guide.md — complete nightlife guide covering every bar district, walk-around cup rules, no-last-call logistics, and Frenchmen vs Bourbon breakdown
2026-05-26 10:15 UTC — content: add _guides/wedding-weekend-guide.md — full 4-day wedding weekend planning guide for large groups with rehearsal dinner, welcome party, day-of transport, and brunch
2026-05-26 10:30 UTC — content: add _guides/spa-wellness-guide.md — spa, wellness, and recovery day guide for large groups covering float tanks, yoga, pool days, and recovery nutrition
2026-05-26 10:45 UTC — content: add _neighborhoods/lakeview.md — Lakeview neighborhood guide covering City Park, NOMA, Sculpture Garden, and lakefront for large groups
2026-05-26 11:00 UTC — content: add _guides/haunted-history-guide.md — ghost tours, cemeteries, voodoo history, and historic bars with honest historical context for large groups
2026-05-26 11:15 UTC — content: add _guides/culinary-tour-guide.md — DIY neighborhood-by-neighborhood culinary tour covering po-boys, gumbo, beignets, oysters, and Louisiana food canon
2026-05-26 11:30 UTC — content: add _guides/budget-villa-guide.md — villa vs. hotel financial comparison, cost-splitting logistics, what's included, and how to present the math to the group
2026-05-26 12:00 UTC — content: add _guides/group-booking-guide.md — complete group booking playbook: reservations, deposits, cancellations, and logistics for 10-30 people
2026-05-26 12:10 UTC — content: add _guides/music-history-guide.md — NOLA music history deep dive: Congo Square, jazz origins, brass band tradition, funk lineage, and how to experience the living history with a group
2026-05-26 12:20 UTC — content: add _neighborhoods/mid-city-deep-dive.md — extended Mid-City guide covering Bayou St. John, Lafitte Greenway, City Park, and off-tourist-radar restaurants and bars
2026-05-26 12:30 UTC — content: add _guides/kids-families-guide.md — family reunion and multigenerational group trip guide: child-friendly activities, mixed-age restaurants, split schedule model, safety logistics
2026-05-26 12:40 UTC — content: add _guides/group-photography-guide.md — best photo spots for large groups, golden hour windows, 7 iconic NOLA locations, coordination logistics
2026-05-27 12:00 UTC — content: add _guides/accessible-group-guide.md — accessibility and mixed-ability planning guide for large NOLA groups
2026-05-27 12:15 UTC — content: add _guides/volunteer-trip-guide.md — service trip planning guide for large groups in New Orleans
2026-05-27 12:30 UTC — content: add _guides/pre-wedding-activities-guide.md — full pre-wedding weekend planning guide for wedding parties of 15-30
2026-05-27 12:45 UTC — content: add _guides/hotel-vs-villa-guide.md — definitive hotel vs. villa comparison for large groups with full cost breakdown
2026-05-27 13:00 UTC — content: add _neighborhoods/riverbend-carrollton.md — Riverbend and Carrollton neighborhood guide for large groups
2026-05-27 14:00 UTC — content: add _guides/group-games-activities-guide.md — group games, trivia, escape rooms, scavenger hunts, casino nights for 10–30 people
2026-05-27 14:10 UTC — content: add _guides/new-orleans-music-venues-guide.md — Tipitina's, Preservation Hall, Maple Leaf, Rock 'n' Bowl, Snug Harbor, Howlin' Wolf deep dive
2026-05-27 14:20 UTC — content: add _guides/corporate-team-building-guide.md — corporate retreat planning with cooking classes, second lines, and service half-days
2026-05-27 14:30 UTC — content: add _neighborhoods/gentilly.md — Gentilly neighborhood guide with Dillard University, Bayou Gentilly, and post-Katrina context
2026-05-27 14:40 UTC — content: add _guides/budget-itinerary-guide.md — complete day-by-day budget group itinerary for under $150/person/day
2026-05-27 14:50 UTC — content: add _guides/shoulder-season-guide.md — shoulder season guide for October, late January, February, and August with rate analysis
2026-05-28 12:00 UTC — content: add _guides/itinerary-weekend-warrior.md — 48-hour Friday-to-Sunday group itinerary optimized for tight schedules
2026-05-28 13:00 UTC — content: add _guides/group-size-mega-guide.md — very large group logistics guide for 25-50 people with multi-villa strategy and charter transport
2026-05-28 13:15 UTC — content: add _guides/lgbtq-southern-decadence-guide.md — Southern Decadence and year-round LGBTQ+ group guide
2026-05-28 13:30 UTC — content: add _guides/anniversary-milestone-guide.md — milestone celebration planning guide with second lines, private dinners, and personalized experiences
2026-05-28 13:45 UTC — content: add _neighborhoods/bayou-st-john.md — Bayou St. John urban waterway and City Park guide for large groups
2026-05-29 10:00 UTC — content: add _guides/festival-season-calendar.md — full NOLA festival calendar with group planning windows and lead times
2026-05-29 10:15 UTC — content: add _guides/bachelorette-itinerary-bywater.md — Bywater bachelorette itinerary with Bacchanal, bar scene, and Bywater vs. Bourbon comparison
2026-05-29 10:30 UTC — content: add _guides/group-communication-guide.md — WhatsApp setup, pre-trip packets, Splitwise, and day-of coordination for 15-30 person groups
2026-05-29 10:45 UTC — content: add _neighborhoods/irish-channel.md — Magazine Street southern stretch, St. Patrick's Day parade, and half-day itinerary for groups
2026-05-29 11:00 UTC — content: add _guides/saints-gameday-mega-guide.md — full Saints gameday logistics for groups of 15-30 at Caesars Superdome
2026-05-29 12:00 UTC — content: add _guides/new-orleans-weddings-guide.md — NOLA wedding guide for groups of 15-30 with second lines, venues, rehearsal dinners, and accommodation comparison
2026-05-29 12:15 UTC — content: add _guides/sober-group-guide.md — planning a large NOLA group trip without bar-hopping as the primary activity
2026-05-29 12:30 UTC — content: add _guides/extended-family-reunion-guide.md — multigenerational family reunion guide for ages 5-75 with split-schedule model and mobility planning
2026-05-29 12:45 UTC — content: add _guides/group-grocery-cooking-guide.md — cooking for 15-30 people in a villa kitchen with NOLA ingredient sourcing and private chef decision framework
2026-05-29 13:00 UTC — content: add _guides/itinerary-10-day.md — complete 10-day extended group itinerary with all neighborhoods, day trip, festival timing, and pacing strategy
2026-05-30 10:00 UTC — content: add _guides/group-welcome-packet-guide.md — pre-trip welcome packet guide for large groups with neighborhood info, house rules, grocery list, restaurant recs, emergency contacts, and NOLA packing tips
2026-05-30 10:15 UTC — content: add _guides/bachelorette-vs-bach-party-guide.md — side-by-side bachelorette vs. bachelor party guide with shared logistics and combined-group coordination
2026-05-30 10:30 UTC — content: add _guides/corporate-offsite-productivity-guide.md — villa offsite productivity guide with WiFi requirements, meeting setup, agenda design, and the 60/40 work-experience ratio
2026-05-30 10:45 UTC — content: add _neighborhoods/central-city.md — Oretha Castle Haley corridor, community history, gallery scene, and respectful group visit guide
2026-05-30 11:00 UTC — content: add _guides/group-arrival-departure-guide.md — airport logistics, early arrivals, late checkouts, and first/last 4-hour structure for groups of 15-30
