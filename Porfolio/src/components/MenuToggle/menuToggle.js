import "./menuToggle.css";

export const createMenuToggle = (node, menuItems) => {

  const nav = document.createElement("nav");
  nav.id = "mainnav";

  const ul = document.createElement("ul");

  menuItems.forEach(item => {
    const li = document.createElement("li");
    ul.appendChild(li);

    const a = document.createElement("a");
    a.href = item.href;
    li.appendChild(a);

    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.alt;
    img.href = item.href;
    a.appendChild(img);

    const span = document.createElement("span");
    span.textContent = item.text;
    span.href = item.href;
    if (item.text) {
      a.appendChild(span);
    }
  });
  nav.appendChild(ul);
  node.appendChild(nav);

}


export const menuToggle = {
  init() {
    this.setup();
    this.uiBind();
  },

  setup() {
    const items = document.querySelectorAll("#mainnav li:not(:last-child)");
    items.forEach(item => {
      item.classList.toggle("invisible");
    });
  },

  uiBind() {
    document.querySelector("#mainnav").addEventListener('click', (e) => {
      e.preventDefault();
      const items = document.querySelectorAll("#mainnav li:not(:last-child)");
      items.forEach(item => {
        item.classList.toggle("animate");
        item.classList.toggle("invisible");
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', () => {
  menuToggle.init();
});



