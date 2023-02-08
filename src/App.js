/* REACT IMPORTS */

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect, createContext } from 'react'

/* CSS */

import './App.css';

/* COMP IMPORTS */

import NavBar from './components/NavBar'
import Menu from "./components/Menu.js"
import Historia from "./components/Historia.js"
import Info from "./components/Info.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let [show, setShow] = useState(false)

    const links = [
        { href: "/menu", name: "Menu", id: 1 },
        { href: "/historia", name: "Historia", id: 2 },
        { href: "/info", name: "Info", id: 3 }
    ]


  return (


    
  <BrowserRouter id="browser__router">
    <NavBar links={links}/>
    <Routes>
        
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/historia" element={<Historia/>}/>
      <Route path="/info" element={<Info/>}/>


    </Routes>


    <Footer id="Footer__comp" />

  </BrowserRouter>


  );
}

export default App;
