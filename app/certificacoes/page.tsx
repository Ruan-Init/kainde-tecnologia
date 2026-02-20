"use client";

import { useState } from "react";
import { Award, Shield, Cloud, Code2, Lock, CheckCircle, ExternalLink, Calendar, Hash } from "lucide-react";
import { useApp } from "@/lib/context";
import { cn } from "@/lib/utils";

type Cert = {
  title: string;
  issuer: string;
  category: string;
  issued?: string;
  expires?: string;
  credential?: string;
  color: string;
  icon: React.ElementType;
  badge?: string;
};

const certs: Cert[] = [
  {
    title: "Google Cloud Certified – Associate Cloud Engineer",
    issuer: "Google Cloud",
    category: "Cloud",
    issued: "Jul 2024",
    expires: "Jul 2027",
    credential: "875b4e55a43646d490ac8682c70caab4",
    color: "from-blue-500/20 to-green-500/20",
    icon: Cloud,
    badge: "GCP",
  },
  {
    title: "ITIL® Foundation Certificate in IT Service Management",
    issuer: "PeopleCert / AXELOS",
    category: "Gestão de TI",
    issued: "Nov 2023",
    expires: "Nov 2026",
    credential: "GR671581086DE",
    color: "from-purple-500/20 to-pink-500/20",
    icon: Award,
    badge: "ITIL 4",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Observability Professional",
    issuer: "Oracle",
    category: "Cloud",
    issued: "2025",
    credential: "C76607CF335F65B09758DBEECA7C213C90C2E2FE57C7B699B79B816F2783CFC5",
    color: "from-red-500/20 to-orange-500/20",
    icon: Cloud,
    badge: "OCI",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle",
    category: "DevOps",
    issued: "2025",
    credential: "C63EB33A9922A1A25A5CBCF649F7E879B018AA99893DD1F900F420DB4E347655",
    color: "from-red-500/20 to-orange-500/20",
    icon: Code2,
    badge: "OCI",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    category: "Cloud",
    issued: "2025",
    credential: "100451924OCI25FNDCFA",
    color: "from-red-500/20 to-orange-500/20",
    icon: Cloud,
    badge: "OCI",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft",
    category: "Cloud",
    credential: "CD31179518F01ADB",
    color: "from-blue-400/20 to-cyan-500/20",
    icon: Cloud,
    badge: "AZ-104",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    category: "Cloud",
    credential: "94ECAAF02EE677F8",
    color: "from-blue-400/20 to-cyan-500/20",
    icon: Cloud,
    badge: "AZ-900",
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
    issuer: "Microsoft",
    category: "Segurança",
    color: "from-blue-400/20 to-cyan-500/20",
    icon: Shield,
    badge: "SC-900",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "Cloud",
    color: "from-yellow-500/20 to-orange-400/20",
    icon: Cloud,
    badge: "AWS",
  },
  {
    title: "Information Security Management (ISO/IEC 27001) Foundation",
    issuer: "CertiProf / PECB",
    category: "Segurança",
    credential: "153492586",
    color: "from-green-500/20 to-teal-500/20",
    icon: Lock,
    badge: "ISO 27001",
  },
  {
    title: "Information Security Controls (ISO/IEC 27002) Foundation",
    issuer: "CertiProf / PECB",
    category: "Segurança",
    color: "from-green-500/20 to-teal-500/20",
    icon: Lock,
    badge: "ISO 27002",
  },
  {
    title: "Information Security Audit (ISO/IEC 27007) Foundation",
    issuer: "CertiProf / PECB",
    category: "Segurança",
    color: "from-green-500/20 to-teal-500/20",
    icon: Lock,
    badge: "ISO 27007",
  },
  {
    title: "LGPD – Fundamentos na Lei Geral de Proteção de Dados",
    issuer: "CertiProf",
    category: "Segurança",
    color: "from-green-600/20 to-emerald-500/20",
    icon: Shield,
    badge: "LGPD",
  },
  {
    title: "Scrum Foundation Professional Certificate (SFPC)",
    issuer: "CertiProf",
    category: "Gestão de TI",
    color: "from-indigo-500/20 to-violet-500/20",
    icon: Award,
    badge: "SFPC",
  },
  {
    title: "Analista SOC – Certificado Profissional",
    issuer: "IBSEC – Instituto Brasileiro de Cibersegurança",
    category: "Segurança",
    color: "from-brand-red/20 to-rose-500/20",
    icon: Shield,
    badge: "SOC",
  },
];

const categories = ["Todas", "Cloud", "Segurança", "DevOps", "Gestão de TI"];

const issuerColors: Record<string, string> = {
  "Google Cloud": "text-blue-400",
  "Oracle": "text-orange-400",
  "Microsoft": "text-cyan-400",
  "Amazon Web Services": "text-yellow-400",
  "PeopleCert / AXELOS": "text-purple-400",
  "CertiProf / PECB": "text-green-400",
  "CertiProf": "text-green-400",
  "IBSEC – Instituto Brasileiro de Cibersegurança": "text-brand-red",
};

