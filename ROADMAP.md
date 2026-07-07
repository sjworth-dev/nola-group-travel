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
- Short punchy paragraphs, never long walls of text
- Tables for comparisons
- Numbered and bulleted lists throughout

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

This is an independent guide. Properties may be described editorially as examples, but are NEVER linked as booking CTAs.

**Castleday Retreats** — Bywater, 3 private villas, up to 30 guests each (~90 across all three). Private pool at each villa, local art, full kitchens, complete privacy. Best for privacy seekers.

**The Syd** — Lower Garden District, multiple villas, up to 22 guests each. Shared heated pool, hot tub, sauna, outdoor kitchen, local artist-designed interiors, one block from St. Charles Streetcar. Best for groups who want a central location.

**Rules:**
- Name properties only as plain-text editorial examples. Do NOT hyperlink to castledayretreats.com, thesyd.com, or any other booking site.
- Every accommodation CTA points to the on-site guide: `[See where to stay for large groups →](/where-to-stay/)`.
- Keep accommodation depth on the `/where-to-stay/` page; other pages reference it rather than re-pitching a property.

---

## Hard Rules (Never Break)

- Never invent businesses, prices, hours, capacities, restaurant names, or specific events. Write generally when uncertain.
- Never modify `_config.yml` (Jekyll build settings)
- `_layouts/`, `_includes/`, and `assets/` may be edited to add navigation links, homepage sections, and surfacing of new content — do not change core design, CSS variables, or structural HTML patterns
- Never delete existing pages
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
5. **Refresh (1 page/run):** pick the guide with the oldest `date` in `_guides/`. Verify its facts still hold, update seasonal/date references, add 3+ inline internal links if it has none, tighten weak sections, bump `date`. Commit as `expand:` or `fix:`.
6. **Interlink (1 pass/run):** pick one high-value older guide (occasion or event guides first) and weave inline links to newer related guides into its body where they help the reader. Commit as `seo:`.
7. **Backlog:** if Up Next has fewer than 4 items, add new ones — every item must pass the Topic Selection Bar and name its target query. Quality over quantity; adding zero is acceptable if nothing passes.
8. Commit prefixes: `content:` (new page), `expand:` (existing page), `seo:` (metadata/links), `fix:` (typo/broken link)
9. Log every action as a changelog entry in `ROADMAP-ARCHIVE.md` (`YYYY-MM-DD HH:MM UTC — <prefix>: <what changed>`). Done items and changelog live ONLY in the archive file — never re-grow them in this file.

---

## Up Next

- `_guides/nola-group-guys-weekend-guide.md` — targets "guys trip new orleans large group" / "guys weekend new orleans group 15-20" — sports, golf, fishing, daytime activities, bar strategy, food-heavy; non-bachelor framing for the annual crew or milestone trip
- `_guides/nola-group-october-guide.md` — targets "new orleans group trip october" / "halloween weekend new orleans large group" — Voodoo Fest timing, Halloween in the French Quarter, fall weather advantage, shoulder-season pricing, event-specific villa booking windows
- `_guides/nola-group-food-focused-itinerary-guide.md` — targets "new orleans food trip group" / "best food experiences new orleans large group" — trip built entirely around eating: multi-restaurant days, how to pace a food-heavy itinerary, cooking class placement, private chef vs. landmark restaurant allocation; distinct from culinary-tour-guide which covers organized tours
- `_guides/nola-group-summer-trip-guide.md` — targets "new orleans group trip summer" / "visiting new orleans summer large group heat" — honest heat guide, when to be outside vs. inside, pool/AC strategy, Essence Fest window, why summer villa pricing is the best deal in NOLA; distinct from shoulder-season-guide which covers timing generally

<!-- BLOCKED: nola-group-essence-fest-guide.md — 70%+ covered by essence-festival.md and nola-group-essence-festival-base-camp-guide.md -->

---

