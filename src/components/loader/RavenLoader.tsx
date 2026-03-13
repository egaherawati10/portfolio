"use client"

import Image from "next/image"

export default function RavenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]">

      <div className="relative flex flex-col items-center">

        {/* glow aura */}

        <div className="absolute w-72 h-72 bg-teal-400/20 blur-3xl rounded-full animate-pulse" />

        {/* orbit ring */}

        <div className="absolute w-56 h-56 border border-teal-400/20 rounded-full animate-spin-slow" />

        {/* orbit particle */}

        <div className="absolute w-2 h-2 bg-teal-400 rounded-full animate-orbit" />

        {/* raven logo */}

        <Image
          src="/logo.png"
          alt="Raven Logo"
          width={160}
          height={160}
          priority
          className="
          relative
          animate-float
          drop-shadow-[0_0_25px_rgba(20,184,166,0.8)]
          "
        />

        {/* scan line */}

        <div className="absolute w-48 h-1 bg-teal-400/40 blur-sm animate-scan" />

        {/* text */}

        <p className="mt-8 text-teal-300 text-xs tracking-[0.35em] font-mono animate-pulse">
          INITIALIZING RAVEN SYSTEM
        </p>

      </div>
    </div>
  )
}