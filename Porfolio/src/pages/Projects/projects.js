import { divApp } from "../../../main";
import { DATA } from "../../data/data";
import { HeroPage } from "../Hero/hero";
import "./projects.css";

export const ProjectPage = () => {

  divApp.innerHTML = "";
  HeroPage();

  const projects = document.createElement("section");
  projects.className = "section-projects";
  projects.id = "Projects";
  divApp.appendChild(projects);

  const projectsTitle = document.createElement("h1");
  projectsTitle.textContent = "Proyectos";
  projectsTitle.className = "projects-title";
  projects.appendChild(projectsTitle);

  const projectsGrid = document.createElement("div");
  projectsGrid.className = "projects-grid";
  projects.appendChild(projectsGrid);

  const ul = document.createElement("ul");
  DATA.projects.forEach((project) => {
    const li = document.createElement("li");
    li.className = "view efect";

    const img = document.createElement("img");
    img.src = project.preview;
    li.appendChild(img);

    const divMask = document.createElement("div");
    divMask.className = "mask";
    li.appendChild(divMask);

    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    divMask.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = project.description;
    divMask.appendChild(p);

    const a = document.createElement("a");
    a.href = project.link;
    a.className = "info";
    a.textContent = "Visitar...";
    divMask.appendChild(a);

    ul.appendChild(li);
  });
  projectsGrid.appendChild(ul);

};