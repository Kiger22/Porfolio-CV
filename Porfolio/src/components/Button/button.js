import("./button.css");

export const createButton = (node, text, onClick) => {
  const button = document.createElement("button");
  button.className = "button";
  button.innerText = text;
  button.type = "submit";
  node.append(button);
  button.addEventListener("click", onClick);
};


