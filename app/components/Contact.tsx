"use client";

import Section from "./Section";
import { profile } from "../lib/content";
import { Github, Facebook, Phone, FileText, Mail} from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let’s collaborate — feel free to reach out."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors dark:border-white/10 dark:bg-white/5">
        
        {/* Email Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-white">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-base font-semibold text-slate-900 underline underline-offset-4 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-wrap gap-3">
          {/* GitHub */}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-black dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Github size={16} />
            GitHub
          </a>

          {/* Facebook */}
          <a
            href={profile.links.Facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-blue-400"
          >
            <Facebook size={16} />
            Facebook
          </a>

          {/* Phone (เพิ่ม href="tel:" เพื่อให้กดโทรได้) */}
          <a
            href="tel:0972351715"
            className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-green-600 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-green-400"
          >
            <Phone size={16} />
            097-235-1715
          </a>

          {/* Resume (Primary Button) */}
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}