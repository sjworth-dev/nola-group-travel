# nolagrouptravel.com — ROADMAP

## Site Goals

1. Be the ultimate independent online resource for planning large group trips to New Orleans.
2. Stay independent. This is an editorial guide, not a booking funnel — it does not link out to or drive bookings for any specific property. All accommodation guidance lives on the on-site `/where-to-stay/` page.

---

## Voice

Wry, opinionated, verdict-first. Think Powderhounds (the ski-resort review site): dry humor, honest verdicts, zero fluff, speaks directly to "you."

- Lead with a verdict, then earn it with specifics ("Skip the carriage tour. Here's the hour Bourbon Street is actually worth.")
- NEVER flex credentials. No "we live here," "we've planned hundreds of trips," "as locals we know." Authority comes from being specific and right, not from claiming experience.
- NEVER use clinical group-size ranges in prose ("groups of 11-30", "10-25 people"). Say it naturally: "a big group," "the whole crew," "twenty people," "when the trip goes double-digit." Numbers are fine as data (capacities, prices, headcount math).
- Dry humor over enthusiasm. "Groups that only sort of like each other" beats "perfect for everyone!"
- Honest comparisons build credibility: name real hotels/restaurants/alternatives and say when they beat a villa. State the bias plainly when there is one.
- Booking-lead-time advice is always the same line: "for the largest selection, book 6+ months out." Never publish per-weekend or per-event lead-time variations (no "2-3 months for regular weekends, 4-6 for festivals" tables) — big-group properties fill on roughly the same clock all year. When refreshing an old guide that contains variable booking windows, replace them with the standard line.
- Short punchy paragraphs, never long walls of text
- Tables for comparisons
- Numbered and bulleted lists throughout

---

## New Orleans Seasonality (Ground Truth)

Generic US travel-industry assumptions about "shoulder season" do NOT apply to New Orleans. Do not default to a generic destination's calendar (e.g. "fall = shoulder season," "summer = peak"). Check every seasonal, pricing-tier, or demand claim against this calendar before writing it:

- **Peak / high season: October, and February–May.** October is peak, not shoulder — Voodoo Fest, Halloween in the Quarter, and the year's best weather (first real relief from summer heat) drive high demand and full pricing. February–May covers Mardi Gras (dates move; always the current year's Fat Tuesday), French Quarter Fest, spring crawfish season, and Jazz Fest — the core high-demand stretch.
- **Soft / value season: June–August, and January.** Summer means heat, humidity, and afternoon thunderstorms; rates drop and crowds thin, though Essence Festival (Fourth of July weekend) is a sharp demand spike inside an otherwise soft month. January is the post-holiday lull before Mardi Gras ramps up — cold snaps possible, rates are the year's lowest.
- **If you need a genuine shoulder/value window to recommend, it's late August through mid-September** (still hot, but before October's demand ramp) — not October, and not "fall" generally.
- Hurricane season risk (June–November, with August–October the statistical peak of that window) is a real planning consideration but is separate from pricing/demand season — don't conflate "risk window" with "value season."

---

## Content Structure (New Pages)

Every new page must have:

1. **Frontmatter** — `title`, `description`, `category`, `card_title` (guides only), `card_description` (guides only), `date`. `category` MUST be exactly one of the 11 in the Category Taxonomy below — never invent a new one.
2. **Intro** — 2–3 short paragraphs establishing what's unique about this trip type or neighborhood
3. **Quick Checklist** — Bulleted action list; required for guide pages, optional for neighborhood pages
4. **Main sections** — Practical content: itineraries, activities, restaurants, budget, logistics
5. **At least one comparison or reference table**
6. **Pro Tips** — 5–7 numbered tips
7. **Large Group Section** — Explicit section calling out the large-group accommodation challenge. Name properties only as unlinked editorial examples; never add external booking links.
8. **Final CTA** — Short close pointing readers to the on-site guide: `[See where to stay for large groups →](/where-to-stay/)`. Never link to an external property/booking site.

Minimum length: 400 words. Target: 200–300 lines of markdown.

