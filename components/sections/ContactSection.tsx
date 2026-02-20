"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useApp } from "@/lib/context";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    { icon: MapPin, label: "QNB 16, Lote 08, Taguatinga Norte, Distrito Federal" },
    { icon: Phone, label: "(61) 98239-7391", href: "tel:+5561982397391" },
    { icon: Mail, label: "kainde@kainde.com.br", href: "mailto:kainde@kainde.com.br" },
    { icon: Clock, label: t.contact.info.hours },
  ];

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl text-sm font-heading transition-all duration-200 outline-none",
    "bg-brand-dark-2 dark:bg-brand-dark-2 border border-white/10",
    "text-white placeholder-brand-gray-mid",
    "focus:border-brand-red focus:ring-1 focus:ring-brand-red/30"
  );

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="py-28 bg-brand-black relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(193,18,31,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal section-reveal">
          <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
            {t.contact.label}
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mt-3">
            {t.contact.title}{" "}
            <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-brand-gray-light mt-5 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal section-reveal space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-brand-dark-1 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-brand-red" />
                  </div>
                  <div className="flex items-center">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-gray-light hover:text-brand-red text-sm font-heading transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-brand-gray-light text-sm font-heading">{item.label}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="reveal section-reveal relative h-56 rounded-2xl overflow-hidden border border-white/5 bg-brand-dark-2">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <MapPin size={32} className="text-brand-red" />
                <p className="text-brand-gray-light text-sm font-heading text-center px-4">
                  Taguatinga, Brasília – DF
                </p>
                <a
                  href="https://maps.google.com/?q=QNB+16+Lote+08+Taguatinga+Norte+DF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-heading rounded-lg hover:bg-brand-red hover:text-white transition-colors"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal section-reveal">
            <div className="bg-brand-dark-1 rounded-2xl border border-white/5 p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">Mensagem Enviada!</h3>
                  <p className="text-brand-gray-light text-sm">{t.contact.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading text-brand-gray-light mb-1.5 uppercase tracking-wider">
                        {t.contact.form.name} *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="João Silva"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading text-brand-gray-light mb-1.5 uppercase tracking-wider">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="joao@empresa.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading text-brand-gray-light mb-1.5 uppercase tracking-wider">
                        {t.contact.form.phone}
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(61) 99999-9999"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading text-brand-gray-light mb-1.5 uppercase tracking-wider">
                        {t.contact.form.company}
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Sua Empresa"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-heading text-brand-gray-light mb-1.5 uppercase tracking-wider">
                      {t.contact.form.subject}
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={cn(inputClass, "appearance-none cursor-pointer")}
                    >
                      <option value="" className="bg-brand-dark-2">Selecione um assunto</option>
                      <option value="infraestrutura" className="bg-brand-dark-2">Infraestrutura de TI</option>
                      <option value="cloud" className="bg-brand-dark-2">Cloud Computing</option>
                      <option value="software" className="bg-brand-dark-2">Desenvolvimento de Software</option>
                      <option value="devops" className="bg-brand-dark-2">DevOps & Kubernetes</option>
                      <option value="cabeamento" className="bg-brand-dark-2">Cabeamento Estruturado</option>
                      <option value="suporte" className="bg-brand-dark-2">Suporte Técnico</option>
                      <option value="outro" className="bg-brand-dark-2">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-heading text-brand-gray-light mb-1.5 uppercase tracking-wider">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Descreva como podemos ajudar..."
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      "w-full py-4 rounded-xl font-heading font-semibold flex items-center justify-center gap-3 transition-all duration-300",
                      status === "sending"
                        ? "bg-brand-gray cursor-not-allowed"
                        : "bg-brand-red hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
                    )}
                  >
                    <Send size={18} className="text-white" />
                    <span className="text-white">
                      {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
