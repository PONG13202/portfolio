"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { personalProjects } from "../lib/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel"; // ใช้ตัวเดียวกันกับ Projects ได้เลย

export default function PersonalProjects() {
  return (
    <Section id="personal-projects" title="Personal Projects" subtitle="Self-initiated works and experiments">
      <div
        className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-slate-50/40
                   p-8 shadow-sm sm:p-10
                   dark:border-white/10 dark:from-black dark:to-white/5"
      >
        <div className="grid gap-8 sm:grid-cols-2">
          {personalProjects.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm
                         shadow-sm transition-all hover:shadow-xl hover:-translate-y-2
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
                    <span key={t} className="rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-xs font-medium text-black dark:border-white/10 dark:bg-black/50 dark:text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}