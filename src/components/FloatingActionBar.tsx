import Image from 'next/image'

export default function FloatingActionBar() {
  return (
    <div className="pointer-events-none fixed bottom-10 right-4 z-50 flex justify-end md:bottom-20 md:right-16">
      <a
        href="sms:+14154978008"
        className="pointer-events-auto relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 transition hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)] drop-shadow-[0_18px_42px_rgba(15,60,90,0.3)]"
        aria-label="Send an SMS to Skye Cleaning Group"
      >
        <span
          aria-hidden="true"
          className="absolute -top-1 -right-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-[var(--skye-500)] shadow-[0_0_0_2px_rgba(255,255,255,0.9)]"
        />
        <Image src="/icons/sms.svg" alt="SMS icon" width={44} height={44} className="h-11 w-11 object-contain" />
      </a>
    </div>
  )
}
