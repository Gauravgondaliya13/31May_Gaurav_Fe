import React from "react";
import ReactDom from 'react-dom/client'
import Layout from "./Componet/Layout";
import About from './Componet/About'
import  Product from './Componet/Product'
import Testimonal from './Componet/Testimonal'
import Contect from'./Componet/Contect'
import Pagen from './Componet/pagenote'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


const Root=ReactDom.createRoot(document.getElementById("root"));

Root.render(

   <React.StrictMode>
<Router>
  <Routes>
    <Route path="/" element={<Layout />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/Product" element={<Product />}></Route>
    <Route path="/Test" element={<Testimonal/>}></Route>
    <Route path="/Cont" element={<Contect/>}></Route>  
    <Route path="*" element={<Pagen/>}></Route>
  </Routes>
</Router>
</React.StrictMode>


)