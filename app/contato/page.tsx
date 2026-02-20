"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { useApp } from "@/lib/context";
import { cn } from "@/lib/utils";

export default function ContatoPage() {
  const { t } = useApp();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    }, 5000);
  };

  const inputClass = cn(
    "w-full px-4 py-3.5 rounded-xl text-sm font-heading transition-all duration-200 outline-none",
    "bg-white dark:bg-brand-dark-2 border border-black/10 dark:border-white/10",
    "text-brand-black dark:text-white placeholder-brand-gray-mid",
    "focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
  );

  const contactInfo = [
    { icon: MapPin, label: "Endereço", value: "QNB 16, Lote 08, Taguatinga Norte, Distrito Federal" },
    { icon: Phone, label: "Telefone / WhatsApp", value: "(61) 98239-7391", href: "tel:+5561982397391" },
    { icon: Mail, label: "E-mail", value: "kainde@kainde.com.br", href: "mailto:kainde@kainde.com.br" },
    { icon: Clock, label: "Horário", value: t.contact.info.hours },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="text-brand-red font-mono text-xs tracking-widest uppercase font-medium">
            {t.contact.label}
          </span>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mt-4 leading-tight">
            {t.contact.title}{" "}
            <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h1>
          <p className="text-brand-gray-light text-lg mt-6 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-white dark:bg-brand-dark-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info cards */}
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-brand-dark-2 border border-black/5 dark:border-white/5 hover:border-brand-red/20 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-brand-black dark:text-white text-sm font-heading hover:text-brand-red transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-brand-black dark:text-white text-sm font-heading">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* CNPJ info */}
              <div className="p-5 rounded-2xl bg-white dark:bg-brand-dark-2 border border-black/5 dark:border-white/5">
                <div className="text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light uppercase tracking-wider mb-2">
                  CNPJ
                </div>
                <span className="text-brand-black dark:text-white text-sm font-mono">
                  46.355.902/0001-41
                </span>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5561982397391?text=Olá! Vim pelo site e gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-brand-black dark:text-white group-hover:text-green-500 transition-colors">
                    Atendimento Rápido
                  </div>
                  <div className="text-sm text-brand-gray dark:text-brand-gray-light">
                    Resposta em minutos via WhatsApp
                  </div>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-brand-dark-2 rounded-2xl border border-black/5 dark:border-white/5 p-8 shadow-xl shadow-black/5">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center h-80 gap-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-2">
                        Mensagem Enviada!
                      </h3>
                      <p className="text-brand-gray dark:text-brand-gray-light max-w-sm">
                        {t.contact.form.success}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-8">
                      Envie sua Mensagem
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light mb-2 uppercase tracking-wider">
                            {t.contact.form.name} *
                          </label>
                          <input name="name" value={form.name} onChange={handleChange} required placeholder="João Silva" className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light mb-2 uppercase tracking-wider">
                            {t.contact.form.email} *
                          </label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="joao@empresa.com" className={inputClass} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light mb-2 uppercase tracking-wider">
                            {t.contact.form.phone}
                          </label>
                          <input name="phone" value={form.phone} onChange={handleChange} placeholder="(61) 99999-9999" className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light mb-2 uppercase tracking-wider">
                            {t.contact.form.company}
                          </label>
                          <input name="company" value={form.company} onChange={handleChange} placeholder="Nome da Empresa" className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light mb-2 uppercase tracking-wider">
                          {t.contact.form.subject}
                        </label>
                        <select name="subject" value={form.subject} onChange={handleChange} className={cn(inputClass, "cursor-pointer")}>
                          <option value="">Selecione um assunto</option>
                          <option value="infraestrutura">Infraestrutura de TI</option>
                          <option value="cloud">Cloud Computing</option>
                          <option value="software">Desenvolvimento de Software</option>
                          <option value="devops">DevOps & Kubernetes</option>
                          <option value="cabeamento">Cabeamento Estruturado</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-semibold text-brand-gray-mid dark:text-brand-gray-light mb-2 uppercase tracking-wider">
                          {t.contact.form.message} *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Descreva seu projeto ou necessidade..."
                          className={cn(inputClass, "resize-none")}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className={cn(
                          "w-full py-4 rounded-xl font-heading font-bold flex items-center justify-center gap-3 transition-all duration-300 text-white",
                          status === "sending"
                            ? "bg-brand-gray cursor-not-allowed"
                            : "bg-brand-red hover:bg-brand-red-dark hover:shadow-2xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
                        )}
                      >
                        <Send size={18} />
                        {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
