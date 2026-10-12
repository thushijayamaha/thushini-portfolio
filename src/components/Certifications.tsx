
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Cloud,
  GraduationCap,
} from "lucide-react";

type Certificate = {
  title: string;
  provider: string;
  year: string;
  image: string;
  link: string;
};

const certifications: Certificate[] = [
  {
    title: "Amazon Q Developer Fundamentals",
    provider: "AWS Training & Certification",
    year: "2026",
    image: "/certificates/amazon-q.png",
    link: "https://www.credly.com/badges/860911b4-d7e8-4c35-83bd-a365ba2b79b8/linked_in?t=tmdgoa",
  },
  {
    title: "Front-End Web Development",
    provider: "University of Moratuwa",
    year: "",
    image: "/certificates/front-end-web-development.png",
    link: "https://open.uom.lk/verify",
  },
  {
    title: "Python for Beginners",
    provider: "University of Moratuwa",
    year: "2023",
    image: "/certificates/python-for-beginners.png",
    link: "https://open.uom.lk/verify",
  },
  {
    title: "Web Design for Beginners",
    provider: "University of Moratuwa",
    year: "",
    image: "/certificates/web-design-for-beginners.png",
    link: "https://open.uom.lk/verify",
  },
];

function CertificateImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 p-6 transition-colors duration-300 dark:from-[#21172F] dark:via-[#291B3E] dark:to-[#15152D]">
      {imageError ? (
        <div className="flex flex-col items-center gap-3 text-violet-500 dark:text-violet-400">
          <Cloud size={45} />
          <span className="text-center text-sm font-semibold">
            {title}
          </span>
        </div>
      ) : (
        <img
          src={image}
          alt={`${title} certificate`}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-6 py-24 transition-colors duration-300 dark:from-[#09090F] dark:via-[#171025] dark:to-[#100D18]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Certifications & Achievements
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#111a42] md:text-4xl dark:text-white">
            Continuous Learning & Certifications
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-zinc-400">
            Training achievements reflecting my interest in cloud
            computing, development tools, and emerging technologies.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-lg shadow-indigo-100/50 transition-colors duration-300 dark:border-violet-500/15 dark:bg-[#171320] dark:shadow-none dark:hover:border-violet-400/40 dark:hover:shadow-xl dark:hover:shadow-violet-500/10"
            >
              {/* Certificate Image */}
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${certificate.title}`}
                className="block cursor-zoom-in"
              >
                <CertificateImage
                  image={certificate.image}
                  title={certificate.title}
                />
              </a>

              {/* Certificate Information */}
              <div className="p-7">

                {/* Provider */}
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400">
                  <GraduationCap size={18} />
                  {certificate.provider}
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-extrabold text-[#111a42] dark:text-white">
                  {certificate.title}
                </h3>

                {/* Completion Year */}
                <p className="mt-3 text-sm text-slate-500 dark:text-zinc-400">
                  Completed
                  {certificate.year && ` · ${certificate.year}`}
                </p>

                {/* Verification Link */}
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-600 transition hover:text-indigo-700 dark:text-violet-400 dark:hover:text-fuchsia-300"
                  >
                    {certificate.provider ===
                    "AWS Training & Certification"
                      ? "Verify Badge"
                      : "Verify Certificate"}

                    <ExternalLink size={17} />
                  </a>
                )}

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
