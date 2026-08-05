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

> **New guide pages are FROZEN as of Aug 5 2026** — see the "New Pages: FROZEN" section below. This section is dormant reference for when the freeze lifts, and for checking structure while refreshing existing pages. It does not authorize creating anything.

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

## New Pages: FROZEN (as of Aug 5 2026)

**Do not create new guide pages.** Skip step 4 of the Per-Run Procedure entirely. Every run is Refresh + Interlink only.

This is a deliberate human decision made on traffic data — not an oversight, not a bug, not an empty backlog to helpfully refill. Do not resume new-page writing for any reason, and do not treat a short or empty `## Up Next` as license to write something.

**Why.** Measured Jun 1 – Aug 2 2026 across all 383 guides: **449 total views, 271 users, and only 136 guides drew even one view in nine weeks.** The ~300 bot-written `nola-group-*` pages accounted for roughly 184 of those views; the single best one got 8. The strongest pages on the site are the older, shorter-slug human-written guides (`restaurant-guide` 43 views, `family-reunion` 21, `wedding-party` 14). Publishing at ~0.3 views/page/month dilutes topical authority and spends crawl budget for nothing — the exact failure the Topic Selection Bar below was written to prevent.

**The "New Orleans vs. [City]" template is retired.** 25 of them shipped Jul 14 – Aug 5 2026. The best performer among them (`vs-savannah`, one of the earliest and most plausible) has 5 views. Do not write another under any phrasing, slug, or framing. Generating an infinite template that technically names a target query satisfies the letter of the bar below and defeats its purpose.

**When the freeze lifts:** only when a human edits this section. Google Search Console is being connected now (the site has never had it, so there has never been rank, query, or impression data). Once real query data exists, new topics get chosen from terms the site already ranks on page 2 for — not from templates. Until then, Refresh + Interlink are the whole job, and they are measurably improving the pages that do get traffic.

---

## Topic Selection Bar (DORMANT — see freeze above)

Retained for when the freeze lifts. It does not authorize new pages while the freeze is in force.

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
- **Never edit the rules sections of this file.** The only parts of ROADMAP.md the bot may modify are `## Up Next` and moving Done items to `ROADMAP-ARCHIVE.md`. Rule changes are proposed as an Up Next note for a human to review, not applied directly. Note this is a permission boundary, not an instruction to add items — while the freeze is in force, `## Up Next` stays empty.
- One commit, one focused change per run
- No page under 400 words
- Never add external booking or affiliate links. No `castledayretreats.com`, no `thesyd.com`, no UTM tracking params. The only accommodation CTA is the internal `[See where to stay for large groups →](/where-to-stay/)`.
- Real property photos live in `/assets/images/` (castleday-aerial, castleday-villa, castleday-pool, castleday-loungers, castleday-court, castleday-lawn, syd-courtyard = aerial umbrella pool, syd-pool = mural/cabana pool). Use them in pages with standard markdown image syntax where editorially fitting; never hotlink external images.
- Verified Castleday facts you may cite: 12 bedrooms / 17 real beds / 8 baths per villa, 14-30 guests per villa, ~90 across all three, The Florentine is ADA-accessible, 4.98 avg rating across 99 reviews. Pitch the ~16-person organizer ("everyone gets a real bed"); never lead with "sleeps 30."
- `category` frontmatter must be one of the 11 fixed taxonomy values — the `/guides/` index and related-guides block depend on exact string matches
- Never hand-edit hardcoded page lists in `_layouts/` or `_includes/` to surface new content — the `/guides/` index, `/neighborhoods/` index, and per-guide related block are generated automatically from frontmatter
- **New guide pages are frozen (Aug 5 2026)** — see the "New Pages: FROZEN" section. An empty `## Up Next` is the correct steady state; do not refill it, and do the Refresh and Interlink steps regardless.

---

## Per-Run Procedure

The site is past 300 guides — the bottleneck is no longer volume, it's quality, freshness, and internal linking. Each run is a balanced portfolio, not a page-count sprint:

