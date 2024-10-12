function customRender(reactElement, container) {
    const domELement = document.createElement(reactElement.type);
    domELement.innerHTML = reactElement.children;
    domELement.setAttribute("href", reactElement.props.href) ;
    domELement.setAttribute("target", reactElement.props.target) ; 
    
    container.appendChild(domELement);
} 

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    
  },
  children: "click me to go to google",
};
mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer);