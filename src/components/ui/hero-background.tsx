export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_55%)]
        "
      />

      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.12),transparent_55%)]
        "
      />

      <div
        className="absolute inset-0 opacity-[0.04] animate-grid"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

    </div>
  )
}