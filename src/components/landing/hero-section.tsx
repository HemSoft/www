"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* WaterGlow Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Landing-Page-Background-WaterGlow.png')",
          }}
        />
      </motion.div>

      {/* Dark Gradient Overlay - Left Side */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"
      />

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex h-full items-center pt-24 lg:pt-32"
      >
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-2xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="text-primary">AI-Powered</span> Engineering
              Excellence Through Simplicity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground sm:text-xl"
            >
              HemSoft Developments crafts intelligent software solutions that
              transform complex challenges into elegant, maintainable systems.
              We believe the best technology disappears into seamless
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-2 text-sm text-primary/80"
            >
              <div className="h-px w-12 bg-primary/50" />
              <span>Scroll to explore</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
