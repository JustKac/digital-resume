import type { ResumeData } from "@/types/resume";

export const resumePtBr: ResumeData = {
  header: {
    name: "Caio Henrique Cordeiro Lins",
    location: "Paulista, Pernambuco, Brasil",
    phone: "(81) 98127-3873",
    email: "caiohrick@outlook.com",
    linkedinUrl: "https://www.linkedin.com/in/caiohcins",
    linkedinLabel: "LinkedIn",
    githubUrl: "https://github.com/JustKac",
    githubLabel: "GitHub",
  },
  summary: {
    title: "Resumo Profissional",
    text: "Desenvolvedor Java com experiência em Spring Boot, Quarkus, SQL Databases e Liquibase, especializado em arquitetura de microsserviços. Atuo ponta a ponta, com foco em qualidade, governança de mudanças e evolução de sistemas legados e greenfield. Também venho estruturando o uso de IA no fluxo do time, sempre com foco em produtividade, segurança e entregas sustentáveis.",
  },
  experience: {
    title: "Experiência Profissional",
    entries: [
      {
        role: "Custom Software Engineering Analyst",
        company: "Accenture, Brasil",
        period: "Agosto 2025 — Atual",
        bullets: [
          "Atuei na adequação em escala para o CNPJ Alfanumérico (2026), adaptando microsserviços e tabelas, com foco em compatibilidade, segurança e governança.",
          "Conduzi alterações de banco com scripts de alteração e rollback, utilizando Liquibase.",
          "Apoiei a retomada do quality gate (SonarQube) em sistemas legados, reduzindo code smells, bugs e vulnerabilidades e aumentando cobertura de testes mantendo um alto padrão de qualidade nos sistemas.",
          "Estruturei e evoluí agentes de IA para acelerar testes unitários em Java e disseminação interna com treinamentos online.",
          "Atuo em projeto greenfield de plataforma de financiamento de veículos, com Java/Spring, Oracle e Camunda, incorporando IA desde o início para suportar regras de negócio e onboarding.",
        ],
      },
      {
        role: "Desenvolvedor de Software",
        company: "Segsat Tecnologia, Recife, PE",
        period: "Agosto 2022 — Julho 2025",
        bullets: [
          "Desenvolvo e mantenho sistemas escaláveis com Java, Spring Boot e Quarkus, focando em arquitetura de microsserviços.",
          "Liderei o desenvolvimento de um aplicativo de rastreamento em tempo real, coordenando uma equipe de três desenvolvedores na construção de microsserviços para processamento de posições, notificações, WebSocket, APIs RESTful, mensageria com Kafka e autenticação via Keycloak, com deploy na Digital Ocean.",
          "Garanto entregas de alta qualidade, desde a concepção até a manutenção, otimizando performance e escalabilidade.",
        ],
      },
      {
        role: "Estagiário em Engenharia de Software",
        company: "Segsat Tecnologia, Recife, PE",
        period: "Janeiro 2022 — Setembro 2022",
        bullets: [
          "Atuei como único desenvolvedor em um setor em formação, utilizando Java e Spring Boot, planejando e implementando sistemas do zero.",
          "Desenvolvi robôs de automação para otimizar processos e realizei integrações entre sistemas via APIs RESTful.",
          "Responsável por todas as etapas do desenvolvimento, incluindo definição de requisitos, codificação e testes.",
        ],
      },
    ],
  },
  education: {
    title: "Formação Acadêmica",
    degree: "Licenciatura em Computação",
    institution: "Universidade Federal Rural de Pernambuco (UFRPE)",
    period: "Agosto 2019 — Dezembro 2026 (Cursando 8º período)",
  },
  certifications: {
    title: "Certificações",
    items: [
      "Reinvention with Agentic AI - Learning Program — Accenture / Stanford HAI (Dezembro 2025)",
      "An Introduction to Generative AI — (Outubro 2025)",
      "Technology IA: Plataforma Multiagentes - Trilha Newbie — Accenture (Outubro 2025)",
      "Boas práticas de programação: melhore o código de uma API Java — Alura (Maio 2024)",
      "Java e refatoração: melhorando códigos com boas práticas — Alura (Maio 2024)",
      "Arquitetura Java: descomplicando a Clean Architecture — Udemy (Dezembro 2024)",
      "Quarkus Framework: Microsserviços com Kafka — Udemy (Fevereiro 2024)",
      "Kafka: produtores, consumidores e streams — Alura (Março 2024)",
      "REST APIs RESTful do 0 à AWS com Spring Boot e Docker — Udemy (Fevereiro 2022)",
      "Java completo: Programação orientada a objetos + Projetos — Udemy (Fevereiro 2022)",
      "Engenharia de requisitos: da demanda ao gerenciamento — Alura (Julho 2023)",
      "Kanban: análises para implementação — Alura (Junho 2023)",
    ],
  },
  skills: {
    title: "Habilidades",
    categories: [
      { label: "Linguagens", items: "Java, Python" },
      { label: "Frameworks", items: "Spring Boot, Quarkus, Camunda" },
      {
        label: "Ferramentas",
        items:
          "Git, Docker, Apache Kafka, Keycloak, Swagger, Liquibase, SonarQube, Azure DevOps, GitHub Copilot (Custom Agents)",
      },
      { label: "Bancos de Dados", items: "OracleDB, PostgreSQL, MySQL" },
      {
        label: "Metodologias",
        items:
          "Scrum, Kanban, Microsserviços, SOLID, Clean Code, Clean Architecture",
      },
      {
        label: "Soft Skills",
        items: "Liderança, Comunicação, Resolução de Problemas, Proatividade",
      },
    ],
  },
  languages: {
    title: "Idiomas",
    items: ["Português (Nativo)", "Inglês (Intermediário — B2+)"],
  },
};
