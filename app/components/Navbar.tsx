"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const items = [
  { href: "#certificate", label: "Certificate" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#workshop", label: "Work Shop" },
  { href: "#personal-projects", label: "Personal Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur
                 dark:border-white/10 dark:bg-black/70"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#home" className="font-semibold tracking-tight text-black dark:text-white">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 sm:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm text-slate-600 hover:text-black transition
                         dark:text-slate-300 dark:hover:text-white"
            >
              {it.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full border border-black/10 px-3 py-1.5 text-sm text-black
                       hover:bg-black/5 transition
                       dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          >
            Get in touch
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white my-1 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden bg-white dark:bg-black border-t border-black/10 dark:border-white/10 px-4 py-6"
        >
          <div className="flex flex-col gap-4">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-slate-600 hover:text-black transition
                           dark:text-slate-300 dark:hover:text-white"
              >
                {it.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-black
                         hover:bg-black/5 transition
                         dark:border-white/10 dark:text-white dark:hover:bg-white/10 text-center"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}