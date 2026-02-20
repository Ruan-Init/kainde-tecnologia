"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useApp } from "@/lib/context";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { theme, toggleTheme, locale, setLocale, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: "/servicos", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/certificacoes", label: t.nav.certifications },
    { href: "/contato", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-white/95 dark:bg-brand-dark-1/95 backdrop-blur-xl shadow-lg shadow-black/10 dark:shadow-black/40 border-b border-black/5 dark:border-white/5"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/favicon.png"
                alt="Kainde Tecnologia"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-brand-black dark:text-brand-white tracking-wide">
                <span className="text-brand-red">K</span>ainde
              </span>
              <p className="text-xs text-brand-gray-mid dark:text-brand-gray-light tracking-widest uppercase leading-none">
                Tecnologia
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium font-heading tracking-wide rounded transition-all duration-200 relative group",
                  pathname === link.href
                    ? "text-brand-red"
                    : "text-brand-gray dark:text-brand-gray-light hover:text-brand-black dark:hover:text-brand-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-red transition-all duration-300",
                    pathname === link.href ? "w-4" : "w-0 group-hover:w-4"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm text-brand-gray-mid dark:text-brand-gray-light hover:text-brand-black dark:hover:text-brand-white transition-colors border border-transparent hover:border-brand-gray/20 dark:hover:border-white/10"
              >
                <Globe size={14} />
                <span className="font-heading font-medium uppercase">
                  {locale}
                </span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-32 rounded-lg overflow-hidden shadow-xl bg-white dark:bg-brand-dark-2 border border-black/10 dark:border-white/10">
                  {(["pt", "en"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLocale(l);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm font-heading transition-colors",
                        locale === l
                          ? "text-brand-red bg-brand-red/5"
                          : "text-brand-gray-mid dark:text-brand-gray-light hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                    >
                      {l === "pt" ? "🇧🇷 Português" : "🇺🇸 English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 text-brand-gray-mid dark:text-brand-gray-light hover:text-brand-black dark:hover:text-brand-white hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA */}
            <Link
              href="/contato"
              className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-heading font-semibold rounded transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/25 tracking-wide"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-brand-gray-mid dark:text-brand-gray-light"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-gray-mid dark:text-brand-gray-light"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 bg-white dark:bg-brand-dark-1 border-t border-black/5 dark:border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-heading font-medium transition-colors",
                pathname === link.href
                  ? "text-brand-red bg-brand-red/5"
                  : "text-brand-gray dark:text-brand-gray-light hover:bg-black/5 dark:hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
              className="flex-1 py-2.5 rounded-lg border border-black/10 dark:border-white/10 text-sm font-heading text-brand-gray-mid dark:text-brand-gray-light text-center"
            >
              {locale === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}
            </button>
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2.5 bg-brand-red text-white text-sm font-heading font-semibold rounded-lg text-center"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
