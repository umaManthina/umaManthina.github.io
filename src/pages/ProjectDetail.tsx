import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import CaseStudy from '../components/CaseStudy'
import RecycleRing from '../components/RecycleRing'
import WireframePlaceholder from '../components/WireframePlaceholder'
import ScreenshotCarousel from '../components/ScreenshotCarousel'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug ?? '')

  if (!project) {
    return (
      <div className="grain-bg flex min-h-screen flex-col items-center justify-center gap-4 text-ink">
        <p className="font-display text-2xl uppercase">Project not found</p>
        <Link to="/" className="underline">
          Back home
        </Link>
      </div>
    )
  }

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="grain-bg min-h-screen">
      {/* Full-width banner — final artwork / cover */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-ink">
        {project.iframeArt ? (
          <iframe
            src={project.iframeArt}
            title={`${project.title} preview`}
            className="h-full w-full"
            frameBorder={0}
          />
        ) : project.useRecycleRingArt ? (
          <RecycleRing />
        ) : (
          <img
            src={project.bannerImage}
            alt={project.hasRealArtwork ? `${project.title} banner` : `${project.title} — placeholder banner artwork`}
            className="h-full w-full object-cover object-[center_15%]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <Link
          to="/"
          className="absolute left-6 top-6 z-10 font-display text-xs tracking-widest-lg uppercase text-cream/90 border border-cream/40 rounded-full px-4 py-2 hover:bg-cream/10 transition-colors"
        >
          ← Back
        </Link>

        <div className="absolute bottom-8 left-6 sm:left-16 z-10">
          <span className="font-display text-xs tracking-widest-lg uppercase text-gold">
            {project.bannerLabel ?? `Case study. ${project.number}`}
          </span>
        </div>
      </div>

      {/* Product presentation — "book jacket" layout: artwork above, product + info below */}
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-24">
        {project.previewImage && (
          <div className="mb-16 flex justify-center">
            <img
              src={project.previewImage}
              alt={`${project.title} preview`}
              className="w-full max-w-3xl rounded-sm border border-ink/10 shadow-xl"
            />
          </div>
        )}

        {project.previewPlaceholder && (
          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-3xl aspect-[16/9] rounded-sm shadow-xl">
              <WireframePlaceholder />
            </div>
          </div>
        )}

        {project.caseStudy ? (
          <>
            {project.introImages ? (
              <div className="mb-20 grid gap-10 sm:gap-14 md:grid-cols-2 md:items-center">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img
                    src={project.introImages[0]}
                    alt={`${project.title} prototype screenshot — home page`}
                    className="w-full rounded-sm border border-ink/10 shadow-xl"
                  />
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <img
                      src={project.introImages[1]}
                      alt={`${project.title} prototype screenshot — event listing`}
                      className="w-full rounded-sm border border-ink/10 shadow-xl"
                    />
                    <img
                      src={project.introImages[2]}
                      alt={`${project.title} prototype screenshot — account page`}
                      className="w-full rounded-sm border border-ink/10 shadow-xl"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50">
                    {project.number} / {String(projects.length).padStart(2, '0')}
                  </p>
                  <p className="mt-5 font-serif text-xl leading-relaxed text-ink/80">
                    {project.fullDescription}
                  </p>

                  <div className="mt-8 border-t border-ink/15 pt-6">
                    <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50 mb-3">
                      Credits
                    </p>
                    <ul className="space-y-1 font-serif text-ink/70">
                      {project.credits.map((credit) => (
                        <li key={credit}>{credit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-20 max-w-3xl mx-auto text-center">
                <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50">
                  {project.number} / {String(projects.length).padStart(2, '0')}
                </p>
                {project.previewHeading && (
                  <h2 className="mt-3 font-display text-xs tracking-widest-lg uppercase text-ink/50">
                    {project.previewHeading}
                  </h2>
                )}
                <p className="mt-5 font-serif text-xl leading-relaxed text-ink/80">
                  {project.fullDescription}
                </p>

                {project.previewScreens && (
                  <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
                    <div className="flex flex-col gap-1.5 sm:flex-row">
                      {project.previewScreens.map((src, i) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${project.title} product screen ${i + 1}`}
                          className="w-full sm:w-1/3"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <CaseStudy sections={project.caseStudy} />

            {!project.introImages && (
              <div className="mt-20 max-w-3xl mx-auto border-t border-ink/15 pt-6 text-center">
                <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50 mb-3">
                  Credits
                </p>
                <ul className="space-y-1 font-serif text-ink/70">
                  {project.credits.map((credit) => (
                    <li key={credit}>{credit}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.showContactNote && (
              <div className="mt-8 max-w-3xl mx-auto text-center space-y-1">
                <p className="font-serif text-xl leading-relaxed text-ink/80">
                  Have questions about this project? I’d love to talk more about it.
                </p>
                <p className="font-serif text-xl leading-relaxed text-ink/80">
                  Contact me: umamanthina@gmail.com
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="max-w-2xl text-center">
              <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50">
                {project.number} / {String(projects.length).padStart(2, '0')}
              </p>
              <h2 className="mt-3 font-display text-3xl uppercase text-ink">
                {project.title}
              </h2>
              {project.subheading && (
                <p className="mt-4 font-serif text-lg italic leading-relaxed text-ink/80">
                  {project.subheading}
                </p>
              )}
            </div>

            {project.screenshots ? (
              <ScreenshotCarousel images={project.screenshots} alt={project.title} />
            ) : (
              project.productImage && (
                <div className="mt-4 w-full max-w-2xl aspect-[16/9] overflow-hidden rounded-sm border border-ink/10 bg-black shadow-xl">
                  <img
                    src={project.productImage}
                    alt={project.hasRealArtwork ? `${project.title} artwork` : `${project.title} — placeholder product mockup`}
                    className="h-full w-full object-cover object-[center_15%]"
                  />
                </div>
              )
            )}

            {project.externalLink && (
              <a
                href={project.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs tracking-widest-lg uppercase text-ink/50 underline hover:text-ink/80 transition-colors"
              >
                {project.externalLink.label}
              </a>
            )}

            <div className="mt-6 max-w-2xl text-center">
              {project.bodyParagraphs ? (
                <div className="space-y-4">
                  {project.bodyParagraphs.map((paragraph, i) => (
                    <p key={i} className="font-serif text-lg leading-relaxed text-ink/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="font-serif text-lg leading-relaxed text-ink/80">
                  {project.fullDescription}
                </p>
              )}

              {project.controls && (
                <div className="mt-8 border-t border-ink/15 pt-6">
                  <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50 mb-3">
                    {project.controlsLabel ?? 'Controls'}
                  </p>
                  <ul className="space-y-1 font-serif text-ink/70">
                    {project.controls.map((control) => (
                      <li key={control.action}>
                        {control.action}: {control.keys}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 border-t border-ink/15 pt-6">
                <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50 mb-3">
                  Credits
                </p>
                <ul className="space-y-1 font-serif text-ink/70">
                  {project.credits.map((credit) => (
                    <li key={credit}>{credit}</li>
                  ))}
                </ul>
              </div>

              {project.showContactNote && (
                <div className="mt-8 space-y-1">
                  <p className="font-serif text-lg leading-relaxed text-ink/80">
                    Have questions about this project? I’d love to talk more about it.
                  </p>
                  <p className="font-serif text-lg leading-relaxed text-ink/80">
                    Contact me: umamanthina@gmail.com
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Prev / next navigation between case studies */}
        <div className="mt-20 flex items-center justify-between border-t border-ink/15 pt-8">
          <Link to={`/projects/${prev.slug}`} className="group">
            <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50">
              Previous
            </p>
            <p className="mt-1 font-display text-xl uppercase text-ink group-hover:text-ink/60 transition-colors">
              {prev.title}
            </p>
          </Link>
          <Link to={`/projects/${next.slug}`} className="group text-right">
            <p className="font-display text-xs tracking-widest-lg uppercase text-ink/50">
              Next
            </p>
            <p className="mt-1 font-display text-xl uppercase text-ink group-hover:text-ink/60 transition-colors">
              {next.title}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
