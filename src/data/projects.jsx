import flowFiImg from "../assets/flowfi.png";
import ecommerceImg from "../assets/ecommerceImg.png";
import focusXImg from "../assets/focusXImg.png";
import teaBrandImg from "../assets/teaBrandImg.png";
import aiDiagnosisImg from "../assets/aiDiagnosisImg.png";

export const projects = [
  {
    id: 1,
    name: "E-COMMERCE APP",
    description:
      "A responsive React e-commerce application featuring product discovery, detailed product pages, cart and wishlist management, authentication, protected routes, and API integration.",
    direction: "left",
    uri: ecommerceImg,
    techStack: ["React", "Context API", "Tailwind CSS"],
    githubLink: "https://github.com/Draxter1891/Task11-Cohort-3.0",
    liveLink: "https://task11-ecommerce-fe.vercel.app/",
  },
  {
    id: 2,
    name: "FLOWFI",
    description:
      "A personal finance tracker for managing income, expenses, transactions, and cash flow, with authentication, filtering, multi-currency support, charts, dark mode, and persistent local storage.",
    direction: "right",
    uri: flowFiImg,
    techStack: ["JavaScript", "Chart.js", "LocalStorage"],
    githubLink: "https://github.com/Draxter1891/Task9-Cohort-3.0",
    liveLink: "https://task9-moneymanage-cohort-3-0.vercel.app/",
  },
  {
    id: 3,
    name: "FOCUSX",
    description:
      "An all-in-one productivity dashboard combining task management, daily planning, goal tracking, Pomodoro sessions, weather, motivational quotes, and time-based experiences.",
    direction: "left",
    uri: focusXImg,
    techStack: ["JavaScript", "SCSS", "Open-Meteo API"],
    githubLink: "https://github.com/Draxter1891/Task10-Cohort-3.0",
    liveLink: "https://task10-focusx-cohort-3-0.vercel.app/",
  },
  {
    id: 4,
    name: "AI DIAGNOSIS",
    description:
      "An AI-powered healthcare application that analyzes patient reports and generates personalized cancer-care insights using generative AI.",
    direction: "right",
    uri: aiDiagnosisImg,
    techStack: ["React", "Gemini AI", "PostgreSQL"],
    githubLink: "https://github.com/Draxter1891/diagnosis-webapp",
    liveLink: "https://diagnosis-webapp.vercel.app/",
  },
  {
    id: 5,
    name: "TEA BRAND",
    description:
      "An Awwwards-inspired tea brand website focused on immersive visual presentation, responsive layouts, typography, spacing, and horizontal scrolling to create a premium web experience.",
    direction: "left",
    uri: teaBrandImg,
    techStack: ["HTML", "SCSS", "JavaScript"],
    githubLink: "https://github.com/Draxter1891/Task7-Cohort-3.0",
    liveLink: "https://draxter1891.github.io/Task7-Cohort-3.0/",
  },
];
