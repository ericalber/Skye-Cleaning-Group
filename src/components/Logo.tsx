import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Skye Cleaning Group home"
      className={`inline-flex items-center ${className}`}
    >
      <span className="relative block h-12 w-[200px] sm:h-14 sm:w-[220px]">
        <Image
          src="/logo-skye.png"
          alt="Skye Cleaning Group"
          fill
          className="object-contain"
          priority
        />
      </span>
    </Link>
  )
}
