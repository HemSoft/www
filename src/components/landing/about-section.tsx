"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Cpu, Sparkles, Terminal } from "lucide-react";
import { useRef } from "react";

const offerings = [
  {
    icon: Code2,
    title: ".NET Excellence",
    description: "Enterprise-grade solutions built on modern .NET architecture",
  },
  {
    icon: Terminal,
    title: "VS Code Extensions",
    description: "Developer productivity tools that integrate seamlessly",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Intelligent automation powered by cutting-edge AI",
  },
  {
    icon: Sparkles,
    title: "Skill-Driven Agents",
    description: "Autonomous agents that learn and adapt to your workflows",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px flex-1 max-w-16 bg-primary" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              About HemSoft
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Engineering the Future of Software
          </h2>
          <p className="text-lg text-muted-foreground">
            We harness AI to build powerful, maintainable software for
            businesses and the open-source community. Our mission is to make
            complex technology accessible through elegant, thoughtful design.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <offering.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {offering.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
