function customRender(reactElement, container) {
    const domELement = document.createElement(reactElement.type);

    domELement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domELement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domELement);
} 

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    style:"text-decoration:none"
  },
  children: "click me to go to google",
};
mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer);