"use client";

import Image from "next/image";

const clients = [
  { name: "Unicred", logo: "/images/unicred.png" },
  { name: "CrediSIS", logo: "/images/credisis.png" },
  { name: "MME", logo: "/images/mme.png" },
  { name: "Paschoalotto", logo: "/images/paschoalotto.png" },
  { name: "Uello", logo: "/images/uello.png" },
  { name: "Rede Globo", logo: "/images/globo.png" },
  { name: "Destaxa", logo: "/images/destaxa.png" },
];

export default function ClientsMarquee() {
  return (
    <div className="relative py-14 bg-brand-dark-1 dark:bg-brand-dark-1 border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-brand-dark-1 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-brand-dark-1 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden gap-0">
        <div className="flex gap-20 animate-marquee shrink-0">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center h-16 w-44 relative opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </div>
          ))}
        </div>
        <div className="flex gap-20 animate-marquee2 shrink-0" aria-hidden>
          {clients.map((client) => (
            <div key={client.name + "-2"} className="flex items-center justify-center h-16 w-44 relative opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
