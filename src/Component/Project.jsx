import React from 'react';
import '../css/Project.css'
import BMI from '../img/BMI.png'
import Todo from '../img/Todo.png'
import { Link } from 'react-router-dom';
import { AppContext } from '../Contex/appContext';
import Terra from '../img/Terra.png'
function Project() {
    const contex = React.useContext(AppContext)
    return (
        <div className='container-fluid Project'id='PROJECT'>
            <div className='row'  >
                <div className='col-md-4'     >
                    <p  className='naugthy-project' >{contex.lang === "en" ? "Project!" : "Projek!"}</p>
                    <div className='Title-skill' >
                        <h1 className='Skill-intro' data-aos="fade-up">{contex.lang === "en" ? "Latest" : "Projek"}</h1>
                        <h1 className='Skill-intro'data-aos="fade-up"><span>{contex.lang === "en" ? "Project" : "Terbaru"}</span> </h1>
                    </div>
                    
                    <div data-aos="fade-up" className='Projek1' >
                    <div className='nameProject'>
                    <div className='projekku d-flex'>
                        <h2 className='title-projk'data-aos="fade-up">BMI-Calculator</h2>
                        <a className='link' href="https://nando-bmi.netlify.app" target='_blank'data-aos="fade-up">
                   <i class="fa-sharp fa-solid fa-circle-arrow-up link-page"></i>
                   </a>
                   </div>
                   <p className="rinci-project"data-aos="fade-up">{contex.lang === "en" ? "Make BMI Count Using HTML,CSS,JS" : "Membuat BMI Calculator menggunakan HTML,CSS,JS"} </p>
                   <img src={BMI} alt="" className='imgprojek' /> 
                    </div>
                    </div>

                </div>
                
                <div className='col-md-4 todo' data-aos="fade-up" >
                <div className=' todo'>
                    <div className='lineproject'data-aos="fade-up"></div>
                    <div className='nameProject'>
                    <div className='projekku d-flex'>
                        <h2 className='title-projk'data-aos="fade-up">ToDo-List</h2>
                        <a className='link' href="https://todo-list-nando.netlify.app" target='_blank'data-aos="fade-up">
                   <i class="fa-sharp fa-solid fa-circle-arrow-up link-page-todo"></i></a>
                   </div>
                   <p className="rinci-project"data-aos="fade-up">{contex.lang === "en" ? "Creating activity logs using React js" : "Mebuat Catatan aktivitas menggunakan React js"} </p>
                   <img src={Todo} alt="" className='imgprojek ' /> 
                    </div>
                    </div>
                </div>

                <div className='col-md-4 terra' data-aos="fade-up"  >
                <div className=' terra' >
                    <div className='lineproject'data-aos="fade-up"></div>
                    <div className='nameProject'>
                    <div className='projekku d-flex'>
                        <h2 className='title-projk'data-aos="fade-up">Terra-Fresh</h2>
                        <a className='link' href="https://terra-fresh-react.netlify.app/" target='_blank'data-aos="fade-up">
                   <i class="fa-sharp fa-solid fa-circle-arrow-up link-page-terra"></i></a>
                   </div>
                   <p className="rinci-project"data-aos="fade-up">{contex.lang === "en" ? "Create a fruit buying and selling website (Group Project) using React js" : "Membuat web jual beli buah (Group Project) menggunakan React js"} </p>
                   <img src={Terra} alt="" className='imgprojek'data-aos="fade-up" /> 
                    </div>
                    
                    </div>
                    
                </div>

            </div>
           
        </div>
        
    );
}

export default Project;