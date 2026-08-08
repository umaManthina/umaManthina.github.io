// Fixed shuffle so the order is jumbled but stable across renders.
const order = [11, 3, 16, 7, 1, 14, 9, 18, 5, 12, 2, 17, 8, 4, 15, 10, 6, 13]
const images = order.map((n) => `/about/dance/dance-${String(n).padStart(2, '0')}.jpg`)

export default function DanceMarquee() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2">
      <div className="flex w-max animate-marquee">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Bharatanatyam performance"
            className="h-20 w-20 shrink-0 object-cover shadow-md sm:h-24 sm:w-24"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}
