"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";
import ExperienceGallery from "./ExperienceGallery";
import { experience } from "../lib/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="What I’ve been working on recently">
      <div className="space-y-10">
        {experience.map((ex, idx) => (
          <motion.div
            key={`${ex.title}-${idx}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-black"
          >
            

            {/* 🟨 2 คอลัมน์ – Text ซ้าย / Gallery ขวา */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* ---------------- LEFT : TEXT ---------------- */}
              <div>
                <div className="flex items-start gap-4">
                  {ex.image && (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
                      <Image
                        src={ex.image}
                        alt={ex.imageAlt ?? ex.company}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <p className="text-xl font-semibold text-black dark:text-white">{ex.title}</p>
                    <p className="text-slate-600 dark:text-slate-300">{ex.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{ex.period}</p>
                  </div>
                </div>

                <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-slate-700 dark:text-slate-200">
                  {ex.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {/* Description text (bigger size) */}
{ex.description && (
  <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
    {ex.description}
  </p>
)}

              </div>

              {/* ---------------- RIGHT : GALLERY ---------------- */}
              <div className="w-full">
                {ex.gallery?.length ? (
                  <ExperienceGallery images={ex.gallery} alt={ex.imageAlt ?? ex.company} />
                ) : (
                  <p className="text-slate-400 text-sm">No images available.</p>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
