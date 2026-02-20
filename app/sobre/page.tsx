"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Award, MapPin } from "lucide-react";
import { useApp } from "@/lib/context";

export default function SobrePage() {
  const { t } = useApp();

  const timeline = [
    { year: "2020", title: "Fundação", desc: "Kainde Tecnologia nasce em Brasília com foco em suporte técnico e infraestrutura de redes para empresas do Distrito Federal." },
    { year: "2021", title: "Primeiros Contratos", desc: "Expansão do portfólio com os primeiros contratos corporativos em cabeamento estruturado e manutenção preventiva." },
    { year: "2022", title: "Cloud & DevOps", desc: "Adoção de soluções em nuvem (AWS e Azure) e práticas DevOps para atender médias e grandes empresas." },
    { year: "2023", title: "Grandes Parceiros", desc: "Firmamos contratos com empresas de grande porte, consolidando nossa presença no mercado corporativo do DF." },
    { year: "2024", title: "Kubernetes & Software", desc: "Ampliação para orquestração de containers com Kubernetes e desenvolvimento de software sob medida." },
    { year: "2026", title: "Hoje", desc: "+200 clientes atendidos, equipe especializada e soluções completas em todo o ecossistema de TI." },
  ];

  const team = [
    { name: "André Kainde", role: "CEO & Founder", img: "/images/Artboard_4.png" },
    { name: "Equipe Técnica", role: "Especialistas em TI", img: "/images/Artboard_3.png" },
    { name: "Suporte N3", role: "Analistas Sênior", img: "/images/Artboard_5.png" },
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
              {t.about.label}
            </span>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mt-4 leading-tight">
              {t.about.title}{" "}
              <span className="text-gradient">{t.about.titleHighlight}</span>
            </h1>
            <p className="text-brand-gray-light text-lg mt-6 leading-relaxed max-w-2xl">
              {t.about.p1}
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20 bg-brand-dark-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: t.about.mission_title, text: t.about.mission_text },
              { icon: Eye, title: t.about.vision_title, text: t.about.vision_text },
              { icon: Heart, title: t.about.values_title, text: t.about.values_text },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-brand-dark-2 border border-white/5 hover:border-brand-red/20 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                  <item.icon size={22} className="text-brand-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-brand-gray-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">Nossa Trajetória</span>
            <h2 className="font-heading font-bold text-4xl text-brand-black dark:text-white mt-3">6 Anos de Inovação</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-brand-red/50 to-transparent hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`flex gap-8 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="p-6 rounded-2xl bg-white dark:bg-brand-dark-1 border border-black/5 dark:border-white/5 hover:border-brand-red/20 transition-colors inline-block max-w-sm">
                      <div className="text-brand-red font-mono font-bold text-lg mb-2">{item.year}</div>
                      <div className="font-heading font-bold text-lg text-brand-black dark:text-white mb-2">{item.title}</div>
                      <div className="text-brand-gray dark:text-brand-gray-light text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-brand-red border-4 border-brand-black flex-shrink-0 relative z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-4">Pronto para Trabalhar Conosco?</h2>
          <p className="text-red-200 mb-8">Entre em contato e descubra como podemos transformar a TI da sua empresa.</p>
          <Link href="/contato" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-red font-heading font-bold rounded hover:bg-gray-100 transition-colors">
            {t.nav.cta}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
