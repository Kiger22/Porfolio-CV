import { OnClick } from "../../../actions/OnClick";
import { DATA } from "../../data/data";
import { HeroPage } from "../../pages/Hero/hero";
import { createButton } from "../Button/button";
import("./aboutMe.css");

export const AboutMeModal = () => {

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.display = 'flex';

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);

  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  modalContent.appendChild(closeButton);

  const title = document.createElement("h2");
  title.className = "modalTitlle"
  title.textContent = DATA.AboutMe.title;
  modalContent.appendChild(title);

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";
  modalContent.appendChild(modalBody);

  const image = document.createElement("img");
  image.src = DATA.AboutMe.image;
  modalBody.appendChild(image);

  const info = document.createElement("div");
  info.className = "info";

  const description = document.createElement("p");
  description.textContent = DATA.AboutMe.description;

  const name = document.createElement("p");
  name.innerHTML = `<strong>Name:</strong> ${DATA.AboutMe.name}`;

  const birthday = document.createElement("p");
  birthday.innerHTML = `<strong>Birthday:</strong> ${DATA.AboutMe.birthday}`;

  const degree = document.createElement("p");
  degree.innerHTML = `<strong>Degree:</strong> ${DATA.AboutMe.degree}`;

  const phone = document.createElement("p");
  phone.innerHTML = `<strong>Phone:</strong> ${DATA.AboutMe.phone}`;

  const email = document.createElement("p");
  email.innerHTML = `<strong>Email:</strong> ${DATA.AboutMe.email}`;

  const address = document.createElement("p");
  address.innerHTML = `<strong>Address:</strong> ${DATA.AboutMe.address}`;

  const experience = document.createElement("p");
  experience.innerHTML = `<strong>Experience:</strong> ${DATA.AboutMe.experience}`;

  const freelance = document.createElement("p");
  freelance.innerHTML = `<strong>Freelance:</strong> ${DATA.AboutMe.freelance}`;

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  info.appendChild(description);
  info.appendChild(name);
  info.appendChild(birthday);
  info.appendChild(degree);
  info.appendChild(phone);
  info.appendChild(email);
  info.appendChild(address);
  info.appendChild(experience);
  info.appendChild(freelance);
  info.appendChild(buttons);

  modalBody.appendChild(info);

  createButton(buttons, "Acerca de mi", OnClick);
  createButton(buttons, "Leer Mas...", OnClick);

  document.body.appendChild(modal);

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

}