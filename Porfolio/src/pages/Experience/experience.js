import("./experience.css");

export const createExperienceSection = (node, EXPERIENCE) => {

  const experience = document.createElement("section");
  experience.className = "section-experience";
  experience.id = "Experience"
  node.appendChild(experience);

  const experienceTitle = document.createElement("h1");
  experienceTitle.textContent = "Experiencia";
  experienceTitle.className = "experience-title";
  experience.appendChild(experienceTitle);

  EXPERIENCE.forEach(({ jobTitle, company, dates, description }, index) => {

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