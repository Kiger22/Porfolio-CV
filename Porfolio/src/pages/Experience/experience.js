import { divApp } from "../../../main";
import { DATA } from "../../data/data";
import { HeroPage } from "../Hero/hero";

import("./experience.css");


export const ExperiencePage = () => {

  divApp.innerHTML = "";
  HeroPage();

  const experience = document.createElement("section");
  experience.className = "section-experience";
  experience.id = "Experience"
  divApp.appendChild(experience);

  const experienceTitle = document.createElement("h1");
  experienceTitle.textContent = "Experiencia";
  experienceTitle.className = "experience-title";
  experience.appendChild(experienceTitle);

  DATA.experience.forEach(({ jobTitle, company, dates, description }, index) => {

    const divExperience = document.createElement("div");
    divExperience.className = `div-experience ${index % 2 === 0 ? 'left' : 'right'}`;
    experience.appendChild(divExperience);

    const jobTitleElement = document.createElement("h3");
    jobTitleElement.className = "job-title";
    jobTitleElement.textContent = jobTitle;
    divExperience.appendChild(jobTitleElement);

    const companyElement = document.createElement("h4");
    companyElement.className = "company";
    companyElement.textContent = company;
    divExperience.appendChild(companyElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description";
    descriptionElement.textContent = description;
    divExperience.appendChild(descriptionElement);

    const datesElement = document.createElement("p");
    datesElement.className = "dates";
    datesElement.textContent = dates;
    divExperience.appendChild(datesElement);

  });

}