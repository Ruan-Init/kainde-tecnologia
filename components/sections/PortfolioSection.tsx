"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useApp } from "@/lib/context";

const clientLogos: Record<string, string> = {
  Unicred: "/images/unicred.png",
  CrediSIS: "/images/credisis.png",
  MME: "/images/mme.png",
  Paschoalotto: "/images/paschoalotto.png",
  Uello: "/images/uello.png",
  "Rede Globo": "/images/globo.png",
};

export default function PortfolioSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-28 bg-white dark:bg-brand-dark-1 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal section-reveal">
          <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
            {t.portfolio.label}
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-black dark:text-white mt-3">
            {t.portfolio.title}{" "}
            <span className="text-gradient">{t.portfolio.titleHighlight}</span>{" "}
            {t.portfolio.titleEnd}
          </h2>
          <p className="text-brand-gray dark:text-brand-gray-light mt-5 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.portfolio.cases.map((c, i) => (
            <div
              key={i}
              className="reveal section-reveal group relative bg-white dark:bg-brand-dark-2 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-brand-red/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Logo area */}
              <div className="relative h-40 bg-gradient-to-br from-brand-dark-2 to-brand-dark-3 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 bg-brand-red/5 transition-opacity duration-300"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
                {clientLogos[c.client] ? (
                  <div className="relative w-40 h-20">
                    <Image
                      src={clientLogos[c.client]}
                      alt={c.client}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <span className="font-heading font-bold text-2xl text-white/40 group-hover:text-white transition-colors">
                    {c.client}
                  </span>
                )}

                {/* Hover reveal icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ExternalLink size={14} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-mono text-brand-red mb-2 uppercase tracking-wider">
                  {c.category}
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-black dark:text-white mb-2">
                  {c.client}
                </h3>
                <p className="text-sm text-brand-gray dark:text-brand-gray-light leading-relaxed">
                  {c.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-brand-red transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal section-reveal">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold rounded transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/25"
          >
            {t.portfolio.cta}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
