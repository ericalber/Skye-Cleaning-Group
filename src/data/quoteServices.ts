export type QuoteServiceValue =
  | 'recurring'
  | 'deep'
  | 'move'
  | 'deep_post_construction'
  | 'deep_carpet'
  | 'deep_windows'
  | 'janitorial'
  | 'light'
  | 'apartment'
  | 'event'
  | 'deep_airbnb'
  | 'deep_move_out'
  | 'deep_special_event'

export type QuoteServiceOption = {
  value: QuoteServiceValue
  label: string
  seoLabel: string
}

export const quoteServiceOptions: QuoteServiceOption[] = [
  { value: 'recurring', label: 'Recurring Cleaning', seoLabel: 'recurring cleaning San Francisco' },
  { value: 'deep', label: 'One-Time Deep Clean', seoLabel: 'deep cleaning in San Francisco' },
  { value: 'move', label: 'Move In / Move Out', seoLabel: 'move out cleaning Bay Area' },
  {
    value: 'deep_post_construction',
    label: 'Post-Construction Cleaning',
    seoLabel: 'post construction cleaning Bay Area',
  },
  { value: 'deep_carpet', label: 'Carpet & Upholstery', seoLabel: 'carpet cleaning for corporate suites' },
  { value: 'deep_windows', label: 'Window Cleaning', seoLabel: 'window cleaning for luxury properties' },
  { value: 'janitorial', label: 'Janitorial / Commercial', seoLabel: 'janitorial services San Francisco' },
  { value: 'light', label: 'Light Commercial', seoLabel: 'light commercial cleaning Bay Area' },
  { value: 'apartment', label: 'Apartment & Condo', seoLabel: 'apartment cleaning concierge' },
  { value: 'event', label: 'Post-Event Refresh', seoLabel: 'event cleanup services San Francisco' },
  { value: 'deep_airbnb', label: 'Airbnb Turnover Detailing', seoLabel: 'airbnb turnover cleaning' },
  { value: 'deep_move_out', label: 'Detailed Move-Out Inspection', seoLabel: 'move out inspection cleaning' },
  { value: 'deep_special_event', label: 'Special Event Reset', seoLabel: 'special event cleaning' },
]

export const quoteServiceValues = quoteServiceOptions.map((option) => option.value) as QuoteServiceValue[]
