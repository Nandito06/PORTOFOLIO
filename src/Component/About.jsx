import { AppContext } from '../Contex/appContext';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css'
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
function About() {
useEffect(()=>{
Aos.init({});
},[])
    const contex = React.useContext(AppContext)
    return (
        <div className='container-fluid About' id='ABOUT'>
            <div className='row all' >
                <div data-aos="fade-up" className='col-md-6  '>
                    <div   className='col1About '>
                 
                  <h1 data-aos="fade-up"  className='text-about'>{contex.lang === "en" ? "About" : "Tentang"} <span>{contex.lang === "en" ? "Me" : "Saya"}</span> </h1>
                  <div className='d-flex aboutChil'>
                <div data-aos="fade-up"  className='line'></div>
                <p data-aos="fade-up"  className='aboutteks'>
                {contex.lang === "en" ? "I am a high school graduate majoring in" : "Saya seorang lulusan SMK jurusan"} <br /> {contex.lang === "en" ? "Computer and Network Engineering. I am" : "Teknik Komputer dan Jaringan. Saya adalah"} <br /> {contex.lang === "en" ? "people who are very interested in the world of technology" : "orang yang sangat tertarik dengan dunia teknologi"} <br /> {contex.lang === "en" ? "and design. I like to follow tech trends that are" : "dan design. Saya suka mengikuti trend teknologi  yang"} <br /> {contex.lang === "en" ? "evolving and ever-increasing design developments" : "berkembang dan perkembangan design yang terus meningkat "}<br />{contex.lang === "en" ? "until now, I started to follow the world of coding at the age of 17 years" : "hingga saat ini, saya  mulai mengikuti dunia coding di usia  17 Tahun"}
                </p>
                </div>
            </div> 
            
            <div className='text-center lokasi' >
              
         
            </div>
           
                </div>
                <div  data-aos="fade-up" className='col-md-6  kolom2 ' >        
                    <div className='page1'>
                        <h3 data-aos="fade-up"  className=''>{contex.lang === "en" ? "School" : "Sekolah"}</h3>
                        <div data-aos="fade-up"  className='linepage1 text-center'></div>
                        <div className='d-flex sdn4 text-center'>
                           <p data-aos="fade-up"  className='tanggal'>2010-2016</p> 
                        <h1 data-aos="fade-up"  className='sd4 '>{contex.lang === "en" ? "SDN" : "SDN"} 4 Maluk</h1>
                        </div>

                         <div className='linkin d-flex'>
                           <h6 data-aos="fade-up"  className='explore'>{contex.lang === "en" ? "Explore" : "Jelajah"}</h6>
                           <a data-aos="fade-up"  href="https://data.sekolah-kita.net/sekolah/SD%20NEGERI%204%20MALUK_176391" target='_blank'>
                           <i class="fa-sharp fa-solid fa-circle-arrow-up linkabot "></i></a>
                        </div>


                    </div>
                    <div className='page1'>
                        <div className='linepage1' data-aos="fade-up" ></div>
                        <div className='d-flex sdn4 text-center '>
                           <p className='tanggal'data-aos="fade-up" >2016-2019</p> 
                        <h1 className='sd4 'data-aos="fade-up" >{contex.lang === "en" ? "SMPN" : "SMPN"} 1 Maluk</h1>
                       
                        </div>

                         <div className='linkin d-flex' data-aos="fade-up" >
                           <h6 data-aos="fade-up"  className='explore'>{contex.lang === "en" ? "Explore" : "Jelajah"}</h6>
                           <a data-aos="fade-up"  href="http://smpn1maluk.sch.id/" target='_blank'>
                           <i class="fa-sharp fa-solid fa-circle-arrow-up linkabot " ></i></a>
                        </div>

                    </div>
                    <div className='page1'>
                        <div className='linepage1'data-aos="fade-up" ></div>
                        <div className='d-flex sdn4 text-center 'data-aos="fade-up" >
                           <p className='tanggal'data-aos="fade-up" >2019-2022</p> 
                        <h1 className='sd4 '>{contex.lang === "en" ? "SMKN 1 Maluk" : "SMKN 1 Maluk"}</h1>
                       
                        </div>
                         <div className='linkin d-flex' data-aos="fade-up" >
                           <h6 className='explore'>{contex.lang === "en" ? "Explore" : "Jelajah"}</h6>
                           <a href="https://www.smkn1maluk.sch.id" target='_blank'>
                           <i class="fa-sharp fa-solid fa-circle-arrow-up linkabot "></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
    );
}

export default About; 