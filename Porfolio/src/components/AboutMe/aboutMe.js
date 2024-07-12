import { DATA } from "../../data/data";

import("./aboutMe.css");

const divApp = document.querySelector("#app");

export const createAboutMeSection = () => {

  const section = document.createElement("section");
  section.className = "about-me";
  section.id = "aboutMe"
  divApp.appendChild(section);

  const divAvatar = document.createElement("div");
  divAvatar.className = "div-avatar";
  section.appendChild(divAvatar);

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = DATA.aboutMe.avatar;
  divAvatar.appendChild(avatar);

  const divContent = document.createElement("div");
  divContent.className = "div-content";
  divAvatar.appendChild(divContent);

  const heading = document.createElement("h1");
  heading.textContent = DATA.aboutMe.name;
  divContent.appendChild(heading);

  const aboutMeParagraph = document.createElement("h3");
  aboutMeParagraph.textContent = DATA.aboutMe.aboutMe;
  divContent.appendChild(aboutMeParagraph);

  const addressParagraph = document.createElement("p");
  addressParagraph.textContent = DATA.aboutMe.address;
  divContent.appendChild(addressParagraph);

  const contactLink = document.createElement("a");
  contactLink.href = `email:${DATA.aboutMe.email}`;
  contactLink.textContent = "Contact me";
  divContent.appendChild(contactLink);

  const skillsList = document.createElement("ul");
  DATA.skills.forEach(skill => {
    const skillItem = document.createElement("li");
    const skillImg = document.createElement("img");
    skillImg.src = skill;
    skillItem.appendChild(skillImg);
    skillsList.appendChild(skillItem);
  });
  section.appendChild(skillsList);

};

export const addAboutListeners = () => {
  const avatar = document.querySelector(".avatar");
  avatar.addEventListener("click", (e) => e.target.classList.toggle("rotate"));
};