New guides go in `_guides/<slug>.md`. New neighborhood pages go in `_neighborhoods/<slug>.md`.

**Internal links (required):** every new page's body must contain at least 3 inline markdown links to related existing pages (relative URLs like `/guides/<slug>/` or `/neighborhoods/<slug>/`), placed where they genuinely help the reader — not a link dump at the bottom. The layout auto-appends a "More {category}" block and the `/guides/` index lists everything, so never hand-edit card lists in `_layouts/` or `_includes/` to surface a new page.

---

## Category Taxonomy (Fixed)

The only valid `category` values. The `/guides/` index page groups by these exact strings:

`Planning & Logistics` · `Activities & Day Trips` · `Nightlife & Music` · `Festivals & Events` · `Food & Drink` · `Culture & History` · `Villa Life` · `Weddings & Celebrations` · `Bachelorette & Bachelor` · `Corporate Retreats` · `Friends & Family`

---

## Topic Selection Bar (What Deserves a New Page)

The site has 300+ guides. A new page only earns its place if real people search for it. Before adding anything to Up Next, it must pass ALL of:

1. **Named search query** — write the actual Google query it targets next to the item (e.g. "new orleans bachelorette party itinerary", "where to stay in new orleans large group", "jazz fest with a group tips"). If you can't imagine a group organizer typing it, don't add it.
2. **NOLA-specific** — the answer must depend on New Orleans (neighborhoods, venues, seasons, laws, festivals). Generic group-travel advice ("managing group texts", "hot tub etiquette", "leftover food") is banned — it has no search demand tied to this site and dilutes topical authority.
3. **Not already covered** — search `_guides/` for overlapping slugs/titles first. If an existing guide covers 70%+ of it, refresh/expand that guide instead (commit prefix `expand:`).

Prioritize, in order: (a) occasion + NOLA head terms, (b) seasonal/event queries with dates, (c) "X vs Y" comparison queries, (d) specific question queries ("can you drink on the street in new orleans"). Villa-life micro-topics are capped: the category is full; add nothing more to it without an explicit human request.

## Property Reference Rules

This is an independent, unbiased guide. ALL big-group properties get equal editorial footing — no favorites, no featured tier. Recommend by fit, not by name.

**The field (cite any of these as examples where they genuinely fit):**
- **Castleday Retreats** — Bywater villas, 14–30 guests each (~90 across three), private pool per villa. Fit: total privacy/seclusion.
- **The Syd** — Lower Garden District villas, up to 22 each, shared heated pool/hot tub, one block from the streetcar. Fit: central location.
- **Heirloom** — dozens of large-format homes, LGD/Central City. Fit: deepest inventory, short-notice availability, choice.
- **The Mazant** — 1880s Bywater guesthouse, sleeps 18, heated pool + spa. Fit: one historic house for ≤18.
- **Hotel Perle** — CBD/Warehouse group suites (2–7 BR), rooftop pool. Fit: suites with separate bills, walkability.
- **The Revelry** — Central City apartment-style floors (6–9 each) + saltwater pool. Fit: a floor per crew, separate billing.
- **Hotels for room blocks** — The Roosevelt, Hotel Bennett (formerly Ace), Hotel Peter & Paul, The Pontchartrain, Hotel Saint Vincent. Fit: mixed budgets, conferences, own-key/own-bill.

**Rules:**
- Name properties only as plain-text editorial examples. Do NOT hyperlink to any property's booking site.
- Never systematically favor one property. When an example is needed, pick the property that best fits the guide's scenario; across guides, spread mentions across the field.
- Every accommodation CTA points to the on-site guide: `[See where to stay for large groups →](/where-to-stay/)`.
- Keep accommodation depth on the `/where-to-stay/` page; other pages reference it rather than re-pitching a property.

---

## Hard Rules (Never Break)

