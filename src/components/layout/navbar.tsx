"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-xl
      bg-background/70
      border-b border-border/60
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
        </div>

        {/* Burger Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-text
          text-2xl
          leading-none
          "
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`
        md:hidden
        transition-all
        duration-300
        overflow-hidden
        ${open ? "max-h-64 border-t border-border" : "max-h-0"}
        `}
      >
        <div
          className="
          flex
          flex-col
          gap-2
          px-6
          py-8
          text-lg
          text-muted
          bg-background/95
          backdrop-blur
          "
        >
          <MobileLink href="/" setOpen={setOpen}>Home</MobileLink>
          <MobileLink href="/about" setOpen={setOpen}>About</MobileLink>
          <MobileLink href="/projects" setOpen={setOpen}>Projects</MobileLink>
          <MobileLink href="/contact" setOpen={setOpen}>Contact</MobileLink>
        </div>
      </div>

    </header>
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
      hover:text-(--primary)
      hover:drop-shadow-[0_0_6px_rgba(20,184,166,0.7)]
      transition-all
      duration-200

      after:absolute
      after:left-0
      after:-bottom-1
      after:h-0.5
      after:w-0
      after:bg-(--primary)
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
      hover:text-(--primary)
      transition-colors
      duration-200
      "
    >
      {children}
    </Link>
  )
}