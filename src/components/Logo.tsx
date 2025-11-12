import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Skye Cleaning Group home"
      className={`inline-flex items-center ${className}`}
    >
      <span className="relative block h-12 w-[200px] sm:h-14 sm:w-[220px]">
        <img
          src="/logo-skye.png"
          alt="Skye Cleaning Group"
          className="absolute inset-0 h-full w-full object-contain"
          decoding="async"
          loading="eager"
        />
      </span>
    </Link>
  )
}
