import { toggletheme } from './actions/toggleTheme';

import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header'
import { createMenuToggle } from './src/components/MenuToggle/menuToggle';
import { createSwitchButton } from './src/components/SwitchButton/switchButton';
import { DATA } from './src/data/data';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, meniItemsMenuToggle, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header'
import { createEducation } from './src/pages/Education/education';
import { createExperienceSection } from './src/pages/Experience/experience';
import { createHeroPage } from './src/pages/Hero/hero';
import { createProjectSection } from './src/pages/Projects/projects';
import { createSkillsSection } from './src/pages/Skills/skills';
import './style.css'

const divApp = document.querySelector("#app");

createHeader(heaterLogo, menuItemsHeaderI, menuItemsHeaderII);

// createHeroPage(divApp, DATA.hero);
//createExperienceSection(divApp, DATA.experience);
//createEducation(divApp, DATA.education);
//createProjectSection(divApp, DATA.projects);
createSkillsSection(divApp, DATA.skills);

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
