import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter=0;
  function counterIncerment() {
    if(counter==20){
      return
    }
    counter=counter+1;
    setCounter(counter);
   
  }

  function removeCounter() {
    if(counter==0){
      return;
    }
    counter=counter-1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai or Code</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={counterIncerment}>Add Value</button>
      <br />
      <button  onClick={removeCounter}>remove Value</button>
    </>
  )
}

export default App
