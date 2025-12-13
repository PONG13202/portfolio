import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import PersonalProjects from "./components/PersonalProjects";
import { profile } from "./lib/content";
import Certificate from "./components/Certificate";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Hero />

        <div className="mt-14 space-y-14">
          <Certificate />
          
<Section id="about" title="About Me" subtitle="Personal Information">
  <div
    className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-slate-50/40
               p-8 shadow-sm sm:p-10
               dark:border-white/10 dark:from-black dark:to-white/5"
  >
    <h3 className="mb-8 text-2xl font-semibold tracking-tight text-black dark:text-white">
      Education
    </h3>

    <div className="space-y-8">
      {profile.education.map((edu, idx) => (
        <div
          key={idx}
          className="flex items-start gap-6 rounded-2xl border border-black/10 bg-white/70 p-6
                     backdrop-blur-sm transition hover:shadow-md
                     dark:border-white/10 dark:bg-black/30"
        >
          {/* Logo */}
          {edu.logo && (
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-black">
              <Image
                src={edu.logo}
                alt={`${edu.school} logo`}
                fill
                className="object-contain p-2"
              />
            </div>
          )}

          {/* Details */}
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-black dark:text-white">
              {edu.school} {edu.campus && `${edu.campus}`}
            </p>

            {edu.department && (
              <p className="mt-1 text-slate-700 dark:text-slate-300">
                {edu.department}
              </p>
            )}

            <p className="mt-1 text-slate-600 dark:text-slate-400">
              {edu.program}
            </p>

            <div className="mt-3 flex flex-wrap gap-6 text-sm">
              <span className="text-slate-500 dark:text-slate-500">
                Year: <span className="font-medium text-slate-700 dark:text-slate-300">{edu.year}</span>
              </span>

              {edu.gpa && (
                <span className="text-slate-500 dark:text-slate-500">
                  GPA:{" "}
                  <span className="font-semibold text-black dark:text-white">
                    {edu.gpa}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>

          <Skills />
          <Experience />
          <Projects />
          <PersonalProjects />
          <Contact />
        </div>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </footer>
      </main>
    </>
  );
}