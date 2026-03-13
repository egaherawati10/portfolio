"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type Props = {
  date: string
  title: string
  subtitle: string
  details?: string[]
}

export default function TimelineItem({ date, title, subtitle, details }: Props) {

  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className="
      group
      relative
      rounded-xl
      border border-white/10
      bg-white/5
      backdrop-blur-md
      p-6
      cursor-pointer
      transition
      hover:border-(--primary)
      hover:bg-white/10
      hover:shadow-[0_0_25px_rgba(45,212,191,0.25)]
      "
    >

      {/* HEADER */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-sm text-(--text-muted)">
            {date}
          </p>

          <h3 className="mt-1 text-lg font-semibold transition group-hover:text-(--primary)">
            {title}
          </h3>

          <p className="text-sm text-(--text-muted)">
            {subtitle}
          </p>

        </div>

        {/* arrow indicator (mobile only) */}

        {details && (
          <ChevronDown
            size={18}
            className={`
            md:hidden
            transition
            ${open ? "rotate-180 text-(--primary)" : "text-(--text-muted)"}
            `}
          />
        )}

      </div>

      {/* DETAILS */}

      {details && (
        <div
          className={`
          overflow-hidden
          transition-all
          duration-300

          md:max-h-0
          md:opacity-0
          md:group-hover:max-h-40
          md:group-hover:opacity-100

          ${open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
          `}
        >

          <ul className="space-y-1 text-sm text-(--text-muted) list-disc list-inside">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  )
}