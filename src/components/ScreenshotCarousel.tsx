import { useEffect, useState, type CSSProperties } from 'react'

interface ScreenshotCarouselProps {
  images: string[]
  alt: string
}

// Card matches the size of the placeholder rectangle used elsewhere on the site.
const CARD_WIDTH = 'min(88vw, 42rem)'
const CARD_HEIGHT = 'min(49.5vw, 23.625rem)'

export default function ScreenshotCarousel({ images, alt }: ScreenshotCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [images.length])

  return (
    <>
      {/* No width constraint of its own — centers exactly where the parent centers
          everything else (e.g. the itch.io link below), and the side cards overflow
          past it freely since nothing here clips overflow. */}
      <div className="mt-4 flex justify-center">
        <div
          className="relative"
          style={{ width: CARD_WIDTH, height: CARD_HEIGHT, perspective: '1800px' }}
        >
          {images.map((src, i) => {
            let offset = i - activeIndex
            if (offset > images.length / 2) offset -= images.length
            if (offset < -images.length / 2) offset += images.length

            const isActive = offset === 0
            const abs = Math.abs(offset)
            const sign = Math.sign(offset)
            // Only the immediate previous/next screenshot is visible.
            const visible = abs <= 1

            // Rotation/depth/scale only depend on which side a card is on, never on
            // how far off it's parked — so a card waiting off-screen already matches
            // the exact pose it'll have once it becomes the visible neighbor, and
            // promoting it is a pure slide-and-fade instead of also re-tilting.
            const style: CSSProperties = {
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              // Positive rotation on the outer (offset) side, so the edge nearer the
              // screen border tapers back and the edge nearer the main card stays forward —
              // side cards fan outward rather than pinching in toward the center.
              transform: `translate(-50%, -50%) translateX(${offset * 58}%) translateZ(${isActive ? 0 : -140}px) rotateY(${sign * 30}deg) scale(${isActive ? 1 : 0.82})`,
              zIndex: isActive ? 10 : 5,
              opacity: visible ? (isActive ? 1 : 0.55) : 0,
              pointerEvents: visible ? 'auto' : 'none',
            }

            return (
              <button
                key={src}
                type="button"
                onClick={() => (isActive ? setLightboxOpen(true) : setActiveIndex(i))}
                className="absolute left-1/2 top-1/2 overflow-hidden rounded-sm border border-ink/10 bg-black shadow-2xl transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={style}
                aria-label={
                  isActive
                    ? `View screenshot ${i + 1} full size`
                    : offset < 0
                      ? 'Show previous screenshot'
                      : 'Show next screenshot'
                }
                tabIndex={visible ? 0 : -1}
              >
                <img
                  src={src}
                  alt={`${alt} — screenshot ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {!isActive && <div className="absolute inset-0 bg-black/30" />}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={showPrev}
            className="font-display text-2xl text-ink/50 hover:text-ink transition-colors"
            aria-label="Previous screenshot"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === activeIndex ? 'bg-ink' : 'bg-ink/25'
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

        <button
          type="button"
          onClick={showNext}
          className="font-display text-2xl text-ink/50 hover:text-ink transition-colors"
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 font-display text-xs tracking-widest-lg uppercase text-cream/90 border border-cream/40 rounded-full px-4 py-2 hover:bg-cream/10 transition-colors"
          >
            Close ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-4 sm:left-8 font-display text-2xl text-cream/80 hover:text-cream transition-colors"
            aria-label="Previous screenshot"
          >
            ‹
          </button>

          <img
            src={images[activeIndex]}
            alt={`${alt} — screenshot ${activeIndex + 1}`}
            className="max-h-[80vh] max-w-full rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-4 sm:right-8 font-display text-2xl text-cream/80 hover:text-cream transition-colors"
            aria-label="Next screenshot"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-xs tracking-widest-lg uppercase text-cream/60">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
