import React ,{useState} from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import Childthree from './Childthree';

function App() {
  let [sharedState, setSharedState] = useState("Hello from Parent!");
  let [counter,setcounter]=useState(10)
  return (
    <div style={{
      padding: '20px',
      margin: '20px auto',
      backgroundColor: '#f0f8ff',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      textAlign: 'center'
  }}>./
        <p  style={{marginBottom: '20px',fontSize:'40px'}}>Parent Components Props and State management </p>
            <ChildOne sharedState={sharedState } setSharedState={setSharedState} />
            <ChildTwo sharedState={sharedState} setSharedState={setSharedState} />
            <Childthree counter={counter} setCounter={setcounter} />
    </div>
  )
}

export default App