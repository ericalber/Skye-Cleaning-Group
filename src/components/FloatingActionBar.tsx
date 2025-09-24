import Link from 'next/link'

export default function FloatingActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <div className="flex w-full max-w-md items-center gap-3">
        <Link
          href="/?service=recurring#quote"
          className="btn btn-secondary flex-1"
          aria-label="Request a cleaning quote"
        >
          Get Quote
        </Link>
        <a href="tel:+14154978008" className="btn btn-primary flex-1" aria-label="Call Skye Cleaning Group">
          Call Us
        </a>
      </div>
    </div>
  )
}
