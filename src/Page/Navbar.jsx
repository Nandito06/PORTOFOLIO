import React from 'react';
import './Navbar.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import { AppContext } from '../Contex/appContext';
import ReactSwitch from 'react-switch';

function Navbar() {
  
  const contex = React.useContext(AppContext)
    return (
        <div className='container-fluid NAVBAR' >
            <nav class="navbar navbar-expand-lg  nav-bar ">
  
 
   <Link id='Home' to='/'> <img src={logo} alt="" className='navbar-brand logo'/></Link>

 

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse navbar-collapse bar" id="navbarNavAltMarkup">
      <div class="navbar-nav nav-masthead">   
        <Link class="nav-link fw-bold py-1" to='/about'>{contex.lang === "en" ? "About" : "Tentang"} </Link>
        <Link class="nav-link  fw-bold py-1"to='/skill'>{contex.lang === "en" ? "Skill" : "Skil"} </Link>
        <Link class="nav-link  fw-bold  py-1" to='/project'>{contex.lang === "en" ? "Project" : "Projek"} </Link>
         <button className='nav-link  py-1 navbar nav-masthead en'onClick={() => contex.onchangebahasa(contex.lang === "en" ? "id" : "en")} >{contex.lang === "en" ? "id" : "en"} </button>
         
      </div> 
    </div>
    
  
    
  
</nav>
        </div>
    );
}

export default Navbar; 