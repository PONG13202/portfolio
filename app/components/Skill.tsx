"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skills } from "../lib/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools and technologies I use">
      <div
        className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-slate-50/40
                   p-8 shadow-sm sm:p-10
                   dark:border-white/10 dark:from-black dark:to-white/5"
      >
        <div className="flex flex-wrap gap-3">
          {skills.map((s, idx) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-medium
                         text-black shadow-sm backdrop-blur-sm transition
                         hover:bg-black/5 hover:shadow-md
                         dark:border-white/10 dark:bg-black/50 dark:text-white dark:hover:bg-white/10"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}