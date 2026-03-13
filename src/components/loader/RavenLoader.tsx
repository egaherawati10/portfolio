"use client"

import Image from "next/image"

export default function RavenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]">

      <div className="flex flex-col items-center">

        {/* orbit system */}
        <div className="relative w-65 h-65 flex items-center justify-center">

          {/* glow */}
          <div className="absolute w-85 h-85 bg-teal-400/20 blur-3xl rounded-full animate-pulse" />

          {/* ring */}
          <div className="absolute w-full h-full border border-teal-400/20 rounded-full" />

          {/* orbit particle */}
          <div className="absolute animate-orbit">
            <div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_12px_rgba(20,184,166,0.9)]" />
          </div>

          {/* logo */}
          <Image
            src="/logo.png"
            alt="Raven Logo"
            width={160}
            height={160}
            priority
            className="animate-float drop-shadow-[0_0_25px_rgba(20,184,166,0.8)]"
          />

        </div>

        <p className="mt-10 text-teal-300 text-xs tracking-[0.35em] font-mono animate-pulse">
          INITIALIZING RAVEN SYSTEM
        </p>

      </div>

    </div>
  )
}