import("./education.css")

export const createEducation = (node, EDUCATION) => {

  const education = document.createElement("section");
  education.className = "section-education";
  education.id = "Education"
  node.appendChild(education);

  const educationTitle = document.createElement("h1");
  educationTitle.textContent = "Formacion";
  educationTitle.className = "education-title";
  education.appendChild(educationTitle);

  const educationGrid = document.createElement("div");
  educationGrid.className = "education-grid";
  education.appendChild(educationGrid);

  EDUCATION.forEach(({ degree, school, dates, description, logo }) => {

    const educationItem = document.createElement("div");
    educationItem.className = "education-item";
    educationGrid.appendChild(educationItem);

    const logoElement = document.createElement("img");
    logoElement.src = logo;
    logoElement.className = "education-logo";
    educationItem.appendChild(logoElement);

    const degreeElement = document.createElement("h3");
    degreeElement.textContent = degree;
    degreeElement.className = "degree";
    educationItem.appendChild(degreeElement);

    const schoolElement = document.createElement("h4");
    schoolElement.textContent = school;
    schoolElement.className = "school";
    educationItem.appendChild(schoolElement);

    const datesElement = document.createElement('p');
    datesElement.textContent = dates;
    datesElement.className = "dates-education";
    educationItem.appendChild(datesElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    descriptionElement.className = "description-education";
    educationItem.appendChild(descriptionElement);

  });



}