type Props = {
  date: string
  title: string
  subtitle: string
  details?: string[]
}

export default function TimelineItem({ date, title, subtitle, details }: Props) {
  return (
    <div
      className="
      group
      relative
      rounded-xl
      border border-white/10
      bg-white/5
      backdrop-blur-md
      p-6
      transition
      hover:border-(--primary)
      hover:bg-white/10
      hover:shadow-[0_0_25px_rgba(45,212,191,0.25)]
      "
    >
      <p className="text-sm text-(--text-muted)">
        {date}
      </p>

      <h3 className="mt-1 text-lg font-semibold transition group-hover:text-(--primary)">
        {title}
      </h3>

      <p className="text-sm text-(--text-muted)">
        {subtitle}
      </p>

      {/* hover reveal details */}
      {details && (
        <div
          className="
          overflow-hidden
          max-h-0
          opacity-0
          transition-all
          duration-300
          group-hover:max-h-40
          group-hover:opacity-100
          "
        >
          <ul className="mt-3 space-y-1 text-sm text-(--text-muted) list-disc list-inside">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}