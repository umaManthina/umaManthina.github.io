import { Link } from 'react-router-dom'
import DanceMarquee from '../components/DanceMarquee'

export default function About() {
  return (
    <div className="grain-bg min-h-screen">
      <nav className="px-6 py-6 sm:px-10">
        <Link
          to="/"
          className="font-display text-xs tracking-widest-lg uppercase text-ink/70 border border-ink/20 rounded-full px-4 py-2 hover:bg-ink/5 transition-colors"
        >
          ← Back
        </Link>
      </nav>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 py-10 sm:py-16">
        <div>
          <h1 className="font-poster font-black uppercase leading-[0.82] text-[#b5562f] text-[3.25rem] sm:text-[4.35rem] tracking-tight">
            Hello!
          </h1>

          <div className="mt-6 max-w-md border-t border-ink/20 pt-6 space-y-5 font-serif text-lg leading-relaxed text-ink/80">
            <p>
              My name is Uma Manthina, and I'm an aspiring Product Designer driven by a passion
              for accessibility, community, and human-computer interaction. I believe that
              thoughtful design has the power to build community and foster meaningful, inclusive
              experiences.
            </p>
            <p>
              Outside the world of design, I am a dedicated Bharatanatyam dancer. I love to
              celebrate and express my culture through this beautiful dance form.
            </p>
            <p>
              As a designer and teammate, I consider myself hardworking and adaptable. I believe
              every interaction holds a story, finding lessons in even the most mundane.
            </p>
          </div>

          <div className="mt-8 max-w-md border-t border-ink/20 pt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="flex items-center gap-2 font-display text-xs tracking-widest-lg uppercase text-ink/50">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Contact me
            </span>
            <a
              href="mailto:umamanthina@gmail.com"
              className="font-serif text-lg text-ink/80 underline hover:text-ink transition-colors"
            >
              umamanthina@gmail.com
            </a>
          </div>
        </div>

        <div className="aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2rem] border border-ink/10 shadow-2xl">
          <img
            src="/about/uma.jpg"
            alt="Uma Manthina"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2">
        <DanceMarquee />
      </div>
    </div>
  )
}
