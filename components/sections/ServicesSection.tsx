"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Server, Cloud, Code2, GitBranch, Cable, Headphones } from "lucide-react";
import { useApp } from "@/lib/context";

const serviceImages: Record<string, string> = {
  infrastructure: "/images/infraestrutura.png",
  cloud: "/images/cloud.png",
  software: "/images/software.png",
  devops: "/images/devops.png",
  cabling: "/images/cabeamento.png",
  support: "/images/suporte.png",
};

const serviceIcons: Record<string, React.ElementType> = {
  infrastructure: Server,
  cloud: Cloud,
  software: Code2,
  devops: GitBranch,
  cabling: Cable,
  support: Headphones,
};

export default function ServicesSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

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
      id="servicos"
      className="py-28 bg-brand-black dark:bg-brand-black light:bg-gray-950 relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(193,18,31,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal section-reveal">
          <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
            {t.services.label}
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mt-3">
            {t.services.title}{" "}
            <span className="text-gradient">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-brand-gray-light mt-5 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={i}
                className="reveal section-reveal group relative overflow-hidden rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all duration-500 bg-brand-dark-1 hover:bg-brand-dark-2 hover:shadow-2xl hover:shadow-brand-red/5 cursor-pointer"
              >
                {/* Service image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={serviceImages[service.icon]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark-1/60 to-brand-dark-1" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-brand-red/90 flex items-center justify-center shadow-lg">
                    {Icon && <Icon size={18} className="text-white" />}
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-4 left-4 font-mono text-4xl font-bold text-white/5">
                    0{i + 1}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-light text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-red text-sm font-heading font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Saiba mais</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal section-reveal">
          <Link
            href="/servicos"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-brand-red/40 hover:border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-heading font-semibold rounded transition-all duration-300"
          >
            Ver Todos os Serviços
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
