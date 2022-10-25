import React from 'react';
import '../css/Skill.css'
import About from '../img/About.png'
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { AppContext } from '../Contex/appContext';
function Skill() {
    const contex = React.useContext(AppContext)
    useEffect(()=>{
        Aos.init({duration:2000});
        },[])
    return (
        <div>
            <div className='container-fluid SKILL' id='Skill'>
                <div className='row'>
                    <div  data-aos="fade-up" className='col-md-6 page-skill1'> 
                                           <div className='Title-skill'>   
                        <h1 className='Skill-intro'data-aos="fade-up" >Skill &</h1>
                        <h1 className='Skill-intro'data-aos="fade-up" ><span>{contex.lang === "en" ? "Experince" : "Pengalaman"}</span> </h1>
                       </div>
                       <div className='skill-title d-flex'>
                       <div className='line'data-aos="fade-up" ></div>
                       <p className='intro'data-aos="fade-up" >{contex.lang === "en" ? "The skills I have come from hobbies and learning" : "Skill yang saya miliki berasal dari hobby dan pembelajaran!"} <br /> {contex.lang === "en" ? "that I got while participating in some activities." : "yang saya dapatkan saat mengikuti beberapa kegiatan."}</p>
                       </div>
                       <div className='page-skil '>
                       <h3  className='myskil'data-aos="fade-up" >Skills:</h3>
                       <div className='skill d-flex '>
                      <div className='atribut  '>
                       <i class="fa-brands fa-html5 padding" data-aos="fade-up" ></i>
                        <p className='nilai'data-aos="fade-up" >HTML</p>
                       </div>
                       
                       <div className='atribut  '>
                        <i class="fa-brands fa-css3-alt padding"data-aos="fade-up" ></i>
                         <p className='nilai'data-aos="fade-up" >CSS</p>
                        </div>
                       
                       <div className='atribut  '>
                        <i class="fa-brands fa-js padding"data-aos="fade-up" ></i>
                         <p className='nilai'data-aos="fade-up" >JS</p>
                       </div>
                    
                        <div className='atribut  'data-aos="fade-up" > 
                            <i class="fa-brands fa-react padding"></i>
                             <p className='nilai'data-aos="fade-up">React Js</p>
                            </div>
                      
                      <div className='atribut  'data-aos="fade-up" > 
                        <i class="fa-brands fa-github padding"></i>
                         <p className='nilai'data-aos="fade-up"> Git Hub</p>
                        </div>
                      
                      <div className='atribut  'data-aos="fade-up" >  
                        <i class="fa-brands fa-figma padding"></i>
                         <p className='nilai'data-aos="fade-up">Figma</p>
                      </div>
                     
                       </div>
                       </div>
                    </div>
                    <div  data-aos="fade-up" className='col-md-6 experince'>
                    <div className='page1' >
                        <h3 className=''data-aos="fade-up" >{contex.lang === "en" ? "Experince" : "Pengalaman"}</h3 >
                        <div className='linepage1 text-center'data-aos="fade-up"></div>
                        <div className='d-flex sdn4 text-center' >
                           <p className='tanggal' data-aos="fade-up">2021</p> 
                        <h1 className='smpn ' data-aos="fade-up">{contex.lang === "en" ? "field practice" : "PKL"}</h1>
                        </div>

                         <div className='link d-flex' data-aos="fade-up">
                           <p className='rincian' > PT.MMJ    {contex.lang === "en" ? "Studying Office Administration!" : "(Belajar Administrasi Perkantoran)"}</p>
                          
                        </div>


                    </div>
                    <div className='page1' >
                        <div className='linepage1'data-aos="fade-up"></div>
                        <div className='d-flex sdn4 text-center ' >
                           <p className='tanggal'data-aos="fade-up">2019- ?</p> 
                        <h1 className='smpn 'data-aos="fade-up">{contex.lang === "en" ? "honorary teacher" : "Guru Honorer"}</h1>
                       
                        </div>

                         <div className='link d-flex'data-aos="fade-up">
                           <p className='rincian'> {contex.lang === "en" ? "GMIT Church (Teaching children)" : "Gereja GMIT    (Mengajar anak-anak)"} </p>
                         
                        </div>

                    </div>
                    <div className='page1' >
                        <div className='linepage1'data-aos="fade-up"></div>
                        <div className='d-flex sdn4 text-center ' >
                           <p className='tanggal' data-aos="fade-up">2022</p> 
                        <h1 className='smpn ' data-aos="fade-up">  Bootcamp Coding</h1>
                       
                        </div>
                         <div className='link d-flex' data-aos="fade-up">
                           <p className='rincian' > Skilvul(Front-end web developer) </p>
                          
                        </div> 
                       
                    </div>

                   
                    </div>
                </div>
               
            </div>
           
        </div>
    );
}

export default Skill;