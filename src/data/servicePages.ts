import type { QuoteServiceValue } from '@/data/quoteServices'

export type ServiceSection = {
  title: string
  body: string[];
  image: string
  imagePosition: 'left' | 'right'
}

export type ServiceDetail = {
  slug: string
  name: string
  navLabel: string
  heroImage: string
  heroAlt: string
  eyebrow: string
  headline: string
  subheading: string
  intro: string[];
  sections: ServiceSection[];
  inclusions: string[];
  exclusions: string[];
  differentiators: { title: string; description: string }[];
  quoteService: QuoteServiceValue
  seoTitle: string
  seoDescription: string
  keywords: string[];
  ctaTitle: string
  ctaCopy: string
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'recurring-cleaning',
    name: 'Recurring Cleaning',
    navLabel: 'Recurring Cleaning',
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Luxury living room prepared by Skye Cleaning Group',
    eyebrow: 'Concierge Maintenance Program',
    headline: 'Recurring cleaning that keeps San Francisco addresses investor-ready, every week.',
    subheading:
      'Our concierge cleaning teams handle the rhythm of high-profile homes and offices so executives walk into a space that sells success before the first handshake.',
    intro: [
      'Imagine arriving to your penthouse, private office, or executive suite and feeling as if the grand opening never ended. Our recurring cleaning in San Francisco delivers that emotion every single visit. We engineer a maintenance calendar around investor meetings, family travel, and even art deliveries so the environment always whispers boutique-hotel polish.',
      'Your dedicated account manager conducts quarterly walk-throughs with decision makers, capturing micro-preferences from how the marble foyer should reflect natural light to the precise tension on freshly pressed linens. We translate those details into checklists that live inside our mobile command center, guaranteeing the same perfection no matter which concierge team member is onsite.',
      'Each visit is scored against measurable KPIs: air quality readings, scent audits, fabric longevity, and asset condition. Those metrics populate your executive dashboard so facilities directors can demonstrate the ROI of an immaculate presentation to boards, investors, or discerning homeowners associations without breaking stride.',
      'Because property care touches brand perception, every specialist is trained in hospitality scripts, security protocols, and finish-safe chemistry. We coordinate discreetly with concierge, valet, and building engineering staff to protect privacy while making sure orchids are rotated, turndown trays are restocked, and signature amenities feel effortless.',
    ],
    sections: [
      {
        title: 'Predictable sparkle backed by executive reporting',
        body: [
          'You receive a recurring cleaning blueprint designed around famous launch schedules, quarterly earnings calls, and family entertaining seasons. Our operations team layers in auto-reminders for wardrobe steaming, cellar dusting, and technology sanitizing so nothing slips through the cracks. After every visit you receive a photographic report with timestamps, supply usage, and pro recommendations for maintaining the Skye standard between sessions.',
          'The platform tracks trending flags such as grout fatigue, sensor malfunctions, or traffic flow hotspots. That insight empowers estate managers and workplace directors to plan upgrades before they become urgent, protecting capital expenditure budgets while impressing stakeholders with proactive oversight.',
        ],
        image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Microfiber choreography for every surface and schedule',
        body: [
          'Recurring cleaning excellence depends on choreography. We assign the same elite crew whenever possible, cross-trained in stone restoration, fabric preservation, and confidentiality agreements. They arrive in silent, sensor-friendly footwear and follow micro-zoned routines that respect sound curfews, family schooling, and executive conference calls. Specialized carts carry finish-safe chemistries, color-coded for hardwood, lacquer, metals, and wellness equipment.',
          'Expect meticulous touches: elevator rails fingerprint-free within seconds, terrace furniture aligned to architectural sightlines, and espresso machines purged before nightfall. We even log the aroma intensity of signature diffusers so your environment greets principals with the same first impression, day after day.',
        ],
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Private-label discretion for families, founders, and consulates',
        body: [
          'Our concierge teams operate with the precision of a luxury hotel housekeeping department blended with the trust of a private butler. Non-disclosure agreements are standard, background checks are rerun annually, and every team member completes cultural sensitivity and “invisible presence” training. We coordinate service windows with chauffeurs, nannies, and chiefs of staff to eliminate interruptions while preserving the rhythm of your household or C-suite.',
          'Should an unexpected visit from investors or dignitaries arise, a rapid-response refresh can be activated from the Skye command app. Within an hour, we dispatch a detail unit to reset living areas, verify restrooms, and stage welcome amenities, ensuring your reputation remains immaculate without breaking a sweat.',
        ],
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
    ],
    inclusions: [
      'Weekly or biweekly concierge team with the same lead specialist',
      'Micro-zoned detailing for kitchens, baths, boardrooms, and wellness suites',
      'Linen refresh with steaming, fold alignment, and wardrobe inspection',
      'Sensor-friendly dusting for smart home devices, screens, and AV equipment',
      'Signature scenting rituals calibrated to property guidelines',
      'Rotational deep detailing of artwork frames, baseboards, and millwork',
      'HVAC vent sanitizing, indoor air readings, and aromatherapy balancing',
      'Executive dashboard with visit metrics, maintenance notes, and photo logs',
    ],
    exclusions: [
      'Major restoration, construction, or repair services',
      'Exterior pressure washing or façade work requiring lifts',
      'Pest control or biohazard remediation',
      'Unscheduled laundry loads beyond agreed concierge list',
      'Landscaping, snow removal, or pool maintenance duties',
    ],
    differentiators: [
      {
        title: 'Quarterly strategy reviews',
        description:
          'We audit cleanliness KPIs, upcoming events, and resource usage so your service plan evolves with your calendar.',
      },
      {
        title: 'Finish-safe chemistry lab',
        description:
          'Every product is tested on replicas of your surfaces, ensuring marble, brass, and bespoke textiles stay flawless.',
      },
      {
        title: 'Concierge command app',
        description:
          'Log requests, review visit photos, and trigger rush refreshes with one tap, anywhere in the world.',
      },
    ],
    quoteService: 'recurring',
    seoTitle: 'Recurring Cleaning in San Francisco | Concierge Maintenance by Skye Cleaning Group',
    seoDescription:
      'Premium recurring cleaning in San Francisco for estates, penthouses, and boardrooms. Predictable polish, executive reporting, and hospitality-level detail.',
    keywords: [
      'recurring cleaning San Francisco',
      'concierge cleaning program',
      'corporate housekeeping services',
      'luxury home maintenance Bay Area',
    ],
    ctaTitle: 'Ready to lock in concierge-level consistency?',
    ctaCopy:
      'Tell us about your cadence, executive preferences, and property portfolio. We will engineer a recurring program that keeps every door opening to a flawless reveal.',
  },
  {
    slug: 'one-time-deep-clean',
    name: 'One-Time Deep Clean',
    navLabel: 'One-Time Deep Clean',
    heroImage:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Deep cleaning specialists preparing a luxury kitchen',
    eyebrow: 'Signature Deep Detox',
    headline: 'One-time deep cleaning that resets penthouses, villas, and boardrooms to showroom ready.',
    subheading:
      'When reputation depends on immaculate detail, our deep cleaning teams stage every surface for the spotlight in a single strategic surge.',
    intro: [
      'Launch parties, home stagings, family arrivals, and executive inspections share one thing in common: nobody forgives a fingerprint. Our one-time deep cleaning in San Francisco delivers a dramatic reset that feels like dialing back the clock on your property. We orchestrate a specialty task force that treats marble, velvet, stainless, and smart tech with white-glove precision, leaving every asset camera ready.',
      'Your deep cleaning concierge conducts a virtual or in-person discovery to map traffic flows, identify fragile finishes, and schedule access with building management. From there we design a minute-by-minute playbook that layers Whole Home revival, Window brilliance, Carpet and Upholstery renewal, Airbnb turnover finesse, and Post-Event reset choreography into a single seamless operation.',
      'Each specialist carries certifications in stone restoration, antimicrobial sanitation, and textile preservation. We harness HEPA-filtered extraction, pH-balanced chemistries, and detail brushes sourced from luxury automotive detailing so fixtures shimmer, grout returns to its original shade, and hardware glows like new.',
      'Expect a Hollywood-style grand reveal. Lighting cues are reset, signature scent diffusers are calibrated, and hospitality amenities await on side tables. The result: guests, investors, or VIP tenants walk in and experience the kind of polish that closes deals in seconds.',
    ],
    sections: [
      {
        title: 'Whole Home orchestration with zero guesswork',
        body: [
          'We break the property into micro-zones, sequencing high, mid, and low cleaning so no particle crosses a freshly perfected surface. Crown moldings are detail-brushed, art glass is cleaned using museum-approved polish, and built-in appliances receive disassembly-level attention. Our supervisors log every finished zone in real time, pushing updates to your tablet so you always know when it is safe to stage florals or bring in catering.',
          'For homes marketed to discerning buyers or relocation VIPs, we integrate fragrance zoning, climate balancing, and staging support. Throws are fluffed, bookshelves rebalanced, and ambient playlists queued so the space is ready for immediate occupancy or open-house magic.',
        ],
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Glass, textiles, and air purified to luxury standards',
        body: [
          'Our window detailing crew leverages deionized water-fed poles for exteriors and streak-free microfiber choreography inside. We polish handles, tracks, and mullions so natural light returns full strength, boosting property value and mood. Simultaneously, carpet and upholstery artisans deploy encapsulation formulas and low-moisture extraction that lift soil without warping delicate fibers or leaving chemical residue.',
          'We finish by fogging high-touch zones with hospital-grade botanical disinfectants and running ionizing purifiers for a final crisp finish. Investors immediately feel the freshness difference and residents notice how the environment literally breathes easier.',
        ],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Event aftermath erased in less than 24 hours',
        body: [
          'From tech summits to private fundraisers, we restore calm after the last guest departs. Our rapid-response unit sorts waste streams, documents damage, and coordinates with vendors for glassware pickup or linen retrieval. Sticky floors, champagne drips, confetti surprises, and lingering scents disappear, leaving only the curated ambience your brand promises.',
          'If the property will flip to short-term rental or executive lodging, we mesh hotel housekeeping protocols with your amenity list. Mini bars are restocked, smart locks are sanitized, and welcome folios are placed with gloves. It is the elite reset hospitality teams swear by when reputation is on the line.',
        ],
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
    ],
    inclusions: [
      'Whole Home detailing including crown, vents, fixtures, and cabinetry interiors',
      'Window and glass restoration inside and out with deionized rinse',
      'Carpet, runner, and upholstered furniture revival with fabric-safe chemistry',
      'Airbnb turnover or guest-ready staging with amenity placement',
      'Post-event reset covering waste sorting, scent neutralizing, and floor recovery',
      'Appliance detailing, including ovens, wine fridges, and espresso systems',
      'Sanitizing of high-touch tech: tablets, remotes, elevator panels, and sensors',
      'Executive inspection walkthrough with punch-list completion on site',
    ],
    exclusions: [
      'Major reconstruction, painting, or drywall repair',
      'Heavy mold remediation or asbestos abatement',
      'Exterior façade pressure washing requiring permits',
      'Full inventory packing or move management services',
      'Pest control or wildlife removal',
    ],
    differentiators: [
      {
        title: 'Rapid concierge coordination',
        description:
          'We liaise with building management, concierge, and security so your deep clean flows through approvals effortlessly.',
      },
      {
        title: 'Finish-safe chemistry lab',
        description:
          'Custom blends tested on replicas of your surfaces to ensure flawless results on marble, brass, lacquer, and suede.',
      },
      {
        title: 'Cinematic reveal protocol',
        description:
          'Lighting, scent, and amenity staging align so the final walkthrough feels like a luxury hotel opening night.',
      },
    ],
    quoteService: 'deep',
    seoTitle: 'One-Time Deep Cleaning in San Francisco | Luxury Reset by Skye Cleaning Group',
    seoDescription:
      'Request our elite one-time deep cleaning in San Francisco. Whole home detailing, window brilliance, carpet revival, Airbnb turnover support, and event aftermath rescue.',
    keywords: [
      'deep cleaning in San Francisco',
      'luxury deep cleaning service',
      'post event cleaning Bay Area',
      'airbnb turnover cleaning experts',
    ],
    ctaTitle: 'Need a dramatic reset in record time?',
    ctaCopy:
      'Share timing, guest profiles, and surface sensitivities. We will mobilize the Skye strike team to deliver a deep clean that makes headlines.',
  },
  {
    slug: 'move-in-move-out',
    name: 'Move In / Move Out',
    navLabel: 'Move In / Move Out',
    heroImage:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Moving crew inspecting pristine interior prepared for handover',
    eyebrow: 'White-Glove Turnover Strategy',
    headline: 'Move-in and move-out cleaning that adds value before keys change hands.',
    subheading:
      'We transform turnovers into brand showcases by combing every inch, logging every win, and handing over a property that earns applause from brokers, tenants, or buyers.',
    intro: [
      'Your property deserves to tell a success story the moment the door swings open. Our move in move out cleaning in the Bay Area packages luxury detailing, inspection documentation, and proactive maintenance notes into one frictionless service. Whether you are marketing a listing, handing an asset to new tenants, or retrieving a security deposit, we deliver a space that presents as flawlessly as a grand opening.',
      'We partner with relocation specialists, brokers, and family offices to design a turnover checklist that mirrors the standards of five-star residences. Closets are vacuum-detailed, cabinet interiors are sanitized, and appliances are stripped down to their showroom sheen. Every improvement is recorded in a digital punch list so you can forward proof-of-condition within seconds.',
      'Because speed matters, we align with movers, painters, and inspectors to orchestrate a precise dance. Our teams glide in once the final box exits, tackling residual dust plumes, wall scuffs, and adhesive ghosts. When staging furniture or new decor arrives, the environment already sparkles and the air reads crisp, boosting perceived value instantly.',
      'For incoming residents, we stage a welcome worthy of a corporate relocation package. Linen closets are folded hotel-style, fragrance is balanced to neutral, and every light switch, remote, and smart thermostat is disinfected. The message is clear: this property was curated for a seamless arrival.',
    ],
    sections: [
      {
        title: 'Security deposit protection with inspector-grade detail',
        body: [
          'Our supervisors conduct a granular walkthrough mapping every surface, tile joint, and fixture. We tackle high-betrayal zones - behind appliances, inside window tracks, under sink basins - using detail brushes, HEPA vacuums, and enzyme cleaners. Each area is photographed before and after so property managers can demonstrate compliance with lease clauses, dramatically reducing deposit disputes.',
          'We also log maintenance opportunities such as worn weather stripping or loose hardware, giving asset managers the intel needed to prioritize repairs before new occupants notice. It is a concierge-level audit disguised as a cleaning service.',
        ],
        image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Luxury arrivals that feel curated, not rushed',
        body: [
          'Before new principals arrive, we layer boutique touches: closets lined with cedar sachets, pantry shelves reset with shelf liners, and bathroom amenities aligned as if a five-star hotel turndown team had visited. Our specialists polish faucets, steam draperies, and stage accent pillows so the property photographs like editorial content.',
          'Need specialty requests? We coordinate with wine cellar managers, art handlers, and IT concierge teams to make sure delicate systems are respected while the environment receives its final sparkle. Even the fridge seals and appliance gaskets are sanitized for a sense of pristine care.',
        ],
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Strategic documentation that accelerates closings',
        body: [
          'Every move out cleaning concludes with a digital handoff package. Expect timestamped photos, supply logs, scent profiles, and a short narrative summarizing readiness. Brokers have leveraged these reports to reassure buyers that homes were maintained like assets, while property managers forward them to corporate HR teams as evidence of five-star relocation support.',
          'If a punch list exists, our crew checks items off in real time, collaborating with contractors when needed. The smoother the documentation, the faster keys trade hands, and the more confident everyone feels signing on the dotted line.',
        ],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
    ],
    inclusions: [
      'Cabinet, drawer, and closet interiors deep cleaned, sanitized, and photo documented',
      'Appliance detailing including oven racks, dishwasher filters, laundry drums, and refrigerator coils',
      'Wall touch-up cleaning for scuffs, switch plates, door handles, and baseboards',
      'Window and track detailing plus blind dusting and sill polishing',
      'Floor care for hardwood, stone, tile, and carpet with finish-safe products',
      'Bathroom disinfection using hospital-grade solutions and chrome brightening techniques',
      'HVAC vent dusting and filter inspection with recommendations recorded',
      'Final scent neutralization and airflow balancing for a crisp grand entrance',
    ],
    exclusions: [
      'Packing, unpacking, or moving heavy furnishings',
      'Major paintwork, drywall patching, or renovation repairs',
      'Landscaping, exterior façade washing, or garage floor refinishing',
      'Pest remediation or mold abatement services',
      'Disposal of hazardous construction debris or chemicals',
    ],
    differentiators: [
      {
        title: 'Digital turnover dossier',
        description:
          'Receive a branded PDF with before/after images, maintenance notes, and readiness confirmation for stakeholders.',
      },
      {
        title: 'Concierge vendor alignment',
        description:
          'We coordinate with stagers, movers, and trades so your property transitions without scheduling conflicts.',
      },
      {
        title: 'Luxury arrival staging',
        description:
          'From scented towels to curated entryway welcome notes, we treat each arrival like a VIP hotel check-in.',
      },
    ],
    quoteService: 'move',
    seoTitle: 'Move In Move Out Cleaning Bay Area | Skye Cleaning Group',
    seoDescription:
      'White-glove move in move out cleaning in the Bay Area. Protect deposits, wow buyers, and deliver luxury-ready handovers with Skye Cleaning Group.',
    keywords: [
      'move out cleaning Bay Area',
      'move in cleaning San Francisco',
      'turnover cleaning service',
      'real estate cleaning concierge',
    ],
    ctaTitle: 'Schedule a turnover that feels like a launch event.',
    ctaCopy:
      'Share your closing date, contractor timeline, and must-impress stakeholders. We will choreograph the move in move out clean that secures rave reviews.',
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    navLabel: 'Post-Construction Cleaning',
    heroImage:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Newly completed residence polished after construction',
    eyebrow: 'Defect-Free Reveal',
    headline: 'Post-construction cleaning that turns punch lists into red-carpet unveilings.',
    subheading:
      'Our specialists erase every trace of construction stress, calibrating the environment for inspectors, investors, and first-look photo shoots.',
    intro: [
      'Blue tape deserves a farewell tour. Our post construction cleaning in the Bay Area partners with builders, architects, and design houses to transition projects from jobsite chaos to polished masterpieces. We chase microscopic dust, adhesive residue, and stray grout haze until every surface screams flawless craftsmanship.',
      'Your Skye site captain coordinates with GCs, subs, and design directors to stage a multilayered clean. Phase one clears heavy debris and airborne particulates with HEPA vacuums and negative air machines. Phase two handles micro-detailing for millwork, fixtures, hardware, and glass. Phase three delivers the hospitality-level styling that makes owners fall silent when they step inside.',
      'We respect the architect’s vision by working from updated plans and finish schedules. Exotic stone, unlacquered brass, custom plaster, and bespoke lighting installations are treated with chemistries validated by our in-house lab. Protective films disappear, sensors are dust-free, and smart-home devices receive white-glove calibration.',
      'Beyond sparkle, we protect your timeline. Our crews run extended shifts so certificate of occupancy inspections, designer walkthroughs, and marketing shoots stay on schedule. Expect a property that smells neutral, photographs crisp, and communicates capital investment on contact.',
    ],
    sections: [
      {
        title: 'Dust elimination down to the micron',
        body: [
          'Construction dust behaves like glitter: it hides in air ducts, behind trim, and inside lighting housings. We deploy multi-stage HEPA filtration, electrostatic cloths, and vacuum wands engineered for millwork to remove every trace. Air scrubbers run during service, and we finish with filter replacements plus a final particle count so you can document breathable air quality.',
          'Clients appreciate that art installers, AV teams, and luxury furniture stylists can move in without re-cleaning. The jobsite feel is gone, replaced by the serenity of a finished project ready for its close-up.',
        ],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Finish protection for designer materials',
        body: [
          'We pre-test every chemistry on sample scraps or inconspicuous zones before touching the hero surfaces. Matte black fixtures keep their velvety finish, unlacquered brass develops the right patina, and Venetian plaster walls stay pristine. Adhesive residue from protective films is dissolved with citrus-based removers and gentle heat, never scraped.',
          'Our floor team handles stone honing dust, hardwood overspray, and tile haze. We finish with PH-balanced sealing or conditioning swipe downs so the surfaces begin their life cycle under optimal care.',
        ],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Presentation staging for handover glory',
        body: [
          'Once the dust removal and detail passes are complete, we move into hospitality mode. Appliances are polished, brand stickers removed, and user manuals staged. We align bar stools, steam draperies, and fold branded towels so the reveal feels magazine-ready. Our team even cues lighting scenes and calibrates climate control to the designer’s specifications.',
          'Need last mile support? We can stay onsite during owner walkthroughs to spot fingerprints, hold ladders, and coordinate with trade partners. The project exits construction mode and enters legacy status in record time.',
        ],
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
    ],
    inclusions: [
      'Multi-phase dust extraction with HEPA vacuums, air scrubbers, and microfiber detail kits',
      'Protective film removal, adhesive residue treatment, and surface neutralizing rinses',
      'Fixture, hardware, and lighting detailing with manufacturer-approved products',
      'Cabinetry, drawer, and closet interior wipe-down with dust traps and disinfectants',
      'Floor care for stone, tile, hardwood, and luxury vinyl including buffing and sealing recommendations',
      'Window, frame, and track polishing inside and out with paint speck removal',
      'Appliance unveiling with stainless polishing, gasket cleaning, and smart screen sanitizing',
      'Final hospitality styling with scent neutralization and checklist sign-off',
    ],
    exclusions: [
      'Structural repairs, repainting, or re-caulking',
      'Exterior façade work requiring boom lifts or scaffolding permits',
      'Industrial waste hauling or hazardous material disposal',
      'Landscaping, irrigation, or exterior window washing at height',
      'HVAC duct replacement or major mechanical repairs',
    ],
    differentiators: [
      {
        title: 'Builder partnership program',
        description:
          'We align with your punch-list software and provide daily progress reports so superintendents stay informed.',
      },
      {
        title: 'Materials science expertise',
        description:
          'Our chemists vet products against luxury finishes, preventing etching, scratching, or discoloration.',
      },
      {
        title: 'Reveal-ready styling',
        description:
          'From scent balancing to towel staging, we ensure the final handover feels like a luxury hotel opening.',
      },
    ],
    quoteService: 'deep_post_construction',
    seoTitle: 'Post-Construction Cleaning Bay Area | Skye Cleaning Group',
    seoDescription:
      'Book post construction cleaning in the Bay Area with Skye Cleaning Group. Dust neutralization, finish protection, and reveal styling for luxury builds.',
    keywords: [
      'post construction cleaning Bay Area',
      'builder cleaning services',
      'construction dust removal San Francisco',
      'luxury home turnover cleaning',
    ],
    ctaTitle: 'Ready for a zero-defect reveal?',
    ctaCopy:
      'Send us floor plans, finish schedules, and handover dates. We will engineer a post construction cleaning that makes your project headline worthy.',
  },
  {
    slug: 'carpet-upholstery',
    name: 'Carpet & Upholstery',
    navLabel: 'Carpet & Upholstery',
    heroImage:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Technician rejuvenating luxury carpet and upholstery',
    eyebrow: 'Textile Revival Lab',
    headline: 'Carpet and upholstery care that protects investments and boosts productivity.',
    subheading:
      'Our textile artisans revive high-end fibers with scientific precision, ensuring executive suites, estates, and lounges smell, feel, and look like new.',
    intro: [
      'Carpet and upholstery are the silent ambassadors of your brand. When they dull, the entire room loses its authority. Our carpet cleaning in San Francisco for corporate suites, condos, and estates delivers a fabric revival that re-energizes the space. We focus on fiber health, air quality, and sensory experience so leaders breathe easier and teams perform at their best.',
      'Our textile lab analyzes fiber content, weave density, dye stability, and underlayment condition before a single solution touches the surface. From hand-knotted Persian masterpieces to performance seating in high-traffic boardrooms, we prescribe customized chemistry that lifts soil while respecting investment-grade textiles.',
      'We pair low-moisture encapsulation with targeted hot-water extraction, adjusting temperature, psi, and dwell time by material. HEPA-filtered vacuums remove micro-particulates, while anti-resoiling protectants keep fibers upright and resilient. The result is a bounce-back underfoot sensation that clients associate with premium hospitality.',
      'Scent and air quality receive equal attention. Botanical deodorizing, probiotic odor neutralizers, and air scrubbers eradicate stale aromas. When principals walk in, they inhale confidence: fresh, revitalized, couture-level seating ready for critical conversations.',
    ],
    sections: [
      {
        title: 'Fiber diagnostics aligned with designer specifications',
        body: [
          'We review mill specifications, care labels, and designer guidelines for every textile. Delicate viscose blends, mohair upholstery, and silk rugs require bespoke methods. Our team conducts dye migration tests and pH balancing to prevent bleeding or shading. For heirloom pieces, we can remove them to our controlled studio for immersion cleansing.',
          'Corporate lounges benefit from our after-hours scheduling so workday flow remains untouched. We cordon zones, stage caution signage, and deploy rapid-dry air movers so the space is guest-ready by morning.',
        ],
        image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Productivity-focused outcomes',
        body: [
          'Clean textiles reduce allergens, VOC buildup, and fatigue. We integrate ATP testing and air quality readings to show measurable improvements. Executives notice the energy shift: carpets regain buoyancy, seating feels crisp, and the environment signals peak professionalism.',
          'We also offer color correction, pile reversal mitigation, and fringe grooming so rugs photograph impeccably for marketing and insurance documentation.',
        ],
        image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Sustainable protection for long-term ROI',
        body: [
          'After cleaning, we apply eco-certified fiber protectants that repel spills without altering texture or sheen. Maintenance plans outline spot care protocols, recommended vacuum frequencies, and quarterly refresh schedules. Your textiles stay vibrant longer, reducing replacement costs and supporting ESG commitments.',
          'If incidents occur - red wine on a cashmere sofa or ink across a conference chair - we offer emergency stain command, arriving with specialty solvents and neutralizing agents to reverse damage before it sets.',
        ],
        image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
    ],
    inclusions: [
      'On-site fiber analysis and dye stability testing prior to treatment',
      'Low-moisture encapsulation cleaning for commercial carpet tiles and broadloom',
      'Hot-water extraction calibrated to luxury residential rugs and runners',
      'Upholstery steam detailing including channel tufting, nailhead trims, and cushions',
      'Application of eco-certified protectants and anti-resoiling treatments',
      'Odor neutralization with botanical or probiotic solutions tailored to space usage',
      'Pile lifting, grooming, and fan-assisted rapid drying for immediate usability',
      'Post-clean inspection with maintenance recommendations and photo reports',
    ],
    exclusions: [
      'Major reweaving or structural textile repairs',
      'Color re-dyeing beyond spot correction',
      'Water damage restoration after flooding events',
      'Leather restoration or conditioning beyond light cleaning',
      'Disposal of heavily contaminated textiles classified as biohazards',
    ],
    differentiators: [
      {
        title: 'Textile laboratory backing',
        description:
          'In-house specialists vet chemistry on fabric swatches, ensuring every treatment respects designer intent.',
      },
      {
        title: 'Executive wellness outcomes',
        description:
          'Cleaner textiles improve air quality and cognitive performance, boosting ROI for workplace leaders.',
      },
      {
        title: 'Rapid response stain rescue',
        description:
          'Our hotline dispatches experts with museum-grade solvents to reverse accidents before they become permanent.',
      },
    ],
    quoteService: 'deep_carpet',
    seoTitle: 'Carpet and Upholstery Cleaning San Francisco | Skye Cleaning Group',
    seoDescription:
      'Elevate carpet and upholstery across executive suites and luxury homes. Skye Cleaning Group delivers fiber diagnostics, odor neutralization, and long-term textile protection.',
    keywords: [
      'carpet cleaning San Francisco corporate',
      'upholstery cleaning luxury homes',
      'textile restoration Bay Area',
      'office carpet cleaning productivity',
    ],
    ctaTitle: 'Give your textiles a boardroom-worthy encore.',
    ctaCopy:
      'Share fiber concerns, traffic levels, and future events. Our textile artisans will script a cleaning that makes every seat feel first class.',
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    navLabel: 'Window Cleaning',
    heroImage:
      'https://images.unsplash.com/photo-1478479474071-8a3014ad0d82?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Technician polishing expansive glass windows with skyline view',
    eyebrow: 'Skyline Clarity Program',
    headline: 'Window cleaning that changes perception in seconds.',
    subheading:
      'We blend couture glass techniques with safety protocols so towers, penthouses, and flagship stores shine brighter than the skyline.',
    intro: [
      'Windows are the first impression guests, investors, and clients absorb. Our window cleaning in San Francisco amplifies natural light, enhances architecture, and frames million-dollar views with absolute clarity. We choreograph interior and exterior detailing to deliver photo-perfect glass that keeps your brand irresistible.',
      'Our technicians train on rope access, water-fed pole systems, and boutique hand detailing. We review façade materials, mullion conditions, and city permits before we leave the ground. The result? Crystal panes free of mineral deposits, salt spray, and urban grime, even at the highest elevations.',
      'Retailers and hospitality venues depend on reflections to magnetize foot traffic. We calibrate cleaning schedules around merchandising resets, runway previews, and quarterly marketing campaigns, ensuring your glass remains a silent salesperson.',
      'Residences and offices enjoy the wellness upgrade: more daylight, less glare, and temperature balance. Your teams feel inspired, your art glows, and your interiors photograph like editorial spreads.',
    ],
    sections: [
      {
        title: 'Mineral-free brilliance from street to penthouse',
        body: [
          'We deploy deionized water systems that leave zero spotting, even on expansive glass walls. For interior panels, our crews use lint-free microfiber, squeegee choreography, and track detailing tools to remove dust and debris. Hardware, hinges, and blinds are wiped, ensuring the entire window assembly feels brand new.',
          'For heritage properties, we respect original glazing and leaded glass, using neutral pH solutions that keep historic elements intact.',
        ],
        image: 'https://images.unsplash.com/photo-1478479474071-8a3014ad0d82?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Safety-first, schedule-friendly operations',
        body: [
          'Our crews hold IRATA training, aerial lift certifications, and carry $10M insurance coverage. We coordinate with building engineers for tie-in points and use redundant safety lines. Work happens during low-traffic hours, and our radios keep rooftop watchers and ground spotters synchronized.',
          'Inside, we protect flooring, art, and furnishings with drop cloths and foam guards. There is never a sign of service other than the incredible clarity left behind.',
        ],
        image: 'https://images.unsplash.com/photo-1512912287652-896ed1e00baf?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Brand storytelling through glass',
        body: [
          'We collaborate with marketing and visual merchandising leads to schedule cleans before major product launches, investor visits, or gala events. Our team polishes frames, signage, and lighting housings so the entire storefront glows. We even supply next-day rain touch-ups to guarantee the sheen survives unpredictable coastal weather.',
          'For residences, we align cleaning with interior styling appointments so drapery steaming and floral installations land in a light-filled environment ready for photography or resale.',
        ],
        image: 'https://images.unsplash.com/photo-1529429617124-aee8095725cb?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
    ],
    inclusions: [
      'Interior and exterior glass detailing with deionized rinse technology',
      'Track, frame, sill, and hardware cleaning to remove dust and debris',
      'High-reach access via rope descent, aerial lifts, or water-fed poles',
      'Screen removal, washing, and reinstallation for ventilation windows',
      'Salt spray and mineral deposit removal for coastal properties',
      'Post-clean inspection with photo documentation and maintenance notes',
      'Emergency rain-spot touch-up service within 48 hours',
      'Lighting housing and signage polishing for storefront brilliance',
    ],
    exclusions: [
      'Replacement of damaged glass panels or hardware',
      'Major caulking, sealing, or glazing repairs',
      'Window tint installation or removal',
      'Pressure washing of façades beyond the glass perimeter',
      'Tree trimming or exterior landscaping adjustments',
    ],
    differentiators: [
      {
        title: 'IRATA-trained professionals',
        description:
          'Complex rope access and high-rise work handled by elite technicians with immaculate safety records.',
      },
      {
        title: 'Rain guarantee',
        description:
          'If a storm compromises clarity within 48 hours, we return for complimentary touch-ups.',
      },
      {
        title: 'Visual merchandising alignment',
        description:
          'We sync with marketing calendars so storefronts and lobbies sparkle ahead of key campaigns.',
      },
    ],
    quoteService: 'deep_windows',
    seoTitle: 'Window Cleaning Services San Francisco | Skye Cleaning Group',
    seoDescription:
      'Premium window cleaning in San Francisco for penthouses, towers, and flagship retail. IRATA-trained teams deliver glare-free glass and instant curb appeal.',
    keywords: [
      'window cleaning San Francisco',
      'high rise window cleaning',
      'storefront glass cleaning',
      'luxury home window service',
    ],
    ctaTitle: 'Want views that close deals instantly?',
    ctaCopy:
      'Tell us about your façade, height requirements, and event calendar. We will choreograph a window cleaning cadence that keeps every sightline dazzling.',
  },
  {
    slug: 'janitorial-commercial',
    name: 'Janitorial / Commercial',
    navLabel: 'Janitorial / Commercial',
    heroImage:
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Corporate lobby maintained by professional janitorial team',
    eyebrow: 'Enterprise Facilities Command',
    headline: 'Janitorial programs engineered for boardrooms, biotech labs, and brand headquarters.',
    subheading:
      'We operate like an internal facilities department, delivering spotless environments, compliance-ready documentation, and concierge responsiveness around the clock.',
    intro: [
      'Corporate environments demand more than a mop-and-bucket routine. Our janitorial services in San Francisco fuse hospitality-level presentation with enterprise compliance. Think daily touchpoint sanitizing, audit-ready logs, and technicians who greet executives by name while remaining discreet.',
      'We begin with a discovery sprint, interviewing facilities leaders, HR, and compliance teams. Together we design SOPs that address cleanroom thresholds, executive suites, wellness rooms, and collaborative lounges. Every technician is cross-trained in confidentiality, ergonomic safety, and brand language.',
      'Data drives our performance. Sensors measure restock levels, visitor traffic, and air quality. Dashboards give you instant insight into consumable usage, issue resolution times, and cleanliness scores for each zone. Executives finally receive the metrics they need to defend budgets and celebrate wins.',
      'From sunrise openings to overnight resets, we function as the heartbeat of your building. Whiteboards gleam, glass walls stay fingerprint-free, and huddle rooms smell fresh even after marathon innovation sessions.',
    ],
    sections: [
      {
        title: 'Compliance-ready cleanliness',
        body: [
          'Biotech labs, financial trading floors, and healthcare-adjacent clinics rely on consistent documentation. We maintain SOP binders, digital checklists, and chemical SDS libraries accessible to auditors. Environmental swabs, ATP testing, and HVAC vent cleaning keep wellness at the forefront while satisfying OSHA and FDA-aligned expectations.',
          'Our crews wear color-coded uniforms keyed to building access levels. Sensitive areas receive restricted teams vetted with deeper background checks for peace of mind.',
        ],
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Employee experience amplified',
        body: [
          'A pristine workplace fuels retention and productivity. We service ergonomic furniture, sanitize tech hubs, and refresh wellness amenities so teams feel cared for. Breakrooms sparkle, nap pods smell calming, and executive lounges maintain a boutique ambiance, impressing VIP visitors instantly.',
          'We adopt your brand tone - digital signage, scent cues, and concierge scripts align with internal culture. The cleaning team becomes an extension of guest services.',
        ],
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Rapid resolution and strategic reporting',
        body: [
          'Our command center monitors service tickets, leak alerts, and VIP meeting schedules. If a coffee spill hits the trading floor or a product lab needs emergency sanitizing, a rapid-response unit is dispatched instantly. Meanwhile, monthly executive decks summarize wins, improvement opportunities, and budget optimization ideas.',
          'We embed supervisors onsite for large campuses, ensuring accountability and clear communication with facility leaders.',
        ],
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
    ],
    inclusions: [
      'Daily and nightly janitorial service tailored to executive suites, labs, and collaboration zones',
      'Restroom detailing with touchpoint sanitizing, scent balancing, and smart restock tracking',
      'Lobby, elevator, and conference room treatment with glass polishing and metal brightening',
      'Breakroom, café, and pantry maintenance including appliance sanitation and inventory audits',
      'Waste stream management with recycling, compost, and confidential shredding coordination',
      'Day porter services for spill response, meeting resets, and guest escorting',
      'Floor care programs for stone, hardwood, carpet, and specialty materials',
      'Monthly reporting with KPI dashboards, issue logs, and sustainability metrics',
    ],
    exclusions: [
      'Major mechanical repairs or engineering services',
      'Security staffing or concierge desk operations',
      'Landscaping, snow removal, or exterior hardscape maintenance',
      'Pest management beyond routine reporting of evidence',
      'Construction cleanup outside contracted scope',
    ],
    differentiators: [
      {
        title: 'Embedded supervisors',
        description:
          'Onsite leadership guarantees rapid escalation handling and daily executive communication.',
      },
      {
        title: 'Smart building integration',
        description:
          'We integrate with your CAFM or workplace apps so occupants can submit requests and track completions.',
      },
      {
        title: 'Hospitality-trained teams',
        description:
          'Staff learn concierge language, etiquette, and luxury service standards to impress VIP visitors.',
      },
    ],
    quoteService: 'janitorial',
    seoTitle: 'Janitorial Services San Francisco | Skye Cleaning Group',
    seoDescription:
      'Enterprise janitorial services in San Francisco for corporate headquarters, labs, and luxury offices. KPI reporting, hospitality detail, and compliance-ready protocols.',
    keywords: [
      'janitorial services San Francisco',
      'corporate cleaning program',
      'facility management cleaning',
      'office janitorial Bay Area',
    ],
    ctaTitle: 'Upgrade your facilities playbook.',
    ctaCopy:
      'Share square footage, compliance needs, and culture goals. We will engineer a janitorial partnership that feels like an in-house team with superpowers.',
  },
  {
    slug: 'light-commercial',
    name: 'Light Commercial',
    navLabel: 'Light Commercial',
    heroImage:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Boutique commercial space receiving concierge cleaning',
    eyebrow: 'Boutique Business Glow',
    headline: 'Light commercial cleaning for studios, galleries, and boutique clinics that refuse to blend in.',
    subheading:
      'We deliver hospitality-rich maintenance that keeps entrepreneurial spaces Instagram-famous, patient-approved, and boardroom ready.',
    intro: [
      'Boutique businesses thrive on differentiation. Our light commercial cleaning in the Bay Area packages luxury detail with flexible scheduling so your studio, gallery, or clinic stays unforgettable. We operate as your silent brand ambassador, ensuring every guest, patient, or investor is greeted by a spotless, on-message environment.',
      'From Pilates studios with mirrored walls to cosmetic dermatology suites with delicate equipment, we customize SOPs that protect finishes, respect privacy, and sustain compliance. Our teams memorize brand voice, lighting preferences, and scent guidelines so each visit feels curated, not clinical.',
      'We also understand the hustle. Early-morning opens, late-night events, pop-up collabs - we align service windows to your calendar, even splitting the crew to manage double-shifts. Consumables are tracked, floors stay gleaming, and restrooms feel like spa sanctuaries.',
      'Clients love the marketing boost: spaces photograph beautifully, surfaces stay sanitized, and your Google reviews mention cleanliness as frequently as service quality.',
    ],
    sections: [
      {
        title: 'Studios and creative spaces that energize clients',
        body: [
          'Fitness, dance, and content studios rely on ambiance to drive bookings. We sanitize equipment grips, polish mirrors, and treat specialty flooring to maintain traction and shine. Scent cues are balanced, and HVAC vents are dusted to keep air fresh despite intense schedules.',
          'We also stage front desks with folded towels, infused water stations, and curated retail displays so every visit doubles as a marketing moment.',
        ],
        image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Patient confidence for boutique healthcare',
        body: [
          'Concierge medical, dental, and wellness clinics count on pristine surfaces to communicate safety. We follow CDC-aligned sanitation, focus on high-touch instruments, and document protocols for accreditation. Waiting lounges feel like luxury hotels, exam suites stay sterile, and back-of-house remains audit-ready.',
          'Privacy is a priority. Teams sign NDAs and know how to remain invisible when high-profile patients arrive ahead of schedule.',
        ],
        image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Retail stories that sparkle after every event',
        body: [
          'Flagship boutiques and experiential pop-ups need fast refreshes between client appointments. We dust fixtures, steam draperies, and polish display cases so merchandise glows. Floors are buffed to gallery sheen, and signature scents are diffused to reinforce brand memory.',
          'Our rapid-response team handles spills during trunk shows or influencer activations, ensuring the set remains flawless for the next guest livestream.',
        ],
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
    ],
    inclusions: [
      'Daily or scheduled cleaning tailored to boutique studios, galleries, and clinics',
      'Surface disinfection for equipment, counters, treatment beds, and consultation lounges',
      'Floor care for hardwood, resilient flooring, and specialty athletic surfaces',
      'Restroom and locker room detailing with luxury amenity staging',
      'Retail display dusting, mirror polishing, and glass showcase cleaning',
      'Consumable inventory tracking and restocking alerts',
      'Event reset services before and after activations or workshops',
      'Monthly quality audits with actionable recommendations',
    ],
    exclusions: [
      'Large-scale janitorial operations for skyscraper campuses',
      'Medical waste disposal beyond coordination with vendors',
      'Major repairs, painting, or equipment servicing',
      'Security staffing or concierge desk management',
      'Exterior window washing above the first level',
    ],
    differentiators: [
      {
        title: 'Brand-scripted service',
        description:
          'Teams learn your greeting style and curated playlists so the atmosphere stays on-brand even during cleaning windows.',
      },
      {
        title: 'Flexible micro-scheduling',
        description:
          'Split crews adapt to early classes, late treatments, and last-minute events without missing a beat.',
      },
      {
        title: 'Social media readiness',
        description:
          'Spaces are staged for photo shoots, ensuring every corner wins likes and five-star reviews.',
      },
    ],
    quoteService: 'light',
    seoTitle: 'Light Commercial Cleaning Bay Area | Skye Cleaning Group',
    seoDescription:
      'Light commercial cleaning for studios, galleries, and clinics across the Bay Area. Hospitality detail, flexible schedules, and brand-aligned presentation.',
    keywords: [
      'light commercial cleaning Bay Area',
      'boutique business cleaning',
      'studio cleaning service',
      'clinic cleaning San Francisco',
    ],
    ctaTitle: 'Keep your boutique space camera ready.',
    ctaCopy:
      'Tell us about your brand rituals, peak hours, and event schedule. We will design a light commercial program that keeps clients buzzing.',
  },
  {
    slug: 'apartment-condo',
    name: 'Apartment & Condo',
    navLabel: 'Apartment & Condo',
    heroImage:
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Luxury apartment living room with panoramic city view',
    eyebrow: 'High-Rise Haven Program',
    headline: 'Apartment and condo cleaning that keeps sky-high living effortless.',
    subheading:
      'We work hand-in-hand with concierges and homeowner associations to deliver private residence polish without disrupting urban rhythms.',
    intro: [
      'Elevated living deserves elevated service. Our apartment cleaning concierge for San Francisco high-rises, pied-à-terres, and penthouses synchronizes with building teams to make luxury maintenance seamless. We glide through service elevators, align with doormen, and leave zero trace beyond the glow of a freshly refreshed residence.',
      'Every home receives a custom dossier capturing fabric preferences, appliance quirks, pet personalities, and art sensitivities. We know which pillows need karate chops, which closets require seasonal rotation, and which terraces must be staged for sunset cocktails.',
      'Our crews respect privacy to the highest standard. Background checks, NDAs, and silent communication protocols keep residents comfortable. We coordinate with concierge to secure elevator blocks, visitor passes, and package handling, ensuring the building flow remains uninterrupted.',
      'Expect wellness touches: aromatherapy diffusers dialed to your signature scent, hydration carafes replenished, and fresh florals trimmed. Whether you are in residence daily or visiting seasonally, the space welcomes you with tailored perfection.',
    ],
    sections: [
      {
        title: 'High-rise logistics mastered',
        body: [
          'We understand the choreography of elevator banks, loading docks, and HOA guidelines. Our scheduling team books service windows, manages insurance certificates, and provides vendor IDs in advance. For residents traveling or working remotely, we send arrival alerts and completion photos to keep you informed.',
          'Pet-friendly protocols ensure furry companions stay relaxed. We use quiet equipment, natural cleaners, and door sensors to prevent escapes.',
        ],
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Space-savvy detailing',
        body: [
          'Urban residences often blend luxury finishes with compact footprints. We maximize every inch by organizing entryway drop zones, resetting kitchen islands, and steaming draperies that frame skyline views. Terrace furniture gets wiped, planters refreshed, and grills polished so outdoor spaces stay entertaining-ready.',
          'Inside, we manage wardrobe care, sheet pressing, and spa bathroom detailing. If a housekeeping closet needs reconfiguration, we label containers and suggest storage solutions.',
        ],
        image: 'https://images.unsplash.com/photo-1529429617124-aee8095725cb?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Seasonal concierge options',
        body: [
          'Heading to Tahoe or Napa for a season? We offer residence hibernation and reactivation packages. Ventilation cycles are scheduled, plants watered, and mail forwarded. Before you return, we restock pantry essentials, press linens, and calibrate climate control so the home feels as if you never left.',
          'For frequent travelers, our housekeeping log captures requests - fresh pressed shirts, luggage airing, pet treat restocking - so recurring visits anticipate needs without reminders.',
        ],
        image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
    ],
    inclusions: [
      'Customized housekeeping routines aligned with HOA and concierge protocols',
      'Kitchen, bath, and living area detailing with finish-safe products',
      'Wardrobe care including folding, steaming, and seasonal rotation assistance',
      'Terrace and balcony refresh with furniture wipe-down and planter care',
      'Appliance maintenance for espresso machines, wine fridges, and smart devices',
      'Bed linen changeover, laundry folding, and turndown touches on request',
      'Pantry organization, trash removal, and recycling coordination',
      'Travel-ready closure and reactivation services with photo confirmations',
    ],
    exclusions: [
      'Major repair work or handyman services',
      'Childcare, pet walking, or personal assistant duties',
      'Large-scale move management or packing services',
      'Exterior window washing beyond reachable balcony glass',
      'Appliance repair requiring licensed technicians',
    ],
    differentiators: [
      {
        title: 'Concierge collaboration',
        description:
          'We integrate with building staff, from valets to security, ensuring seamless access and elevated resident experiences.',
      },
      {
        title: 'Travel-friendly service logs',
        description:
          'Receive digital updates, supply alerts, and photo galleries no matter where you are in the world.',
      },
      {
        title: 'Lifestyle-aligned detailing',
        description:
          'From pet-friendly cleaning to wine fridge care, we support the rituals that make high-rise living luxurious.',
      },
    ],
    quoteService: 'apartment',
    seoTitle: 'Apartment and Condo Cleaning San Francisco | Skye Cleaning Group',
    seoDescription:
      'Concierge apartment and condo cleaning in San Francisco high-rises. HOA-friendly, privacy-forward, and tailored to luxury lifestyles.',
    keywords: [
      'apartment cleaning concierge',
      'pied a terre cleaning San Francisco',
      'condo housekeeping Bay Area',
      'luxury apartment cleaning service',
    ],
    ctaTitle: 'Let us choreograph your next flawless arrival.',
    ctaCopy:
      'Share building protocols, travel schedules, and comfort rituals. We will craft a private residence plan that keeps city living serene.',
  },
  {
    slug: 'post-event-refresh',
    name: 'Post-Event Refresh',
    navLabel: 'Post-Event Refresh',
    heroImage:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Event venue being reset overnight',
    eyebrow: 'Rapid Reset Task Force',
    headline: 'Post-event refresh that transforms chaos into order before sunrise.',
    subheading:
      'Galas, product launches, investor dinners - our strike teams reset venues and residences so the only evidence of the night is the buzz it created.',
    intro: [
      'Events launch brands, close deals, and celebrate milestones, but the aftermath can dull the memory. Our post-event cleaning in San Francisco deploys a rapid strike team that erases every cocktail drip, glitter speck, and confetti remnants before the sun rises. The next morning, hosts wake to a space that looks better than it did pre-party.',
      'We collaborate with planners, caterers, and AV crews to build a minute-by-minute teardown plan. Waste streams are sorted, rentals are staged for pickup, and emergency repairs - scuffed floors, lipstick on linens, wine rings on marble - are handled on the spot.',
      'Hospitality protocols keep our teams quiet and discreet. Guests still mingling barely notice the transition as we move through service areas, kitchens, and restrooms to restore order. Scent diffusers neutralize lingering aromas so fresh air greets the next group of stakeholders.',
      'Need to flip a ballroom for a breakfast summit or prepare a penthouse for real estate showings? Our crews work through the night with the energy of stagehands striking a Broadway show, ensuring your venue is inspection-ready come dawn.',
    ],
    sections: [
      {
        title: 'Precision breakdown and inventory control',
        body: [
          'We begin with an asset scan - glassware counts, rental furniture checks, and technology inventory. Lost items are logged and routed to planner HQ. Rentals are consolidated, linens bagged, and catering supplies organized for pickup. Nothing goes missing on our watch.',
          'Floors receive immediate triage: spot treating spills, neutralizing acids, and vacuuming confetti before it embeds. By the time vendors arrive to collect equipment, the venue feels calm and controlled.',
        ],
        image: 'https://images.unsplash.com/photo-1478479474071-8a3014ad0d82?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
      {
        title: 'Signature sparkle for heroic comeback',
        body: [
          'Tables, bars, and lounges receive boutique detailing. We polish stemware, wipe custom signage, and refresh floral vases with clean water. Restrooms undergo a luxury reset with folded towels, amenity trays, and scent balancing. Lighting cues are recalibrated to welcome the morning crowd.',
          'If furniture needs reconfiguration, our team follows floor plans or works alongside planners to achieve the next layout in record time.',
        ],
        image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'right',
      },
      {
        title: 'Crisis prevention and documentation',
        body: [
          'We photograph pre-existing damage and any event-related impact, sharing reports with venue managers and insurance teams. Slips, trips, or residual hazards are mitigated immediately. From spilled wax to unexpected glitter bombs, we have specialized tools to neutralize risk before the next event.',
          'Coordinators receive a digital recap at wrap: completed tasks, vendor pickups, and recommended follow-ups. Hosts rest easy knowing every detail is resolved.',
        ],
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
        imagePosition: 'left',
      },
    ],
    inclusions: [
      'Comprehensive waste sorting, recycling, and compost coordination',
      'Floor recovery for hardwood, stone, carpet, and dance surfaces',
      'Bar, lounge, and tabletop detailing with high-shine finishes',
      'Restroom reset with luxury amenities, scent neutralization, and touchpoint sanitizing',
      'Rental consolidation, inventory logging, and pickup coordination',
      'Kitchen and catering scullery cleanout with grease and odor control',
      'Damage and incident documentation with photo evidence',
      'Morning-ready staging for follow-up meetings or showings',
    ],
    exclusions: [
      'Major repairs to venue infrastructure',
      'Rigging teardown or AV disassembly beyond basic cable coiling',
      'Security, valet, or guest-facing staffing',
      'Pyrotechnic residue remediation (available via specialty partner)',
      'Outdoor tent dismantling or heavy equipment hauling',
    ],
    differentiators: [
      {
        title: 'Overnight rapid crews',
        description:
          'Strike teams mobilize immediately after last call, often completing resets before sunrise.',
      },
      {
        title: 'Planner collaboration',
        description:
          'We integrate with production schedules, ensuring décor, rentals, and sponsor assets are protected.',
      },
      {
        title: 'Crisis ready kits',
        description:
          'From wax removers to odor foggers, we carry specialty tools to resolve mishaps on the spot.',
      },
    ],
    quoteService: 'event',
    seoTitle: 'Post Event Cleaning San Francisco | Skye Cleaning Group',
    seoDescription:
      'Post-event cleaning in San Francisco with overnight crews that reset venues before sunrise. Waste sorting, floor recovery, and luxury amenity staging.',
    keywords: [
      'post event cleaning San Francisco',
      'event cleanup services Bay Area',
      'overnight venue cleaning',
      'gala cleanup rapid response',
    ],
    ctaTitle: 'Need the chaos gone before the next headline?',
    ctaCopy:
      'Send us load-out times, vendor lists, and morning commitments. We will deploy a post-event refresh crew that leaves only applause behind.',
  },

];