export default function CertificacoesPage() {
  const { t } = useApp();
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filtered = activeFilter === "Todas"
    ? certs
    : certs.filter((c) => c.category === activeFilter);

  const counts = categories.map((cat) => ({
    cat,
    count: cat === "Todas" ? certs.length : certs.filter((c) => c.category === cat).length,
  }));

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
              CREDENCIAIS & CERTIFICAÇÕES
            </span>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mt-4 leading-tight">
              Excelência{" "}
              <span className="text-gradient">Certificada</span>
            </h1>
            <p className="text-brand-gray-light text-lg mt-6 leading-relaxed max-w-2xl">
              Nossa equipe mantém certificações ativas nas principais plataformas e frameworks do mercado, garantindo as melhores práticas em cada projeto entregue.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12">
            {counts.slice(1).map(({ cat, count }) => (
              <div key={cat}>
                <div className="text-3xl font-heading font-bold text-brand-red">{count}</div>
                <div className="text-xs text-brand-gray-light font-heading mt-1">{cat}</div>
              </div>
            ))}
            <div>
              <div className="text-3xl font-heading font-bold text-white">{certs.length}</div>
              <div className="text-xs text-brand-gray-light font-heading mt-1">Total</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[72px] z-40 bg-brand-dark-1 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {counts.map(({ cat, count }) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-heading font-medium whitespace-nowrap transition-all",
                  activeFilter === cat
                    ? "bg-brand-red text-white"
                    : "border border-white/10 text-brand-gray-light hover:border-brand-red/40 hover:text-brand-red"
                )}
              >
                {cat}
                <span className={cn(
                  "text-xs rounded-full px-1.5 py-0.5",
                  activeFilter === cat ? "bg-white/20" : "bg-white/5"
                )}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications grid */}
      <section className="py-16 bg-brand-dark-1 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cert, i) => (
              <div
                key={i}
                className="group relative bg-brand-dark-2 rounded-2xl border border-white/5 hover:border-brand-red/25 transition-all duration-400 overflow-hidden hover:shadow-xl hover:shadow-brand-red/5"
              >
                {/* Gradient top accent */}
                <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity", cert.color.replace('/20', ''))} />

                {/* Card glow bg */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", cert.color)} />

                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <cert.icon size={20} className="text-brand-gray-light group-hover:text-white transition-colors" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-gray-light">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-white text-base leading-snug mb-2 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className={cn("text-xs font-heading font-medium mb-4", issuerColors[cert.issuer] || "text-brand-gray-light")}>
                    {cert.issuer}
                  </p>

                  {/* Meta */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {cert.issued && (
                      <div className="flex items-center gap-2 text-xs text-brand-gray-mid font-heading">
                        <Calendar size={12} className="text-brand-red flex-shrink-0" />
                        <span>
                          Emitido: <span className="text-brand-gray-light">{cert.issued}</span>
                          {cert.expires && (
                            <> · Válido até: <span className="text-brand-gray-light">{cert.expires}</span></>
                          )}
                        </span>
                      </div>
                    )}
                    {cert.credential && (
                      <div className="flex items-start gap-2 text-xs text-brand-gray-mid font-heading">
                        <Hash size={12} className="text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="font-mono text-brand-gray-mid break-all leading-relaxed">
                          {cert.credential.length > 32
                            ? cert.credential.slice(0, 32) + "…"
                            : cert.credential}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-xs font-heading">
                      <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                      <span className="text-green-500/80">Verificada & Ativa</span>
                    </div>
                  </div>
                </div>

                {/* Category chip bottom */}
                <div className="px-6 pb-5">
                  <span className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-heading border",
                    cert.category === "Cloud" && "border-blue-500/20 text-blue-400/80 bg-blue-500/5",
                    cert.category === "Segurança" && "border-brand-red/20 text-brand-red/80 bg-brand-red/5",
                    cert.category === "DevOps" && "border-purple-500/20 text-purple-400/80 bg-purple-500/5",
                    cert.category === "Gestão de TI" && "border-green-500/20 text-green-400/80 bg-green-500/5",
                  )}>
                    {cert.category}
                  </span>
                </div>

                {/* Bottom border glow on hover */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF certificates highlight */}
      <section className="py-16 bg-white dark:bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">Destaques</span>
            <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-3">
              Certificações em Destaque
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ITIL */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-brand-dark-2 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <Award size={28} className="text-purple-400" />
                </div>
                <div className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-wider">PeopleCert · AXELOS · ITIL 4</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2 leading-tight">
                  ITIL® Foundation Certificate in IT Service Management
                </h3>
                <p className="text-brand-gray-light text-sm mb-6 leading-relaxed">
                  Certificação internacional que valida o conhecimento em melhores práticas de gerenciamento de serviços de TI baseadas no framework ITIL 4.
                </p>
                <div className="space-y-2 text-xs font-heading text-brand-gray-mid">
                  <div className="flex justify-between">
                    <span>Emitido em</span><span className="text-white">08 Nov 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Válido até</span><span className="text-green-400">09 Nov 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nº Certificado</span><span className="text-white font-mono">GR671581086DE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Cloud */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-brand-dark-2 border border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                  <Cloud size={28} className="text-blue-400" />
                </div>
                <div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">Google Cloud · Associate</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2 leading-tight">
                  Google Cloud Certified – Associate Cloud Engineer
                </h3>
                <p className="text-brand-gray-light text-sm mb-6 leading-relaxed">
                  Certificação que comprova a capacidade de implantar aplicativos, monitorar operações e gerenciar soluções corporativas na Google Cloud Platform.
                </p>
                <div className="space-y-2 text-xs font-heading text-brand-gray-mid">
                  <div className="flex justify-between">
                    <span>Emitido em</span><span className="text-white">29 Jul 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Válido até</span><span className="text-green-400">29 Jul 2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Series ID</span><span className="text-white font-mono">146981</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
