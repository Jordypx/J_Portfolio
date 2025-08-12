import {
  mobile,
  backend,
  web,
  audiophile,
  arch,
  dinner,
  Designo,
  github,
  photosnap,
  scoot,
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
    title: "Web Designer",
    icon: web,
  },
  {
    title: "Video Editor",
    icon: mobile,
  },
  {
    title: "Seo Specialist & Ads Expert",
    icon: backend,
  },
];

const projects = [
  {
    name: "AudioPhile",
    description:
      "An e-commerce website for a purchasing audio devices that are available.",
    tags: [
      {
        name: "Astro.js",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: audiophile,
    source_code_link: "https://github.com/Jordypx/Audiophile_webpage",
    site_url: "https://audiophile-ecommerce-mbart13.vercel.app/",
  },
  {
    name: "PhotoSnap",
    description:
      "A marketing website for a photo-sharing application and photo display.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "flexbox",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: photosnap,
    source_code_link: "https://github.com/Jordypx/photosnapWeb",
    site_url: "https://photosnap-web-gold.vercel.app",
  },
  {
    name: "Scoot website",
    description:
      "Scoot is a platform that takes the hassle out of urban mobility for the people.",
    tags: [
      {
        name: "Astro.js",
        color: "blue-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: scoot,
    source_code_link: "https://github.com/Jordypx/scoot-website",
    site_url: "https://scoot-website-delta.vercel.app",
  },
  {
    name: "Dinner",
    description:
      "Dinner is a platform where you can book and manage your appointments to eat at the restaurant",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: dinner,
    source_code_link: "https://github.com/Jordypx/dinner",
    site_url: "https://dinner-sand.vercel.app",
  },
  {
    name: "Arch",
    description:
      "It's a platform that showcases visual display and helps bring projects to life with aim of meeting the clients need.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: arch,
    source_code_link: "https://github.com/Jordypx/Arch",
    site_url: "https://archive-ebon.vercel.app",
  },
  {
    name: "Designo",
    description:
      "It's a platform that showcases visual display and helps bring projects to life with aim of meeting the clients need.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: Designo,
    source_code_link: "https://github.com/Jordypx/designo_page",
    site_url: "https://designo-page.vercel.app",
  },
];

export { services, projects, github };