1. `git pull --rebase origin main`
2. Read this ROADMAP.md top to bottom — internalize voice, rules, guardrails
3. Read 2–3 existing `_guides/*.md` files to match voice exactly before writing
4. **New content — SKIP. Frozen since Aug 5 2026.** Write no new guide pages. See the "New Pages: FROZEN" section above for the traffic data behind this. Do not substitute a different kind of new page (comparison, listicle, hub, index) for the frozen one.
5. **Refresh (1 page/run):** pick the guide with the oldest `date` in `_guides/`. Verify its facts still hold, update seasonal/date references (including specific festival year/date ranges — Mardi Gras, Jazz Fest, etc.), add 3+ inline internal links if it has none, tighten weak sections, bump `date`. Commit as `expand:` or `fix:`.
6. **Interlink (1 pass/run):** pick one high-value older guide (occasion or event guides first) and weave inline links to newer related guides into its body where they help the reader. Commit as `seo:`.
7. **Backlog — SKIP while the freeze is in force.** Do not refill `## Up Next`. Leaving it empty is correct and expected. If you notice something genuinely worth writing once the freeze lifts, add it as an HTML comment under `## Up Next` prefixed `PARKED:` — never as an active item.
8. Commit prefixes: `content:` (new page), `expand:` (existing page), `seo:` (metadata/links), `fix:` (typo/broken link)
9. Log every action as a changelog entry in `ROADMAP-ARCHIVE.md` (`YYYY-MM-DD HH:MM UTC — <prefix>: <what changed>`). Done items and changelog live ONLY in the archive file — never re-grow them in this file.
10. **Post a one-line status to Slack `#automations` (channel `C0BALH031G8`) — required every run, including no-op runs.** Format: `STATUS: <ngt> — <what changed>`, one line, very brief. Examples:
    - `STATUS: ngt — refreshed nightlife-guide.md, interlinked restaurant-guide.md (new pages frozen)`
    - `STATUS: ngt — no changes, refresh target already current`
    - `STATUS: ngt ERROR — push rejected, run aborted`
    This step is non-blocking: if Slack is unavailable, finish the run and note the failure in the archive changelog rather than aborting. But never skip it silently — this post is the only visibility a human has into whether the bot ran at all. It has been missing since the July prompt rewrite, which is why it is specified here in ROADMAP (canon) rather than only in the runner prompt.

---

## Up Next

New pages are FROZEN (see the freeze section above). This list is intentionally empty.
Four queued `New Orleans vs. [City]` items (Portland, San Juan, New York, Los Angeles) were removed
on Aug 5 2026 along with the retirement of that template — they are not parked for later, the
template is retired. Do not re-add them.





<!-- BLOCKED: nola-group-fqf-vs-jazz-fest-guide.md — on verification, french-quarter-fest.md already has a dedicated "How FQF Differs From Jazz Fest" section (its own comparison table: cost, location, scale, lineup, vibe, food, crowds, logistics, best-for, plus a verdict paragraph) — this covers 70%+ of what a standalone comparison page would say; the Up Next note that flagged this as distinct from jazz-fest-group-guide.md's "vs. Mardi Gras" section didn't check french-quarter-fest.md itself. Revisit only if a genuinely deeper angle emerges (e.g. a doing-both-in-one-trip logistics guide) that isn't just a re-run of the existing table. -->

<!-- BLOCKED: nola-group-guys-weekend-guide.md — 70%+ covered by existing guys-weekend-guide.md (golf, fishing, sports bars, nightlife, itinerary, accommodation) -->
<!-- BLOCKED: nola-group-essence-fest-guide.md — 70%+ covered by essence-festival.md and nola-group-essence-festival-base-camp-guide.md -->
<!-- BLOCKED: nola-group-food-focused-itinerary-guide.md — 70%+ covered by nola-group-foodie-itinerary-guide.md (3-day itinerary, restaurant strategy, villa cooking night, private chef, pacing) -->
<!-- BLOCKED: nola-group-thanksgiving-long-weekend-guide.md — 70%+ covered by existing nola-group-villa-thanksgiving-guide.md (Bayou Classic, weather case, off-peak rates, turducken/menu, grocery sourcing, kitchen roles, day-by-day itinerary, hotel-vs-villa table) -->
<!-- BLOCKED: nola-group-crawfish-boil-at-villa-guide.md — 70%+ covered by existing nola-crawfish-boil-guide.md (sourcing, pounds-per-person table, equipment, full boil-and-soak method, table setup, timeline, villa-vs-restaurant case) -->
<!-- BLOCKED: nola-group-mardi-gras-parade-viewing-strategy-guide.md — mardi-gras-group-guide.md already covers the St. Charles viewing-spots table, ladder tradition, and transportation logistics; the proposed differentiator (Magazine Street as an alternative parade viewing ground) isn't well-grounded — Magazine Street isn't part of the established Uptown parade route, and inventing viewing-strategy specifics for a street that doesn't actually host the parades would violate the no-invented-specifics rule. A prioritize-vs-skip parade framework alone likely doesn't clear the 30% new-material bar on its own; revisit only with a verified, non-invented angle -->
<!-- BLOCKED: nola-group-bayou-classic-guide.md — 70%+ covered by existing nola-group-villa-thanksgiving-guide.md, which has a dedicated "The Bayou Classic" section (what it is, group-appeal table, ticket advice) alongside the Grambling-vs-Southern game and Battle of the Bands; a standalone page would duplicate rather than extend it -->

---

