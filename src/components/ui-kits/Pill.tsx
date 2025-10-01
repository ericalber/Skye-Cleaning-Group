import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import { tripTakerMotion } from './Motion'

type PillBaseProps = {
  children: ReactNode
  className?: string
  active?: boolean
}

type PillButtonProps = PillBaseProps & { as: 'button' } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>
type PillSpanProps = PillBaseProps & { as?: 'span' } & Omit<ComponentPropsWithoutRef<'span'>, 'className'>

type PillProps = PillButtonProps | PillSpanProps

const baseClasses = clsx(
  'inline-flex w-full items-center justify-between gap-2 rounded-xl border border-[rgba(18,60,84,0.16)] bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--skye-800)] shadow-[0_14px_32px_rgba(12,32,64,0.14)] backdrop-blur-[2px] transition-colors duration-200 ease-out',
  'hover:border-[var(--skye-300)] hover:bg-[color-mix(in_oklab,var(--skye-50)_72%,white)]'
)

const activeClasses = 'border-[var(--skye-500)] bg-[color-mix(in_oklab,var(--skye-50)_80%,white)] text-[var(--skye-900)]'

const Pill = forwardRef<HTMLElement, PillProps>(function Pill({ as = 'span', className, active, children, ...rest }, ref) {
  const Component = as
  return (
    <Component
      ref={ref as never}
      className={clsx(baseClasses, tripTakerMotion, active && activeClasses, className)}
      aria-pressed={Component === 'button' ? active : undefined}
      {...(rest as Record<string, unknown>)}
    >
      <span className="flex-1 text-left">{children}</span>
    </Component>
  )
})

export default Pill
