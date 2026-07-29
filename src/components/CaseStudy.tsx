import type { CaseStudySection } from '../data/projects'

export default function CaseStudy({ sections }: { sections: CaseStudySection[] }) {
  return (
    <div className="space-y-20 sm:space-y-24">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2
            className={`font-display text-2xl sm:text-3xl uppercase text-ink border-b border-ink/15 pb-4 ${section.centerText ? 'text-center' : ''}`}
          >
            {section.heading}
          </h2>

          {section.paragraphs && (
            <div className={`mt-6 space-y-4 max-w-3xl ${section.centerText ? 'mx-auto text-center' : ''}`}>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-serif text-lg leading-relaxed text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.list && (
            <ul
              className={`mt-6 max-w-3xl list-disc space-y-2 pl-5 font-serif text-lg text-ink/80 ${section.centerText ? 'mx-auto text-center list-none pl-0' : ''}`}
            >
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {section.stats && (
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              {section.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-sm border border-ink/10 bg-white p-6 text-center shadow-[4px_4px_8px_rgba(0,0,0,0.15)]"
                >
                  <p className="font-display text-3xl sm:text-4xl font-black leading-none text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-serif text-sm text-ink/60 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {section.personas && (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.personas.map((persona) => (
                <div
                  key={persona.name}
                  className={`rounded-sm border border-ink/10 bg-white p-8 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] ${section.centerText ? 'text-center' : ''}`}
                >
                  <h3 className="font-display text-xl uppercase text-ink">{persona.name}</h3>
                  <p className="mt-1 font-display text-xs tracking-widest-lg uppercase text-ink/40">
                    {persona.tagline}
                  </p>
                  <p className="mt-4 font-serif text-base leading-relaxed text-ink/80">
                    {persona.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          {section.link && (
            <a
              href={section.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center rounded-sm bg-[#48A4AA] px-8 py-5 font-display text-sm sm:text-base tracking-widest-lg uppercase text-white shadow-[4px_4px_8px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#3d8c91]"
            >
              {section.link.label}
            </a>
          )}

          {section.images && (
            <div className="mt-8 space-y-6">
              {section.images.map((image) => (
                <figure key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-sm border border-ink/10 bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.15)]"
                  />
                  {image.caption && (
                    <figcaption className={`mt-2 text-sm text-ink/50 ${section.centerText ? 'text-center' : ''}`}>
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
