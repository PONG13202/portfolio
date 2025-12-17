"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Mail } from "lucide-react";
import { profile } from "../lib/content";
import Section from "./Section";

export default function Hero() {
  return (
    <Section id="home" title="" subtitle="">
      <section className="pt-12 sm:pt-16">
        <div
          className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-slate-50/40
                   p-6 shadow-sm sm:p-10
                   dark:border-white/10 dark:from-black dark:to-white/5"
        >
          {/* TOP: รูป + ข้อความ */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* 1. ย้ายรูปมาไว้ใน Flex Container เพื่อการจัดวางที่สวยงาม (หรือจะไว้ที่เดิมก็ได้) */}
            <div className="order-first shrink-0">
               <div
                className="relative h-36 w-36 overflow-hidden rounded-full border border-black/10 bg-white
                           shadow-sm dark:border-white/10 dark:bg-black sm:h-44 sm:w-44"
              >
                <Image
                  src="/profile.png"
                  alt={`${profile.name} profile photo`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-slate-600 dark:text-slate-300 pt-2"
              >
                 {/* {profile.role} */}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-5xl dark:text-white"
              >
                {profile.name}
              </motion.h1>

              {/* ปุ่มต่างๆ */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white
                           hover:bg-black/90 transition
                           dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>

                <a
                  href={profile.links.resume}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm
                           text-black hover:bg-black/5 transition
                           dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>

                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm
                           text-black hover:bg-black/5 transition
                           dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </motion.div>
            </div>
          </div>

          {/* SECTION ด้านล่าง: แก้ไขสีตัวหนังสือที่ดำมืด */}
          <div className="mt-8">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg"> {/* ✅ เพิ่ม dark:text-slate-300 */}
              I’m{" "}
              <span className="font-semibold text-slate-900 dark:text-white"> {/* ✅ แก้ให้ชื่อเป็นสีขาวใน dark mode */}
                {profile.name}
              </span>
              , a recent graduate from{" "}
              <span className="font-medium text-slate-900 dark:text-white"> {/* ✅ แก้ให้ชื่อมหาลัยเป็นสีขาว */}
                {profile.education[0].school} {profile.education[0].campus}
              </span>{" "}
              I’m currently seeking opportunities as a Web Developer, with strong interest in Full Stack Development, Back-End development and Front-End development.
            </p>
          </div>
        </div>
      </section>
    </Section>
  );
}