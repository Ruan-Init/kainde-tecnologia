"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useApp } from "@/lib/context";

export default function Footer() {
  const { t } = useApp();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: "/servicos", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/certificacoes", label: t.nav.certifications },
    { href: "/contato", label: t.nav.contact },
  ];

  const services = [
    "Infraestrutura de TI",
    "Cloud Computing",
    "Desenvolvimento de Software",
    "DevOps & Kubernetes",
    "Cabeamento Estruturado",
    "Suporte Técnico",
  ];

  return (
    <footer className="hidden md:block bg-brand-dark-1 dark:bg-brand-black border-t border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/favicon.png"
                  alt="Kainde Tecnologia"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-wide">
                  <span className="text-brand-red">K</span>ainde
                </span>
                <p className="text-xs text-brand-gray-light tracking-widest uppercase leading-none">
                  Tecnologia
                </p>
              </div>
            </Link>
            <p className="text-brand-gray-light text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <p className="text-brand-gray-mid text-xs font-mono">
              CNPJ: 46.355.902/0001-41
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-red" />
              {t.footer.links_title}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-light hover:text-brand-red text-sm transition-colors font-heading flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-red" />
              {t.footer.services_title}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicos"
                    className="text-brand-gray-light hover:text-brand-red text-sm transition-colors font-heading flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-red" />
              {t.footer.contact_title}
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-brand-gray-light text-sm leading-relaxed">
                  QNB 16, Lote 08, Taguatinga Norte, Distrito Federal
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5561982397391"
                  className="text-brand-gray-light hover:text-brand-red text-sm transition-colors"
                >
                  (61) 98239-7391
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:kainde@kainde.com.br"
                  className="text-brand-gray-light hover:text-brand-red text-sm transition-colors"
                >
                  kainde@kainde.com.br
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-brand-gray-light text-sm">
                  {t.contact.info.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray-mid text-xs font-heading">
            © {new Date().getFullYear()} Kainde Tecnologia. {t.footer.rights}
          </p>

        </div>
      </div>
    </footer>
  );
}
