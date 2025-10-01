import clsx from 'clsx'
import type { ReactNode } from 'react'

const baseOverlay = 'linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.82))'

type PageBannerProps = {
  eyebrow?: string
  title: string
  description?: string
  image: string
  align?: 'center' | 'left'
  actions?: ReactNode
  className?: string
  overlay?: string
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  image,
  align = 'center',
  actions,
  className,
  overlay = baseOverlay,
}: PageBannerProps) {
  const alignmentClasses = align === 'left'
    ? 'mx-auto max-w-4xl space-y-5 text-left lg:ml-0'
    : 'mx-auto flex max-w-4xl flex-col items-center gap-5 text-center'

  return (
    <section className={clsx('hero-gradient relative overflow-hidden', className)}>
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: `${overlay}, url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-[1] container-px py-20 text-white sm:py-28">
        <div className={alignmentClasses}>
          {eyebrow ? (
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/80">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          {description ? <p className="text-sm text-white/85 sm:text-base">{description}</p> : null}
          {actions ? <div className={align === 'left' ? 'flex flex-wrap gap-3' : 'flex flex-wrap justify-center gap-3'}>{actions}</div> : null}
        </div>
      </div>
    </section>
  )
}
