export const createEducation = (node, EDUCATION) => {

  const education = document.createElement("section");
  education.className = "section-education";
  node.appendChild(education);

  EDUCATION.forEach(({ degree, school, dates, description }) => {
    const degreeElement = document.createElement("h3");
    degreeElement.textContent = degree;
    education.appendChild(degreeElement);

    const schoolElement = document.createElement("h4");
    schoolElement.textContent = school;
    education.appendChild(schoolElement);

    const datesElement = document.createElement('p');
    datesElement.textContent = dates;
    education.appendChild(datesElement);

    const descriptionElement = document.createElement("p");
    datesElement.textContent = description;
    education.appendChild(descriptionElement);

  });



}