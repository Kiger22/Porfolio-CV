import { openModal } from "../../../actions/openModal";
import { DATA } from "../../data/data";
import { createButton } from "../Button/button";

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

  const curriculumLink = document.createElement("a");
  curriculumLink.href = DATA.aboutMe.cv;
  curriculumLink.textContent = "Curriculum Vitae";
  divContent.appendChild(curriculumLink);

  const NetworksList = document.createElement("ul");
  DATA.networks.forEach(Network => {
    const NetworkItem = document.createElement("li");
    const NetworkImg = document.createElement("img");
    NetworkImg.src = Network;
    NetworkItem.appendChild(NetworkImg);
    NetworksList.appendChild(NetworkItem);
  });
  divContent.appendChild(NetworksList);

  createButton(divContent, "ABOUT ME", openModal);

};