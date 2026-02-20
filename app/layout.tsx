import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Kainde Tecnologia",
  description:
    "Infraestrutura de TI, Cloud Computing, Desenvolvimento de Software, DevOps e Suporte Técnico especializado. Kainde Tecnologia em Brasília – DF.",
  keywords:
    "TI, tecnologia, infraestrutura, cloud, kubernetes, devops, software, brasília, suporte técnico",
  authors: [{ name: "Kainde Tecnologia" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Kainde Tecnologia",
    description: "Soluções em TI para Transformar seu Negócio",
    url: "https://www.kainde.com.br",
    siteName: "Kainde Tecnologia",
    images: [{ url: "/images/logoprincipal.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('kainde-theme');
                if (t === 'dark' || (!t && true)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="noise bg-white dark:bg-brand-black transition-colors duration-300 overflow-x-hidden">
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </AppProvider>
      </body>
    </html>
  );
}
