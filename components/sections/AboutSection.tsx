"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { useApp } from "@/lib/context";

export default function AboutSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Target,
      title: t.about.mission_title,
      text: t.about.mission_text,
    },
    {
      icon: Eye,
      title: t.about.vision_title,
      text: t.about.vision_text,
    },
    {
      icon: Heart,
      title: t.about.values_title,
      text: t.about.values_text,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-28 bg-white dark:bg-brand-dark-1 relative overflow-hidden"
    >
      {/* bg accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left – image collage */}
          <div className="relative reveal section-reveal">
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <Image
                  src="/images/Hero.png"
                  alt="Kainde Tecnologia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-brand-dark-2 rounded-2xl p-6 shadow-xl border border-black/5 dark:border-white/5 w-52">
                <div className="text-4xl font-heading font-bold text-brand-red mb-1">+6</div>
                <div className="text-sm text-brand-gray-mid dark:text-brand-gray-light font-heading">
                  Anos conectando empresas à inovação
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -top-6 -left-6 bg-brand-red rounded-2xl p-5 shadow-xl shadow-brand-red/30 w-44">
                <div className="text-3xl font-heading font-bold text-white mb-1">Brasília</div>
                <div className="text-xs text-red-200 font-heading">DF · Brasil</div>
              </div>
            </div>

            {/* Logo watermark */}
            <div className="absolute bottom-12 left-8 opacity-10">
              <div className="relative w-24 h-24">
                <Image src="/images/favicon.png" alt="" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Right – text */}
          <div className="space-y-8">
            <div className="reveal section-reveal">
              <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
                {t.about.label}
              </span>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-black dark:text-white mt-3 leading-tight">
                {t.about.title}{" "}
                <span className="text-gradient">{t.about.titleHighlight}</span>
              </h2>
            </div>

            <div className="reveal section-reveal space-y-4">
              <p className="text-brand-gray dark:text-brand-gray-light leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-brand-gray dark:text-brand-gray-light leading-relaxed">
                {t.about.p2}
              </p>
            </div>

            {/* Pillars */}
            <div className="grid gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="reveal section-reveal flex gap-4 p-4 rounded-xl border border-black/5 dark:border-white/5 hover:border-brand-red/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red transition-colors">
                    <pillar.icon size={18} className="text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-brand-black dark:text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-gray dark:text-brand-gray-light leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal section-reveal">
              <Link
                href="/sobre"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold rounded transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/25"
              >
                {t.about.cta}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
