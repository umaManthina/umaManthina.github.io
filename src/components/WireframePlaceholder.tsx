export default function WireframePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden border border-dashed border-black/20 bg-black/[0.03] ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 12px)',
      }}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-16 w-16 text-black/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="8" width="52" height="48" rx="2" />
        <circle cx="22" cy="24" r="5" />
        <path d="M6 46 L24 30 L36 40 L46 28 L58 42" />
      </svg>
      <span className="absolute bottom-3 font-display text-[10px] tracking-widest-lg uppercase text-black/30">
        Image placeholder
      </span>
    </div>
  )
}
