import { Route, Routes } from 'react-router-dom'
import './App.css';
import React, { useState } from 'react';
import Home from './Component/Home';
import Navbarmenu from './Page/Navbar';
import About from './Component/About';
import Skill from './Component/Skill';
import Project from './Component/Project';
import { AppContext } from './Contex/appContext';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
export const ThemeContext=createContext(null)

function App() {
  const [bahasa, setBahasa] = useState('en');
  const[thema, setThema]= useState('light');
  const toogleTheme=()=>{
    setThema((curr) =>(curr === 'light'? 'dark':'light'));
  }
  return (
<div >

<AppContext.Provider
        value={{
          lang: bahasa,
          onchangebahasa: setBahasa,
          thema,
          setThema
        }}>
          <div className='App' id={thema}>
<Navbarmenu/>
<div className='switch'>
<div class="form-check form-switch" onChange={toogleTheme}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>
<label htmlFor="" className='label'>{thema === 'light' ?'Light':'dark'}</label>
</div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/skill' element={<Skill/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/about/contact' element={<Contact/>}/>
</Routes>
{/* <Home/>
<About/>
<Skill/>
<Project/> */}<Footer/>
</div>

</AppContext.Provider>

</div>
  )
     
}

export default App;
