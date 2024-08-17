import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div className='m-auto w-50 h-50 mb-5  text-secondary' style={{fontSize:"28px"}}>{count}</div>
    </div>
      
        
      <div className='d-flex justify-content-between '>
        <button className='bg-primary text-white'  onClick={() => setCount((count) => count + 1)}>
          increament
         
        </button>
        <button className='ms-5 bg-danger text-white' onClick={() => setCount((count) => count - 1)}>
          decreament
        
        </button>
        
        
      </div>
      <button className='bg-success text-white mt-5' onClick={()=>{setCount(0)}}>Reset</button>
      
    </>
  )
}

export default App
