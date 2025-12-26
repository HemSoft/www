import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  products: [
    { name: "Dashboard", href: "https://dashboard.hemmer.us" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "mailto:contact@hemmer.us" },
  ],
  resources: [
    { name: "GitHub", href: "https://github.com/HemSoft" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-8 py-12 lg:px-16 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/hemsoft-developments-logo.png"
                alt="HemSoft Developments"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-foreground">
                HemSoft
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI-powered engineering excellence. Building intelligent software
              solutions that transform complex challenges into elegant systems.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/HemSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} HemSoft Developments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
