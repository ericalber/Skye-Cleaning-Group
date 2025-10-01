import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode, Ref } from 'react'
import { forwardRef } from 'react'

import { tripTakerMotion } from './Motion'

type CardTone = 'default' | 'midnight' | 'foam'

type BaseProps = {
  children: ReactNode
  className?: string
  active?: boolean
  padding?: string
  tone?: CardTone
  spotlight?: boolean
}

type CardDivProps = BaseProps & { as?: 'div' } & Omit<ComponentPropsWithoutRef<'div'>, 'className'>
type CardButtonProps = BaseProps & { as: 'button' } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>
type CardAnchorProps = BaseProps & { as: 'a' } & Omit<ComponentPropsWithoutRef<'a'>, 'className'>

type CardProps = CardDivProps | CardButtonProps | CardAnchorProps

type ToneMap = Record<CardTone, string>

const ANGLED_CUT = {
  clipPath: 'polygon(0 60%, 100% 95%, 100% 100%, 0% 100%)',
}

const baseClasses = 'group/card relative flex h-full overflow-hidden rounded-[2.25rem] backdrop-blur-[6px] transition-colors duration-300 ease-out'

const toneClasses: ToneMap = {
  default:
    'border border-[rgba(18,60,84,0.12)] bg-[color-mix(in_oklab,var(--skye-50)_32%,white)] text-slate-700 shadow-[0_24px_64px_rgba(12,32,64,0.16)]',
  midnight:
    'border border-transparent bg-gradient-to-br from-[rgba(9,31,53,0.95)] via-[rgba(18,58,90,0.9)] to-[rgba(42,107,158,0.82)] text-white shadow-[0_34px_90px_rgba(8,26,45,0.45)]',
  foam:
    'border border-[rgba(18,60,84,0.08)] bg-gradient-to-br from-white via-[rgba(236,246,255,0.92)] to-[rgba(209,233,251,0.88)] text-slate-700 shadow-[0_26px_72px_rgba(15,60,90,0.16)]',
}

const angledBackground: ToneMap = {
  default: 'bg-[color-mix(in_oklab,var(--skye-50)_70%,white)] opacity-90',
  midnight: 'bg-white/12 opacity-75',
  foam: 'bg-white/85 opacity-95',
}

const gradientOverlay: ToneMap = {
  default:
    'bg-[radial-gradient(120%_120%_at_15%_10%,rgba(95,175,255,0.22),transparent_55%),radial-gradient(180%_140%_at_85%_-20%,rgba(255,255,255,0.5),transparent_65%)]',
  midnight:
    'bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(160%_140%_at_80%_10%,rgba(122,199,255,0.28),transparent_70%)]',
  foam:
    'bg-[radial-gradient(120%_120%_at_20%_10%,rgba(95,175,255,0.24),transparent_60%),radial-gradient(160%_140%_at_80%_-10%,rgba(255,255,255,0.58),transparent_65%)]',
}

const activeClasses = 'border-[var(--skye-300)] shadow-[0_34px_90px_rgba(12,32,64,0.24)]'

const innerPadding = 'p-6 sm:p-7'

const Card = forwardRef<HTMLElement, CardProps>(function Card(
  { as: Component = 'div', className, active, children, padding = innerPadding, tone = 'default', spotlight = true, ...rest },
  ref
) {
  return (
    <Component
      ref={ref as Ref<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>}
      className={clsx(baseClasses, toneClasses[tone], tripTakerMotion, active && activeClasses, className)}
      data-card-active={active || undefined}
      data-card-tone={tone}
      aria-pressed={Component === 'button' ? active : undefined}
      {...(rest as Record<string, unknown>)}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none absolute inset-0 rounded-[2.25rem] mix-blend-soft-light transition-opacity duration-500',
          tone === 'midnight' ? 'border border-white/10' : 'border border-white/20',
          spotlight ? 'opacity-100 group-hover/card:opacity-90' : 'opacity-70'
        )}
      />
      {spotlight ? (
        <span
          aria-hidden="true"
          className={clsx(
            'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out',
            gradientOverlay[tone],
            'group-hover/card:opacity-100'
          )}
        />
      ) : null}
      <span
        aria-hidden="true"
        className={clsx('pointer-events-none absolute -bottom-px left-0 h-12 w-full', angledBackground[tone])}
        style={ANGLED_CUT as Record<string, string>}
      />
      <div className={clsx('relative z-[1] flex h-full flex-col', padding)}>{children}</div>
    </Component>
  )
})

Card.displayName = 'Card'

export default Card
