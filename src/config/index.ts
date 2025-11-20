import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Octavio-Daniel Vizaru — Automation & Computer Science Student",
  author: "Octavio-Daniel Vizaru",
  description:
    "Final Year Automation & Computer Science Student at the Technical University of Cluj-Napoca. Passionate about AI and Software Development.",
  lang: "en",
  siteLogo: "/octavio-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Licenses & Certifications", href: "#certifications" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/vizaru-octavio-daniel" },
    { text: "Github", href: "https://github.com/notoctavio" },
    { text: "Instagram", href: "https://www.instagram.com/octavio.1312" },
  ],
  // Provide an OG image stored in /public; recommended size 1200x630
  socialImage: "/og-cover.png",
  // canonicalURL removed; Astro will derive from astro.config.mjs 'site'
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Octavio-Daniel Vizaru",
    specialty: "Automation & Computer Science Student",
    summary:
      "Final Year Automation & Computer Science Student at the Technical University of Cluj-Napoca. Passionate about AI and Software Development.",
    email: "vizaruoctavio@gmail.com",
  },
  experience: [
    {
      company: "ROMBAT",
      position: "R&D Intern",
      startDate: "July 2025",
      endDate: "Sept 2025",
      summary: [
        "Used Machine Learning and Deep Learning models to predict the Remaining Useful Life (RUL) of lead-acid batteries. Preprocessed raw laboratory data, extracted and calculated necessary features, and applied both classical ML methods and neural\n" +
          "networks.",
        "Achieved an accuracy of 90% in RUL predictions by implementing models such as Random Forest, XGBoost, LSTM, and CNN. Gained experience with technologies such as Pandas, Numpy, Scikit-learn, TensorFlow, PyTorch.",
        "Developed Convolutional Neural Networks (CNNs) for image classification tasks.\n" +
          "Built prototype RAG-powered chatbots by integrating OpenAI APIs with Pinecone and automated workflows in n8n.",
      ],
    },
    {
      company: "Busch Gardens Tampa",
      position: "Exchange Student",
      startDate: "July 2024",
      endDate: "September 2024",
      summary: [
        "Enhanced communication, adaptability, and cross-cultural collaboration skills within an international environment.",
      ],
    },
  ],
  projects: [
    {
      name: "MyGym",
      summary: "A Full-Stack Web Fitness Application with a Desktop Client for Gym Management.",
      linkPreview: "/",
      linkSource: "https://github.com/notoctavio/Gym-Membership-System",
      image: "/gym.png",
    },
    {
      name: "AI RAG Airline Customer Support Chatbot",
      summary: "A Retrieval-Augmented Generation (RAG) powered chatbot for airline customer support.",
      linkPreview: "/",
      linkSource: "https://github.com/notoctavio/AI-Customer-Service-Chatbot",
      image: "/chatbot.png",
    },
    {
      name: "License Plate Recognition System",
      summary: "Automated License Plate Recognition System using Yolov8",
      linkPreview: "/",
      linkSource: "https://github.com/notoctavio/Automatic-License-Plate-Recognition-using-YOLOv8-main",
      image: "/license.jpg",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      skillsList: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
    },
    {
      category: "Developer Tools and Technologies",
      skillsList: ["Git", "Docker", "Postman", "Vercel", "n8n", "PostgreSQL", "MongoDB", "Firebase" ],
    },
    {
      category: "Frameworks & Libraries",
      skillsList: ["Spring Boot", "Node.js", "FastAPI", "Flask", "Django", "ReactJS", "Vue.js", "Astro", "NextJS", "Electron", "Tailwind CSS" ],
    },
    {
      category: "AI & Machine Learning",
      skillsList: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "LangChain", "Lang-Graph", "LlamaIndex", "HuggingFace", "OpenAI API", "Gemini API", "Pinecone", "LangSmith" ],
    },
  ],
  certifications: [
    {
      name: "Building RAG Agents with LLMs",
      issuer: "NVIDIA",
      issueDate: "Oct 2025",
      credentialID: "j2Df5LzUQ5SHZbV4YqnMKg",
      credentialURL: "https://learn.nvidia.com/certificates?id",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      issueDate: "Sep 2025",
      credentialURL: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=72AF437F98B7889008D106677F07C6FCFAD04C829C79F89007E7B6D679E59439#",
    },
    {
      name: "Ambient Agents with Lang-Graph",
      issuer: "LangChain",
      issueDate: "Nov 2025",
      credentialURL: "",
    },
    {
      name: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      issueDate: "Jul 2025",
      credentialURL: "https://www.freecodecamp.org/certification/not-octavio/machine-learning-with-python-v7",
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      issueDate: "Jul 2025",
      credentialURL: "https://www.credly.com/badges/c0ab251e-f918-4589-8fd9-e8c634dedc87/linked_in_profile",
    },
    {
      name: "Deep Learning Essentials",
      issuer: "IBM",
      issueDate: "Jul 2025",
      credentialURL: "https://www.credly.com/badges/7f081206-a05a-4ee4-ad80-c4b15453c748/linked_in_profile",
    },
    {
      name: "AWS Educate Introduction to Generative AI",
      issuer: "Amazon Web Services",
      issueDate: "May 2025",
      credentialURL: "https://www.credly.com/badges/58c9eaca-de3d-4984-8548-d3d33ef06b14/linked_in_profile",
    },
    {
      name: "The Legend of Python",
      issuer: "Codedex",
      issueDate: "Sep 2025",
      credentialURL: "https://www.credential.net/af76cf57-ee08-42e1-9b07-97cced650e67",
    },
  ],
  about: {
    description: `
      Hi, I’m Octavio, a Final Year Automation & Computer Science student with a keen interest in AI, Software Development and cutting-edge technologies, constantly seeking to expand my knowledge and skills in these domains.
        My academic journey has equipped me with a solid foundation in both theoretical concepts and practical applications, allowing me to tackle complex problems with innovative solutions.
      `,
    image: "/octavio-big1.jpg",
  },
};

// #5755ff
