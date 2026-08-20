import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaBootstrap } from 'react-icons/fa';

import profileImg from '../assets/photo.jpeg';
import projectImg1 from '../assets/image1.png';
import projectImg2 from '../assets/image3.png';
import projectImg3 from '../assets/image2.png';
import projectImg4 from '../assets/port.png';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML5', 'CSS3', 'JavaScript','Tailwind','Bootstrap','vite',]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Rest APIs', 'Middleware']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MongoDB Atlas', 'SQL','Mongoose']
  },
  {
    title: 'Programming Language',
    icon: FaCode,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['Python', 'C', 'JavaScript','C++']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Render']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code', 'ThunderClient','npm']
  }
];



export const projects = [
  {
    title: "Wanderlust Website",
    description: "A responsive full-stack travel accommodation booking platform inspired by Airbnb, featuring property listings, user authentication, reviews, and interactive maps.",
    image: projectImg1,
    tech: ["Node.js", "Express", "MongoDB", "EJS","REST APIS","Mapbox","Cloudinary","JS","HTML5","CSS3"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://wanderlust-website-3jlp.onrender.com/",
    code: "https://github.com/Shristy443/WanderLust_Website.git",
  },
  {
    title: "Zerodha Clone",
    description: "A responsive stock trading platform inspired by Zerodha, featuring user authentication, portfolio management, market dashboards, and a modern, intuitive user interface",
    image: projectImg2,
    tech: ["React",""],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://zerodha-clone-project-bod3y1onx-shristy1.vercel.app",
    code: "https://github.com/Shristy443/Zerodha_Clone.git",
  },
  {
    title: "Spotify Clone",
    description: "A responsive Spotify-inspired music player built with HTML, CSS, and JavaScript, featuring playlist navigation, play/pause controls, progress bar, and volume control",
    image: projectImg3,
    tech: ["HTML5", "CSS3"],
    icons: [FaReact, FaDatabase],
    demo: "https://shristy443.github.io/SpotifyClone/",
    code: "https://github.com/Shristy443/SpotifyClone.git",
    
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js","React","JS", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "portfolio-shristy-w58345y2s-shristy1.vercel.app",
    code: "https://github.com/Shristy443/Portfolio_Shristy.git",
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Developed a full-stack dashboard using Python, Pandas, NumPy, Matplotlib, and React to analyze sales data and generate interactive visualizations. Implemented features like monthly sales trends, profit analysis, region-wise insights, product search, and downloadable reports.",
    image: projectImg5,
    tech: ["Pandas", "Numpy", "React","Matplotlib"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://sales-analytics-dashboard-8-ol96.onrender.com/",
    code: "https://github.com/Shristy443/sales-analytics-dashboard_.git",
  },
  {
    title: "Coffee_Shop Website",
    description: "A modern and responsive coffee shop website featuring an elegant landing page, menu section, featured products, customer testimonials, gallery, contact form, and mobile-friendly design. Built with reusable React components and Bootstrap for a seamless user experience.",
    image: projectImg6,
    tech: ["React", "Bootstrap", "Javascript", "HTML5","CSS3","Responsive Design"],
    icons: [FaReact,FaBootstrap],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Frontend Developer",
    company: "Instrument Research & Establishment Development(IRDE), DRDO",
    duration: "July 2025 - August 2025",
    description:
      "Developed a real-time hand gesture detection system using Python, OpenCV, and MediaPipe to enable touchless control of presentations, system navigation, and virtual mouse/keyboard operations through webcam-based gesture recognition.",
    color: "purple"
  },
  // {
  //   role: "Web Developer",
  //   company: "Digital Solutions LLC",
  //   duration: "2018 - 2020",
  //   description:
  //     "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
  //   color: "pink"
  // },
 
];
