"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface ProductShowcaseProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  index: number;
}

export function ProductShowcase({
  title,
  description,
  url,
  imageUrl,
  index,
}: ProductShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 === 1;

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-8 lg:px-16">
        <div
          className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Visit Site
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <BrowserMockup url={url} imageUrl={imageUrl} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrowserMockup({ url, imageUrl }: { url: string; imageUrl: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1.5 text-xs text-muted-foreground">
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-video bg-background">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Screenshot of ${url}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}
