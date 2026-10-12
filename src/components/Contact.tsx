
"use client";

import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Heart,
  ArrowUp,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const email = "thushijayamaha@gmail.com";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/thushijayamaha",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thushini-jayamaha-071b71351",
    icon: FaLinkedin,
  },
];

const contactCardStyle =
  "group rounded-3xl border border-violet-100 bg-white p-8 shadow-xl shadow-violet-100/50 transition-colors duration-300 dark:border-violet-500/20 dark:bg-[#171320] dark:shadow-none dark:hover:border-violet-400/50 dark:hover:shadow-xl dark:hover:shadow-violet-500/10";

export default function Contact() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-100 px-6 py-24 transition-colors duration-300 dark:from-[#09090F] dark:via-[#171025] dark:to-[#100D18]"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-600/15" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl dark:bg-fuchsia-600/10" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#111a42] md:text-5xl dark:text-white">
              Let&apos;s Work{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400">
                Together
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-zinc-300">
              I&apos;m interested in software development internships,
              collaborative projects, and opportunities to learn and grow.
              Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* Email Card */}
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={contactCardStyle}
            >
              <div className="flex items-start justify-between">
                <div className="rounded-2xl bg-violet-100 p-4 dark:bg-violet-500/15">
                  <Mail
                    className="text-violet-600 dark:text-violet-400"
                    size={30}
                  />
                </div>

                <ArrowUpRight
                  className="text-slate-400 transition group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-400"
                  size={22}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#111a42] dark:text-white">
                Email Me
              </h3>

              <p className="mt-2 break-all text-slate-600 dark:text-zinc-300">
                {email}
              </p>

              <p className="mt-4 text-sm font-semibold text-violet-600 dark:text-violet-400">
                Send an email →
              </p>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+94765552320"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={contactCardStyle}
            >
              <div className="flex items-start justify-between">
                <div className="rounded-2xl bg-violet-100 p-4 dark:bg-violet-500/15">
                  <Phone
                    className="text-violet-600 dark:text-violet-400"
                    size={30}
                  />
                </div>

                <ArrowUpRight
                  className="text-slate-400 transition group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-400"
                  size={22}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#111a42] dark:text-white">
                Call Me
              </h3>

              <p className="mt-2 text-slate-600 dark:text-zinc-300">
                +94 76 555 2320
              </p>

              <p className="mt-4 text-sm font-semibold text-violet-600 dark:text-violet-400">
                Make a Call →
              </p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={contactCardStyle}
            >
              <div className="inline-flex rounded-2xl bg-indigo-100 p-4 dark:bg-indigo-500/15">
                <MapPin
                  className="text-indigo-600 dark:text-indigo-400"
                  size={30}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#111a42] dark:text-white">
                Location
              </h3>

              <p className="mt-2 text-slate-600 dark:text-zinc-300">
                Sri Lanka
              </p>

              <p className="mt-4 text-sm font-semibold text-violet-600 dark:text-violet-400">
                Open to internship opportunities
              </p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-3xl border border-violet-100 bg-white p-8 text-center shadow-xl shadow-violet-100/50 transition-colors duration-300 dark:border-violet-500/20 dark:bg-[#171320] dark:shadow-none"
          >
            <h3 className="text-2xl font-extrabold text-[#111a42] dark:text-white">
              Connect With Me
            </h3>

            <p className="mt-3 text-slate-500 dark:text-zinc-400">
              Find my projects, professional profile, and development journey.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              {socials.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-violet-200 bg-violet-50 px-6 py-3 font-semibold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-100 dark:border-violet-500/25 dark:bg-[#21172F] dark:text-violet-300 dark:hover:border-violet-400/60 dark:hover:bg-[#302044]"
                >
                  <Icon size={21} />
                  {name}
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>

            {/* Say Hello Button */}
            <a
              href={`mailto:${email}?subject=Portfolio%20Inquiry`}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 dark:from-violet-600 dark:to-fuchsia-600 dark:shadow-violet-500/20"
            >
              <Send size={19} />
              Say Hello
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-violet-100 bg-white px-6 py-10 transition-colors duration-300 dark:border-violet-500/15 dark:bg-[#09090F]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          {/* Footer Logo */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-extrabold text-violet-600 dark:text-violet-400"
            >
              TJ
              <span className="text-indigo-900 dark:text-white">
                .
              </span>
            </a>

            <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
              Building, learning, and growing through technology.
            </p>
          </div>

          {/* Footer Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/thushijayamaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-600 transition hover:text-violet-600 dark:text-zinc-300 dark:hover:text-violet-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/thushini-jayamaha-071b71351"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 transition hover:text-violet-600 dark:text-zinc-300 dark:hover:text-violet-400"
            >
              <FaLinkedin size={22} />
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="rounded-xl bg-violet-100 p-3 text-violet-600 transition-colors hover:bg-violet-200 dark:bg-violet-500/15 dark:text-violet-400 dark:hover:bg-violet-500/25"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-100 pt-6 text-center dark:border-violet-500/15">
          <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Thushini Jayamaha.
            Made with
            <Heart
              size={14}
              className="text-violet-500 dark:text-fuchsia-400"
            />
            and code.
          </p>
        </div>
      </footer>
    </>
  );
}
