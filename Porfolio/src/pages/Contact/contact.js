import("./contact.css")

import { OnClick } from "../../../actions/OnClick";
import { divApp } from "../../../main";
import { createButton } from "../../components/Button/button";
import { HeroPage } from "../Hero/hero";

export const ContactPage = () => {

  divApp.innerHTML = "";
  HeroPage();

  const contactSection = document.createElement("section");
  contactSection.className = "section-contact";
  contactSection.id = "Contact"
  divApp.appendChild(contactSection);

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contacto";
  contactTitle.className = "contact-title";
  contactSection.appendChild(contactTitle);

  const formulario = document.createElement("form");
  formulario.className = "formulario-contacto";
  contactSection.appendChild(formulario);

  const inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.placeholder = "Nombre";
  inputNombre.required = true;
  inputNombre.classList.add("campo");
  formulario.appendChild(inputNombre);

  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.placeholder = "Email";
  inputEmail.required = true;
  inputEmail.classList.add("campo");
  formulario.appendChild(inputEmail);

  const inputMensaje = document.createElement("textarea");
  inputMensaje.placeholder = "Mensaje";
  inputMensaje.required = true;
  inputMensaje.classList.add("campo");
  inputMensaje.classList.add("mensaje");
  formulario.appendChild(inputMensaje);

  createButton(formulario, "Enviar Consulta", OnClick);

}