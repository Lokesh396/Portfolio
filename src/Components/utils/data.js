export const projectsObj = [
  {
    id: 1,
    project_name: "Way2newsAds",
    company: "Way2news",
    description:
      "Built and maintained a robust multi-role internal ad management platform powering creative workflows, campaign planning, invoice tracking, and ad reporting. Key features include a full creative upload/review system with AWS integration, complex pricing and placement tools with validation layers, live sales dashboards, revenue comparison reports across publishers, and automated WhatsApp reports via Puppeteer. Collaborated closely with B2B and Sales teams to develop dynamic data-driven market share visualizations, planning reports, and PDF proposals. Enhanced UX with rich charting (React-Charts), swipe animations (Swiper), and infinite scroll. Technologies used: React, Node.js, TailwindCSS, PostgreSQL, MongoDB, Multer, React-PDF, React Hook Form, and xlsx libraries. Cron jobs handled data sync, migration, and planning automation across modules.",
    homepage: "https://ads.way2news.com",
    technologies: [
      "JavaScript",
      "Node.JS",
      "Express.js",
      "Reactjs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
    ],
    image: "ads.png",
  },
  {
    id: 2,
    project_name: "YouTube Shorts Automation",
    company: "Personal",
    homepage: "https://github.com/Lokesh396/youtube-video-automation",
    image: "youtube.png",
    description:
      "Built a fully automated pipeline to generate and publish YouTube Shorts (Gita Quotes) using Python , moviepy, and React. The system dynamically  processes media, adds text/audio overlays, and uploads videos via API — resulting in 60K+ views in just 10 days. Incorporated React Query for efficient frontend data fetching and MongoDB for video metadata storage. Designed for scalability, minimal manual input, and rapid iteration.",
    technologies: [
      "Python",
      "Node.JS",
      "Flask",
      "Reactjs",
      "React-Query",
      "MongoDB",
      "moviepy",
    ],
  },
  {
    id: 3,
    project_name: "Knowledge Base",
    company: "Personal",
    homepage: "https://github.com/Lokesh396/Knowledgebase",
    image: "knowledge.png",
    description:
      "Developed a centralized documentation tool for teams to manage project knowledge efficiently. Features include role-based access control, rich text editing, seamless file management, and blazing-fast search. Integrated Appwrite for secure authentication and scalable backend services. Designed to reduce onboarding time, prevent knowledge silos, and improve collaboration with clean UI and intuitive UX.",
    technologies: [
      "Reactjs",
      "Node.JS",
      "Express.js",
      "Appwrite",
      "Tailwind CSS",
      "JavaScript",
      "Shadcn",
    ],
  },
  {
    id: 4,
    project_name: "DevPortfolio",
    company: "Personal",
    description:
      "Built a modern, reusable developer portfolio using React and Tailwind CSS. Designed to be easily customizable by updating a single data file — no backend needed. Includes smooth scrolling navigation, responsive design, project showcase, skill sections, and a downloadable resume. Optimized for performance and SEO, ready for deployment on platforms like Vercel or GitHub Pages.",
    homepage: "https://github.com/Lokesh396/Portfolio",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "Vite"],
    image: "portfolio.png",
  },
];

export const experienceObj = [
  {
    id: 1,
    position: "Junior Software Engineer",
    start_end: "JUN 2023 - PRESENT",
    company: "Way2news",
    description:
      "As a core developer at Way2News Ads, I contributed to building and scaling an internal ad-tech platform serving multiple business units including Sales, B2B, CST, and Finance. I worked across a wide spectrum of complex modules, including user management, creatives, WhatsApp reporting automation, adunit & placement configuration (akin to GAM panel), pricing calculators, and performance dashboards. My role spanned full-stack development with PostgreSQL/MySQL/MongoDB on the backend (Node.js, Express) and React with Tailwind CSS on the frontend. I implemented secure, scalable, and maintainable features with form validation, file uploads (Multer), PDF generation, and dynamic xlsx report downloads. I also enforced security practices like CSRF protection, SQL injection mitigation, and session-based auth controls.",
    homepage: "https://way2news.com/",
    technologies: [
      "JavaScript",
      "Node.JS",
      "Express.js",
      "Reactjs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
    ],
  },
  {
    id: 2,
    position: "Software Engineer Trainee",
    start_end: "OCT 2022 - JUN 2023",
    company: "Way2news",
    homepage: "https://way2news.com/",
    description:
      "Contributed to the development of Way2Ads by assisting in backend API design, database modeling, and frontend UI enhancements. Gained hands-on experience in full-stack development, performance optimization, and production-grade systems.",
    technologies: ["JavaScript", "Node.js","Express.js", "Reactjs", "PostgreSQL", "MongoDB"],
  },
];

