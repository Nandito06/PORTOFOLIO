import React from 'react';
import './Navbar.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import { AppContext } from '../Contex/appContext';
import ReactSwitch from 'react-switch';
import { HashLink } from 'react-router-hash-link';
import Tombol from './Tombol';
function Navbar() {
  
  const contex = React.useContext(AppContext)
    return (
      
        <div className='container-fluid NAVBAR fixed-top' >
            <nav class="navbar navbar-expand-lg  nav-bar ">
  
 
   <HashLink to='#'> <img src={logo} alt="" className='navbar-brand logo'/></HashLink>

 

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse navbar-collapse bar" id="navbarNavAltMarkup">
      <div class="navbar-nav nav-masthead">   
        <HashLink to='#ABOUT' class="nav-link fw-bold py-1">{contex.lang === "en" ? "About" : "Tentang"} </HashLink >
        <HashLink to='#Skill' class="nav-link  fw-bold py-1">{contex.lang === "en" ? "Skill" : "Skil"} </HashLink >
        <HashLink to='#PROJECT' class="nav-link  fw-bold  py-1">{contex.lang === "en" ? "Project" : "Projek"} </HashLink >
        <HashLink to='#KONTAK' class="nav-link  fw-bold  py-1">{contex.lang === "en" ? "Contact" : "Kontak"} </HashLink >
         <button className='nav-link  py-1 navbar nav-masthead en'onClick={() => contex.onchangebahasa(contex.lang === "en" ? "id" : "en")} >{contex.lang === "en" ? "id" : "en"} </button>
  
    </div>
      </div> 
    
  
    
  
</nav>
        </div>
    );
}

export default Navbar; 