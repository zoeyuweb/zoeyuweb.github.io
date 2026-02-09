"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/picture-books", label: "Picture Books" },
  { href: "/illustration", label: "Illustration" },
  { href: "/sketches", label: "Sketches" },
  { href: "/about", label: "About" },
]

export function SiteNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40 transition-all duration-500">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo image — replace /images/logo.jpg with your own */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-70"
          aria-label="Home"
        >
          <Image
            src="/images/logo.jpg"
            alt="Site logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover grayscale-[0.2]"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:text-foreground/60 ${pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-[1px]w-5 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-[2px] rotate-45" : ""
              }`}
          />
          <span
            className={`block h-[1px] w-5 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-border/40 bg-background/90 backdrop-blur-xl px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm tracking-wide transition-colors ${pathname === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
