import React from 'react'
import { useState } from 'react';

function Counterfunction() {

    //create a state
  const[counter,setCounter]=useState(0)

  function incrementCounter(){
    {
      setCounter(counter+1)
    }
  }
  function decrementCounter(){
    if(counter!=0)
    setCounter(counter-1)
  }
  function reset(){
    setCounter(0)
  }
  return (
    <div
    style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'2px solid gray',
        margin:'10px',
        padding:'200px',
        backgroundColor:'tan'
      }}
    >
        <h3 className='hi'>Your Turn...</h3>
        <h1
        className='text-center m-4'
        >{counter}</h1>
        <button className='b1'
        style={{
          color:'white',
          padding:'10px',
          border:'2px solid green',
          margin:'5px',
          borderRadius:'5px',
          boxShadow:'3px 3px 5px black',
          marginRight:'150px'
        }}
        onClick={incrementCounter}>Add</button>
        <button className='b2'
        style={{
          color:'white',
          padding:'10px',
          border:'2px solid red',
          margin:'5px',
          borderRadius:'5px',
          boxShadow:'3px 3px 5px black',
          marginLeft:'20px',
          marginTop:'-52px'
        }} 
        onClick={decrementCounter}>Subtract</button>
        <button className='b3'
        style={{
          color:'white',
          padding:'10px',
          border:'2px solid gray',
          margin:'5px',
          borderRadius:'5px',
          boxShadow:'3px 3px 5px black',
          marginLeft:'190px',
          marginTop:'-52px'
        }} 
        onClick={reset}>Reset</button>
    </div>
  )
}

export default Counterfunction