// Portfolio projects data
export interface Project {
  id: string;
  title: string;
  titleEn: string;
  image: string;
  gallery?: string[];
  tags: string[];
  tools: string[];
  link?: string;
  year: string;
  client?: string;
}

export const projects: Project[] = [
  {
    id: "the-workshop-na",
    title: "The Workshop - [ N/A ]",
    titleEn: "The Workshop - [ N/A ]",
    image: "/projects/the-workshop.webp",
    gallery: [
      "/projects/the-workshop-1.webp",
      "/projects/the-workshop-2.webp"
    ],
    tags: ["E-Commerce", "Tienda Online"],
    tools: ["WordPress", "Elementor", "PHP", "CSS", "WooCommerce"],
    link: "https://theworkshop.notapplicable.world/",
    year: "2024",
    client: "N/A",
  },
  {
    id: "na-sitio-web",
    title: "[ N/A ] Sitio Web",
    titleEn: "[ N/A ] Website",
    image: "/projects/na-sitio-web.webp",
    gallery: [
      "/projects/na-sitio-web-1.webp",
      "/projects/na-sitio-web-2.webp",
      "/projects/na-sitio-web-3.webp",
    ],
    tags: ["Sitio Web", "Creativo", "Animaciones", "Showroom"],
    tools: ["Astro", "TailwindCSS", "TypeScript", "GSAP"],
    link: "https://notapplicable.world/",
    year: "2025",
    client: "N/A",
  },
  {
    id: "circulos-333",
    title: "Círculos 3:33",
    titleEn: "Círculos 3:33",
    image: "/projects/circulos-333.webp",
    gallery: [
      "/projects/circulos-333-1.webp",
      "/projects/circulos-333-2.webp",
    ],
    tags: ["Sitio Web", "ONG"],
    tools: ["Astro", "TailwindCSS", "TypeScript", "CMS", "WordPress"],
    link: "https://circulos333.org/",
    year: "2025",
    client: "Celiné Studio / Círculos 3:33",
  },
  {
    id: "vpass-guanacaste",
    title: "VPass Guanacaste",
    titleEn: "VPass Guanacaste",
    image: "/projects/vpass-guanacaste.webp",
    gallery: [
      "/projects/vpass-guanacaste-1.webp",
    ],
    tags: ["Web App", "Booking", "Reservaciones", "Back Office"],
    tools: ["React", "PHP", "WordPress", "Elementor", "BAC Payment Gateway", "MaterialUI"],
    link: "https://vpassguanacaste.com/",
    year: "2023",
    client: "VPass Guanacaste",
  },
  {
    id: "staygoldcr",
    title: "STAYGOLDCR",
    titleEn: "STAYGOLDCR",
    image: "/projects/staygoldcr.webp",
    gallery: [],
    tags: ["Sitio Web", "Corporativo"],
    tools: ["WordPress", "Elementor", "PHP", "CSS"],
    link: "https://staygold.cr/",
    year: "2023",
    client: "STAYGOLDCR",
  },
  {
    id: "obelisko",
    title: "Obelisko",
    titleEn: "Obelisko",
    image: "/projects/obelisko.webp",
    gallery: [
      "/projects/obelisko-1.webp",
      "/projects/obelisko-2.webp",
    ],
    tags: ["Sitio Web", "Corporativo", "Agentes de Viajes"],
    tools: ["WordPress", "PHP", "JavaScript", "CSS", "Elementor"],
    link: "https://obelisko.com/",
    year: "2024",
    client: "Obelisko",
  },
];
