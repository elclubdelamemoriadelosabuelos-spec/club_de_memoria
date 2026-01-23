interface UnderlineWaveProps {
  className?: string
  color?: string
}

export function UnderlineWave({ className = "", color }: UnderlineWaveProps) {
  return (
    <svg className={className} viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 6C50 2 150 2 198 6"
        stroke={color || "currentColor"}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
