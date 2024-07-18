import "./projects.css";

export const createProjectSection = (node, PROJECTS) => {

  const projects = document.createElement("section");
  projects.className = "section-projects";
  projects.id = "Projects";
  node.appendChild(projects);

  const projectsTitle = document.createElement("h1");
  projectsTitle.textContent = "Proyectos";
  projectsTitle.className = "projects-title";
  projects.appendChild(projectsTitle);

  const projectsGrid = document.createElement("div");
  projectsGrid.className = "projects-grid";
  projects.appendChild(projectsGrid);

  const ul = document.createElement("ul");
  PROJECTS.forEach((project) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = project.preview;
    li.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    li.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = project.description;
    li.appendChild(p);

    const a = document.createElement("a");
    a.href = project.link;
    a.textContent = "Visitar...";
    li.appendChild(a);

    ul.appendChild(li);
  });
  projectsGrid.appendChild(ul);

};