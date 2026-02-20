"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { useApp } from "@/lib/context";
import { cn } from "@/lib/utils";

const clientLogos: Record<string, string> = {
  Unicred: "/images/unicred.png",
  CrediSIS: "/images/credisis.png",
  MME: "/images/mme.png",
  Paschoalotto: "/images/paschoalotto.png",
  Uello: "/images/uello.png",
  "Rede Globo": "/images/globo.png",
};

const categories = ["Todos", "Infraestrutura & Redes", "Cloud & DevOps", "Desenvolvimento de Software", "Suporte Técnico", "Cloud Computing"];

export default function PortfolioPage() {
  const { t } = useApp();
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? t.portfolio.cases
    : t.portfolio.cases.filter((c) => c.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,18,31,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(193,18,31,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
            {t.portfolio.label}
          </span>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mt-4 leading-tight">
            {t.portfolio.title}{" "}
            <span className="text-gradient">{t.portfolio.titleHighlight}</span>{" "}
            {t.portfolio.titleEnd}
          </h1>
          <p className="text-brand-gray-light text-lg mt-6 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-brand-dark-1 sticky top-[72px] z-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter size={14} className="text-brand-gray-mid flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-heading font-medium whitespace-nowrap transition-all",
                  activeFilter === cat
                    ? "bg-brand-red text-white"
                    : "border border-white/10 text-brand-gray-light hover:border-brand-red/40 hover:text-brand-red"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white dark:bg-brand-dark-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <div
                key={i}
                className="group relative bg-white dark:bg-brand-dark-2 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-brand-red/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40"
              >
                <div className="relative h-48 bg-gradient-to-br from-brand-dark-2 to-brand-dark-3 flex items-center justify-center overflow-hidden">
                  {clientLogos[c.client] ? (
                    <div className="relative w-40 h-20">
                      <Image
                        src={clientLogos[c.client]}
                        alt={c.client}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                      />
                    </div>
                  ) : (
                    <span className="font-heading font-bold text-2xl text-white/40">{c.client}</span>
                  )}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ExternalLink size={14} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-mono text-brand-red uppercase tracking-wider">{c.category}</span>
                  <h3 className="font-heading font-bold text-xl text-brand-black dark:text-white mt-1 mb-3">{c.client}</h3>
                  <p className="text-sm text-brand-gray dark:text-brand-gray-light leading-relaxed">{c.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-brand-red transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-4">Seu Projeto Pode Ser o Próximo</h2>
          <p className="text-red-200 mb-8">Junte-se aos mais de 200 clientes que confiam na Kainde Tecnologia.</p>
          <Link href="/contato" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-red font-heading font-bold rounded hover:bg-gray-100 transition-colors">
            Iniciar Projeto
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
