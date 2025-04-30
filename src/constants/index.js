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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  dignosis,
  iitmhub,
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
    title: "Data Science Enthusiast",
    icon: backend, // You can replace this with an appropriate icon
  },
  {
    title: "Data Analysis Specialist",
    icon: mobile, // Replace with an appropriate icon
  },
  {
    title: "Machine Learning Practitioner",
    icon: web, // Replace with an appropriate icon
  },
  {
    title: "Python and Statistics Learner",
    icon: creator, // Replace with an appropriate icon
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000",
  },
  {
    name: "CSS 3",
    icon: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000",
  },
  {
    name: "React JS",
    icon: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  },
  {
    name: "Node JS",
    icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
  {
    name: "Three JS",
    icon: "https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000",
  },
  {
    name: "git",
    icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    name: "figma",
    icon: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000",
  },
  {
    name: "docker",
    icon: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000",
  },
  {
    name: "Redux Toolkit",
    icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
];

const experiences = [
  {
    title: "Foundation Year Student - Data Science",
    company_name: "IIT Madras",
    icon: "https://seeklogo.com/images/I/iit-madras-logo-0B28C23C92-seeklogo.com.png", // Replace with appropriate icon or leave as string
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Enrolled in the IIT Madras BS program in Data Science, focusing on building a strong foundation in programming, mathematics, and data analysis.",
      "Participating in coursework involving Python, statistics, and foundational data science principles.",
      "Engaging in hands-on projects and learning to solve real-world data challenges.",
      "Developing a robust understanding of problem-solving techniques and critical thinking skills."
    ],
  },
  {
    title: "Full Stack Web Development Student",
    company_name: "PW Skills",
    icon: "https://www.pw.live//version14/assets/img/logo.png", // Replace with appropriate icon or leave as string
    iconBg: "#383E56",
    date: "Completed in 2024",
    points: [
      "Gained comprehensive knowledge of full-stack web development, including frontend and backend technologies.",
      "Built and deployed several projects using modern frameworks like React.js and Node.js.",
      "Learned and implemented responsive design techniques and ensured cross-browser compatibility.",
      "Collaborated with peers on projects, improving teamwork and problem-solving skills."
    ],
  },
  {
    title: "React.js Projects",
    company_name: "Personal Portfolio",
    icon: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000", // Replace with appropriate icon or leave as string
    iconBg: "#383E56",
    date: "2022 - 2024",
    points: [
      "Developed dynamic and user-friendly web applications as part of personal projects.",
      "Implemented advanced React.js features such as hooks and context for state management.",
      "Focused on creating responsive and accessible web designs.",
      "Built reusable components to streamline development processes and improve efficiency."
    ],
  },
  {
    title: "Project-based Learning",
    company_name: "Self-taught",
    icon: "https://img.icons8.com/?size=160&id=118344&format=png", // Replace with appropriate icon or leave as string
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Worked on self-driven projects to deepen understanding of web development concepts.",
      "Experimented with various technologies and tools to build innovative solutions.",
      "Focused on problem-solving and implementing clean code practices.",
      "Continuously updated knowledge by exploring new trends in technology and development."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The Full Stack Web Development course at PW Skills, taught by Hitesh Choudhary, gave me the confidence to build real-world applications. His practical teaching approach made the learning journey transformative.",
    name: "Hitesh Choudhary",
    designation: "Instructor",
    company: "PW Skills",
    image: "https://avatars.githubusercontent.com/u/11613311?v=4", // Replace with your choice
  },
  {
    testimonial:
      "The foundation year at IIT Madras BS Data Science program, guided by Professor Andrew Thangaraj, has been incredibly enriching. His hands-on teaching approach has helped me develop a strong foundation in data science.",
    name: "Andrew Thangaraj",
    designation: "Professor",
    company: "IIT Madras",
    image: "https://study.iitm.ac.in/ds/assets/img/academics/instructors/9023_2x.jpg", // Replace with your choice
  },
  {
    testimonial:
      "With the guidance of exceptional mentors like Andrew Thangaraj and Hitesh Choudhary, I have successfully built personal projects that allowed me to apply concepts practically and tackle real-world challenges.",
    name: "Shiva Yadav",
    designation: "Learner",
    company: "IIT Madras BS Data Science and Applications",
    image: "https://avatars.githubusercontent.com/u/123328731?v=4", // Replace with your choice
  },
];


const projects = [
  {
    name: "AI Clinical Suite",
    description:
      "An AI-powered web platform for clinical diagnosis, assisting in disease prediction and patient health assessment with advanced machine learning models.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "orange-text-gradient",
      },
      {
        name: "tensorflow",
        color: "white-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: dignosis,
    source_code_link: "https://github.com/shiva-yadav-ds/Prediction-of-Disease-Outbreaks",
    live_demo_link: "https://clinical-ai-diagnostic-suite.streamlit.app/",
  },
  {
    name: "IITM Scholar Hub",
    description:
      "A comprehensive platform for IITM students to predict end-term marks, calculate CGPA, generate resumes, and access learning roadmaps for Data Science, DSA, Python, and Java. Features an AI Assistant for solving mathematics and statistics problems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      }
    ],
    image: iitmhub,
    source_code_link: "https://github.com/shiva-yadav-ds/",
    live_demo_link: "https://iitm-scholar-hub.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
