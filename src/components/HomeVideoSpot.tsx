const DEFAULT_VIDEO_ID = 'ZkwoMPmxj-g'
const YOUTUBE_CHANNEL_ID =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID ?? process.env.YOUTUBE_CHANNEL_ID

async function fetchLatestChannelVideoId(): Promise<string | null> {
  if (!YOUTUBE_CHANNEL_ID) return null

  try {
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
      { next: { revalidate: 60 * 60 } }
    )

    if (!response.ok) return null

    const feed = await response.text()
    const match = feed.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)

    return match?.[1] ?? null
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Failed to load latest YouTube video.', error)
    }
    return null
  }
}

export default async function HomeVideoSpot() {
  const latestVideoId = await fetchLatestChannelVideoId()
  const videoId = latestVideoId ?? DEFAULT_VIDEO_ID

  return (
    <section className="bg-[color-mix(in_oklab,var(--skye-50)_65%,white)] py-16">
      <div className="container-px">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[var(--skye-100)] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--skye-600)]">
            Meet Skye Cleaning Group
          </span>
          <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Behind the scenes of our concierge cleaning ritual</h2>
          <p className="max-w-3xl text-sm text-slate-600 sm:text-base">
            Tour our playbooks, chemistry lab, and executive reporting workflow to see how every visit earns the Skye seal.
          </p>
          <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_28px_80px_rgba(12,32,64,0.18)]">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title="Skye Cleaning Group institutional video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
