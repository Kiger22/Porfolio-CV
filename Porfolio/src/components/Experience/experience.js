export const createExperience = (node, EXPERIENCE) => {
  const experience = document.createElement("section");
  experience.className = "section- experience";
  node.appendChild(experience);

  EXPERIENCE.forEach(({ jobTitle, company, dates, description }) => {
    const jobTitleElement = document.createElement("h3");
    jobTitleElement.textContent = jobTitle;
    experience.appendChild(jobTitleElement);

    const companyElement = document.createElement("h4");
    companyElement.textContent = company;
    experience.appendChild(companyElement);

    const datesElement = document.createElement("p");
    datesElement.textContent = dates;
    experience.appendChild(datesElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    experience.appendChild(descriptionElement);
  });

}