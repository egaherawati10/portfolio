"use client"

import Image from "next/image"
import HeroBackground from "@/components/ui/hero-background"

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      w-full
      min-h-screen
      flex
      items-center
      overflow-hidden
      py-16
      "
    >
      <HeroBackground />

      {/* CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">
              Hi, I'm Ega
            </p>

            <p className="text-muted text-xs tracking-widest mb-6">
              FULL-STACK SOFTWARE ENGINEER · MEDICAL DOCTOR
            </p>

            <h1
              className="
              font-display
              font-bold
              leading-tight
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
              "
            >
              <span className="block text-text whitespace-nowrap animate-slide-up">
                Medical Thinking
              </span>

              <span className="block text-primary mt-2 animate-glow">
                Tech Vision
              </span>
            </h1>

            <p className="mt-6 mb-10 text-muted max-w-xl mx-auto lg:mx-0">
              Where medical thinking meets modern technology.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">

              <a
                href="/file/CV-Ega-Herawati.pdf"
                download
                className="px-6 py-3 rounded-lg bg-primary text-slate-900 font-medium hover:bg-primary/10 transition"
              >
                Download CV
              </a>

              <a
                href="/projects"
                className="px-6 py-3 rounded-lg border border-border"
              >
                View Projects
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">

            <Image
              src="/logo.png"
              alt="HealthTech Raven Logo"
              width={420}
              height={420}
              className="w-64 md:w-80 lg:w-105"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  )
}