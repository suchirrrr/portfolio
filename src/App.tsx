import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  CloudCog,
  Code2,
  Download,
  GraduationCap,
  Github,
  Handshake,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const links = {
  github: "https://github.com/suchirrrr",
  linkedin: "https://www.linkedin.com/in/suchir-ganesh-jaiganesh-95b056291/",
  email: "mailto:suchirganesh18102005@gmail.com",
};

const techStack = [
  "Python",
  "Haskell",
  "Oracle SQL",
  "MongoDB",
  "Java",
  "TypeScript",
  "React",
  "FastAPI",
  "Streamlit",
  "SQLite",
  "RxJS",
  "RAG",
  "OOP",
  "GitHub",
  "Tailwind CSS",
];

const heroStats = [
  ["7", "featured builds"],
  ["AI + Cloud", "portfolio focus"],
  ["Monash", "computer science"],
];

const projects = [
  {
    title: "CareLog",
    label: "Patient Records & Appointment Management | FIT1056",
    description:
      "Led a team building a Python and Streamlit healthcare prototype, contributing across patient records, clinical notes, appointments, prescriptions and feedback workflows.",
    tech: ["Python", "Streamlit", "JSON", "pytest", "Role-Based Access"],
    highlights: [
      "Contributed across the interface, application services, domain logic and JSON repositories as team lead.",
      "Implemented separate administrator, doctor, nurse and patient workflows with authentication and access checks.",
      "Included PBKDF2 password hashing, session expiry, audit logging and unit, functional and security edge-case tests.",
    ],
    github: "https://github.com/suchirrrr/carelog",
    demo: "",
    image: "/projects/carelog-admin-patients.png",
  },
  {
    title: "BNF2Haskell",
    label: "Grammar Parser & Code Generator | FIT2102",
    description:
      "Built a modular BNF grammar parser and Haskell code generator using parser combinators, algebraic data types and pure functions, extending a supplied course scaffold.",
    tech: ["Haskell", "Parser Combinators", "TypeScript", "RxJS"],
    highlights: [
      "Separated grammar parsing, validation, code generation and file saving into focused modules.",
      "Added duplicate-rule, undefined-reference and left-recursion checks, plus float, Boolean and identifier macros.",
      "Generated data/newtype declarations and applicative parsers, with a browser interface for inspecting output.",
    ],
    github: "https://github.com/suchirrrr/BNF2Haskell---Grammar-Parser-and-Code-Generator",
    demo: "",
    image: "/projects/haskell-overview.png",
  },
  {
    title: "BRM Database",
    label: "Relational & Document Databases | FIT2094",
    description:
      "Developed seven Oracle SQL and MongoDB scripts modelling transport quotations, jobs, employees and vehicle servicing, from relational constraints to nested JSON documents.",
    tech: ["Oracle SQL", "MongoDB", "JSON", "Database Design"],
    highlights: [
      "Defined tables and integrity constraints, populated test data and implemented transaction-based updates.",
      "Extended the schema for service management and wrote reports using joins, aggregation and subqueries.",
      "Exported relational customer data as nested JSON and implemented MongoDB queries and updates.",
    ],
    github: "https://github.com/suchirrrr/BRM-Relational-Database-and-MongoDB-Project",
    demo: "",
    image: "/projects/brm-overview.png",
  },
  {
    title: "EureGuard",
    label: "AI Cloud Security & Energy Optimisation Dashboard",
    description:
      "AI-assisted cloud security and energy-optimisation dashboard for construction teams, built for the Hilti track at IMAGINEHACK 2026.",
    tech: ["React", "TypeScript", "FastAPI", "SQLite", "Python", "Ollama"],
    highlights: [
      "Implemented 20+ deterministic scanning rules for simulated cloud security and energy-waste detection.",
      "Reduced repeated alert noise using deduplication for unresolved issues.",
      "Designed a safety-first AI workflow where the LLM explains alerts but never executes actions.",
    ],
    github: "https://github.com/suchirrrr/eureguard",
    demo: "",
    images: ["/projects/eureguard-dashboard.png", "/projects/eureguard-security.png"],
    featured: true,
  },
  {
    title: "Advanced RAG Assistant",
    label: "Offline Document QA",
    description:
      "Offline document question-answering assistant using RAG, embeddings, semantic search and local AI workflows.",
    tech: ["Python", "Streamlit", "MiniLM", "Embeddings", "Semantic Search"],
    highlights: [
      "Built a complete local RAG pipeline from document upload to semantic retrieval and AI response generation.",
      "Reduced manual document searching by allowing users to query uploaded files directly.",
      "Implemented chunking, embeddings and retrieval workflows for document-grounded answers.",
    ],
    github: "https://github.com/suchirrrr/codeterinity-rag-assistant",
    demo: "",
    image: "/projects/rag-assistant.png",
  },
  {
    title: "Eclipse Nebula",
    label: "Java Object-Oriented Game",
    description:
      "Java object-oriented text-based game built with UML-driven design, actors, maps, actions, behaviours and interactive mechanics.",
    tech: ["Java", "OOP", "UML", "Software Design"],
    highlights: [
      "Built a modular Java game system using actors, maps, actions, behaviours and interactive mechanics.",
      "Used UML class and sequence diagrams to plan object relationships and game interactions.",
      "Improved extensibility by separating game logic into reusable object-oriented components.",
    ],
    github: "https://github.com/suchirrrr/eclipse-nebula-java-game",
    demo: "",
    image: "/projects/eclipse-title.png",
  },
  {
    title: "Flappy Birb",
    label: "Functional Reactive Programming Game",
    description:
      "Functional reactive programming browser game inspired by Flappy Bird, built with TypeScript, RxJS and SVG.",
    tech: ["TypeScript", "RxJS", "SVG", "Functional Programming"],
    highlights: [
      "Built a browser-based game using RxJS Observable streams and functional reactive programming.",
      "Implemented core game systems including gravity, collision detection, scoring, lives and restart flow.",
      "Applied event-driven state management to handle real-time gameplay interactions.",
    ],
    github: "https://github.com/suchirrrr/flappy-birb-rxjs",
    demo: "",
    image: "/projects/flappy-birb.png",
  },
];

