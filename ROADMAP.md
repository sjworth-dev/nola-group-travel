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

> **New guide pages are HUMAN-GATED as of Aug 20 2026** — see the "New Pages: Human-Gated, Demand-Driven" section below. The bot writes a new page ONLY when a human has placed it in `## Up Next`; an empty Up Next still means no new pages. This section is the structural reference for those pages and for refreshes.

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

## New Pages: Human-Gated, Demand-Driven (updated Aug 20 2026 by Sam's direction)

The Aug 5 blanket freeze has evolved, not lifted. **The bot still never chooses its own new-page topics.** New pages are written ONLY when a human adds an item to `## Up Next` (each item names its target query and the demand evidence). An empty Up Next is the normal steady state and means: no new pages this run.

**Why the change.** Search Console connected Aug 5 2026 and now has real data (28d to Aug 19: 98 clicks, 9,460 impressions, avg position 14.3, 339 pages with impressions). The data says the site's problem is not missing pages — it's existing pages sitting at positions 8–20 and titles that don't earn the click. So the work is refresh-for-rank and titles, not volume. The vs-city template retirement stands for *bot-generated* pages; note however that the existing vs-city pages are among the site's best rankers (#5–8 for "new orleans vs savannah/chicago/memphis" etc.), so refreshing them is high-value work.

### Search Refresh Queue (replaces oldest-first refresh while items remain)

In the Refresh step, take the TOP unchecked item here instead of the oldest-dated guide. Check it off (`[x]` + date) when done. A human refills this queue from Search Console data; the bot never adds to it.

- [ ] `_guides/nola-group-marijuana-laws-guide.md` — queries "is weed legal in new orleans" (#10, 89 impr/28d), "can you smoke weed in new orleans" (#11). Open with a 2–3 sentence direct answer (the featured-snippet shape: verdict first, nuance after). Verify every legal claim is current for 2026; keep question-format H2s.
- [ ] `_guides/nola-group-open-container-law-guide.md` — "new orleans open container" cluster (#8.8, 251 impr). Same direct-answer-first treatment; verify current rules.
- [ ] `_neighborhoods/lakeview.md` — #9.5 with 192 impr, nearly page 1. Refresh facts, add 3+ inline links to/from related guides (City Park, family-reunion, quiet-base themes).
- [ ] `_guides/transportation-guide.md` — "getting around new orleans" (#37.6, 40 impr). Restructure the intro and H2s around that exact phrase; verify streetcar fares and airport-transfer costs.
- [ ] `_guides/nola-group-neighborhood-comparison-guide.md` — #16.8, 79 impr. Refresh, and weave links to it from the individual neighborhood pages during their refreshes.
- [ ] `_guides/budget-guide.md` — #8.1, 69 impr. Verify every number; freshness matters on cost content.
- [ ] `_guides/nola-group-new-orleans-vs-savannah-guide.md` — best vs page (#7.4, 350 impr). Refresh dates/facts, tighten the verdict, cross-link the other top vs pages.
- [ ] `_guides/bachelorette-party.md` — highest-value occasion query, currently #62. Deep rebuild toward best-on-internet: a real hour-by-hour itinerary, current costs, booking scripts. Expect slow rank gains; do the work anyway.
- [ ] `_guides/bachelor-party.md` — same treatment, currently #27.

Done Aug 20 2026 (by Sam's direction, outside the bot): sitewide title/description rewrite on the 30 pages with impressions; `/events/` retitled with Event JSON-LD; restaurant-guide private-dining section; corporate-retreat venue-heading rewrite; `/about/` editorial-policy page; `/privacy/` page.

## Topic Selection Bar (for humans refilling Up Next)

Every Up Next item a human adds must pass this bar. The bot does not use this section to invent topics — it exists so queue items are chosen well.

The site has 300+ guides. A new page only earns its place if real people search for it. Before adding anything to Up Next, it must pass ALL of:

1. **Named search query** — write the actual Google query it targets next to the item (e.g. "new orleans bachelorette party itinerary", "where to stay in new orleans large group", "jazz fest with a group tips"). If you can't imagine a group organizer typing it, don't add it.
2. **NOLA-specific** — the answer must depend on New Orleans (neighborhoods, venues, seasons, laws, festivals). Generic group-travel advice ("managing group texts", "hot tub etiquette", "leftover food") is banned — it has no search demand tied to this site and dilutes topical authority.
3. **Not already covered** — search `_guides/` for overlapping slugs/titles first. If an existing guide covers 70%+ of it, refresh/expand that guide instead (commit prefix `expand:`).

Prioritize, in order: (a) occasion + NOLA head terms, (b) seasonal/event queries with dates, (c) "X vs Y" comparison queries, (d) specific question queries ("can you drink on the street in new orleans"). Villa-life micro-topics are capped: the category is full; add nothing more to it without an explicit human request.

## Title & Snippet Conventions (set Aug 20 2026 — follow on every page touched)

- The layout emits the page `title` BARE — no "| New Orleans Group Travel Guide" suffix is appended anymore. Never re-add a brand suffix inside `title:`.
- Titles: ≤60 characters, front-load the search phrase, verdict/specific over generic ("Is Weed Legal in New Orleans? The Real Rules", not "Marijuana Laws Guide"). Include a year only when it's deterministic and maintained (festival dates).
- Descriptions: 140–160 characters, verdict-first with one concrete hook. They are the ad copy of the search result; write them like it.
- Do not rewrite the Aug 20 2026 titles/descriptions on the 30 top-traffic pages except to fix a factual error or update a date — they are set from Search Console data.

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
- **Never edit the rules sections of this file.** The only parts of ROADMAP.md the bot may modify are `## Up Next` and moving Done items to `ROADMAP-ARCHIVE.md`. Rule changes are proposed as an Up Next note for a human to review, not applied directly. Note this is a permission boundary, not an instruction to add items — while the freeze is in force, `## Up Next` stays empty.
- One commit, one focused change per run
- No page under 400 words
- Never add external booking or affiliate links. No `castledayretreats.com`, no `thesyd.com`, no UTM tracking params. The only accommodation CTA is the internal `[See where to stay for large groups →](/where-to-stay/)`.
- Real property photos live in `/assets/images/` (castleday-aerial, castleday-villa, castleday-pool, castleday-loungers, castleday-court, castleday-lawn, syd-courtyard = aerial umbrella pool, syd-pool = mural/cabana pool). Use them in pages with standard markdown image syntax where editorially fitting; never hotlink external images.
- Verified Castleday facts you may cite: 12 bedrooms / 17 real beds / 8 baths per villa, 14-30 guests per villa, ~90 across all three, The Florentine is ADA-accessible, 4.98 avg rating across 99 reviews. Pitch the ~16-person organizer ("everyone gets a real bed"); never lead with "sleeps 30."
- `category` frontmatter must be one of the 11 fixed taxonomy values — the `/guides/` index and related-guides block depend on exact string matches
- Never hand-edit hardcoded page lists in `_layouts/` or `_includes/` to surface new content — the `/guides/` index, `/neighborhoods/` index, and per-guide related block are generated automatically from frontmatter
- **New guide pages are human-gated (Aug 20 2026)** — see the "New Pages: Human-Gated, Demand-Driven" section. The bot writes a new page only from a human-added `## Up Next` item; an empty Up Next stays empty. Refresh and Interlink run every run regardless.

---

## Per-Run Procedure

The site is past 300 guides — the bottleneck is no longer volume, it's quality, freshness, and internal linking. Each run is a balanced portfolio, not a page-count sprint:

1. `git pull --rebase origin main`
2. Read this ROADMAP.md top to bottom — internalize voice, rules, guardrails
3. Read 2–3 existing `_guides/*.md` files to match voice exactly before writing
4. **New content — only from `## Up Next`.** If Up Next has an active human-added item, write that page (top item first), following the Content Structure section. If Up Next is empty — the normal state — write nothing new and do not substitute any other kind of new page.
5. **Refresh (1 page/run):** take the TOP unchecked item in the Search Refresh Queue (in the New Pages section above); only when that queue is fully checked off, fall back to the guide with the oldest `date` in `_guides/`. Verify its facts still hold, update seasonal/date references (including specific festival year/date ranges — Mardi Gras, Jazz Fest, etc.), add 3+ inline internal links if it has none, tighten weak sections, bump `date`. Commit as `expand:` or `fix:`. **Event dates: check against `_data/nola_calendar.yml`** (maintained calendar data, regenerated in place — never edit it): `confidence: exact` dates are reliable computed dates (Carnival parades float with Easter — never assume last year's date); `announced`/`typical` ones get a quick online check before the guide names a specific date.
6. **Interlink (1 pass/run):** pick one high-value older guide (occasion or event guides first) and weave inline links to newer related guides into its body where they help the reader. Commit as `seo:`.
7. **Backlog — humans only.** Never add active items to `## Up Next` or the Search Refresh Queue. If you notice something genuinely worth writing, add it as an HTML comment under `## Up Next` prefixed `PARKED:` — never as an active item.
8. Commit prefixes: `content:` (new page), `expand:` (existing page), `seo:` (metadata/links), `fix:` (typo/broken link)
9. Log every action as a changelog entry in `ROADMAP-ARCHIVE.md` (`YYYY-MM-DD HH:MM UTC — <prefix>: <what changed>`). Done items and changelog live ONLY in the archive file — never re-grow them in this file.
10. **Post a one-line status to Slack `#automations` (channel `C0BALH031G8`) — required every run, including no-op runs.** Format: `STATUS: <ngt> — <what changed>`, one line, very brief. Examples:
    - `STATUS: ngt — refreshed nightlife-guide.md, interlinked restaurant-guide.md (new pages frozen)`
    - `STATUS: ngt — no changes, refresh target already current`
    - `STATUS: ngt ERROR — push rejected, run aborted`
    This step is non-blocking: if Slack is unavailable, finish the run and note the failure in the archive changelog rather than aborting. But never skip it silently — this post is the only visibility a human has into whether the bot ran at all. It has been missing since the July prompt rewrite, which is why it is specified here in ROADMAP (canon) rather than only in the runner prompt.

---

## Up Next

Intentionally empty (the normal state — new pages happen only when a human adds an item here).
The bot-generated vs-city template stays retired: the four removed items (Portland, San Juan,
New York, Los Angeles) are not parked and must not return. Refreshing the EXISTING vs-city pages
is queue work, not new-page work.





<!-- BLOCKED: nola-group-fqf-vs-jazz-fest-guide.md — on verification, french-quarter-fest.md already has a dedicated "How FQF Differs From Jazz Fest" section (its own comparison table: cost, location, scale, lineup, vibe, food, crowds, logistics, best-for, plus a verdict paragraph) — this covers 70%+ of what a standalone comparison page would say; the Up Next note that flagged this as distinct from jazz-fest-group-guide.md's "vs. Mardi Gras" section didn't check french-quarter-fest.md itself. Revisit only if a genuinely deeper angle emerges (e.g. a doing-both-in-one-trip logistics guide) that isn't just a re-run of the existing table. -->

<!-- BLOCKED: nola-group-guys-weekend-guide.md — 70%+ covered by existing guys-weekend-guide.md (golf, fishing, sports bars, nightlife, itinerary, accommodation) -->
<!-- BLOCKED: nola-group-essence-fest-guide.md — 70%+ covered by essence-festival.md and nola-group-essence-festival-base-camp-guide.md -->
<!-- BLOCKED: nola-group-food-focused-itinerary-guide.md — 70%+ covered by nola-group-foodie-itinerary-guide.md (3-day itinerary, restaurant strategy, villa cooking night, private chef, pacing) -->
<!-- BLOCKED: nola-group-thanksgiving-long-weekend-guide.md — 70%+ covered by existing nola-group-villa-thanksgiving-guide.md (Bayou Classic, weather case, off-peak rates, turducken/menu, grocery sourcing, kitchen roles, day-by-day itinerary, hotel-vs-villa table) -->
<!-- BLOCKED: nola-group-crawfish-boil-at-villa-guide.md — 70%+ covered by existing nola-crawfish-boil-guide.md (sourcing, pounds-per-person table, equipment, full boil-and-soak method, table setup, timeline, villa-vs-restaurant case) -->
<!-- BLOCKED: nola-group-mardi-gras-parade-viewing-strategy-guide.md — mardi-gras-group-guide.md already covers the St. Charles viewing-spots table, ladder tradition, and transportation logistics; the proposed differentiator (Magazine Street as an alternative parade viewing ground) isn't well-grounded — Magazine Street isn't part of the established Uptown parade route, and inventing viewing-strategy specifics for a street that doesn't actually host the parades would violate the no-invented-specifics rule. A prioritize-vs-skip parade framework alone likely doesn't clear the 30% new-material bar on its own; revisit only with a verified, non-invented angle -->
<!-- BLOCKED: nola-group-bayou-classic-guide.md — 70%+ covered by existing nola-group-villa-thanksgiving-guide.md, which has a dedicated "The Bayou Classic" section (what it is, group-appeal table, ticket advice) alongside the Grambling-vs-Southern game and Battle of the Bands; a standalone page would duplicate rather than extend it -->

---

