import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function Sudhir(){
  return (

    <div className="portfolio">
      <h2>Portfolio</h2>
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

createRoot(document.getElementById('root')).render(
      <Sudhir />
      // Sudhir()
    
)
