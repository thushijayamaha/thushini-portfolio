"use client";
import {
  Mail,
  Download,
  ArrowRight,
  Code2,
  Cloud,
  Menu,
  GraduationCap,
  Lightbulb,
  Target,
  TrendingUp,
  MapPin,
  BookOpen,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#f8f9ff] dark:bg-[#09090F] text-[#111a42] dark:text-[#F5F3FF] ">
      
      
{/* Navbar */}
<nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-lg dark:border-violet-500/20 dark:bg-[#100D18]/90">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

    {/* Logo */}
    <a
      href="#home"
      className="text-3xl font-extrabold text-violet-600"
    >
      TJ<span className="text-indigo-900 dark:text-white">.</span>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 md:flex">
      {[
        "Home",
        "About",
        "Education",
        "Skills",
        "Projects",
        "Certifications",
        "Contact",
      ].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm font-medium transition hover:text-violet-600 dark:text-zinc-200 dark:hover:text-violet-400"
        >
          {item}
        </a>
      ))}
    </div>

    {/* Right Side Buttons */}
    <div className="flex items-center gap-2">

      {/* Sun / Moon */}
      <ThemeToggle />

      {/* Let's Connect */}
      <a
        href="#contact"
        className="hidden items-center rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg md:flex"
      >
        Let&apos;s Connect
        <ArrowRight className="ml-2" size={17} />
      </a>

      {/* Mobile Menu */}
      <button
        type="button"
        className="ml-2 md:hidden dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <Menu size={26} />
      </button>
    </div>
  </div>

  {/* Mobile Navigation */}
  {menuOpen && (
    <div className="flex flex-col gap-4 border-t border-violet-100 bg-white px-6 py-5 md:hidden dark:border-violet-500/20 dark:bg-[#171320]">
      {[
        "Home",
        "About",
        "Education",
        "Skills",
        "Projects",
        "Certifications",
        "Contact",
      ].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="text-sm font-medium dark:text-zinc-200"
        >
          {item}
        </a>
      ))}
    </div>
  )}
