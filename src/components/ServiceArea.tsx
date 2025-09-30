const bayArea = [
  'San Francisco - Pacific Heights, SoMa, Sunset, Marina',
  'Marin County - Mill Valley, Sausalito, Tiburon, Corte Madera',
  'Select Sonoma County - Petaluma, Sonoma, Healdsburg',
  'North Bay tech and creative studios',
]

const addons = [
  'Available for tight move-in / move-out timelines',
  'Extended hours for discreet office service',
  'Bilingual team members (English / Portuguese) on request',
]

export default function ServiceArea() {
  return (
    <section id="areas" className="container-px py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface surface--white p-8">
          <span className="chip">Local coverage</span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">North Bay is our backyard.</h2>
          <p className="mt-3 text-slate-600">
            Based in San Francisco, we service premium residences and boutique workspaces across the northern Bay Area,
            optimizing routing so crews stay punctual.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-900">
            {bayArea.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-skye-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="surface surface--skye text-white">
          <div className="relative overflow-hidden rounded-[inherit] p-8">
            <h3 className="text-2xl font-semibold">On-demand expertise</h3>
            <p className="mt-3 text-sm text-white/90">
              We tailor crew size, duration, and materials for residences and light commercial spaces. Count on us for:
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              {addons.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-white/70" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              Limited weekly availability - reserve your visit early.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
