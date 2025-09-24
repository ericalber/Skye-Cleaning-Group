import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-12 w-[200px] sm:h-14 sm:w-[220px] ${className}`}>
      <Image
        src="/logo-skye.png"
        alt="Skye Cleaning Group"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
