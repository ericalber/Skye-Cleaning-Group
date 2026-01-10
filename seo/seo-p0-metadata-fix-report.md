# SEO P0 Metadata Fix Report

## Executive Summary
- Root cause: dynamic service and clean-tips routes had no route-level metadata, so they inherited the global layout metadata (title/description/OG/Twitter) from `src/app/layout.tsx:15`.
- Fix: added a reusable metadata helper and per-route metadata generation for all service detail pages, all clean tips posts, and the priority hubs (home, services, clean tips, commercial, service areas).
- Canonical correction: replaced the `/services-areas` typo with `/service-areas` across canonical metadata and related URLs.
- Added a duplicate-title audit script and verified no duplicates across 45 tracked routes.

## Implementation Overview
- Helper: `buildPageMetadata` centralizes canonical + OG/Twitter output in `src/seo/metadata.ts:49`.
- Services detail pages: `generateMetadata` now uses `seoTitle`/`seoDescription` from `src/data/servicePages.ts` in `src/app/services/[slug]/page.tsx:209`.
- Clean tips detail pages: `generateMetadata` now uses English-safe titles and descriptions in `src/app/clean-tips/[slug]/page.tsx:32`.
- Hubs with explicit metadata: home `src/app/page.tsx:19`, services hub `src/app/services/page.tsx:19`, clean tips hub `src/app/clean-tips/page.tsx:13`, commercial hub `src/app/commercial/page.tsx:11`, service areas hub `src/app/service-areas/page.tsx:650`.

## Impacted Routes (Before vs After)
| Route group | Count | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| `/services/[slug]` detail pages | 10 | Inherited layout title/description/OG/Twitter, no canonical | Unique title/description from `seoTitle`/`seoDescription`, canonical + OG/Twitter set per page | `src/app/services/[slug]/page.tsx:209`, `src/data/servicePages.ts:114` |
| `/clean-tips/[slug]` detail posts | 30 | Inherited layout title/description/OG/Twitter, no canonical | Unique English title/description per post, canonical + OG/Twitter set per page | `src/app/clean-tips/[slug]/page.tsx:32`, `src/data/cleanTips.ts:13` |
| `/` home hub | 1 | Inherited layout metadata | Explicit title/description/OG/Twitter/canonical | `src/app/page.tsx:19` |
| `/services` hub | 1 | No hub metadata | Explicit title/description/OG/Twitter/canonical | `src/app/services/page.tsx:19` |
| `/clean-tips` hub | 1 | No hub metadata | Explicit title/description/OG/Twitter/canonical | `src/app/clean-tips/page.tsx:13` |
| `/commercial` hub | 1 | Only title/description, OG/Twitter inherited | Explicit title/description/OG/Twitter/canonical | `src/app/commercial/page.tsx:11` |
| `/service-areas` hub | 1 | Canonical typo and inconsistent OG URL | Canonical fixed to `/service-areas`, metadata unified | `src/app/service-areas/page.tsx:650` |

## Evidence Samples (Before vs After)
Before (shared layout metadata):
- Title: `Skye Cleaning Group - Residential & Light Commercial Cleaning`
- Description: `Skye Cleaning Group delivers premium residential and light commercial cleaning across San Francisco and the North Bay with trusted teams and our Skye Done-Right Guarantee.`
- Source: `src/app/layout.tsx:15`

After (route-specific):
1) `/services/recurring-cleaning`
   - Title: `Recurring Cleaning in San Francisco | Concierge Maintenance by Skye Cleaning Group`
   - Description: `Premium recurring cleaning in San Francisco for estates, penthouses, and boardrooms. Predictable polish, executive reporting, and hospitality-level detail.`
   - Canonical: `https://www.skyecgroup.com/services/recurring-cleaning`
   - Source: `src/data/servicePages.ts:114`, `src/data/servicePages.ts:116`, `src/app/services/[slug]/page.tsx:221`

2) `/services/one-time-deep-clean`
   - Title: `One-Time Deep Cleaning in San Francisco | Luxury Reset by Skye Cleaning Group`
   - Description: `Request our elite one-time deep cleaning in San Francisco. Whole home detailing, window brilliance, carpet revival, Airbnb turnover support, and event aftermath rescue.`
   - Canonical: `https://www.skyecgroup.com/services/one-time-deep-clean`
   - Source: `src/data/servicePages.ts:208`, `src/data/servicePages.ts:210`, `src/app/services/[slug]/page.tsx:221`

3) `/services/janitorial-commercial`
   - Title: `Janitorial Services San Francisco | Skye Cleaning Group`
   - Description: `Enterprise janitorial services in San Francisco for corporate headquarters, labs, and luxury offices. KPI reporting, hospitality detail, and compliance-ready protocols.`
   - Canonical: `https://www.skyecgroup.com/services/janitorial-commercial`
   - Source: `src/data/servicePages.ts:678`, `src/app/services/[slug]/page.tsx:221`

4) `/clean-tips/office-brand-cleaning-mistakes`
   - Title: `5 Cleaning Mistakes That Quietly Destroy Your Office Brand (And How To Stop Each One) | Skye Cleaning Group`
   - Description: `Discover the five silent cleaning failures that erode client trust and learn the luxury protocols that keep boardrooms camera ready.`
   - Canonical: `https://www.skyecgroup.com/clean-tips/office-brand-cleaning-mistakes`
   - Source: `src/data/cleanTips.ts:14`, `src/data/cleanTips.ts:16`, `src/app/clean-tips/[slug]/page.tsx:32`

