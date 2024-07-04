import { createEducation } from './src/components/Education/education';
import { createExperience } from './src/components/Experience/experience';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header'
import { createHero } from './src/components/Hero/hero';
import { createSkills } from './src/components/Skills/skills';
import { DATA } from './src/data/data';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header'
import './style.css'

const divApp = document.querySelector("#app");

createHeader(heaterLogo, menuItemsHeaderI, menuItemsHeaderII);
createHero(divApp, DATA.title);
createSkills(divApp, DATA.skills);
createEducation(divApp, DATA.education);
createExperience(divApp, DATA.experience);
createFooter(footerLogo, menuFooter, socialLinks);