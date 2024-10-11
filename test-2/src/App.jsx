import React from 'react'
import User from './User.jsx'
function App() {
  return (
    <>
    <div className='m-20 flex gap-4'>
    <div className='bg-slate-500 p-4  w-56 rounded-md'>
    <h3>1</h3>
    <h3>2</h3>
    <div>Chai aur code</div>
    </div>
    <div className='bg-orange-500 p-4  w-56 rounded-md'>
    <User/>
    </div>
    </div>
    </>
    
  )
}

export default App