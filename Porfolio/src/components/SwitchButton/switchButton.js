import("./switchButton.css")

export const createSwitchButton = (node) => {
  node.innerHTML += ` <div class="switch-conteiner">
                        <div id="switch">
                          <div id="circle"></div>
                        </div>
                      </div>  `;
};



