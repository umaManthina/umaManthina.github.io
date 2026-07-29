import { useEffect, useState } from 'react'

const WORDS = ['Reduce', 'Reuse', 'Recycle']

// Positions for 3 points spaced 120° apart around a circle (radius ~40% from center)
const BUBBLES = [
  { left: '50%', top: '8%' },
  { left: '84.6%', top: '69%' },
  { left: '15.4%', top: '69%' },
]

function ArrowBubble({ delay }: { delay: number }) {
  return (
    <div
      className="h-full w-full rounded-full flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at 35% 30%, #8fc06a, #3f7a3a)',
        boxShadow: '0 6px 14px rgba(20,40,20,0.45), inset 0 1px 3px rgba(255,255,255,0.4)',
        animation: `nv-bubble 2.6s ease-in-out infinite ${delay}s`,
      }}
    >
      <svg viewBox="0 0 100 100" className="h-[55%] w-[55%] text-white">
        <path
          d="M22 30 A34 34 0 0 1 78 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path d="M80 20 L96 44 L66 47 Z" fill="currentColor" />
      </svg>
    </div>
  )
}

export default function RecycleRing({ className = '' }: { className?: string }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      const timeout = setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length)
        setVisible(true)
      }, 280)
      return () => clearTimeout(timeout)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      style={{
        background: 'radial-gradient(120% 80% at 50% 0%, #28492c 0%, #1c3622 55%, #14271a 100%)',
      }}
    >
      <style>{`
        @keyframes nv-orbit { to { transform: rotate(360deg); } }
        @keyframes nv-bubble { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.18); } }
      `}</style>

      <div className="relative aspect-square h-[78%]">
        {/* mossy ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle, transparent 0 54%, rgba(143,192,122,0.4) 55% 67%, transparent 68%)',
          }}
        />

        {/* orbiting arrow bubbles */}
        <div
          className="absolute inset-0"
          style={{ animation: 'nv-orbit 22s linear infinite' }}
        >
          {BUBBLES.map((pos, i) => (
            <div
              key={i}
              className="absolute h-[15%] w-[15%]"
              style={{ left: pos.left, top: pos.top, transform: 'translate(-50%, -50%)' }}
            >
              <ArrowBubble delay={i * 0.8} />
            </div>
          ))}
        </div>

        {/* center cycling word */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display font-bold uppercase text-base sm:text-xl md:text-2xl text-[#eef3e8] transition-all duration-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'scale(1)' : 'scale(0.78)',
            }}
          >
            {WORDS[wordIndex]}
          </span>
        </div>
      </div>
    </div>
  )
}
