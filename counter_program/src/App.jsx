import { useState } from 'react'
import './App.css'


function App() {
  let [counter,setcounter] = useState(0)
  return (
    <>
  Hello World!
  <p>we will count the number of clicks on button</p>
  <h3>Counter:{counter}</h3>
  <button style={{cursor: 'pointer',padding:'8px',backgroundColor:'gray',color:'white',fontWeight:'bold',padding:'10px 20px',borderRadius:'rounded'}} className="" onClick={() => {{setcounter(prevcounter => prevcounter+1);setcounter(prevcounter => prevcounter+1)}}}>Click to add 1</button>
  <button style={{cursor: 'pointer',padding:'8px',backgroundColor:'gray',color:'white',fontWeight:'bold',padding:'10px 20px',borderRadius:'rounded'}} className="" onClick={() => setcounter(counter-1)}>Click to remove 1</button>
    </>
  )
}

export default App
