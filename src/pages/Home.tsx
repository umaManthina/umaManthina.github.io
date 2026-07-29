import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="grain-bg px-4 sm:px-8 md:px-16 py-20 sm:py-28">
        <div className="relative z-10 mb-14 text-center">
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-ink">
            Projects
          </h2>
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant={index === 1 || index === 2 ? 'full' : 'panel'}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
