"use client"

type Props = {
  opacity?: number
}

export default function GridBackground({ opacity = 0.04 }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      <div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(to right, var(--grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

    </div>
  )
}