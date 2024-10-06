import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Update from './components/Update'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Create/>}></Route>
        <Route path = "/read" element = {<Read/>}></Route>
        <Route path = "/update" element = {<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
