import type { ResumeData } from "@/types/resume";

export const resumeEnUs: ResumeData = {
  header: {
    name: "Caio Henrique Cordeiro Lins",
    location: "Paulista, Pernambuco, Brazil",
    phone: "(81) 98127-3873",
    email: "caiohrick@outlook.com",
    linkedinUrl: "https://www.linkedin.com/in/caiohcins",
    linkedinLabel: "LinkedIn",
    githubUrl: "https://github.com/JustKac",
    githubLabel: "GitHub",
  },
  summary: {
    title: "Professional Summary",
    text: "Java Developer with experience in Spring Boot, Quarkus, SQL Databases, and Liquibase, specialized in microservices architecture. I work end-to-end with a strong focus on quality, change governance, and evolving both legacy and greenfield systems. I also structure the use of AI in the team workflow, improving delivery speed while keeping reliability and security.",
  },
  experience: {
    title: "Professional Experience",
    entries: [
      {
        role: "Custom Software Engineering Analyst",
        company: "Accenture, Brazil",
        period: "August 2025 — Present",
        bullets: [
          "Worked on large-scale adaptation for the Alphanumeric CNPJ standard (2026), updating microservices and database tables with a focus on compatibility, security, and governance.",
          "Led database changes with safe change/rollback scripts using Liquibase.",
          "Helped restore SonarQube quality gates across legacy repositories by reducing code smells, bugs, and vulnerabilities and increasing unit test coverage while maintaining a high standard of quality in the systems.",
          "Built and evolved AI agents to accelerate Java unit test creation, and shared the approach through internal online training sessions.",
          "Contribute to a greenfield vehicle financing platform using Java/Spring, Oracle, and Camunda, incorporating AI from day one to support business rules and onboarding.",
        ],
      },
      {
        role: "Software Developer",
        company: "Segsat Tecnologia, Recife, PE",
        period: "August 2022 — July 2025",
        bullets: [
          "Develop and maintain scalable systems using Java, Spring Boot, and Quarkus, focusing on microservices architecture.",
          "Led the development of a real-time tracking app, coordinating a team of three developers to build microservices for position processing, notifications, WebSocket, RESTful APIs, Kafka messaging, and Keycloak authentication, with deployment on Digital Ocean.",
          "Ensure high-quality deliveries from conception to maintenance, optimizing performance and scalability.",
        ],
      },
      {
        role: "Software Engineering Intern",
        company: "Segsat Tecnologia, Recife, PE",
        period: "January 2022 — September 2022",
        bullets: [
          "I worked as the only developer in a developing sector, using Java and Spring Boot, planning and implementing systems from scratch.",
          "Developed automation bots to optimize processes and performed system integrations via RESTful APIs.",
          "Responsible for all development stages, including requirements definition, coding, and testing.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    degree: "Bachelor's Degree in Computer Science",
    institution: "Universidade Federal Rural de Pernambuco (UFRPE)",
    period: "August 2019 — December 2026 (8th semester, ongoing)",
  },
  certifications: {
    title: "Certifications",
    items: [
      "Reinvention with Agentic AI - Learning Program — Accenture / Stanford HAI (December 2025)",
      "An Introduction to Generative AI — (October 2025)",
      "Technology AI: Multi-Agent Platform - Newbie Track — Accenture (October 2025)",
      "Programming Best Practices: Improving a Java API's Code — Alura (May 2024)",
      "Java and Refactoring: Enhancing Code with Best Practices — Alura (May 2024)",
      "Java Architecture: Demystifying Clean Architecture — Udemy (December 2024)",
      "Quarkus Framework: Microservices with Kafka — Udemy (February 2024)",
      "Kafka: Producers, Consumers, and Streams — Alura (March 2024)",
      "RESTful APIs from Scratch to AWS with Spring Boot and Docker — Udemy (February 2022)",
      "Java Complete: Object-Oriented Programming + Projects — Udemy (February 2022)",
      "Requirements Engineering: From Demand to Management — Alura (July 2023)",
      "Kanban: Analysis for Implementation — Alura (June 2023)",
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      { label: "Languages", items: "Java, Python" },
      { label: "Frameworks", items: "Spring Boot, Quarkus, Camunda" },
      {
        label: "Tools",
        items:
          "Git, Docker, Apache Kafka, Keycloak, Swagger, Liquibase, SonarQube, Azure DevOps, GitHub Copilot (Custom Agents)",
      },
      { label: "Databases", items: "OracleDB, PostgreSQL, MySQL" },
      {
        label: "Methodologies",
        items:
          "Scrum, Kanban, Microservices, SOLID, Clean Code, Clean Architecture",
      },
      {
        label: "Soft Skills",
        items: "Leadership, Communication, Problem-Solving, Proactivity",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      "Portuguese (Native)",
      "English (Upper-Intermediate — B2+)",
    ],
  },
};
