"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import ThemeToggle from "@/components/ui/theme-toggle"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      {/* NAVBAR */}

      <header
        className="
        fixed
        top-0
        w-full
        z-50
        backdrop-blur-xl
        bg-background/80
        border-b border-border/60
        shadow-[0_4px_30px_rgba(0,0,0,0.3)]
        "
      >
        <nav
          className="
          max-w-6xl
          mx-auto
          px-6
          flex
          items-center
          justify-between
          h-16
          "
        >
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="HealthTech Raven Logo"
              width={42}
              height={42}
              priority
              className="
              transition
              duration-300
              group-hover:scale-105
              group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.6)]
              "
            />
          </Link>

          {/* Desktop Menu */}

          <div
            className="
            hidden md:flex
            items-center
            gap-8
            text-sm
            font-medium
            text-muted
            "
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <ThemeToggle />
          </div>

          {/* Mobile Controls */}

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="
              text-text
              text-2xl
              leading-none
              transition
              "
              aria-label="Toggle Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`
        md:hidden
        fixed
        top-16
        left-0
        w-full
        h-[calc(100vh-4rem)]
        z-40
        transition-all
        duration-300
        ease-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
        `}
      >
        {/* Glass Overlay */}

        <div
          className="
          absolute
          inset-0
          backdrop-blur-3xl
          bg-gradient-to-b
          from-white/40
          via-white/50
          to-white/70
          dark:from-black/40
          dark:via-black/50
          dark:to-black/70
          border-t border-white/10 dark:border-white/5
          "
        />

        {/* Mobile Links */}

        <div
          className="
          relative
          px-6
          py-10
          flex
          flex-col
          gap-8
          text-xl
          font-medium
          text-text
          "
        >
          <MobileLink href="/" setOpen={setOpen}>Home</MobileLink>
          <MobileLink href="/about" setOpen={setOpen}>About</MobileLink>
          <MobileLink href="/projects" setOpen={setOpen}>Projects</MobileLink>
          <MobileLink href="/contact" setOpen={setOpen}>Contact</MobileLink>
        </div>
      </div>
    </>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="
      relative
      inline-block
      w-fit
      transition-colors
      duration-200

      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-current
      after:transition-all
      after:duration-300

      hover:after:w-full
      "
    >
      {children}
    </Link>
  )
}

function MobileLink({
  href,
  children,
  setOpen,
}: {
  href: string
  children: React.ReactNode
  setOpen: (v: boolean) => void
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="
      relative
      inline-block
      w-fit
      transition-colors
      duration-200

      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-current
      after:transition-all
      after:duration-300

      hover:after:w-full
      "
    >
      {children}
    </Link>
  )
}