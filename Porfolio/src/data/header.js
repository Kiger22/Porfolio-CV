import { ContactPage } from "../pages/Contact/contact";
import { EducatioPage } from "../pages/Education/education";
import { ExperiencePage } from "../pages/Experience/experience";
import { HeroPage } from "../pages/Hero/hero";
import { ProjectPage } from "../pages/Projects/projects";
import { SkillsPage } from "../pages/Skills/skills";
import { DATA } from "./data";

export const meniItemsMenuToggle = [
  { href: '#Hero', imgSrc: "./assets/About.svg", alt: 'About Me', text: 'About Me', page: HeroPage },
  { href: '#Experience', imgSrc: "./assets/Experience.svg", alt: 'Experience', text: 'Experiencia', page: ExperiencePage },
  { href: '#Education', imgSrc: "./assets/Education.svg", alt: 'Education', text: 'Educacion', page: EducatioPage },
  { href: '#Contact', imgSrc: "./assets/contact.svg", alt: 'Contact Me', text: 'Contacto', page: ContactPage },
  { href: '#Projects', imgSrc: "./assets/maletin.png", alt: 'Projects', text: 'Projects', page: ProjectPage },
  { href: '#', imgSrc: "./assets/menu.svg", alt: 'Menu' }
];

export const menuItemsHeaderI = [
  { text: "Inicio", href: '#', page: HeroPage },
  { text: "Experiencia", href: '#Experience', page: ExperiencePage },
  { text: "Formacion", href: '#Education', page: EducatioPage },
  { text: "Skills", href: '#Skills', page: SkillsPage },
  { text: "Proyectos", href: '#Projects', page: ProjectPage },
  { text: "Contacto", href: '#Contact', page: ContactPage },
];

export const menuItemsHeaderII = [

];

export const heaterLogo = "./assets/LogoSolo.png"
