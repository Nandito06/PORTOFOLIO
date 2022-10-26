import React from 'react';
import poto from '../img/poto.png'
import Navbar from '../Page/Navbar';
import { AppContext } from '../Contex/appContext';
import { Link } from 'react-router-dom';
function Home() {
    const contex = React.useContext(AppContext)
    return (
        <div className='container-fluid HOME   ' id='Home'>


            <div className='row ext-centetr'>
                <div className='col-md-6 kolom1 '>
                    <div className='teksHome '>
                       
                        <div className=''>
                            <h1 className='textHome'>{contex.lang === "en" ? " I'am" : "Saya"}</h1>
                            <h1 className='textHome '><span>Nandito</span> </h1>
                        </div>
                    </div>
                    <div className='d-flex chilteks'>
                        <div className='line'></div>
                        <p className='introteks'>
                            {contex.lang === "en" ? "Hi! Iam" : "  Hai! saya adalah"}<span>Web Developer</span> <br />
                            {contex.lang === "en" ? "who works part" : "   yang bekerja bagian"} <br /> Front-end
                            {contex.lang === "en" ? "create a website" : "membuat   sebuah Website  "} <br /> 
                        </p>
                    </div>
                    <div>
                        <div>
                            <a href="https://drive.google.com/file/d/1a0sGkVywaoGA4EvMWwYeKG98fQseHP5r/view?usp=sharing" target="_blank">
                            <button className='btn-Costum'><i class="fa-regular fa-paper-plane send"></i>Dowload CV</button>
                            </a>
                           
                        </div>
                    </div>

                    <br />
                    <div>

                    </div>
                </div>



                <div className='col-md-6 '>
                    <div className='scroll'>
                        <div className='longline'></div>
                        <div className=''></div>
                        <div className=''>
                        {contex.lang === "en" ? "👈 Scroll Down " : "👈 Geser Kebawah "}   
                        </div>
                    </div>
                    
                        
                    <img className='gambar text-center' data-aos="fade-up" src={poto} alt=""  />
                   
                    <br />
                    <div className='checkme'>

                    </div>
                    <div className='sosmed text-center d-flex'>

                        <div className='icon facebook'data-aos="fade-up">
                            <a href="https://www.instagram.com/nandito_ndo/" target='_blank'>
                            <div className='tooltip ig'>Instagram</div>
                            <span><i class=" iconl fa-brands fa-instagram " ></i></span>
                            </a>
                        </div>
           
                       <div className='icon github'data-aos="fade-up">
                        <a href="https://github.com/Nandito06" target='_blank'>
                       <div className='tooltip git'>GitHub</div>
                        <span>  <i class=" iconl fa-brands fa-github"></i></span>
                        </a>
                        </div>
                    
                        <div className='icon Linkin'data-aos="fade-up">
                            <a href="https://www.linkedin.com/in/nandito-poto-098a12252/" target='_blank'>
                       <div className='tooltip ln'>LinkedIn</div>
                        <span>  <i class=" iconl fa-brands fa-linkedin"></i></span>
                        </a>
                        </div>
                    </div>


                </div>


            </div>
           

        </div>
    );
}

export default Home;