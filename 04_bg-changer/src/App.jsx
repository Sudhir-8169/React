import React from 'react'
import {useState} from 'react'

function App() {
  // let color="red"
  const [color, setcolor] = useState("Olive") 

  
  return (
    
    <>

  
    <div className='w-full h-screen' style={{backgroundColor:color}}>
    </div>


<div className='absolute bottom-14 right-52  flex flex-wrap justify-center gap-4  bg-white border-2 border-red-500 p-2 rounded-xl'>
   {/*onClick need a fucntion if we give direct setcolor("red") it will take reutrned value so it wont change anything we can pass referecnce of the dunction but cant pass parameter in it*/}
        
       
      
        <div className="w-24 bg-red-500 text-center cursor-pointer rounded-full p-2" onClick={()=>setcolor("red")} >Red</div> 
        <div className="w-24 bg-green-500 text-center cursor-pointer rounded-full p-2"onClick={()=>setcolor("green")} >Green</div>
        <div className="w-24 bg-blue-500 text-center cursor-pointer rounded-full p-2" onClick={()=>setcolor("blue")} >Blue</div>
        <div className="w-24 bg-lime-700 text-center cursor-pointer rounded-full p-2" onClick={()=>setcolor("olive")}>Olive</div>
        <div className="w-24 bg-gray-500 text-center cursor-pointer rounded-full p-2"onClick={()=>setcolor("gray")} >Gray</div>
        <div className="w-24 bg-yellow-200 text-center cursor-pointer rounded-full p-2" onClick={()=>setcolor("yellow")} >Yellow</div>
        <div className="w-24 bg-pink-500 text-center cursor-pointer rounded-full p-2"onClick={()=>setcolor("pink")} >Pink</div>
        <div className="w-24 bg-purple-500 text-center cursor-pointer rounded-full p-2" onClick={()=>setcolor("purple")} >Purple</div>
        <div className="w-24 bg-yellow-950 text-center cursor-pointer rounded-full p-2" onClick={()=>setcolor("brown")} >Brown</div>
        <div className="w-24 bg-blue-300 text-center cursor-pointer rounded-full p-2" onClick={()=>setcolor("lavender")} >lavender</div>
      </div> 
    </>
    
  )
}

export default App