import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <>
     <Provider store={Store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/our-services' element={<Services />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>   
     </Provider>

    </>
  )
}
