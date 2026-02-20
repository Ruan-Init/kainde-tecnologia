export type Locale = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      portfolio: "Portfólio",
      certifications: "Certificações",
      contact: "Contato",
      cta: "Fale Conosco",
    },
    hero: {
      tagline: "TECNOLOGIA SEM LIMITES",
      title: "Soluções em TI para",
      titleHighlight: "Transformar",
      titleEnd: "seu Negócio",
      subtitle:
        "Infraestrutura robusta, suporte especializado e desenvolvimento sob medida para empresas que buscam excelência tecnológica.",
      cta_primary: "Nossos Serviços",
      cta_secondary: "Fale com Especialista",
      stat1_value: "+6",
      stat1_label: "Anos de Experiência",
      stat2_value: "+200",
      stat2_label: "Clientes Atendidos",
      stat3_value: "99.9%",
      stat3_label: "Uptime Garantido",
    },
    about: {
      label: "QUEM SOMOS",
      title: "Conectando Empresas à",
      titleHighlight: "Inovação",
      p1: "A Kainde Tecnologia é uma empresa especializada em soluções de TI, infraestrutura de redes e desenvolvimento de software. Fundada em 2020, com sede em Taguatinga Norte, Brasília – DF, atendemos empresas de todos os portes que buscam modernizar seus processos e garantir segurança digital.",
      p2: "Nosso time de especialistas combina expertise técnica com visão estratégica para entregar soluções que realmente fazem a diferença no seu negócio.",
      mission_title: "Missão",
      mission_text:
        "Prover soluções tecnológicas inovadoras que impulsionem o crescimento e a eficiência dos nossos clientes.",
      vision_title: "Visão",
      vision_text:
        "Ser referência em tecnologia no Centro-Oeste, reconhecidos pela excelência e confiabilidade.",
      values_title: "Valores",
      values_text:
        "Integridade, inovação, compromisso com resultados e foco total no cliente.",
      cta: "Conheça Nossa História",
    },
    services: {
      label: "SERVIÇOS",
      title: "O Que",
      titleHighlight: "Oferecemos",
      subtitle:
        "Soluções completas em tecnologia para impulsionar sua empresa ao próximo nível.",
      items: [
        {
          title: "Infraestrutura de TI",
          description:
            "Planejamento, implantação e gestão de infraestrutura tecnológica completa, incluindo servidores, redes e data centers.",
          icon: "infrastructure",
        },
        {
          title: "Cloud Computing",
          description:
            "Migração e gerenciamento em nuvem com AWS, Azure e Google Cloud. Escalabilidade e segurança para seu negócio.",
          icon: "cloud",
        },
        {
          title: "Desenvolvimento de Software",
          description:
            "Sistemas e aplicações sob medida para automatizar processos e aumentar a produtividade da sua empresa.",
          icon: "software",
        },
        {
          title: "DevOps & Kubernetes",
          description:
            "Pipelines de CI/CD, orquestração de containers e práticas DevOps para acelerar suas entregas com qualidade.",
          icon: "devops",
        },
        {
          title: "Cabeamento Estruturado",
          description:
            "Projeto e instalação de redes físicas de alto desempenho seguindo normas ABNT, garantindo conectividade total.",
          icon: "cabling",
        },
        {
          title: "Suporte Técnico",
          description:
            "Suporte especializado 24/7, manutenção preventiva e corretiva para manter sua operação sempre ativa.",
          icon: "support",
        },
      ],
    },
    portfolio: {
      label: "PORTFÓLIO",
      title: "Clientes que",
      titleHighlight: "Confiam",
      titleEnd: "em Nós",
      subtitle:
        "Trabalhamos com empresas líderes em seus segmentos, entregando soluções de alto impacto.",
      cases: [
        {
          client: "Unicred",
          category: "Infraestrutura & Redes",
          description:
            "Implantação de infraestrutura de rede completa com alta disponibilidade para cooperativa financeira.",
        },
        {
          client: "CrediSIS",
          category: "Cloud & DevOps",
          description:
            "Migração para nuvem e implementação de práticas DevOps para sistema de crédito.",
        },
        {
          client: "MME",
          category: "Desenvolvimento de Software",
          description:
            "Sistema de gestão interno personalizado para Ministério de Minas e Energia.",
        },
        {
          client: "Paschoalotto",
          category: "Suporte Técnico",
          description:
            "Contrato de suporte técnico especializado e gestão de ativos de TI.",
        },
        {
          client: "Uello",
          category: "Cloud Computing",
          description:
            "Arquitetura cloud escalável para plataforma de logística e entregas.",
        },
        {
          client: "Rede Globo",
          category: "Infraestrutura",
          description:
            "Soluções de conectividade e infraestrutura para operações de mídia.",
        },
      ],
      cta: "Ver Todos os Cases",
    },
    contact: {
      label: "CONTATO",
      title: "Vamos",
      titleHighlight: "Conversar?",
      subtitle:
        "Pronto para transformar sua infraestrutura de TI? Fale com nossos especialistas.",
      form: {
        name: "Seu Nome",
        email: "Seu E-mail",
        phone: "Seu Telefone",
        company: "Sua Empresa",
        subject: "Assunto",
        message: "Sua Mensagem",
        submit: "Enviar Mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        error: "Erro ao enviar. Por favor, tente novamente.",
      },
      info: {
        address: "QNB 16, Lote 08, Taguatinga Norte, Distrito Federal",
        cnpj: "46.355.902/0001-41",
        phone: "(61) 98239-7391",
        email: "kainde@kainde.com.br",
        hours: "Segunda a Sexta, 08h–18h",
      },
    },
    footer: {
      description:
        "Tecnologia sem limites para transformar o seu negócio. Soluções completas em TI para empresas que buscam excelência.",
      links_title: "Links Rápidos",
      services_title: "Serviços",
      contact_title: "Contato",
      rights: "Todos os direitos reservados.",
      made: "Feito com ❤️ em Brasília",
    },
    theme: {
      dark: "Modo Escuro",
      light: "Modo Claro",
    },
    lang: {
      pt: "Português",
      en: "English",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      certifications: "Certifications",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      tagline: "TECHNOLOGY WITHOUT LIMITS",
      title: "IT Solutions to",
      titleHighlight: "Transform",
      titleEnd: "Your Business",
      subtitle:
        "Robust infrastructure, specialized support and custom development for companies seeking technological excellence.",
      cta_primary: "Our Services",
      cta_secondary: "Talk to a Specialist",
      stat1_value: "+6",
      stat1_label: "Years of Experience",
      stat2_value: "+200",
      stat2_label: "Clients Served",
      stat3_value: "99.9%",
      stat3_label: "Guaranteed Uptime",
    },
    about: {
      label: "ABOUT US",
      title: "Connecting Companies to",
      titleHighlight: "Innovation",
      p1: "Kainde Tecnologia is a company specialized in IT solutions, network infrastructure and software development. Founded in 2020, headquartered in Taguatinga Norte, Brasília – DF, we serve companies of all sizes looking to modernize their processes and ensure digital security.",
      p2: "Our team of specialists combines technical expertise with strategic vision to deliver solutions that truly make a difference in your business.",
      mission_title: "Mission",
      mission_text:
        "To provide innovative technological solutions that drive the growth and efficiency of our clients.",
      vision_title: "Vision",
      vision_text:
        "To be a technology reference in Brazil's Center-West, recognized for excellence and reliability.",
      values_title: "Values",
      values_text:
        "Integrity, innovation, commitment to results and total focus on the client.",
      cta: "Learn Our Story",
    },
    services: {
      label: "SERVICES",
      title: "What We",
      titleHighlight: "Offer",
      subtitle:
        "Complete technology solutions to take your company to the next level.",
      items: [
        {
          title: "IT Infrastructure",
          description:
            "Planning, deployment and management of complete technology infrastructure, including servers, networks and data centers.",
          icon: "infrastructure",
        },
        {
          title: "Cloud Computing",
          description:
            "Cloud migration and management with AWS, Azure and Google Cloud. Scalability and security for your business.",
          icon: "cloud",
        },
        {
          title: "Software Development",
          description:
            "Custom systems and applications to automate processes and increase your company's productivity.",
          icon: "software",
        },
        {
          title: "DevOps & Kubernetes",
          description:
            "CI/CD pipelines, container orchestration and DevOps practices to accelerate your deliveries with quality.",
          icon: "devops",
        },
        {
          title: "Structured Cabling",
          description:
            "Design and installation of high-performance physical networks following standards, ensuring total connectivity.",
          icon: "cabling",
        },
        {
          title: "Technical Support",
          description:
            "Specialized 24/7 support, preventive and corrective maintenance to keep your operation always active.",
          icon: "support",
        },
      ],
    },
    portfolio: {
      label: "PORTFOLIO",
      title: "Clients Who",
      titleHighlight: "Trust",
      titleEnd: "Us",
      subtitle:
        "We work with leading companies in their segments, delivering high-impact solutions.",
      cases: [
        {
          client: "Unicred",
          category: "Infrastructure & Networks",
          description:
            "Deployment of complete network infrastructure with high availability for financial cooperative.",
        },
        {
          client: "CrediSIS",
          category: "Cloud & DevOps",
          description:
            "Cloud migration and DevOps practices implementation for credit system.",
        },
        {
          client: "MME",
          category: "Software Development",
          description:
            "Custom internal management system for the Ministry of Mines and Energy.",
        },
        {
          client: "Paschoalotto",
          category: "Technical Support",
          description:
            "Specialized technical support contract and IT asset management.",
        },
        {
          client: "Uello",
          category: "Cloud Computing",
          description:
            "Scalable cloud architecture for logistics and delivery platform.",
        },
        {
          client: "Rede Globo",
          category: "Infrastructure",
          description:
            "Connectivity and infrastructure solutions for media operations.",
        },
      ],
      cta: "View All Cases",
    },
    contact: {
      label: "CONTACT",
      title: "Let's",
      titleHighlight: "Talk?",
      subtitle:
        "Ready to transform your IT infrastructure? Talk to our specialists.",
      form: {
        name: "Your Name",
        email: "Your Email",
        phone: "Your Phone",
        company: "Your Company",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We will contact you soon.",
        error: "Error sending. Please try again.",
      },
      info: {
        address: "QNB 16, Lote 08, Taguatinga Norte, Federal District",
        cnpj: "46.355.902/0001-41",
        phone: "(61) 98239-7391",
        email: "kainde@kainde.com.br",
        hours: "Monday to Friday, 8am–6pm",
      },
    },
    footer: {
      description:
        "Technology without limits to transform your business. Complete IT solutions for companies seeking excellence.",
      links_title: "Quick Links",
      services_title: "Services",
      contact_title: "Contact",
      rights: "All rights reserved.",
      made: "Made with ❤️ in Brasília",
    },
    theme: {
      dark: "Dark Mode",
      light: "Light Mode",
    },
    lang: {
      pt: "Português",
      en: "English",
    },
  },
};

export type TranslationKeys = typeof translations.pt;
