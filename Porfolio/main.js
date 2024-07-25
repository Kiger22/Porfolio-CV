import { toggletheme } from './actions/toggleTheme';

import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header'
import { createMenuToggle } from './src/components/MenuToggle/menuToggle';
import { SwitchButton } from './src/components/SwitchButton/switchButton';
import { DATA } from './src/data/data';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, meniItemsMenuToggle, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header'
import { HeroPage } from './src/pages/Hero/hero';
import './style.css'

export const divApp = document.querySelector("#app");

createHeader(heaterLogo, menuItemsHeaderI, menuItemsHeaderII);
HeroPage();

createFooter(footerLogo, menuFooter, socialLinks);

SwitchButton();
createMenuToggle(meniItemsMenuToggle);



const switchButton = document.querySelector("#switch")
const fullpage = document.querySelector("body");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
switchButton.addEventListener("click", () => toggletheme(fullpage));
switchButton.addEventListener("click", () => toggletheme(footer));
switchButton.addEventListener("click", () => toggletheme(header));
