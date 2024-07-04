
export const createHero = (node, { name, title, contactInfo, photoUrl }) => {

  const hero = document.createElement("section");
  hero.className = "section-hero";
  node.appendChild(hero)

  const img = document.createElement("img");
  img.src = photoUrl;
  hero.appendChild(img);

  const heroConteiner = document.createElement("div");

  const nameElement = document.createElement("h1");
  nameElement.textContent = name;
  heroConteiner.appendChild(nameElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  heroConteiner.appendChild(titleElement);

  const contactElement = document.createElement("p");
  contactElement.textContent = contactInfo;
  heroConteiner.appendChild(contactElement);

  hero.appendChild(heroConteiner);

}