export const heroName = "C Lokesh Kumar Reddy";
export const heroposition = "Full Stack Developer (MERN)";
export const heroTagLine = `I build fast, modern, and scalable web apps. Bringing ideas to life through clean code and good design.`;

export const projectsArchive = [
  {
    id: 1,
    project_name: "Way2newsAds",
    company: "Way2news",
    year: 2023,
    homepage: "https://ads.way2news.com",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "Reactjs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
    ],
  },
  {
    id: 2,
    project_name: "Youtube Shorts Automation",
    company: "Personal",
    isGithub: true,
    homepage: "https://github.com/Lokesh396/youtube-video-automation",
    year: 2025,
    technologies: [
      "Python",
      "Node.js",
      "Flask",
      "Reactjs",
      "React-Query",
      "MongoDB",
      "moviepy",
    ],
  },
  {
    id: 3,
    project_name: "Knowledge Base",
    company: "Personal",
    homepage: "https://github.com/Lokesh396/Knowledgebase",
    image: "knowledge.png",
    isGithub: true,
    year:2025,
    technologies: [
      "Reactjs",
      "Node.js",
      "Express.js",
      "Appwrite",
      "Tailwind CSS",
      "JavaScript",
      "Shadcn",
    ],
  },
  {
    id: 4,
    project_name: "DevPortfolio",
    isGithub: true,
    company: "Personal",
    year:2025,
    homepage: "https://github.com/Lokesh396/Portfolio",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "Vite"],
    image: "portfolio.png",
  },
  {
    id: 5,
    project_name: "Face Recongnition For Banking Security",
    company: "Personal",
    year: 2023,
    isGithub: true,
    homepage: "https://github.com/Lokesh396/Face_Recognition",
    technologies: [
      "Streamlit",
      "Python",
      "face_recongnition",
      "DeepLearning",
      "Machine Learning",
      "OpenCV",
    ],
  },
  {
    id: 6,
    project_name: "Movie Recommendation System",
    company: "Personal",
    homepage: "https://github.com/Lokesh396/Movie_Recommendation_System",
    isGithub: true,
    year: 2022,
    technologies: ["Pandas", "Streamlit", "Python", "Scikit-learn"],
  },
  {
    id: 7,
    project_name: "Pandas",
    company: "Personal",
    homepage: "https://github.com/Lokesh396/pandas",
    isGithub: true,
    year: 2021,
    technologies: ["Python", "numpy", "pandas"],
  },
  {
    id: 8,
    project_name: "Matplotlib",
    company: "Personal",
    year: 2021,
    isGithub: true,
    homepage: "https://github.com/Lokesh396/matplotlib",
    technologies: ["Python", "Pandas", "numpy", "matplotlib"],
  },
  {
    id: 9,
    project_name: "Seaborn",
    company: "Personal",
    isGithub: true,
    homepage: "https://github.com/Lokesh396/SeaBorn",
    year: 2021,
    technologies: ["Python", "numpy", "matplotlib", "pandas"],
  },
];

export const certificateObj = [
  {
    id: 1,
    title:
      "Tech Interview 101 - From DSA to System Design for Working Professionals",
    image: "certificate.png",
    homepage: "https://media.geeksforgeeks.org/courses/certificates/cea3c30c1289ca9750f443f306c29083.pdf",
    description:
      "Completed a structured, industry-focused program covering core Data Structures and Algorithms (DSA), problem-solving strategies, and Low-Level Design (LLD) principles. Strengthened understanding of arrays, trees, graphs, recursion, and dynamic programming. Learned object-oriented programming, SOLID principles, and design patterns essential for building maintainable and scalable backend systems.",
  },
  // {
  //     id:2,
  //     title:'Mastering System Design: From Low-Level to High-Level Solutions',
  //     link:'',
  //     image:'',
  //     description:'Gained in-depth knowledge of both Low-Level and High-Level System Design through real-world case studies. Learned how to design scalable systems, apply architectural patterns, and handle challenges like caching, load balancing, database sharding, and fault tolerance. Developed the ability to approach system design interviews with structured thinking and practical clarity.'
  // }
];
