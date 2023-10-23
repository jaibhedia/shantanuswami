import { NeverStencilFunc } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  moto,
  ineuron,
  learnsm,
  gssoc,
  npb,
  nft,
  vote,
  port,
  land,
  
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Cinematographer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "LearnSmashers",
    icon: learnsm,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Contributor",
    company_name: "Girl Script Summer of Code",
    icon: gssoc,
    iconBg: "#383E56",
    date: "May 2023 - present",
    points: [
      "Contributing on various projects of various tech-stacks.",
      "Collaborating with fellow contributors and mentors to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Taking reviews of my code and improving it further.",
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "Motorola",
    icon: moto,
    iconBg: "#E6DEDD",
    date: "August 2023 - October 2023",
    points: [
      "Promoting the Motorola brand and its product among students of my college",
      "Using communication skills and social selling to attract more user for the company"
    ],
  },
  {
    title: "Java Developer",
    company_name: "iNeuron.ai",
    icon: ineuron,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using Java",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
];

/*const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];*/

const projects = [
  {
    name: "NPB VOTE WEB3",
    description:
      "Blockchain based online voting system",
    tags: [
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: vote,
    source_code_link: "https://github.com/jaibhedia/NPB_VOTE_WEB3",
  },
  {
    name: "Portfolio",
    description:
      "Progressive Web application that for my previous portfolio",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/jaibhedia/NPB_NFThttps://github.com/jaibhedia/Shantanu_Swami_Portfolio_new",
  },
  {
    name: "NFT Marketplace",
    description:
      "An NFT Marketplace to sell and buy NFT's",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Ethereum",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/jaibhedia/NPB_NFT",
  },
  {
    name: "LandRecordManagement",
    description:
      "Blockchain based online land registry management",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Ethereum",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Metamask",
          color: "orange-text-gradient",
        },
      ],
    image: land,
    source_code_link: "https://github.com/jaibhedia/NPB_LandRecordManagement",
  },
  {
    name: "NoPlayButton_Club",
    description:
      "Official website of our club NoPlayButton",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: npb,
    source_code_link: "https://github.com/jaibhedia/NoPlayButton_Club",
  },
];

export { services, technologies, experiences, projects };
