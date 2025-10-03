import { siteUrl } from '../../../../seo.config'

export const runtime = 'edge'

const script = `(() => {
  const existing = document.getElementById('skye-cleaning-widget')
  if (existing) return

  const style = document.createElement('style')
  const css = [
    "#skye-cleaning-widget { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }",
    "#skye-cleaning-widget button { background: linear-gradient(135deg, #2E7DD7, #0B2234); color: #fff; border: none; border-radius: 999px; padding: 0.75rem 1.5rem; font-weight: 600; cursor: pointer; box-shadow: 0 14px 32px rgba(12, 42, 74, 0.22); transition: transform 180ms ease, box-shadow 180ms ease; }",
    "#skye-cleaning-widget button:hover { transform: translateY(-1px); box-shadow: 0 18px 40px rgba(12, 42, 74, 0.28); }",
    "#skye-cleaning-widget form { margin-top: 1rem; display: grid; gap: 0.75rem; }",
    "#skye-cleaning-widget label { font-size: 0.85rem; font-weight: 600; color: #0B2234; }",
    "#skye-cleaning-widget input { width: 100%; border: 1px solid rgba(18, 60, 84, 0.24); border-radius: 14px; padding: 0.65rem 0.85rem; font-size: 0.9rem; }",
    "#skye-cleaning-widget small { font-size: 0.75rem; color: rgba(18, 60, 84, 0.7); }",
    "#skye-cleaning-widget .skye-link { margin-top: 0.5rem; display: inline-block; font-size: 0.8rem; color: #2E7DD7; font-weight: 600; text-decoration: underline; }",
  ].join(' ')
  style.textContent = css
  document.head.appendChild(style)

  const wrapper = document.createElement('div')
  wrapper.id = 'skye-cleaning-widget'
  const linkHref = '${siteUrl}/services-areas'
  const markup = [
    '<button type="button" id="skye-widget-toggle">Get Cleaning Estimate</button>',
    '<form id="skye-widget-form" style="display: none;">',
    '  <label>',
    '    Name',
    '    <input type="text" name="name" required placeholder="Full name" />',
    '  </label>',
    '  <label>',
    '    Email',
    '    <input type="email" name="email" required placeholder="name@example.com" />',
    '  </label>',
    '  <label>',
    '    City or neighborhood',
    '    <input type="text" name="city" required placeholder="Belvedere, Tiburon, Napa…" />',
    '  </label>',
    '  <button type="submit">Request Concierge Callback</button>',
    '  <small>We respond within one business hour.</small>',
    '</form>',
    '<a class="skye-link" href="' + linkHref + '" target="_blank" rel="noopener">Skye Cleaning Group</a>',
  ].join('\n')
  wrapper.innerHTML = markup

  const scriptEl = document.currentScript
  const mountTarget = scriptEl?.parentElement ?? document.body
  mountTarget.appendChild(wrapper)

  const toggle = wrapper.querySelector('#skye-widget-toggle')
  const form = wrapper.querySelector('#skye-widget-form')

  toggle?.addEventListener('click', () => {
    if (!form) return
    form.setAttribute('style', form.getAttribute('style') === 'display: none;' ? 'display: grid;' : 'display: none;')
  })

  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(form)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      city: data.get('city'),
      submittedAt: new Date().toISOString(),
    }
    console.info('Skye Cleaning widget submission', payload)
    form.reset()
    form.setAttribute('style', 'display: none;')
    alert('Thank you! The Skye concierge desk will reach out shortly.')
  })
})()
`

export function GET() {
  return new Response(script, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
