export type CleanTip = {
  slug: string
  title: string
  hook: string
  excerpt: string
  hero: string
  body: string[]
}

export const cleanTips: CleanTip[] = [
  {
    slug: 'the-lemon-sparkle',
    title: 'The lemon sparkle trick homemakers keep secret',
    hook: 'Neutralize stubborn odors and restore stainless shine with one citrus move.',
    excerpt:
      'Fresh lemon juice breaks down grease films, eliminates sink odors, and leaves faucets gleaming thanks to the fruit’s natural essential oils.',
    hero: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Juice half a lemon directly onto the sink basin or cutting board and let it sit for three minutes. The citric acid lifts light grease and neutralizes lingering smells from fish, garlic, or detergents.',
      'Rinse with warm water and polish using a microfiber cloth in circular motions. For chrome fixtures, rub the inside of the peel gently across the metal; the oils add a streak-free sheen without scratches.',
      'Repeat the ritual two to three times a week. For stained mugs or porcelain, mix equal parts lemon juice and baking soda, apply for five minutes, and rinse. The foaming action removes coffee and tea marks effortlessly.',
    ],
  },
  {
    slug: 'streak-free-glass',
    title: 'Streak-free glass in two minutes flat',
    hook: 'Swap pricey products for a DIY spray that outperforms the store brands.',
    excerpt:
      'A 50/50 mix of distilled water and white vinegar, paired with microfiber cloths, leaves windows and mirrors crystal clear in record time.',
    hero: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Combine equal parts distilled water and white vinegar in a spray bottle. Distilled water prevents mineral spots, while vinegar dissolves soap scum and everyday grime.',
      'Mist lightly and wipe with a clean microfiber cloth using horizontal strokes from top to bottom. Working downward ensures drips do not land on already cleaned areas.',
      'Finish with a dry microfiber cloth to buff the surface. Clean mirrors weekly and exterior windows biweekly. On sunny days, work in the early morning or late afternoon to avoid rapid evaporation.',
    ],
  },
  {
    slug: 'protecting-fine-furniture',
    title: 'The number one mistake that scratches fine furniture',
    hook: 'Traditional dusters hide grit that slowly carves micro-scratches. There is a better way.',
    excerpt:
      'Retire coarse dusters and reach for lightly damp microfiber to lift dust without dragging abrasive particles across lacquer or wood finishes.',
    hero: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Feather dusters and rough cloths capture dirt but fail to release it, turning the tool into sandpaper. Use a microfiber cloth lightly moistened with distilled water to trap dust and lift it away.',
      'Always wipe in the direction of the wood grain and follow with a dry cloth. Once a month, nourish the surface with a conditioner designed for your finish to replenish natural oils.',
      'If light scratches are already visible, apply a beeswax-based restorer with a soft cloth. It fills micro-grooves and revives luster without resorting to sanding.',
    ],
  },
  {
    slug: 'long-lasting-freshness',
    title: 'How to keep that fresh-clean scent all week long',
    hook: 'Blend smart ventilation with a DIY fabric mist for lingering freshness.',
    excerpt:
      'Fifteen minutes of daily air exchange plus a homemade citrus spray keeps the house smelling newly cleaned days after the visit.',
    hero: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Open opposing windows for at least 15 minutes each morning. This cross-breeze moves out humidity and stale air that trap odors in fabrics.',
      'Create a fabric mist with distilled water, eight drops of citrus essential oil, and a splash of vodka or perfumer’s alcohol. The alcohol helps the aroma cling to textiles without leaving residue.',
      'Lightly spray curtains, sofas, and bedding from 30 centimeters away. In high-traffic zones, hide charcoal sachets behind furniture to absorb odors silently.',
    ],
  },
  {
    slug: 'magazine-ready-bathroom',
    title: 'A magazine-worthy bathroom in three steps',
    hook: 'Follow a ten-minute routine that delivers spa-level sparkle with minimal effort.',
    excerpt:
      'Target metals, surfaces, and floors in sequence: a citrus cleaner for fixtures, microfiber for glass, and a fast-drying disinfectant for tiles.',
    hero: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Mist faucets and glass with a cleaner containing citric acid. While it dissolves soap scale, declutter counters and replace towels.',
      'Rinse with warm water, then dry with a microfiber cloth using gentle S-shaped motions to prevent streaks. This step restores the glassy sheen quickly.',
      'Dilute a floor-safe disinfectant and mop with a lightly damp cloth to avoid puddles. In under ten minutes the bathroom looks guest-ready and smells crisp.',
    ],
  },
  {
    slug: 'dust-mite-defense',
    title: 'Eliminate dust mites without expensive sprays',
    hook: 'Combine baking soda, tea tree oil, and heat to protect mattresses and upholstery.',
    excerpt:
      'Routine vacuuming plus a baking soda and tea tree treatment drastically cuts mites and odors while keeping fabrics safe.',
    hero: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Vacuum mattresses and sofas with an upholstery attachment every two weeks to remove loose dust and allergens.',
      'Mix half a cup of baking soda with five drops of tea tree oil, sprinkle evenly, and let sit for 30 minutes. The powder absorbs odors while the oil provides mild antimicrobial action.',
      'Vacuum thoroughly to remove residue. Wash pillowcases and removable covers in water above 60°C once a month to kill mites and their eggs.',
    ],
  },
  {
    slug: 'floors-that-shine-safely',
    title: 'Floors that shine without being slippery',
    hook: 'Balance gloss and grip with a simple detergent-and-alcohol combo.',
    excerpt:
      'A diluted neutral detergent cleans, while a quick pass of isopropyl alcohol speeds drying and leaves a velvety finish without slick residue.',
    hero: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Mix one tablespoon of neutral detergent into four liters of warm water. Mop with a microfiber pad well wrung out to prevent puddles.',
      'Follow with a solution of one liter of water and two capfuls of isopropyl alcohol. Glide a clean pad lightly over the surface. The alcohol evaporates quickly, locking in shine without slipperiness.',
      'For sealed wood, finish by buffing along the grain with a dry cloth to remove any remaining moisture and highlight the natural sheen.',
    ],
  },
  {
    slug: 'baking-soda-superpowers',
    title: 'Unlocking the real power of baking soda',
    hook: 'Gently scour cookware, grout, and drains with a pantry staple used the right way.',
    excerpt:
      'Heat, vinegar, and the right pressure help baking soda tackle tough grime while staying kind to your surfaces.',
    hero: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Create a paste with baking soda and warm water to polish stainless cookware. Apply with a soft sponge, rinse with hot water, and dry immediately to prevent spotting.',
      'Brighten grout by mixing baking soda with 10-volume hydrogen peroxide. Spread the paste, wait ten minutes, then scrub with a medium bristle brush.',
      'Clear slow drains by pouring half a cup of baking soda followed by half a cup of warm vinegar. Allow it to fizz for five minutes, then flush with boiling water.',
    ],
  },
  {
    slug: 'half-the-dirt-through-organization',
    title: 'Organization hacks that cut dirt in half',
    hook: 'Strategic layout choices mean far less dust and debris to chase later.',
    excerpt:
      'Entry stations, transparent bins, and daily resets prevent clutter from turning into grime and slash cleaning time.',
    hero: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Create a landing zone at the entrance with an absorbent rug, hooks, and a tray for keys. This captures street dirt before it travels through the house.',
      'Use clear, labeled bins for items that attract dust. When everything has a designated spot, surfaces stay clear and cleaning goes faster.',
      'Dedicate five minutes each evening to return belongings to their homes. This micro habit halves the time required for deep cleaning every week.',
    ],
  },
  {
    slug: 'time-saving-weekly-schedule',
    title: 'The weekly cleaning schedule that saves your time',
    hook: 'Break chores into 20-minute blocks so weekends stay free.',
    excerpt:
      'Assign each day a focused task—laundry, bathrooms, communal areas, bedrooms, kitchen—so nothing piles up and weekends are yours again.',
    hero: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Monday: tackle laundry and set aside delicate items. Tuesday: give bathrooms a quick but thorough refresh and check amenities. Wednesday: dust and tidy living areas.',
      'Thursday: reset bedrooms, rotate linens, and declutter nightstands. Friday: deep clean the kitchen, paying attention to appliances and hardware. Saturday becomes a light inspection and Sunday stays free.',
      'This rhythm keeps every zone on a short cycle so professional visits can focus on specialty detailing rather than catch-up cleaning.',
    ],
  },

  {
    slug: 'nordic-winter-reset',
    title: 'Nordic winter reset for urban condos',
    hook: 'Prevent salt and dry air from dulling interiors with Scandinavian inspired maintenance.',
    excerpt:
      'Microfiber zoning, humidity balancing, and natural oils preserve warmth and clarity for city residences through freezing months.',
    hero: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Stage a decontamination zone at the entrance with a boot tray, rubber mat, and microfiber mop stored upright. This catches street salt before it scratches hardwood or stains rugs.',
      'Condition leather and wood weekly using a blend of jojoba oil and warm water. Apply with a soft cloth moving with the grain to prevent drying from indoor heating.',
      'Run a humidifier at forty percent to protect instruments, fine art, and cabinetry. Pair it with a weekly essential oil diffusion to keep air crisp without heavy fragrance.',
    ],
  },
  {
    slug: 'parisian-window-lustre',
    title: 'Parisian window ritual for sparkling storefronts',
    hook: 'Mirror the glow of Left Bank boutiques with glass care tailored for stone facades.',
    excerpt:
      'A two cloth mineral water method keeps display windows bright while guarding limestone detailing from streaks.',
    hero: 'https://images.unsplash.com/photo-1478479474071-8a3014ad0d82?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Dust frames with a natural bristle brush before touching the glass. This prevents grit from dragging across the surface and scratching antique panes.',
      'Spritz carbonated mineral water from a fine mister and polish with lint free linen following vertical strokes. Work in small sections to control drying time.',
      'Buff the edges with a fresh dry cloth and inspect the facade for runoff. Finish by conditioning brass hardware using a gentle soap diluted in warm water.',
    ],
  },
  {
    slug: 'toronto-highrise-schedule',
    title: 'Toronto highrise cleaning schedule that respects elevators',
    hook: 'Keep condos pristine without clashing with building traffic or concierge deadlines.',
    excerpt:
      'Segment tasks into morning, afternoon, and night routines so highrise residents enjoy a polished home around elevator peak hours.',
    hero: 'https://images.unsplash.com/photo-1505692952040-dc2003d9d1ba?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Complete laundry and bulk waste runs before eight in the morning to secure elevator availability and avoid resident rush periods.',
      'Focus on quiet chores such as dusting artwork and detailing kitchens mid afternoon when neighbors are at work and hallways stay calm.',
      'Reserve vacuuming and terrace rinsing for early evening with a cordless unit to minimize noise. Notify the concierge through your resident app once tasks finish.',
    ],
  },
  {
    slug: 'coastal-salt-shield',
    title: 'Coastal salt shield for seaside estates',
    hook: 'Stop ocean mist from corroding finishes by borrowing techniques from Mediterranean resorts.',
    excerpt:
      'Daily rinses, mineral neutralizers, and protective waxing preserve metalwork, glass, and stone in marine climates.',
    hero: 'https://images.unsplash.com/photo-1512912287652-896ed1e00baf?auto=format&fit=crop&w=1600&q=80',
    body: [
      'Rinse exterior glass, railings, and patio furniture with fresh water every morning to dissolve salt crystals before the sun bakes them in place.',
      'Apply a neutralizing spray made from distilled water and a teaspoon of baking soda once a week. This balances pH on metal and stone surfaces.',
      'Seal outdoor fixtures quarterly with a marine grade wax using a microfiber pad. The protective layer repels moisture and keeps the finish gleaming.',
    ],
  },
]

export function getCleanTip(slug: string) {
  return cleanTips.find((tip) => tip.slug === slug)
}
