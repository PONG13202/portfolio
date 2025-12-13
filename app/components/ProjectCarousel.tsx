"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({
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
  const [hover, setHover] = React.useState(false);

  const next = React.useCallback(() => {
    if (!total) return;
    setIndex((v) => (v + 1) % total);
  }, [total]);

  const prev = React.useCallback(() => {
    if (!total) return;
    setIndex((v) => (v - 1 + total) % total);
  }, [total]);

  // Auto-play
  React.useEffect(() => {
    if (hover || total <= 1) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [hover, next, total]);

  if (!total) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[16/9] w-full bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              fill
              priority={priority}
              className="object-contain p-3"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
