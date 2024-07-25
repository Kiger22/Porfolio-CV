import { divApp } from "../../../main";
import { DATA } from "../../data/data";
import { HeroPage } from "../Hero/hero";

import("./skills.css")

export const SkillsPage = () => {

  divApp.innerHTML = "";
  HeroPage();

  const skillsSection = document.createElement("section");
  skillsSection.className = "skills-section";
  skillsSection.id = "Skills"
  divApp.appendChild(skillsSection);

  const title = document.createElement("h1");
  title.textContent = "Skills";
  skillsSection.appendChild(title);

  const skillsElement = document.createElement("div");
  skillsElement.className = "skills";
  skillsSection.appendChild(skillsElement);

  DATA.skills.forEach(skill => {
    const skillElement = document.createElement("div");
    skillElement.className = "skill";
    skillsElement.appendChild(skillElement);

    const skillImage = document.createElement("img");
    skillImage.src = skill.src;
    skillElement.appendChild(skillImage);

    const skillDetails = document.createElement("div");

    const skillName = document.createElement("div");
    skillName.className = "skill-name";
    skillName.textContent = skill.name;
    skillDetails.appendChild(skillName);

    const skillBar = document.createElement("div");
    skillBar.className = "skill-bar";
    skillDetails.appendChild(skillBar);

    const skillBarFill = document.createElement("div");
    skillBarFill.className = "skill-bar-fill";
    skillBarFill.style.width = skill.level + '%';
    skillBar.appendChild(skillBarFill);

    skillElement.appendChild(skillDetails);

  });


}
