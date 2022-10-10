import { AppContext } from '../Contex/appContext';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css'
function About() {
    const contex = React.useContext(AppContext)
    return (
        <div className='container-fluid About'>
            <div className='row all' >
                <div className='col-md-6  animate__animated animate__fadeInUp'>
                    <div className='col1About'>
                <p className='naugty-about'>{contex.lang === "en" ? "ABOUT!!!" : "TENTANG!!!"}</p>   
                  <h1 className='text-about'>{contex.lang === "en" ? "About" : "Tentang"} <span>{contex.lang === "en" ? "Me" : "Saya"}</span> </h1>
                  <div className='d-flex aboutChil'>
                <div className='line'></div>
                <p className='aboutteks'>
                {contex.lang === "en" ? "I am a high school graduate majoring in" : "Saya seorang lulusan SMK jurusan"} <br /> {contex.lang === "en" ? "Computer and Network Engineering. I am" : "Teknik Komputer dan Jaringan. Saya adalah"} <br /> {contex.lang === "en" ? "people who are very interested in the world of technology" : "orang yang sangat tertarik dengan dunia teknologi"} <br /> {contex.lang === "en" ? "and design. I like to follow tech trends that are" : "dan design. Saya suka mengikuti trend teknologi  yang"} <br /> {contex.lang === "en" ? "evolving and ever-increasing design developments" : "berkembang dan perkembangan design yang terus meningkat "}<br />{contex.lang === "en" ? "until now, I started to follow the world of coding at the age of 17 years" : "hingga saat ini, saya  mulai mengikuti dunia coding di usia  17 Tahun"}
                </p>
                </div>
            </div> 
            
            <div className='text-center lokasi' >
                <Link to='/about/contact'>
                <h5 className='contak'>{contex.lang === "en" ? "Contact Me" : "Hubungi Saya"}</h5>
                <i class="fa-solid fa-envelope"></i></Link>
            </div>
           
                </div>
                <div className='col-md-6  kolom2 animate__animated animate__fadeInUp' >        
                    <div className='page1'>
                        <h3 className=''>{contex.lang === "en" ? "School" : "Sekolah"}</h3>
                        <div className='linepage1 text-center'></div>
                        <div className='d-flex sdn4 text-center'>
                           <p className='tanggal'>2010-2016</p> 
                        <h1 className='sd4 '>{contex.lang === "en" ? "Public Elementary School" : "SDN"} 4 Maluk</h1>
                        </div>

                         <div className='linkin d-flex'>
                           <h6 className='explore'>{contex.lang === "en" ? "Explore" : "Jelajah"}</h6>
                           <a href="https://data.sekolah-kita.net/sekolah/SD%20NEGERI%204%20MALUK_176391" target='_blank'>
                           <i class="fa-sharp fa-solid fa-circle-arrow-up "></i></a>
                        </div>


                    </div>
                    <div className='page1'>
                        <div className='linepage1'></div>
                        <div className='d-flex sdn4 text-center '>
                           <p className='tanggal'>2016-2019</p> 
                        <h1 className='sd4 '>{contex.lang === "en" ? "public junior high school" : "SMPN"} 1 Maluk</h1>
                       
                        </div>

                         <div className='linkin d-flex'>
                           <h6 className='explore'>{contex.lang === "en" ? "Explore" : "Jelajah"}</h6>
                           <a href="http://smpn1maluk.sch.id/" target='_blank'>
                           <i class="fa-sharp fa-solid fa-circle-arrow-up "></i></a>
                        </div>

                    </div>
                    <div className='page1'>
                        <div className='linepage1'></div>
                        <div className='d-flex sdn4 text-center '>
                           <p className='tanggal'>2019-2022</p> 
                        <h1 className='sd4 '>{contex.lang === "en" ? "public vocational high    Schools 1 Maluk" : "SMKN 1 Maluk"}</h1>
                       
                        </div>
                         <div className='linkin d-flex'>
                           <h6 className='explore'>{contex.lang === "en" ? "Explore" : "Jelajah"}</h6>
                           <a href="https://www.smkn1maluk.sch.id" target='_blank'>
                           <i class="fa-sharp fa-solid fa-circle-arrow-up "></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='botbar'>
                <Link to='/'>
            <i class="fa-solid fa-arrow-left"></i>
            </Link>
            
            <Link to='/'>
            <i class="fa-solid fa-house"></i>
            </Link>

            <Link to='/skill'>
              <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
        </div>
    );
}

export default About; 