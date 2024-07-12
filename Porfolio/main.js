import { createAboutMeSection } from './src/components/AboutMe/aboutMe';
import { createEducation } from './src/components/Education/education';
import { createExperienceSection } from './src/components/Experience/experience';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header'
import { createSwitchButton } from './src/components/SwitchButton/switchButton';
import { DATA } from './src/data/data';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header'
import './style.css'

const divApp = document.querySelector("#app");

createHeader(heaterLogo, menuItemsHeaderI, menuItemsHeaderII);

createAboutMeSection();
createExperienceSection(DATA.experience);
createEducation(divApp, DATA.education);
createSwitchButton(divApp);

createFooter(footerLogo, menuFooter, socialLinks);

const switchButton = document.querySelector("#switch")

/* switchButton.addEventListener("click", () => {
  switchButton.classList.toggle("switched");

}) */;

switchButton.addEventListener("click", () => {

  const fullpage = document.querySelector("body");
  const switchButton = document.querySelector("#switch");

  if (fullpage.classList.contains("dark")) {
    fullpage.classList.remove("dark");
    switchButton.classList.remove("switched");
  } else {
    fullpage.classList.add("dark");
    switchButton.classList.add("switched");
  }
});