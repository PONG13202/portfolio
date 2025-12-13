"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        variants={variants}
        className="space-y-2"
      >
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight 
                         text-slate-900 dark:text-white sm:text-2xl">
            {title}
          </h2>

          {/* Divider line */}
          <div className="hidden h-px flex-1 
                          bg-slate-200 dark:bg-slate-700 sm:block" />
        </div>

        {subtitle ? (
          <p className="text-sm leading-relaxed 
                        text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        ) : null}
      </motion.div>

      <div className="mt-6">{children}</div>
    </section>
  );
}
