"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiGo,
  SiTypescript,
  SiNodedotjs,
  SiGin,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiElasticsearch,
  SiApachecassandra,
  SiFirebase,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const skillIcons: Record<string, IconType> = {
  Golang: SiGo,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Java: FaJava,
  Gin: SiGin,
  NestJS: SiNestjs,
  "Next.js": SiNextdotjs,
  React: SiReact,
  "React Native": SiReact,
  Express: SiExpress,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  "GitHub Actions": SiGithubactions,
  MySQL: SiMysql,
  Postgres: SiPostgresql,
  MongoDB: SiMongodb,
  Elasticsearch: SiElasticsearch,
  Cassandra: SiApachecassandra,
  Firestore: SiFirebase,
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, staggerChildren: 0.1 }}
      className="font-mono"
    >
      {text}
    </motion.span>
  );
};

const skills = {
  Languages: ["Golang", "TypeScript", "Node.js", "Java"],
  "Frameworks": ["Gin", "NestJS", "Next.js", "React", "React Native", "Express"],
  "Cloud & DevOps": ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  Databases: ["MySQL", "Postgres", "MongoDB", "Elasticsearch", "Cassandra", "Firestore"],
};

const experiences = [
  {
    title: "Founding Engineer",
    company: "Checktrusty",
    url: "https://www.checktrusty.com",
    location: "Dubai",
    period: "June 2025 — Present",
    current: true,
    bullets: [
      "Owned the full technology stack end-to-end — product architecture, backend services, frontend, and cloud infrastructure",
      "Pioneered an AI-first engineering culture, integrating LLMs and AI-native tooling to accelerate development",
      "Designed and delivered an end-to-end booking service, forming the core transactional engine of the platform",
      "Integrated VOIP and WhatsApp communication channels for real-time customer engagement",
      "Provisioned production-grade infrastructure on AWS using Kubernetes and Terraform",
    ],
    tech: ["Golang", "TypeScript", "Next.js", "React", "MySQL", "AWS", "Kubernetes", "Terraform"],
  },
  {
    title: "Senior Software Engineer",
    company: "Tradeling",
    url: "https://www.tradeling.com",
    location: "Dubai",
    period: "Aug 2021 — June 2025",
    bullets: [
      "Led integration of payment providers including Amazon APS, Checkout.com, Tamara, Tabby, Apple Pay and Google Pay",
      "Led integration of Al Etihad Credit Bureau (AECB) and credit insurance providers including Etihad Credit Insurance and Coface",
      "Developed Tradeling Wallet — enabling refunds directly to wallet and apply to new purchases",
      "Built automated refund workflows and internal credit application assessment system",
    ],
    tech: ["Node.js", "TypeScript", "NestJS", "Golang", "MongoDB", "Postgres", "React", "Next.js"],
  },
  {
    title: "Senior Software Engineer",
    company: "Tenderd",
    url: "https://www.tenderd.com",
    location: "Dubai",
    period: "Sep 2019 — July 2021",
    bullets: [
      "Led a team of 5, designing backend architecture and workflows",
      "Architected the full stack for a fleet tracking and monitoring system, supporting 1,000+ connected devices",
      "Developed the Fleet Manager mobile app with live bidding and logistics tracking",
    ],
    tech: ["Node.js", "MongoDB", "Firebase", "Socket.io", "React Native"],
  },
  {
    title: "Software Engineer",
    company: "SellerApp",
    url: "https://www.sellerapp.com",
    location: "Bangalore",
    period: "May 2017 — Aug 2019",
    bullets: [
      "Designed and built high-performing, scalable microservices",
      "Implemented CI/CD pipelines, mastered GCP and associated tooling",
      "Led frontend engineering — defined application structure and adopted standard design patterns",
      "Developed Chrome extensions with 50k+ downloads",
    ],
    tech: ["Go", "MySQL", "Elasticsearch", "Cassandra", "React", "Docker"],
  },
  {
    title: "Summer Analyst",
    company: "JP Morgan Chase",
    url: "https://www.jpmorgan.com",
    location: "Mumbai",
    period: "May — July 2016",
    bullets: [
      "Migrated an internal desktop application to web, designed application interfaces",
      "Integrated RESTful services and created new APIs, followed TDD approach",
    ],
    tech: ["AngularJS", "Node.js", "Java", "Spring Boot"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#64ffda] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1e1e2e]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-[#64ffda]">
          </span>
          <div className="hidden sm:flex gap-8">
            {["Skills", "Experience", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#71717a] hover:text-[#e4e4e7] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32"
      >
        <div className="max-w-3xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda]">
              <span className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse" />
              Available for opportunities
            </span>
          </motion.div> */}
          <motion.div className="mb-4 text-[#71717a] text-sm">
            <TypewriterText text="$ whoami" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="text-[#e4e4e7]">Hi, I&apos;m </span>
            <span className="text-[#64ffda]">
              Anas Muhammed
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-[#71717a] mb-8"
          >
            Founding Engineer & Senior Software Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base mb-10 leading-relaxed max-w-2xl text-[#a1a1aa]"
          >
            <TypewriterText text="$ cat about.txt" />
            <p className="mt-4">
              Building end-to-end products — from backend architecture and cloud
              infrastructure to polished frontends. 9+ years shipping scalable
              systems with Go, TypeScript, and Kubernetes. CKA certified.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-[#0a0a0f] bg-[#64ffda] shadow-lg shadow-[#64ffda]/30 hover:shadow-[#64ffda]/50 hover:-translate-y-0.5 transition-all text-center"
            >
              Get in touch →
            </a>
            <a
              href="https://github.com/anasanzari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-[#1e1e2e] text-[#e4e4e7] hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all text-center"
            >
              GitHub →
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#12121a]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#64ffda] mb-3 font-mono">
              // What I work with
            </p>
            <h2 className="text-3xl font-bold text-[#e4e4e7]">
              Technical Skills
            </h2>
          </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {Object.entries(skills).map(([category, items], catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#64ffda]/30 hover:bg-[#1a1a26] hover:-translate-y-1 transition-all"
              >
                <h3 className="text-sm font-semibold text-[#e4e4e7] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => {
                    const Icon = skillIcons[item];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[#64ffda]/8 text-[#8892b0] border border-[#8892b0]/12 font-mono"
                      >
                        {Icon && <Icon className="w-4 h-4 text-[#64ffda]" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="inline-flex items-center gap-4 p-5 rounded-2xl bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#64ffda]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#64ffda]/15 flex items-center justify-center text-2xl">
                ☸️
              </div>
              <div>
                <h3 className="font-semibold text-[#e4e4e7] text-sm">
                  Certified Kubernetes Administrator
                </h3>
                <p className="text-xs text-[#71717a]">CNCF</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#64ffda] mb-3 font-mono">
              // Where I&apos;ve worked
            </p>
            <h2 className="text-3xl font-bold text-[#e4e4e7]">Experience</h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#64ffda]/40 rounded-full" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative pl-10"
                >
                  <div
                    className={`absolute left-[-5px] top-1.5 w-3 h-3 rounded-full border-2 ${exp.current
                      ? "bg-[#64ffda] border-[#64ffda] shadow-[0_0_0_4px_#0a0a0f,0_0_0_6px_#64ffda] animate-pulse"
                      : "bg-[#64ffda]/50 border-[#64ffda]/50 shadow-[0_0_0_4px_#0a0a0f,0_0_0_6px_rgba(100,255,218,0.3)]"
                      }`}
                  />
                  <span className="text-xs text-[#64ffda] font-mono mb-2 block">
                    {exp.period}
                  </span>
                  <div className="p-6 rounded-2xl bg-[#12121a] border border-[#1e1e2e] hover:border-[#64ffda]/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#e4e4e7]">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium mb-3">
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64ffda] hover:brightness-125 transition-all"
                      >
                        {exp.company}
                      </a>
                      <span className="text-[#71717a]"> · {exp.location}</span>
                    </p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-[#a1a1aa] text-sm pl-5 relative"
                        >
                          <span className="absolute left-0 text-[#64ffda]">
                            ▹
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1e1e2e]">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md text-[0.7rem] bg-[#64ffda]/8 text-[#64ffda] border border-[#64ffda]/12 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-[#12121a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs tracking-widest uppercase text-[#64ffda] mb-3 font-mono">
                // Background
              </p>
              <h2 className="text-3xl font-bold text-[#e4e4e7]">Education</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#64ffda]/20 hover:-translate-y-1 transition-all"
              >
                <h3 className="font-semibold text-[#e4e4e7]">
                  Bachelor of Technology
                </h3>
                <p className="text-[#64ffda] text-sm mt-1">
                  National Institute of Technology Calicut
                </p>
                <p className="text-[#71717a] text-xs font-mono mt-1">
                  2013 — 2017
                </p>
                <p className="text-[#8892b0] text-sm mt-2">
                  Computer Science & Engineering · GPA: 8.84
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#64ffda]/20 hover:-translate-y-1 transition-all"
              >
                <h3 className="font-semibold text-[#e4e4e7]">
                  Higher Secondary School
                </h3>
                <p className="text-[#64ffda] text-sm mt-1">
                  TD Higher Secondary School, Alappuzha
                </p>
                <p className="text-[#71717a] text-xs font-mono mt-1">
                  2011 — 2013
                </p>
                <p className="text-[#8892b0] text-sm mt-2">12th — 97.4%</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#64ffda] mb-3 font-mono">
              // Let&apos;s connect
            </p>
            <h2 className="text-3xl font-bold text-[#e4e4e7]">Get In Touch</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:anasanzari@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda] hover:bg-[#64ffda]/20 hover:-translate-y-1 transition-all text-sm font-medium"
            >
              <span className="text-lg">✉️</span>
              Email
            </a>
            <a
              href="https://github.com/anasanzari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#12121a] border border-[#1e1e2e] text-[#e4e4e7] hover:border-[#64ffda]/30 hover:bg-[#1a1a26] hover:-translate-y-1 transition-all text-sm font-medium"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2e] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#71717a] text-sm">
            &copy; {new Date().getFullYear()} Anas Muhammed. Built with purpose.
          </p>
        </div>
      </footer>
    </div>
  );
}
