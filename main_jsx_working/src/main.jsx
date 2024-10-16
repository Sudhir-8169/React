import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
function Sudhir(){
  return (

    <div className="portfolio">
      <h2>Portfoio</h2>
      <ul>
        <li>
          <a href="https://github.com/sudhir-mishra-01/react-todo-list" target="_blank" rel="noopener noreferrer">Todo List</a>
        </li>
        <li>
          <a href="https://github.com/sudhir-mishra-01/react-weather-app" target="_blank" rel="noopener noreferrer">Weather App</a>
        </li>
        <li>
          <a href="https://github.com/sudhir-mishra-01/react-tic-tac-toe" target="_blank" rel="noopener noreferrer">Tic Tac Toe</a>
        </li>
      </ul>
    </div>

    
  )
}


// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//     style:"text-decoration:none"
//   },
//   children: "click me to go to google",
// };
 
const  anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google 1</a>
)


const reactElement=React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '',
  },
  'click me to visit google  in new tab'

)
createRoot(document.getElementById('root')).render(
      // <Sudhir />
      // Sudhir()
      // <ReactElement /> 
      // anotherElement
      // reactElement

      <App />

)