const experience = [
  {
    role: "Research Intern",
    org: "Monash IT Student Research Scheme 2025",
    copy: "Worked on forecasting models, intelligent systems and sustainable energy analytics using Python-based data workflows.",
  },
  {
    role: "Founder & Python Tutor",
    org: "CodeTerinity",
    copy: "Founded a beginner-focused Python tutoring initiative and designed personalised coding exercises.",
  },
  {
    role: "Technical Intern",
    org: "Mechmet Engineers",
    copy: "Practised Python, Pandas, NumPy, data structures and introductory machine learning through hands-on data tasks.",
  },
  {
    role: "Marketing & Strategy Intern",
    org: "TeaMWork Global Internship Programme",
    copy: "Collaborated in a multicultural team on research, strategy and campaign design.",
  },
];

const leadership = [
  {
    title: "Head of Industrial Relations",
    org: "MUMTEC - Monash University Malaysia Tech Club",
    copy: "Building industry connections through outreach, events, partnerships and professional engagement for student career opportunities.",
    icon: Handshake,
  },
  {
    title: "Industrial Outreach Lead",
    org: "MIND ENGINE Expo 2026",
    copy: "Leading company outreach for sponsorships, guest lectures, workshops, booths and student-industry collaboration.",
    icon: Award,
  },
  {
    title: "Student Mentor",
    org: "Monash University Malaysia",
    copy: "Mentored junior students through orientation support, team-building activities and campus guidance.",
    icon: GraduationCap,
  },
];

const coursework = [
  "Programming Fundamentals",
  "Object-Oriented Design",
  "Programming Paradigms",
  "Data Structures & Algorithms",
  "Introduction to Data Science",
  "Databases",
  "Artificial Intelligence",
];

const skillGroups = [
  ["Languages", "Python, Java, TypeScript, Haskell, SQL"],
  ["AI & Data", "RAG, embeddings, semantic search, NumPy, Pandas, forecasting, data preprocessing"],
  ["Web & Backend", "React, FastAPI, Streamlit, Oracle SQL, MongoDB, SQLite, Tailwind CSS, Vite"],
  ["Concepts", "Object-Oriented Programming, Functional Programming, Data Structures, Algorithms, Databases"],
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Experience />
      <EducationLeadership />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide">
          Suchir<span className="text-sky-300">.dev</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="icon-link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const terminalLines = [
    "> scanning cloud resources...",
    "> retrieving document context...",
    "> building Java game systems...",
    "> deploying portfolio...",
  ];

  return (
    <section id="top" className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
          <Sparkles size={16} />
          AI Systems & Software Portfolio
        </div>
        <h1 className="font-display text-5xl font-bold leading-[1.04] text-white md:text-7xl">
          Suchir Ganesh Jaiganesh
        </h1>
        <p className="mt-4 bg-gradient-to-r from-sky-300 via-fuchsia-300 to-cyan-200 bg-clip-text font-display text-2xl font-semibold text-transparent md:text-4xl">
          AI Systems & Software Developer
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Computer Science student at Monash University Malaysia building AI tools, cloud security systems, RAG assistants and interactive software projects.
        </p>
        <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
          {heroStats.map(([value, label]) => (
            <div className="metric-tile" key={label}>
              <p>{value}</p>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="primary-button" href="#projects">View Projects</a>
          <a className="secondary-button" href="/resume.pdf" download>
            <Download size={18} />
            Download Resume
          </a>
          <a className="secondary-button" href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a className="secondary-button" href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="terminal-card"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <span className="font-mono text-xs text-slate-400">suchir.dev/build</span>
        </div>
        <div className="space-y-5 p-6 font-mono text-sm text-cyan-100 md:p-8">
          <div className="terminal-scanline" />
          {terminalLines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + index * 0.2 }}
            >
              {line}
            </motion.p>
          ))}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["AI", "Cloud", "Systems"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-5">
      <div className="flex animate-marquee gap-3 whitespace-nowrap">
        {items.map((tech, index) => (
          <span key={`${tech}-${index}`} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Practical systems, not just portfolio tiles."
        copy="Seven projects across AI, cloud security, healthcare software, databases, language tools and interactive games."
      />
      <div className="mt-12 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -6, rotateX: 1, rotateY: -1 }}
      className={project.featured ? "project-card featured-project" : "project-card md:grid-cols-[0.95fr_1.05fr]"}
    >
      <div className="flex h-full flex-col justify-between gap-7">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">{project.label}</p>
          <h3 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">{project.title}</h3>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span className="mini-pill" key={tech}>{tech}</span>
          ))}
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Technical Highlights</p>
          <ul className="space-y-3 text-sm text-slate-300">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <ShieldCheck className="mt-0.5 shrink-0 text-cyan-300" size={17} />
              <span>{item}</span>
            </li>
          ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="secondary-button" href={project.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          {project.demo ? (
            <a className="secondary-button" href={project.demo} target="_blank" rel="noreferrer">
              <ArrowUpRight size={18} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
      <ProjectVisual project={project} />
    </motion.article>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if ("images" in project && project.images) {
    return (
      <div className="screenshot-stack">
        {project.images.map((image, index) => (
          <img key={image} src={image} alt={`${project.title} screenshot ${index + 1}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="image-visual">
      <img src={project.image} alt={`${project.title} project visual`} />
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Experience" title="A focused path through research, teaching and technical work." />
      <div className="relative mt-12 space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-gradient-to-b before:from-sky-300 before:via-fuchsia-400 before:to-transparent md:before:left-1/2">
        {experience.map((item, index) => (
          <motion.div
            key={item.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className={`relative grid gap-5 pl-12 md:grid-cols-2 md:pl-0 ${index % 2 ? "md:[&>div]:col-start-2" : ""}`}
          >
            <span className="absolute left-2 top-3 h-4 w-4 rounded-full border border-cyan-200 bg-ink shadow-[0_0_24px_rgba(34,211,238,0.8)] md:left-1/2 md:-translate-x-1/2" />
            <div className="glass-panel">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">{item.role}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.org}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EducationLeadership() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        eyebrow="Education & Leadership"
        title="Technical foundation with real student leadership."
        copy="A mix of computer science coursework, technical club leadership, industry outreach and student mentorship."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="glass-panel spotlight-panel">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
            <GraduationCap />
          </div>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Education</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">Bachelor of Computer Science</h3>
          <p className="mt-2 text-slate-300">Monash University Malaysia | Jul 2024 - Present</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {coursework.map((item) => (
              <span className="mini-pill" key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {leadership.map((item) => {
            const Icon = item.icon;
            return (
              <div className="leadership-card" key={item.title}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
                  <Icon size={21} />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-cyan-200">{item.org}</p>
                  <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Skills" title="Tools and concepts behind the builds." />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skillGroups.map(([title, copy]) => (
          <div className="glass-panel" key={title}>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
              {title === "AI & Data" ? <BrainCircuit /> : title === "Web & Backend" ? <CloudCog /> : <Code2 />}
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1fr_0.8fr]">
      <div>
        <SectionHeading eyebrow="About" title="Building practical software with AI close to the problem." />
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I'm a Computer Science student at Monash University Malaysia interested in building practical systems that combine AI, software engineering and real-world problem solving.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          My current focus areas include RAG applications, cloud security tools, data-driven systems, object-oriented design and interactive web projects.
        </p>
      </div>
      <div className="glass-panel">
        <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Currently building</p>
        <div className="mt-6 grid gap-3">
          {["AI portfolio projects", "RAG-based document assistants", "Cloud/security dashboards", "Full-stack web applications"].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24 text-center">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] px-6 py-14 shadow-glow backdrop-blur-xl md:px-14">
        <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Contact</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-6xl">Let's build something interesting.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          I'm open to software engineering, AI, data and research internship opportunities.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a className="primary-button" href={links.email}>
            <Mail size={18} />
            Email Me
          </a>
          <a className="secondary-button" href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a className="secondary-button" href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a className="secondary-button" href="/resume.pdf" download>
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
      <p>Suchir.dev - AI Systems & Software Portfolio</p>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl font-display text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-3xl leading-7 text-slate-300">{copy}</p> : null}
    </div>
  );
}

export default App;
