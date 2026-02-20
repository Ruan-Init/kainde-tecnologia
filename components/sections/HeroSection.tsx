"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Shield, Zap, Globe } from "lucide-react";
import { useApp } from "@/lib/context";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

export default function HeroSection() {
  const { t } = useApp();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: t.hero.stat1_value, label: t.hero.stat1_label, icon: Shield },
    { value: t.hero.stat2_value, label: t.hero.stat2_label, icon: Globe },
    { value: t.hero.stat3_value, label: t.hero.stat3_label, icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black">
      {/* Three.js Background */}
      <HeroCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,18,31,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(193,18,31,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-brand-red text-xs font-mono tracking-widest uppercase">
                {t.hero.tagline}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6">
              {t.hero.title}{" "}
              <span className="text-gradient block">{t.hero.titleHighlight}</span>
              <span className="block">{t.hero.titleEnd}</span>
            </h1>

            <p className="text-brand-gray-light text-lg leading-relaxed mb-10 max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/servicos"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold rounded transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
              >
                {t.hero.cta_primary}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/20 hover:border-brand-red/50 text-white font-heading font-semibold rounded transition-all duration-300 hover:bg-brand-red/5"
              >
                {t.hero.cta_secondary}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 delay-${(i + 1) * 200} ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-brand-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-brand-gray-light font-heading leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Logo + Mockup */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1200 delay-300 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-[460px] h-[460px]">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-brand-red/10 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-brand-red/20 animate-[spin_12s_linear_infinite_reverse]" />

              {/* Hexagon glow */}
              <div className="absolute inset-12 hex-clip bg-gradient-to-br from-brand-red/20 to-brand-dark-3/40 backdrop-blur-sm" />

              {/* Logo centered */}
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/logoprincipal.png"
                    alt="Kainde Tecnologia"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-full text-xs font-mono text-brand-gray-light border-brand-red/20 animate-float" style={{ animationDelay: "1s" }}>
                Cloud ☁️ DevOps
              </div>
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 px-4 py-2 glass rounded-full text-xs font-mono text-brand-gray-light animate-float" style={{ animationDelay: "2s" }}>
                Kubernetes 🚀
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 px-4 py-2 glass rounded-full text-xs font-mono text-brand-gray-light animate-float" style={{ animationDelay: "0.5s" }}>
                24/7 Support ⚡
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-full text-xs font-mono text-brand-red animate-float" style={{ animationDelay: "1.5s" }}>
                ∞ Kainde
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown size={20} className="text-brand-red/60" />
      </div>
    </section>
  );
}
