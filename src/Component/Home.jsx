import React from 'react';
import poto from '../img/poto.png'
import Navbar from '../Page/Navbar';
import { AppContext } from '../Contex/appContext';
import { Link } from 'react-router-dom';
function Home() {
    const contex = React.useContext(AppContext)
    return (
        <div className='container-fluid HOME ' id='Home'>


            <div className='row ext-centetr'>
                <div className='col-md-6 kolom1'>
                    <div className='teksHome '>
                        <p className='naugty-text'>{contex.lang === "en" ? "Hello!" : "Halo!"} </p>
                        <div className=''>
                            <h1 className='textHome'>{contex.lang === "en" ? " I'am" : "Saya"}</h1>
                            <h1 className='textHome typing'><span>Nandito</span> </h1>
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
                            <a href="https://drive.google.com/file/d/1pPGKYzVJIR4Ni7S4cHYtjLBy7gg8MjNG/view?usp=sharing" target="_blank">
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
                        <div className='shortline'></div>
                        <div className=''>
                        {contex.lang === "en" ? "Welcome 🖐" : "Selamat Datang 🖐"}   
                        </div>
                    </div>
                    <div className='lingkaran'>
                        
                    <img src={poto} alt="" className='foto animate__animated  animate__flipInX' />
                    </div>
                    <br />
                    <div className='checkme'>

                    </div>
                    <div className='sosmed d-flex'>

                        <div className='icon facebook'>
                            <a href="https://www.instagram.com/nandito_ndo/" target='_blank'>
                            <div className='tooltip ig'>Instagram</div>
                            <span><i class="fa-brands fa-instagram " ></i></span>
                            </a>
                        </div>
           
                       <div className='icon github'>
                        <a href="https://github.com/Nandito06" target='_blank'>
                       <div className='tooltip git'>GitHub</div>
                        <span>  <i class="fa-brands fa-github"></i></span>
                        </a>
                        </div>
                    
                        <div className='icon Linkin'>
                            <a href="https://www.linkedin.com/in/nandito-poto-098a12252/" target='_blank'>
                       <div className='tooltip ln'>LinkedIn</div>
                        <span>  <i class="fa-brands fa-linkedin"></i></span>
                        </a>
                        </div>
                    </div>


                </div>


            </div>
            <div className='botbar'>
              
            <Link to='/'>
            <i class="fa-solid fa-house"></i>
            </Link>

            <Link to='/about'>
              <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

        </div>
    );
}

export default Home;