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
  jobit,
  tripguide,
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
    icon: "https://img.icons8.com/?size=100&id=3767&format=png&color=000000",
  },
  {
    name: "git",
    icon: git,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };