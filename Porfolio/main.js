import { toggletheme } from './actions/toggleTheme';

import { crearContactSection } from './src/components/Contact/contact';
import { createEducation } from './src/components/Education/education';
import { createExperienceSection } from './src/components/Experience/experience';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header'
import { createHeroSection } from './src/components/Hero/hero';
import { createMenuToggle, menuToggle } from './src/components/MenuToggle/menuToggle';
import { createProjectSection } from './src/components/Projects/projects';
import { createSkillsSection } from './src/components/Skills/skills';
import { createSwitchButton } from './src/components/SwitchButton/switchButton';
import { DATA } from './src/data/data';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, meniItemsMenuToggle, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header'
import './style.css'

const divApp = document.querySelector("#app");

createHeader(heaterLogo, menuItemsHeaderI, menuItemsHeaderII);

createHeroSection(divApp, DATA.aboutMe);
createSkillsSection(divApp, DATA.skills);
createEducation(divApp, DATA.education);
createExperienceSection(divApp, DATA.experience);
createProjectSection(divApp, DATA.projects);
crearContactSection(divApp);
createFooter(footerLogo, menuFooter, socialLinks);

createSwitchButton(divApp);
createMenuToggle(divApp, meniItemsMenuToggle);



const switchButton = document.querySelector("#switch")
const fullpage = document.querySelector("body");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
switchButton.addEventListener("click", () => toggletheme(fullpage));
switchButton.addEventListener("click", () => toggletheme(footer));
switchButton.addEventListener("click", () => toggletheme(header));
