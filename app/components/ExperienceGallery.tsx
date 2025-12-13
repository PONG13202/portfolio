"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ExperienceGallery({
  images,
  alt = "Experience photo",
}: {
  images: string[];
  alt?: string;
}) {
  const [index, setIndex] = React.useState(0);
  const total = images?.length ?? 0;

  const next = () => setIndex((v) => (v + 1) % total);
  const prev = () => setIndex((v) => (v - 1 + total) % total);

  const [isHover, setIsHover] = React.useState(false);

  // Auto slide
  React.useEffect(() => {
    if (isHover) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [isHover, index]);

  if (!total) return null;

  return (
    <div
      className="mt-6 mx-auto w-full max-w-4xl"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative w-full">

        {/* รูปภาพเต็ม ไม่มีขอบ ไม่มีพื้นหลัง */}
        <div className="relative w-full h-[260px] sm:h-[280px] lg:h-[320px] bg-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={images[index]}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ปุ่มเลื่อนซ้ายขวา */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* dot indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition
                    ${i === index ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ตัวเลข */}
      <p className="mt-2 text-xs text-slate-500 text-center">
        {index + 1} / {total}
      </p>
    </div>
  );
}
