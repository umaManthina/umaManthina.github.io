import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { MouseEvent } from 'react'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleProjectsClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#projects')
    }
  }

  return (
    <nav className="absolute inset-x-0 top-0 z-30 flex items-center justify-end gap-8 px-6 py-6 sm:px-10">
      <a
        href="/#projects"
        onClick={handleProjectsClick}
        className="font-display text-xs tracking-widest-lg uppercase text-cream/90 hover:text-cream transition-colors"
      >
        Projects
      </a>
      <Link
        to="/about"
        className="font-display text-xs tracking-widest-lg uppercase text-cream/90 hover:text-cream transition-colors"
      >
        About
      </Link>
    </nav>
  )
}
