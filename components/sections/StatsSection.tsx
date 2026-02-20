"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "@/lib/context";

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const { t } = useApp();

  const stats = [
    { value: 6, suffix: "+", label: t.hero.stat1_label, desc: "de expertise em TI" },
    { value: 200, suffix: "+", label: t.hero.stat2_label, desc: "em todo o Brasil" },
    { value: 99.9, suffix: "%", label: t.hero.stat3_label, desc: "em nossos serviços" },
    { value: 24, suffix: "/7", label: "Suporte", desc: "disponível sempre" },
  ];

  return (
    <section className="py-20 bg-brand-red relative overflow-hidden">
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-800/30 rounded-full blur-3xl" />
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-red-900/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-5xl lg:text-6xl font-heading font-bold mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-heading font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-red-200 text-sm font-heading">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
