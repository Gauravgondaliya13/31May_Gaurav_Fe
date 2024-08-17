import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/style.css'


function App() {
  const strings = ['Use Array.map', 'Not a for loop', 'Give each item a unique key', 'Avoid using array index as the key'];
 

  return (
    <>
    <div className="container">
      <div className="centered-div">
        <h1>REACT WAY TO RENDER A LIST</h1>
        <ul className='list'>
      {strings.map((str) => (
        <div className='inlinediv'>
          <i className="bi bi-arrow-right-short"></i>
        <li key={str}>{str}</li>
        </div>
      ))}
    </ul>
      </div>
    </div>
    
    
    
      
    </>
  )
}

export default App
