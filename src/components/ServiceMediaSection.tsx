import Image from 'next/image'

import type { ServiceSection } from '@/data/servicePages'

type Props = {
  section: ServiceSection
  index: number
}

export default function ServiceMediaSection({ section, index }: Props) {
  const mediaLeft = section.imagePosition === 'left'
  const containerClass = mediaLeft ? 'lg:grid-cols-[1.05fr_0.95fr]' : 'lg:grid-cols-[0.95fr_1.05fr]'

  return (
    <section className="container-px">
      <div
        className={`slx-section ${containerClass} ${index % 2 === 1 ? '--split' : ''}`}
      >
        <div className={`slx-section__media ${mediaLeft ? '' : 'order-last lg:order-none'}`}>
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
        <div className="slx-section__content">
          <span className="slx-section__eyebrow">Signature routine</span>
          <h2 className="slx-section__title">{section.title}</h2>
          <div className="slx-section__list">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