5) `/clean-tips/microfiber-glow-tour`
   - Title: `Microfiber Glow Tour | Skye Cleaning Group` (slug-based English fallback)
   - Description: `Concierge cleaning insight: Microfiber Glow Tour. Skye Cleaning Group shares premium routines for San Francisco and the Bay Area.`
   - Canonical: `https://www.skyecgroup.com/clean-tips/microfiber-glow-tour`
   - Source: `src/app/clean-tips/[slug]/page.tsx:44`, `src/seo/metadata.ts:22`

## Canonical Verification Summary
- Canonical generation is centralized in `src/seo/metadata.ts:57` and used by all hub and detail pages.
- `/service-areas` metadata now sets the correct canonical path: `src/app/service-areas/page.tsx:650`.
- Removed duplicate canonical/hreflang tags from `src/app/service-areas/head.tsx:10`.
- Corrected stale `/services-areas` links in feeds and integrations:
  - `src/app/feed.xml/route.ts:11`
  - `src/app/press.rss/route.ts:11`
  - `src/app/press.json/route.ts:43`
  - `src/app/embed/skye-widget.js/route.ts:25`

## Duplicate Title Check
- Script: `scripts/seo/check-metadata-duplicates.cjs`
- Command: `npm run seo:check-metadata`
- Result: `No duplicate titles detected across 45 routes.`

## Language Scan Results (PT-BR occurrences)
PT-BR content found in the following files/lines:

`src/data/cleanTips.ts`
```
83
84
87
88
89
90
91
92
93
100
101
104
105
106
107
108
109
110
117
118
121
122
123
124
125
126
127
134
135
138
139
140
141
142
143
144
151
152
155
156
157
158
159
160
161
167
168
172
173
174
175
176
177
178
184
186
189
190
191
192
193
194
195
201
202
203
206
207
208
209
210
211
212
219
223
224
225
226
227
228
229
235
236
237
240
241
242
243
244
245
320
321
322
325
326
327
328
329
330
331
337
338
339
342
343
344
345
346
347
348
355
359
360
361
362
363
364
365
366
373
374
377
378
379
380
381
382
383
384
391
392
395
396
397
398
399
400
401
402
408
409
410
413
414
415
416
417
418
419
420
427
428
431
432
433
434
435
436
437
438
445
446
449
450
451
452
453
454
455
456
462
463
464
467
468
469
470
471
472
473
474
480
481
482
485
486
487
488
489
490
491
492
498
499
500
503
504
506
507
508
509
510
516
517
518
521
522
523
524
525
526
527
```

`src/components/Reviews.tsx`
- `src/components/Reviews.tsx:120`
- `src/components/Reviews.tsx:127`
- `src/components/Reviews.tsx:134`
- `src/components/Reviews.tsx:141`

`src/app/globals.css`
- `src/app/globals.css:35`
- `src/app/globals.css:46`

`src/components/ui-kits/README.md`
- `src/components/ui-kits/README.md:7`

## Geo Targeting Coverage Map (Report Only)
| Geo target | Coverage evidence | Gap / note |
| --- | --- | --- |
| Marina District | `src/app/service-areas/page.tsx:375`, `src/app/service-areas/page.tsx:385`, `src/components/ServiceArea.tsx:2` | Covered in service areas and home coverage list. |
| Presidio | `src/app/service-areas/page.tsx:307`, `src/app/service-areas/page.tsx:392`, `src/components/ServiceAreasEditorial.tsx:9` | Covered. |
| Near Golden Gate | `src/app/service-areas/page.tsx:409`, `src/app/service-areas/page.tsx:419` | Covered via Marina Golden Gate section. |
| Broadway corridor | No matches in repo | Missing. |
| Divisadero corridor | No matches in repo | Missing. |
| Tiburon | `src/app/service-areas/page.tsx:81`, `src/data/serviceAreas.ts:51` | Covered. |
| Belvedere | `src/app/service-areas/page.tsx:62` | Covered. |
| Sausalito | `src/app/service-areas/page.tsx:116`, `src/data/serviceAreas.ts:55` | Covered; office intent only implied. |
| San Rafael | `src/app/service-areas/page.tsx:151`, `src/components/Footer.tsx:67` | Covered. |
| Larkspur | `src/data/serviceAreas.ts:59` (about/service-areas list) | Only present in data-driven list. |
| Greenbrae | No matches in repo | Missing. |
| Novato | `src/app/service-areas/page.tsx:169`, `src/components/Footer.tsx:67` | Covered. |
| Sausalito offices | `src/app/service-areas/page.tsx:126` | Partial (creative workspaces mention; not explicit commercial cleaning). |
| Petaluma commercial | `src/app/service-areas/page.tsx:203`, `src/data/serviceAreas.ts:117` | Partial (tasting rooms mention). |
| Napa wineries | `src/app/service-areas/page.tsx:219`, `src/app/service-areas/page.tsx:546` | Covered. |
| Sonoma wineries | `src/app/service-areas/page.tsx:237`, `src/app/service-areas/page.tsx:271` | Covered. |
| Santa Rosa commercial | `src/data/serviceAreas.ts:109`, `src/components/Footer.tsx:68` | Partial (listed, not commercial-specific). |
| Rohnert Park commercial | No matches in repo | Missing. |
| Berkeley commercial | No matches in repo | Missing. |
