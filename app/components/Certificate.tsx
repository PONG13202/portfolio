"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { certificates } from "../lib/content";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CertificateCarousel({
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
  const [isHovered, setIsHovered] = React.useState(false); // เพิ่ม state ตรวจ hover

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Auto slide ทุก 4 วินาที (หยุดเมื่อ hover)
  React.useEffect(() => {
    if (isHovered || total <= 1) return;

    const interval = setInterval(() => {
      next();
    }, 4000); // เปลี่ยนรูปทุก 4 วินาที

    return () => clearInterval(interval);
  }, [isHovered, total, index]); // เพิ่ม index ใน dependency เพื่อให้ restart เมื่อเปลี่ยนรูปด้วยปุ่ม

  if (!total) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-t-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] w-full bg-slate-50/50 dark:bg-black/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              fill
              priority={priority}
              className="object-contain p-8"
              quality={95}
            />
          </motion.div>
        </AnimatePresence>

        {/* ปุ่มลูกศร */}
        {total > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white hover:bg-black/70 transition shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white hover:bg-black/70 transition shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators (เล็ก ๆ ด้านล่าง) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    i === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Certificate() {
  return (
    <Section
      id="certificate"
      title="Certificates"
      subtitle="Academic achievements and certifications"
    >
      <div
        className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-slate-50/40
                   p-8 shadow-sm sm:p-12
                   dark:border-white/10 dark:from-black dark:to-white/5"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 justify-items-center">
            {certificates.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-black/10 bg-white/80
                           shadow-md transition-all hover:shadow-xl hover:-translate-y-2
                           dark:border-white/10 dark:bg-black/40"
              >
                {item.images?.length ? (
                  <CertificateCarousel
                    images={item.images}
                    alt={item.name}
                    priority={idx < 2}
                  />
                ) : null}

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-semibold text-black dark:text-white leading-tight">
                      {item.name}
                    </h3>
                    {item.href && (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-black/10 p-3 text-slate-600 transition
                                   hover:bg-black/5 hover:text-black
                                   dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}