export const createSkills = (node, SKILLS) => {

  const skills = document.createElement("section");
  skills.className = "section-skills";
  node.appendChild(skills);

  const skillsTitle = document.createElement("h3");
  skillsTitle.textContent = "habilidades";
  skills.appendChild(skillsTitle);

  const skillsList = document.createElement("ul");
  SKILLS.forEach(Item => {
    const skillItem = document.createElement("li");
    skillItem.textContent = Item;
    skillsList.appendChild(skillItem);
  });
  skills.appendChild(skillsList);

}
