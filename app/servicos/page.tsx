"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Server, Cloud, Code2, GitBranch, Cable, Headphones, CheckCircle } from "lucide-react";
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

const serviceDetails: Record<string, string[]> = {
  infrastructure: [
    "Planejamento e projeto de data centers",
    "Virtualização com VMware e Hyper-V",
    "Storage e backup corporativo",
    "Alta disponibilidade e redundância",
    "Monitoramento proativo 24/7",
  ],
  cloud: [
    "Migração para AWS, Azure e GCP",
    "Arquitetura multi-cloud e híbrida",
    "Gestão e otimização de custos",
    "Segurança e compliance cloud",
    "Treinamento de equipes",
  ],
  software: [
    "Sistemas de gestão personalizados",
    "APIs e integrações corporativas",
    "Aplicações web e mobile",
    "Automação de processos",
    "Manutenção e evolução de sistemas",
  ],
  devops: [
    "Implementação de CI/CD pipelines",
    "Orquestração com Kubernetes",
    "Containerização com Docker",
    "Infrastructure as Code (Terraform)",
    "Monitoramento com Prometheus/Grafana",
  ],
  cabling: [
    "Projeto e execução de redes Cat6/Cat6A",
    "Fibra óptica estruturada",
    "Certificação e documentação ABNT",
    "Data room e patch panels",
    "Redes sem fio Wi-Fi empresarial",
  ],
  support: [
    "Service desk nível 1, 2 e 3",
    "SLA garantido por contrato",
    "Manutenção preventiva e corretiva",
    "Gestão de ativos e inventário",
    "Treinamento de usuários",
  ],
};

export default function ServicosPage() {
  const { t } = useApp();

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
            {t.services.label}
          </span>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mt-4 leading-tight">
            {t.services.title}{" "}
            <span className="text-gradient">{t.services.titleHighlight}</span>
          </h1>
          <p className="text-brand-gray-light text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Service cards – detailed */}
      <section className="py-20 bg-white dark:bg-brand-dark-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {t.services.items.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              const details = serviceDetails[service.icon] || [];
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:direction-rtl" : ""}`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={serviceImages[service.icon]}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center">
                          {Icon && <Icon size={22} className="text-white" />}
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <span className="font-mono text-6xl font-bold text-white/10">0{i + 1}</span>
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:order-1"}>
                    <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
                      Serviço 0{i + 1}
                    </span>
                    <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-3 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-brand-gray dark:text-brand-gray-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle size={16} className="text-brand-red flex-shrink-0" />
                          <span className="text-sm text-brand-gray dark:text-brand-gray-light font-heading">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contato"
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold rounded transition-all"
                    >
                      Solicitar Orçamento
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-brand-dark-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Tecnologias que Dominamos</h2>
          <p className="text-brand-gray-light mb-12">Trabalhamos com as melhores ferramentas do mercado</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Linux", "VMware", "Cisco", "MikroTik", "Python", "Node.js", "React", "PostgreSQL", "MongoDB", "Redis", "Nginx", "Git"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-brand-dark-2 text-brand-gray-light font-mono text-sm hover:border-brand-red/40 hover:text-brand-red transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-4">Vamos Discutir sua Necessidade?</h2>
          <p className="text-red-200 mb-8">Nossa equipe está pronta para criar a solução ideal para o seu negócio.</p>
          <Link href="/contato" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-red font-heading font-bold rounded hover:bg-gray-100 transition-colors">
            Fale com um Especialista
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
