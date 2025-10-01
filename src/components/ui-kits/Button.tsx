import Link from 'next/link'
import clsx from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import { forwardRef } from 'react'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition duration-200 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)] focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:-translate-y-[1px] active:translate-y-[1px]'

const variants = {
  primary:
    'border-transparent bg-gradient-to-r from-[var(--skye-600)] to-[var(--skye-400)] text-white shadow-[0_16px_38px_rgba(18,60,84,0.24)] hover:shadow-[0_20px_48px_rgba(18,60,84,0.26)]',
  secondary:
    'border-[var(--skye-200)] bg-white text-[var(--skye-700)] shadow-[0_16px_34px_rgba(12,32,64,0.16)] hover:border-[var(--skye-300)] hover:bg-[color-mix(in_oklab,var(--skye-50)_72%,white)]',
  ghost:
    'border-transparent bg-transparent text-[var(--skye-700)] hover:bg-[color-mix(in_oklab,var(--skye-50)_70%,white)]',
}

const sizes = {
  md: 'h-11 px-5',
  lg: 'h-12 px-6 text-base',
}

type ButtonVariant = keyof typeof variants

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: keyof typeof sizes
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  className?: string
}

type ButtonButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonLinkProps = ButtonBaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> & { href: string }

type PremiumButtonProps = ButtonButtonProps | ButtonLinkProps

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, PremiumButtonProps>(function Button(props, ref) {
  if ('href' in props && props.href) {
    const {
      variant = 'primary',
      size = 'md',
      className,
      leftIcon,
      rightIcon,
      children,
      href,
      ...anchorProps
    } = props as ButtonLinkProps

    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        {...anchorProps}
        className={clsx(baseClasses, variants[variant], sizes[size], className)}
      >
        {leftIcon ? <span className="inline-flex items-center justify-center">{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? <span className="inline-flex items-center justify-center">{rightIcon}</span> : null}
      </Link>
    )
  }

  const {
    variant = 'primary',
    size = 'md',
    className,
    leftIcon,
    rightIcon,
    children,
    type = 'button',
    ...buttonProps
  } = props as ButtonButtonProps

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      {...buttonProps}
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
    >
      {leftIcon ? <span className="inline-flex items-center justify-center">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="inline-flex items-center justify-center">{rightIcon}</span> : null}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
