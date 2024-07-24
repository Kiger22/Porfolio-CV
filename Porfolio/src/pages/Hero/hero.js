import { OnClick } from "../../../actions/OnClick";
import { openModal } from "../../../actions/openModal";
import { createButton } from "../../components/Button/button";
import { DATA } from "../../data/data";

import("./hero.css");

export const createHeroPage = (node, ABOUTME) => {

  const section = document.createElement("section");
  section.className = "hero";
  section.id = "Hero"
  node.appendChild(section);

  /*   const background = document.createElement("video");
    background.src = "./assets/fondo.mp4"
    background.className = "background";
    background.autoplay = "autoplay"
    background.loop = "loop"
    background.id = "video_background"
    background.preload = "auto"
    background.type = "video/mp4"
    section.appendChild(background); */

  const divAvatar = document.createElement("div");
  divAvatar.className = "div-avatar";
  section.appendChild(divAvatar);

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = ABOUTME.avatar;
  divAvatar.appendChild(avatar);

  const divContent = document.createElement("div");
  divContent.className = "div-content";
  divAvatar.appendChild(divContent);

  const heading = document.createElement("h1");
  heading.textContent = ABOUTME.name;
  divContent.appendChild(heading);

  const aboutMeParagraph = document.createElement("h3");
  aboutMeParagraph.textContent = ABOUTME.aboutMe;
  divContent.appendChild(aboutMeParagraph);

  const addressParagraph = document.createElement("p");
  addressParagraph.textContent = ABOUTME.address;
  divContent.appendChild(addressParagraph);

  const curriculumLink = document.createElement("a");
  curriculumLink.href = ABOUTME.cv;
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

  createButton(divContent, "Mas de mi", OnClick);

};