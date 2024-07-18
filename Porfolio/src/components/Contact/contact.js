import("./contact.css")
import { OnClick } from "../../../actions/OnClick";
import { createButton } from "../Button/button";

export const crearContactSection = (node) => {

  const contactSection = document.createElement("section");
  contactSection.className = "section-contact";
  contactSection.id = "Contact"
  node.appendChild(contactSection);

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

  createButton(formulario, "Enviar", OnClick);

}