"use client"

import Image from "next/image"
import { useState, useRef } from "react"

export default function ProjectSlider({
  images,
}: {
  images: string[]
}) {

  const [index, setIndex] = useState(0)

  const startX = useRef<number | null>(null)

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1))

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return

    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX

    if (diff > 50) next()
    if (diff < -50) prev()

    startX.current = null
  }

  return (

    <div className="relative">
      <div
        className="
        relative
        aspect-video
        rounded-xl
        overflow-hidden
        border border-border
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        <Image
          src={images[index]}
          alt={`project screenshot ${index + 1}`}
          fill
          className="object-cover"
          priority
        />

      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        {images.map((_, i) => {
        const active = i === index

        return (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-2 w-2 rounded-full
              cursor-pointer
              transition-all duration-300 ease-out
            ${active
              ? "bg-white scale-110"
              : "bg-white/40 scale-100"
            }
            `}
          />
        )
        })}
        </div>

      {/* Desktop Controls */}

      <button
        onClick={prev}
        className="
        hidden md:block
        absolute left-3 top-1/2 -translate-y-1/2
        bg-black/40 px-3 py-1 rounded-md
        hover:bg-black/60
        "
      >
        ←
      </button>

      <button
        onClick={next}
        className="
        hidden md:block
        absolute right-3 top-1/2 -translate-y-1/2
        bg-black/40 px-3 py-1 rounded-md
        hover:bg-black/60
        "
      >
        →
      </button>

    </div>
  )
}