</nav>


      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50 to-indigo-100 dark:from-[#09090F] dark:via-[#171025] dark:to-[#21112D]"
      >
        <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-violet-200 bg-white dark:bg-[#171320] px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              ✨ Available for Internship
            </span>
            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Hi, I&apos;m
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
                Thushini Jayamaha
              </span>
            </h1>
            <h2 className="mt-5 text-xl font-bold md:text-2xl">
              INFORMATION TECHNOLOGY
              <span className="text-violet-600"> UNDERGRADUATE</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-zinc-300">
              I,enjoy building practical software, exploring new technologies, and turning ideas into meaningful digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="/J.H.T.P.JAYAMAHA.pdf"
                download = "J.H.T.P.JAYAMAHA.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white dark:bg-[#171320] dark:bg-[#171320] px-6 py-3 font-semibold shadow-sm transition hover:-translate-y-1"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            <div className="mt-9 flex items-center gap-6">
              <a
                href="https://github.com/thushijayamaha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-violet-600"
              >
            <FaGithub size={24} />         </a>
              <a
                href="https://www.linkedin.com/in/thushini-jayamaha-071b71351"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-violet-600"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:thushijayamaha@gmail.com"
                aria-label="Email"
                className="transition hover:text-violet-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
{/* Hero Profile Image */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex items-center justify-center"
>
  {/* Background Glow */}
  <div className="absolute h-80 w-80 rounded-full bg-violet-300/40 blur-3xl md:h-[450px] md:w-[450px]" />
  {/* Decorative Circle */}
  <div className="absolute h-[310px] w-[310px] rounded-full border border-violet-300/50 md:h-[440px] md:w-[440px]" />
  {/* Profile Photo */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10"
  >
    <div className="relative h-[390px] w-[290px] overflow-hidden rounded-[2rem] border-4 border-white bg-white dark:bg-[#171320] shadow-2xl shadow-violet-300/40 sm:h-[460px] sm:w-[350px] md:h-[520px] md:w-[390px]">
      <img
        src="/profile.png"
        alt="Thushini Jayamaha"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </motion.div>
  {/* Floating Code Icon */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute left-0 top-14 z-20 rounded-2xl border border-violet-100 dark:border-violet-500/20 bg-white dark:bg-[#171320] p-4 shadow-xl"
  >
    <Code2 className="text-violet-600" size={30} />
  </motion.div>
  {/* Floating Cloud Icon */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute right-0 top-28 z-20 rounded-2xl border border-indigo-100 bg-white dark:bg-[#171320] p-4 shadow-xl"
  >
    <Cloud className="text-indigo-600" size={30} />
  </motion.div>
  {/* Technology Badge */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8 }}
    className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-100 dark:border-violet-500/20 bg-white dark:bg-[#171320] px-6 py-3 text-sm font-bold text-violet-700 shadow-xl"
  >
    React • Next.js • AWS
  </motion.div>
</motion.div>
        </div>
      </section>
      {/* ABOUT ME SECTION */}
      <section id="about" className="bg-white dark:bg-[#171320] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Passionate about technology
              <br />
              and creating meaningful solutions
            </h2>
          </motion.div>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            {/* About Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-9 text-slate-600 dark:text-zinc-300">
                I&apos;m Thushini Jayamaha, a BSc Information Technology
                undergraduate at SIBA Campus. I enjoy building modern web
                applications, exploring cloud technologies, and learning
                DevOps practices.
              </p>
              <p className="mt-5 text-lg leading-9 text-slate-600 dark:text-zinc-300">
                My interests include full-stack development, cloud computing,
                automation, and problem-solving. I&apos;m always eager to
                explore new technologies, improve my skills, and contribute
                to real-world software projects.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
              >
                More About Me <ArrowRight size={18} />
              </a>
            </motion.div>
            {/* Interest Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Full-Stack Development",
                  description: "Building end-to-end web applications.",
                  icon: Code2,
                  color: "text-violet-600",
                  bg: "bg-violet-100",
                },
                {
                  title: "Cloud & DevOps",
                  description: "Exploring cloud infrastructure and automation.",
                  icon: Cloud,
                  color: "text-blue-600",
                  bg: "bg-blue-100",
                },
                {
                  title: "Problem Solving",
                  description: "Finding practical and efficient solutions.",
                  icon: Lightbulb,
                  color: "text-orange-500",
                  bg: "bg-orange-100",
                },
                {
                  title: "Continuous Learning",
                  description: "Learning new technologies and improving skills.",
                  icon: TrendingUp,
                  color: "text-emerald-600",
                  bg: "bg-emerald-100",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-slate-100 bg-white dark:bg-[#171320] p-6 shadow-lg shadow-indigo-100/50"
                  >
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                    >
                      <Icon className={item.color} size={28} />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-6 py-24 dark:from-[#100D18] dark:via-[#171320] dark:to-[#120F20]"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              My Education
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Education & Academic Journey
            </h2>
            <p className="mt-4 text-slate-600 dark:text-zinc-300">
              My academic background and continuous journey in technology.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Degree Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-violet-100 dark:border-violet-500/20 bg-white dark:bg-[#171320] p-8 shadow-xl shadow-violet-100/50 lg:col-span-2"
            >
              <div className="flex flex-wrap items-start gap-5">
                <div className="rounded-2xl bg-violet-100 p-4">
                  <GraduationCap className="text-violet-600" size={34} />
                </div>
                <div className="flex-1">
                  <span className="rounded-full bg-violet-100 px-4 py-1 text-xs font-bold text-violet-700">
                    2024 – Present
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold">
                    BSc in Information Technology
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-violet-600">
                    SIBA Campus
                  </p>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-zinc-300">
                    Developing knowledge in software engineering, web
                    development, databases, networking, cloud technologies,
                    and computer science fundamentals through academic
                    learning and practical projects.
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Career Goal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-indigo-100 bg-white dark:bg-[#171320] p-8 shadow-xl shadow-indigo-100/50"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-100 p-4">
                <Target className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-extrabold">Career Goal</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-zinc-300">
                Seeking a software development internship where I can apply
                my full-stack development skills, gain industry experience,
                and grow my knowledge in cloud computing and DevOps.
              </p>
            </motion.div>
          </div>
          {/* Additional Information */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-violet-100 dark:border-violet-500/20 bg-white dark:bg-[#171320] p-6 shadow-sm">
              <BookOpen className="text-violet-600" size={30} />
              <div>
                <h4 className="font-bold">Academic Focus</h4>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                  Software Engineering & IT
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-violet-100 dark:border-violet-500/20 bg-white dark:bg-[#171320] p-6 shadow-sm">
              <Cloud className="text-blue-600" size={30} />
              <div>
                <h4 className="font-bold">Special Interests</h4>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                  Full-Stack, Cloud & DevOps
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-violet-100 dark:border-violet-500/20 bg-white dark:bg-[#171320] p-6 shadow-sm">
              <MapPin className="text-pink-600" size={30} />
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                  Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Skills Section */}
      <Skills />
      {/* Featured Projects */}
<Projects />
<Certifications />
<Contact />
    </main>
  );
}
