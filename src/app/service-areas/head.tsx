import { siteUrl } from '../../../seo.config'

const criticalCss = `
.sa-pill-nav::-webkit-scrollbar { display: none; }
.sa-pill-nav { -ms-overflow-style: none; scrollbar-width: none; }
.sa-grid { display: grid; gap: 2.5rem; }
@media (min-width: 1024px) {
  .sa-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 3rem; }
}
`

export default function Head() {
  return (
    <>
      <link rel="canonical" href={`${siteUrl}/services-areas`} />
      <link rel="alternate" href={`${siteUrl}/services-areas`} hrefLang="en" />
      <link rel="alternate" href={`${siteUrl}/es/services-areas`} hrefLang="es" />
      <link rel="alternate" href={`${siteUrl}/services-areas`} hrefLang="x-default" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" href="/logo-skye.png" as="image" />
      <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
    </>
  )
}
