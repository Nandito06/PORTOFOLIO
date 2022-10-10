import React from 'react';
import '../css/Skill.css'
import About from '../img/About.png'
import { Link } from 'react-router-dom';
import { AppContext } from '../Contex/appContext';
function Skill() {
    const contex = React.useContext(AppContext)

    return (
        <div>
            <div className='container-fluid SKILL' id='Skill'>
                <div className='row'>
                    <div className='col-md-6 page-skill1 animate__animated animate__fadeInLeft'> 
                    <p className='naugthy-skill'>{contex.lang === "en" ? "My Skill!!" : "Skill Ku!!"}</p>
                       <div className='Title-skill'>   
                        <h1 className='Skill-intro'>Skill &</h1>
                        <h1 className='Skill-intro'><span>{contex.lang === "en" ? "Experince" : "Pengalaman"}</span> </h1>
                       </div>
                       <div className='skill-title d-flex'>
                       <div className='line'></div>
                       <p className='intro'>{contex.lang === "en" ? "The skills I have come from hobbies and learning" : "Skill yang saya miliki berasal dari hobby dan pembelajaran!"} <br /> {contex.lang === "en" ? "that I got while participating in some activities." : "yang saya dapatkan saat mengikuti beberapa kegiatan."}</p>
                       </div>
                       <div className='page-skil'>
                       <h3  className='myskil'>Skills:</h3>
                       <div className='skill d-flex '>
                      <div className='atribut animate__animated animate__fadeInDown '>
                       <i class="fa-brands fa-html5 padding"></i>
                        <p className='nilai'>HTML</p>
                       </div>
                       
                       <div className='atribut animate__animated animate__fadeInDown '>
                        <i class="fa-brands fa-css3-alt padding"></i>
                         <p className='nilai'>CSS</p>
                        </div>
                       
                       <div className='atribut animate__animated animate__fadeInDown '>
                        <i class="fa-brands fa-js padding"></i>
                         <p className='nilai'>JS</p>
                       </div>
                    
                        <div className='atribut animate__animated animate__fadeInDown '> 
                            <i class="fa-brands fa-react padding"></i>
                             <p className='nilai'>React Js</p>
                            </div>
                      
                      <div className='atribut animate__animated animate__fadeInDown '> 
                        <i class="fa-brands fa-github padding"></i>
                         <p className='nilai'> Git Hub</p>
                        </div>
                      
                      <div className='atribut animate__animated animate__fadeInDown '>  
                        <i class="fa-brands fa-figma padding"></i>
                         <p className='nilai'>Figma</p>
                      </div>
                     
                       </div>
                       </div>
                    </div>
                    <div className='col-md-6 experince animate__animated animate__fadeInLeft'>
                    <div className='page1' >
                        <h3 className='' >{contex.lang === "en" ? "Experince" : "Pengalaman"}</h3>
                        <div className='linepage1 text-center'></div>
                        <div className='d-flex sdn4 text-center' >
                           <p className='tanggal' >2021</p> 
                        <h1 className='smpn ' >{contex.lang === "en" ? "field practice" : "PKL"}</h1>
                        </div>

                         <div className='link d-flex' >
                           <p className='rincian' > PT.MMJ    {contex.lang === "en" ? "Studying Office Administration!" : "(Belajar Administrasi Perkantoran)"}</p>
                          
                        </div>


                    </div>
                    <div className='page1' >
                        <div className='linepage1'></div>
                        <div className='d-flex sdn4 text-center ' >
                           <p className='tanggal'>2019- ?</p> 
                        <h1 className='smpn '>{contex.lang === "en" ? "honorary teacher" : "Guru Honorer"}</h1>
                       
                        </div>

                         <div className='link d-flex'>
                           <p className='rincian'> {contex.lang === "en" ? "GMIT Church (Teaching children)" : "Gereja GMIT    (Mengajar anak-anak)"} </p>
                         
                        </div>

                    </div>
                    <div className='page1' >
                        <div className='linepage1'></div>
                        <div className='d-flex sdn4 text-center ' >
                           <p className='tanggal' >2022</p> 
                        <h1 className='smpn ' >  Bootcamp Coding</h1>
                       
                        </div>
                         <div className='link d-flex' >
                           <p className='rincian' > Skilvul(Front-end web developer) </p>
                          
                        </div> 
                       
                    </div>

                   
                    </div>
                </div>
                <div className='botbar'>
                <Link to='/about'>
            <i class="fa-solid fa-arrow-left"></i>
            </Link>
            
            <Link to='/'>
            <i class="fa-solid fa-house"></i>
            </Link>

            <Link to='/project
            '>
              <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            </div>
           
        </div>
    );
}

export default Skill;