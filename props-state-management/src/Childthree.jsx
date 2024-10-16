import React from 'react'

function Childthree({counter,setCounter}) {

    function countIncrease(){
        counter=counter+1
        setCounter(counter)
    }
  return (
    <div style={{backgroundColor:'aqua',color:'black',padding:'10px',borderRadius:'10px'}}>
        <h1>Childthree</h1>
        <span style={{marginRight:'10px'}}>Counter: {counter}</span> 
        <button 
        style={{cursor: 'pointer',padding:'4px',width:'100px',border:'2px solid white'}}
        
        className='
        ' onClick={countIncrease}>Increase</button>
    </div>
  )
}

export default Childthree