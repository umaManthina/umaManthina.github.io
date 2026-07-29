import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import RecycleRing from './RecycleRing'
import WireframePlaceholder from './WireframePlaceholder'

interface ProjectCardProps {
  project: Project
  variant: 'panel' | 'full'
}

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  if (variant === 'full') {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className={`group relative block aspect-[16/9] overflow-hidden rounded-sm border border-black/10 bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.45)] ${project.hasRealArtwork ? '' : 'p-2 sm:p-2.5'}`}
      >
        <div className="absolute inset-0 overflow-hidden bg-black">
          {project.iframeArt ? (
            <iframe
              src={project.iframeArt}
              title={`${project.title} preview`}
              className="h-full w-full pointer-events-none"
              frameBorder={0}
              tabIndex={-1}
            />
          ) : project.useRecycleRingArt ? (
            <RecycleRing />
          ) : project.hasRealArtwork ? (
            <>
              <img
                src={project.cardImage}
                alt={`${project.title} artwork`}
                className="h-full w-full object-cover object-[center_15%] transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            </>
          ) : (
            <WireframePlaceholder className="transition-transform duration-500 ease-out group-hover:scale-105" />
          )}
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
          {project.hasRealArtwork ? (
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.55em] text-white text-center -mb-2 sm:-mb-3">
              {project.title}
            </h3>
          ) : (
            <>
              <span className="font-display text-xs tracking-widest-lg uppercase text-black/50">
                Part. {project.number}
              </span>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl uppercase leading-none text-black">
                {project.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base max-w-xs text-black/70">
                {project.description}
              </p>
            </>
          )}
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block aspect-[16/9] overflow-hidden rounded-sm border border-black/10 bg-white p-3 sm:p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.45)]"
    >
      <div className="flex h-full w-full gap-4 sm:gap-6">
        <div className="w-[58%] shrink-0">
          {project.hasRealArtwork ? (
            <div className="h-full w-full overflow-hidden border border-black/10">
              <img
                src={project.cardImage}
                alt={`${project.title} artwork`}
                className="h-full w-full object-cover object-[90%_center]"
              />
            </div>
          ) : (
            <WireframePlaceholder />
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="flex items-baseline gap-0.5">
            <span className="font-display text-xs tracking-widest-lg uppercase text-black/40">
              Part.
            </span>
            <span className="font-display text-6xl sm:text-7xl font-black leading-none text-black">
              {project.number}
            </span>
          </div>
          <h3 className="mt-4 font-display text-lg sm:text-xl uppercase tracking-wide text-black">
            {project.title}
          </h3>
          {project.description && (
            <p className="mt-2 text-sm text-black/60 leading-snug">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
