import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <div>
      <Hero />

      <section id="projects" className="grain-bg px-4 sm:px-8 md:px-16 py-20 sm:py-28">
        <div className="relative z-10 mb-14 text-center">
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-ink">
            Projects
          </h2>
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} variant={index === 1 ? 'full' : 'panel'} />
          ))}
        </div>

        {projects[2] && (
          <div className="relative z-10 mx-auto mt-8 flex max-w-6xl justify-center">
            <div className="w-full sm:w-[calc(50%-1rem)]">
              <ProjectCard project={projects[2]} variant="full" />
            </div>
          </div>
        )}
      </section>

      <section className="bg-[#e6cfc8] px-4 sm:px-8 py-4 sm:py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 text-center sm:text-left">
          <img
            src="/about/uma-profile.jpg"
            alt="Uma Manthina"
            className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full object-cover border border-ink/10"
          />
          <p className="font-serif text-base sm:text-lg font-bold leading-snug text-ink">
            Have questions? I'd love to talk more about it.
            <br />
            Contact me:{' '}
            <a href="mailto:umamanthina@gmail.com" className="underline hover:text-ink/70 transition-colors">
              umamanthina@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
