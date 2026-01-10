export type Area = {
  slug: string
  name: string
  description: string
  image: string
  neighborhoods: { name: string; image: string }[]
}

export const serviceAreas: Area[] = [
  {
    slug: 'san-francisco-proper',
    name: 'San Francisco Proper',
    description:
      'Concierge residential and executive care for iconic addresses. Daily briefings, discreet overnight resets, and hospitality staging keep penthouses and boardrooms inspection ready.',
    image: '/images/service-areas/san-francisco-proper.jpg',
    neighborhoods: [
      {
        name: 'Pacific Heights',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Russian Hill',
        image: 'https://images.unsplash.com/photo-1451906278231-17b8ff0a8880?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Nob Hill',
        image: 'https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Presidio Heights',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Mission Bay',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    slug: 'marin-county',
    name: 'Marin County',
    description:
      'Estate programs for waterfront villas and hillside retreats. Guesthouse turnarounds, yacht coordination, and climate-controlled wine cellar care happen in sync with your social calendar.',
    image: '/images/service-areas/marin-county.jpg',
    neighborhoods: [
      {
        name: 'Mill Valley',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Tiburon',
        image: 'https://images.unsplash.com/photo-1451906278231-17b8ff0a8880?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Sausalito',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Larkspur',
        image: 'https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Corte Madera',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    slug: 'napa-valley',
    name: 'Napa Valley',
    description:
      'Harvest-season villas, private tasting salons, and hospitality suites stay camera ready. Seasonal amenity staging, barrel-room detailing, and guesthouse resets happen on your timeline.',
    image: '/images/service-areas/napa-valley.jpg',
    neighborhoods: [
      {
        name: 'Napa',
        image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Yountville',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'St. Helena',
        image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Calistoga',
        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Oakville',
        image: 'https://images.unsplash.com/photo-1442551382982-e59a4efb3c86?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    slug: 'sonoma-north-bay',
    name: 'Sonoma & North Bay',
    description:
      'Country clubs, vineyard retreats, and artist residences receive concierge attention. We coordinate with landscape, catering, and wine teams to keep every space guest-ready.',
    image: '/images/service-areas/sonoma-north-bay.jpg',
    neighborhoods: [
      {
        name: 'Healdsburg',
        image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Santa Rosa',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Glen Ellen',
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Petaluma',
        image: 'https://images.unsplash.com/photo-1442551382982-e59a4efb3c86?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Sebastopol',
        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    slug: 'wine-country-retreats',
    name: 'Wine Country Retreats',
    description:
      'Private vineyards and boutique lodging where cleanliness supports the tasting experience. We manage guesthouse resets, amenity curation, and al fresco staging.',
    image: '/images/service-areas/wine-country-retreats.jpg',
    neighborhoods: [
      {
        name: 'Carneros',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'American Canyon',
        image: 'https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad4?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Boyes Hot Springs',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Kenwood',
        image: 'https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Sonoma Mountain',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
]
