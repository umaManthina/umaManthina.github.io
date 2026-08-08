import { useLayoutEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const [gap, setGap] = useState<{ top: number; left: number; height: number } | null>(null)

  useLayoutEffect(() => {
    function measure() {
      const section = sectionRef.current
      const frame = frameRef.current
      const title = titleRef.current
      if (!section || !frame || !title) return

      const sectionRect = section.getBoundingClientRect()
      const frameRect = frame.getBoundingClientRect()
      const titleRect = title.getBoundingClientRect()

      const buffer = 2
      setGap({
        top: titleRect.top - sectionRect.top - buffer,
        left: frameRect.left - sectionRect.left,
        height: titleRect.height + buffer * 2,
      })
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[70vh] w-full bg-black p-3 sm:p-4">
      <div
        ref={frameRef}
        className="relative h-full w-full rounded-[18px] border-2 border-cream overflow-hidden"
      >
        {/* PLACEHOLDER — blank artwork area, replace with custom hero artwork */}
        <div className="absolute inset-0 bg-[#0d0b0a]" />

        <Navbar />

        {/* Title block */}
        <div
          ref={titleRef}
          className="relative z-10 flex h-full w-fit max-w-[50%] flex-col justify-center px-1.5 sm:px-2 md:px-2.5"
        >
          <h1 className="font-poster font-black uppercase leading-[0.82] text-cream text-[3.25rem] sm:text-[4.35rem] md:text-[5.45rem] lg:text-[6.5rem] tracking-tight [text-shadow:2px_2px_0_rgba(0,0,0,0.35)]">
            Portfolio
          </h1>
          <p className="-mt-1 sm:-mt-2 ml-0.5 translate-y-[11px] font-display font-normal leading-none text-cream text-[1.3rem] sm:text-[1.6rem] md:text-[2rem]">
            Uma Manthina
          </p>
        </div>
      </div>

      {/* Patch that breaks the gold border where the title text crosses it */}
      {gap && (
        <div
          className="pointer-events-none absolute z-20 bg-black"
          style={{
            top: gap.top,
            left: gap.left - 2,
            width: 4,
            height: gap.height,
          }}
        />
      )}
    </section>
  )
}
