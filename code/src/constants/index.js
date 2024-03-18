import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  FullHouseNetworks,
  MMCI,
  solaro,
  TIXT,
  encryption,
  admicity,
  skillcity,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI /ML Engineer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "MMCI Safety Systems",
    icon: MMCI,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Spearheaded the integration of cutting-edge technologies, including Auth0, .NET, PostgreSQL, and IoT protocols, resulting in a robust, secure, and scalable digital infrastructure.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Full House Networks",
    icon: FullHouseNetworks,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Leading the end-to-end development of a scalable, secure, and reliable platform, focusing on both front-end user interfaces and back-end databases and server-side logic.",
      "Developing and managing the database schema, optimizing data storage and retrieval processes, and improving data access speed by 30%.",
      "Designing and executing the platform architecture, emphasizing scalability, security, and reliability, which enhanced system performance.",
      "Documenting comprehensively the platform's architecture and codebase, improving team onboarding and knowledge transfer processes.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Solaro",
    icon: solaro,
    iconBg: "#383E56",
    date: "April 2023 - Oct 2023",
    points: [
      "Crafted intuitive and engaging interfaces, tailored to diverse user groups, resulting in a 34% increase in user engagement and satisfaction.",
      "Established a robust system for managing critical data, including student profiles, university courses, and transcripts, ensuring data integrity and enhancing data retrieval speed.",
      "Implemented a streamlined workflow for the application process, enhancing operational efficiency by 13% and significantly improving the user experience.",
      "Integrated a versatile and secure payment gateway, facilitating seamless handling of fees and commissions, and increasing transaction security..",
    ],
  },
  {
    title: "Online Data Analyst",
    company_name: "Telus International ",
    icon: TIXT,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - April 2023",
    points: [
      "Leveraged MS Excel's advanced functions, including pivot tables and macros, for efficient data analysis and automation.",
      "Implemented rigorous data validation, cleaning processes, and security measures, ensuring data quality and compliance.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rahul proved me wrong.",
    name: "Dinesh Kumar",
    designation: "CMO",
    company: "Clarity Medical",
   
  },
  {
    testimonial:
      "Rahul made us a CRM system with the exact user requirements. He is very responsive and professional.",
    name: "Brigitta goerres ",
    designation: "COO",
    company: "Castle Rock Research",
   
  },
  {
    testimonial:
      "I hired, Rahul as a Freelancer, he was very responsive to all my requests and was very professional",
    name: "Joel Bennett",
    designation: "Senior Software Developer",
    company: "Serne tech",
   
  },
];

const skills =[
  {
    name: "Languages",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "C/C++",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "MIPS",
        color: "green-text-gradient",
      },
    ],
  },
  {
    name: "Development",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: " Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Machine Learning",
    tags: [
      {
        name: "Jupyter",
        color: "blue-text-gradient",
      },
      {
        name: "NumPy",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "GoogleColab",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Database",
    tags: [
      {
        name: "BigQuery",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Testing/QA",
    tags: [
      {
        name: "Jest",
        color: "blue-text-gradient",
      },
      {
        name: "Cypress",
        color: "green-text-gradient",
      },
      {
        name: "Selenium",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Cloud Services",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Heroku",
        color: "green-text-gradient",
      },
      {
        name: "Cybera",
        color: "pink-text-gradient",
      },
    ],
  },


];
const projects = [
  {
    name: "Skillcity",
    description:
      "An extensible web platform that would allow young people to find and visualize their pathway to the future. Using the platform, young people will build STEM career interests, knowledge, motivation and skills, while creating an e-portfolio where they can connect and map their interests, skills, and aptitudes (grades, micro-credentials, badges, projects, achievements, etc.) toward relevant STEM career pathways. This project was developed by a team of 6 people. The languages mainly used for the development were Django, python for the backend and CSS (tailwind) and JavaScript for the frontend.",
    tags: [
      {
        name: "Cybera",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: skillcity,
    source_code_link: "https://www.youtube.com/watch?v=3Gu89Omd49c",
  },
  {
    name: "Admicity",
    description:
      "Admicity is a Recruitment portal that aims to bridge the gap between students, educational agents, and universities, creating a seamless application process for higher education. By providing dedicated platforms for agents and students, the portal intends to optimize the recruitment process, improving efficiency and user experience.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: admicity,
    source_code_link: "https://rahuluniv.github.io/Recruitment-Portal/design/",
  },
  {
    name: "ENCRYPT",
    description:
      "Developed a robust encryption program designed to secure user/client messages. Incorporated various encryption and decryption techniques to provide flexible security options. The software can be integrated into chat services, ensuring data privacy and protection.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "encryption ",
        color: "green-text-gradient",
      },
      {
        name: "Cyber-Security",
        color: "pink-text-gradient",
      },
    ],
    image: encryption,
    source_code_link: "https://github.com/rahuluniv/Python_Project/blob/main/ENCRPT.py",
  },
];

export { services, technologies, experiences, testimonials, projects,skills };
