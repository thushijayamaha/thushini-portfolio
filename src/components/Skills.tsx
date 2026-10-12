
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Cloud & DevOps"
  | "Tools";

const categories: { name: Category; icon: LucideIcon }[] = [
  { name: "Languages", icon: Code2 },
  { name: "Frontend", icon: Monitor },
  { name: "Backend", icon: Server },
  { name: "Databases", icon: Database },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "Tools", icon: Wrench },
];

const skills: Record<Category, string[]> = {
  Languages: [
    "Java",
    "Python",
    "C",
    "C++",
    "C#",
    "JavaScript",
    "TypeScript",
    "PHP",
  ],
  Frontend: [
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Angular",
    "Bootstrap",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Laravel",
    "REST APIs",
    "Prisma",
    "WordPress",
  ],
  Databases: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Neon PostgreSQL",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Linux",
    "Nginx",
    "CI/CD",
  ],
  Tools: [
    "VS Code",
    "IntelliJ IDEA",
    "NetBeans",
    "Postman",
    "Figma",
    "Canva",
    "MySQL Workbench",
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Languages");

  return (
    <section
      id="skills"
      className="bg-[#f8f9ff] px-6 py-24 transition-colors duration-300 dark:bg-[#09090F]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            My Skills
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#111a42] md:text-4xl dark:text-white">
            Technologies I Work With
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400">
            A combination of technologies and tools I use to build
            modern applications and explore cloud solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveCategory(name)}
              aria-pressed={activeCategory === name}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === name
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 dark:from-violet-600 dark:to-fuchsia-600 dark:shadow-violet-500/25"
                  : "border border-violet-100 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-600 dark:border-violet-500/20 dark:bg-[#171320] dark:text-zinc-300 dark:hover:border-violet-400/60 dark:hover:bg-[#21172F] dark:hover:text-violet-300"
              }`}
            >
              <Icon size={18} />
              {name}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {skills[activeCategory].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-violet-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-200/50 dark:border-violet-500/15 dark:bg-[#171320] dark:shadow-none dark:hover:border-violet-400/50 dark:hover:bg-[#21172F] dark:hover:shadow-lg dark:hover:shadow-violet-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 transition-colors duration-300 dark:bg-violet-500/15 group-hover:dark:bg-violet-500/25">
                  <Code2
                    className="text-violet-600 dark:text-violet-400"
                    size={24}
                  />
                </div>

                <h3 className="text-sm font-bold text-slate-800 md:text-base dark:text-zinc-100">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
