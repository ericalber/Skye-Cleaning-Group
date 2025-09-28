import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'

export default function ContactBar() {
  return (
    <div className="sticky top-16 z-40 border-b border-white/70 bg-white/95 shadow-[0_8px_20px_rgba(18,60,84,0.12)] backdrop-blur">
      <div className="container-px">
        <div className="flex flex-wrap items-center justify-center gap-2 py-1.5 sm:justify-end">
          <Link
            href="sms:+14154978008"
            className="btn flex-1 justify-center border border-[var(--skye-200)] bg-[var(--foam)] text-[var(--skye-700)] shadow-sm transition hover:border-[var(--skye-300)] hover:bg-[var(--skye-100)] sm:flex-initial sm:min-w-[11rem]"
            aria-label="Send us an SMS now"
          >
            <MessageCircle className="mr-2 size-4" aria-hidden="true" />
            Text Us Now
          </Link>
          <Link
            href="tel:+14154978008"
            className="btn btn-primary flex-1 justify-center sm:flex-initial sm:min-w-[11rem]"
            aria-label="Call us now"
          >
            <Phone className="mr-2 size-4" aria-hidden="true" />
            Call Now
          </Link>
        </div>
      </div>
    </div>
  )
}
