
"use client";

import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Cloud,
  Layers3,
  Cpu,
} from "lucide-react";

type Category = "All" | "Full Stack" | "Cloud & DevOps" | "IoT" | "Games";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<Category, "All">;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  icon: "code" | "cloud" | "layers" | "iot";
};

const projects: Project[] = [
  {
    title: "JobTrack",
    subtitle: "Job Application Tracking System",
    description:
      "A full-stack job application management platform with authentication, application tracking, dashboard analytics, interview management, and AWS deployment experience.",
    category: "Full Stack",
    technologies: [
      "Angular",
      "Laravel",
      "MySQL",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    github: "https://github.com/thushijayamaha/JobTrack",
    image: "/projects/jobtrack.png",
    icon: "code",
  },
  {
    title: "RentEase",
    subtitle: "Property Rental Management System",
    description:
      "A MERN-stack property rental platform with separate tenant, landlord, and administrator workflows, property listings, search, and rental management features.",
    category: "Full Stack",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/thushijayamaha/RentEase",
    image: "/projects/rentease.png",
    icon: "layers",
  },
  {
    title: "GoCart",
    subtitle: "Multi-Vendor E-Commerce Platform",
    description:
      "A multi-vendor e-commerce application featuring customer shopping, vendor product management, order processing, and administrator workflows.",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    github: "",
    image: "/projects/gocart.png",
    icon: "layers",
  },
  {
    title: "AWS DevOps Project",
    subtitle: "Cloud Infrastructure & Deployment",
    description:
      "Hands-on AWS infrastructure project exploring EC2, networking, Linux server configuration, deployment, and cloud administration.",
    category: "Cloud & DevOps",
    technologies: ["AWS", "EC2", "VPC", "Linux", "Nginx"],
    github: "",
    image: "",
    icon: "cloud",
  },
  {
    title: "Connect Four",
    subtitle: "Interactive Browser Game",
    description:
      "A responsive Connect Four game featuring Player vs Computer gameplay, rule-based AI, win detection, score tracking, and restart functionality.",
    category: "Games",
    technologies: ["React", "JavaScript", "CSS", "Vercel"],
    github: "https://github.com/thushijayamaha/connect-four-game",
    demo: "https://connect-four-game-thushi.vercel.app/",
    image: "/projects/connect-four.png",
    icon: "code",
  },

  {
  title: "Smart Home Automation & Security System",
  subtitle: "Arduino-Based IoT & Embedded System",
  description:
    "An intelligent home automation and security system featuring password-protected door access, gas and fire detection, intrusion monitoring, and automated control of home appliances using Arduino and multiple sensors.",
  category: "IoT",
  technologies: [
    "Arduino",
    "C++",
    "ESP8266",
    "Sensors",
    "LCD",
    "Servo Motor",
    "Relay Module",
  ],
  github: "https://github.com/thushijayamaha/IoT-Based-Smart-Home-Automation-System",
  demo: "https://www.linkedin.com/feed/update/urn:li:activity:7505979346738860032/",
  image: "",
  icon: "iot",
},
];

const categories: Category[] = [
  "All",
  "Full Stack",
  "Cloud & DevOps",
  "IoT",
  "Games",
];

const iconMap = {
  code: Code2,
  cloud: Cloud,
  layers: Layers3,
  iot: Cpu,
};

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#100D18]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            My Work
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#111a42] md:text-4xl dark:text-white">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-zinc-400">
            A collection of applications and cloud projects
            showcasing my experience in full-stack development,
            software engineering, and DevOps.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 dark:from-violet-600 dark:to-fuchsia-600"
                  : "border border-violet-100 bg-violet-50 text-slate-600 hover:border-violet-300 dark:border-violet-500/20 dark:bg-[#21172F] dark:text-zinc-300 dark:hover:border-violet-400 dark:hover:text-violet-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => {
              const Icon = iconMap[project.icon];

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -7 }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-lg shadow-indigo-100/50 transition-colors duration-300 dark:border-violet-500/15 dark:bg-[#171320] dark:shadow-none dark:hover:border-violet-400/40 dark:hover:shadow-xl dark:hover:shadow-violet-500/10"
                >
 
{/* Project Preview */}
<div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-100 via-indigo-100 to-blue-100 dark:from-[#21172F] dark:via-[#291B3E] dark:to-[#15152D]">

  {/* Default Icon and Project Name */}
  <div className="flex flex-col items-center gap-3 text-violet-600 dark:text-violet-400">
    <Icon size={60} strokeWidth={1.4} />

    <span className="text-center text-sm font-bold">
      {project.title}
    </span>
  </div>

  {/* Image - Only when available */}
  {project.image && (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  )}
</div>


{/* Project Information */}


                  {/* Project Information */}
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                      {project.category}
                    </span>

                    <h3 className="mt-3 text-2xl font-extrabold text-[#111a42] dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-zinc-400">
                      {project.subtitle}
                    </p>

                    <p className="mt-5 flex-1 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:border dark:border-violet-500/15 dark:bg-violet-500/10 dark:text-violet-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-100 pt-5 dark:border-violet-500/15">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-violet-200 px-4 py-2 text-sm font-semibold transition hover:bg-violet-50 dark:border-violet-500/30 dark:text-zinc-200 dark:hover:bg-violet-500/15 dark:hover:text-violet-300"
                        >
                          <FaGithub size={17} />
                          GitHub
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-fuchsia-600"
                        >
                          <ExternalLink size={17} />
                          Live Demo
                        </a>
                      )}

                      {!project.github && !project.demo && (
                        <span className="text-xs text-slate-400 dark:text-zinc-500">
                          Project details available on request
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/thushijayamaha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-300 bg-violet-50 px-7 py-3 font-bold text-violet-700 transition hover:bg-violet-100 dark:border-violet-500/30 dark:bg-[#21172F] dark:text-violet-300 dark:hover:border-violet-400 dark:hover:bg-[#302044]"
          >
            View More on GitHub
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
