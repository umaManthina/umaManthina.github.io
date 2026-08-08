import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Browsers keep scroll position across client-side route changes, so links
// land wherever the previous page happened to be scrolled to. Force new
// routes to open at the top, unless the navigation targets an in-page anchor.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