- Never invent businesses, prices, hours, capacities, restaurant names, or specific events. Write generally when uncertain.
- **Never state a seasonal, pricing-tier, or demand claim (peak/shoulder/off-season, "cheaper in month X," "less crowded in month X") without checking it against the New Orleans Seasonality section above.** Do not fall back on generic destination assumptions — this city's calendar is inverted from most (October is peak, not shoulder). When refreshing an existing guide, actively check it for this specific error class, not just stale dates.
- **Date updates are permitted and encouraged:** Mardi Gras, Jazz Fest, French Quarter Fest, Voodoo Fest, Essence Fest, and other recurring NOLA festivals have known annual dates. During the Refresh step (or any pass), update stale year references and specific date ranges in existing guides to reflect the current or next occurrence. Only state dates that are officially announced or deterministic (e.g., Fat Tuesday's calendar date); for anything not yet announced, write "expected" ranges and note "check the official site."
- Never modify `_config.yml` (Jekyll build settings)
- `_layouts/`, `_includes/`, and `assets/` may be edited to add navigation links, homepage sections, and surfacing of new content — do not change core design, CSS variables, or structural HTML patterns
- Never delete existing pages
- **Never edit the rules sections of this file.** The only parts of ROADMAP.md the bot may modify are `## Up Next` (add/remove backlog items) and moving Done items to `ROADMAP-ARCHIVE.md`. Rule changes are proposed as an Up Next note for a human to review, not applied directly.
- One commit, one focused change per run
- No page under 400 words
- Never add external booking or affiliate links. No `castledayretreats.com`, no `thesyd.com`, no UTM tracking params. The only accommodation CTA is the internal `[See where to stay for large groups →](/where-to-stay/)`.
- Real property photos live in `/assets/images/` (castleday-aerial, castleday-villa, castleday-pool, castleday-loungers, castleday-court, castleday-lawn, syd-courtyard = aerial umbrella pool, syd-pool = mural/cabana pool). Use them in pages with standard markdown image syntax where editorially fitting; never hotlink external images.
- Verified Castleday facts you may cite: 12 bedrooms / 17 real beds / 8 baths per villa, 14-30 guests per villa, ~90 across all three, The Florentine is ADA-accessible, 4.98 avg rating across 99 reviews. Pitch the ~16-person organizer ("everyone gets a real bed"); never lead with "sleeps 30."
- `category` frontmatter must be one of the 11 fixed taxonomy values — the `/guides/` index and related-guides block depend on exact string matches
- Never hand-edit hardcoded page lists in `_layouts/` or `_includes/` to surface new content — the `/guides/` index, `/neighborhoods/` index, and per-guide related block are generated automatically from frontmatter
- If `## Up Next` is empty or all items are blocked, refill it only with items that pass the Topic Selection Bar — an empty backlog is better than a weak one (do the Refresh and Interlink steps regardless)

---

## Per-Run Procedure

The site is past 300 guides — the bottleneck is no longer volume, it's quality, freshness, and internal linking. Each run is a balanced portfolio, not a page-count sprint:

1. `git pull --rebase origin main`
2. Read this ROADMAP.md top to bottom — internalize voice, rules, guardrails
3. Read 2–3 existing `_guides/*.md` files to match voice exactly before writing
4. **New content (max 2 pages/run):** take the top unblocked Up Next items. Each must already carry its target search query. Write the page (with the required 3+ inline internal links), commit, push, move the item to `ROADMAP-ARCHIVE.md` under Done.
5. **Refresh (1 page/run):** pick the guide with the oldest `date` in `_guides/`. Verify its facts still hold, update seasonal/date references (including specific festival year/date ranges — Mardi Gras, Jazz Fest, etc.), add 3+ inline internal links if it has none, tighten weak sections, bump `date`. Commit as `expand:` or `fix:`.
6. **Interlink (1 pass/run):** pick one high-value older guide (occasion or event guides first) and weave inline links to newer related guides into its body where they help the reader. Commit as `seo:`.
7. **Backlog:** if Up Next has fewer than 4 items, add new ones — every item must pass the Topic Selection Bar and name its target query. Quality over quantity; adding zero is acceptable if nothing passes.
8. Commit prefixes: `content:` (new page), `expand:` (existing page), `seo:` (metadata/links), `fix:` (typo/broken link)
9. Log every action as a changelog entry in `ROADMAP-ARCHIVE.md` (`YYYY-MM-DD HH:MM UTC — <prefix>: <what changed>`). Done items and changelog live ONLY in the archive file — never re-grow them in this file.

---

## Up Next

- `_guides/nola-group-safety-guide.md` — targets "is new orleans safe for a bachelorette party" / "new orleans group trip safety tips" — practical, non-alarmist safety guidance for a big group: French Quarter street safety at night, buddy-system norms for a large crew, common scams/pickpocketing awareness, safest ways to move a group late at night; not covered by any existing `_guides/` file (checked — no dedicated safety guide exists)
- `_guides/nola-group-parking-guide.md` — targets "where to park in the french quarter new orleans" / "parking for a large group new orleans" — French Quarter parking scarcity and pricing, CBD/Quarter-border garages vs. street parking, towing enforcement specifics, event-day street closures during Mardi Gras/Jazz Fest that eliminate parking near the route, and where an oversized vehicle or van can actually park; currently only two passing lines in transportation-guide.md, no dedicated treatment — checked for overlap, clears the bar
- `_guides/nola-group-scooter-rules-guide.md` — targets "electric scooter rules new orleans" / "can you rent scooters in new orleans french quarter" — the actual city ordinance on e-scooter/e-bike share riding (where it's allowed vs. banned, sidewalk rules, French Quarter restrictions), whether it's practical for a group of 10+ to move around this way vs. walking/rideshare; only passing mentions in group-itinerary-builder-guide.md and accessible-group-guide.md, no dedicated page
- `_guides/nola-group-charter-bus-guide.md` — targets "party bus rental new orleans large group" / "charter bus new orleans group transportation" — when a private charter/party bus beats splitting a group across rideshares (game days, parade viewing, venue-to-venue at night), realistic cost-per-person framing without inventing vendor names or prices, French Quarter loading/unloading logistics; mentioned in passing across 9+ guides (bar-crawl-guide.md, transportation-guide.md, group-booking-guide.md, and others) but never given a dedicated deep treatment

<!-- BLOCKED: nola-group-guys-weekend-guide.md — 70%+ covered by existing guys-weekend-guide.md (golf, fishing, sports bars, nightlife, itinerary, accommodation) -->
<!-- BLOCKED: nola-group-essence-fest-guide.md — 70%+ covered by essence-festival.md and nola-group-essence-festival-base-camp-guide.md -->
<!-- BLOCKED: nola-group-food-focused-itinerary-guide.md — 70%+ covered by nola-group-foodie-itinerary-guide.md (3-day itinerary, restaurant strategy, villa cooking night, private chef, pacing) -->
<!-- BLOCKED: nola-group-thanksgiving-long-weekend-guide.md — 70%+ covered by existing nola-group-villa-thanksgiving-guide.md (Bayou Classic, weather case, off-peak rates, turducken/menu, grocery sourcing, kitchen roles, day-by-day itinerary, hotel-vs-villa table) -->
<!-- BLOCKED: nola-group-crawfish-boil-at-villa-guide.md — 70%+ covered by existing nola-crawfish-boil-guide.md (sourcing, pounds-per-person table, equipment, full boil-and-soak method, table setup, timeline, villa-vs-restaurant case) -->
<!-- BLOCKED: nola-group-mardi-gras-parade-viewing-strategy-guide.md — mardi-gras-group-guide.md already covers the St. Charles viewing-spots table, ladder tradition, and transportation logistics; the proposed differentiator (Magazine Street as an alternative parade viewing ground) isn't well-grounded — Magazine Street isn't part of the established Uptown parade route, and inventing viewing-strategy specifics for a street that doesn't actually host the parades would violate the no-invented-specifics rule. A prioritize-vs-skip parade framework alone likely doesn't clear the 30% new-material bar on its own; revisit only with a verified, non-invented angle -->

---

