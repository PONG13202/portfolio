"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { projects } from "../lib/content";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProjectCarousel({
  images,
  alt,
  priority = false,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
}) {
  const total = images?.length ?? 0;
  const [index, setIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Auto slide เมื่อไม่ hover
  React.useEffect(() => {
    if (isHovered || total <= 1) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isHovered, total, index]);

  if (!total) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              fill
              priority={priority}
              className="object-contain p-4"
              quality={95}
            />
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="workshop" title="Work Shop" subtitle="Selected works with real-world constraints">
      <div
        className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-slate-50/40
                   p-8 shadow-sm sm:p-10
                   dark:border-white/10 dark:from-black dark:to-white/5"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 justify-items-center">
            {projects.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm
                           shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 w-full max-w-lg
                           dark:border-white/10 dark:bg-black/30"
              >
                {p.images?.length ? <ProjectCarousel images={p.images} alt={p.name} priority={idx < 2} /> : null}

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white">{p.name}</h3>
                      <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{p.description}</p>
                    </div>
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-black/10 p-3 text-slate-600 transition
                                 hover:bg-black/5 hover:text-black
                                 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/10"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-xs font-medium text-black
                                   dark:border-white/10 dark:bg-black/50 dark:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}