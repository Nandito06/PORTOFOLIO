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
                    <p className='naugthy-project' >{contex.lang === "en" ? "Project!" : "Projek!"}</p>
                    <div className='Title-skill' >
                        <h1 className='Skill-intro' >{contex.lang === "en" ? "Latest" : "Projek"}</h1>
                        <h1 className='Skill-intro' ><span>{contex.lang === "en" ? "Project" : "Terbaru"}</span> </h1>
                    </div>
                    
                    <div className='Projek1 animate__animated animate__fadeInDown' >
                    <div className='lineproject'></div>
                    <div className='nameProject'>
                    <div className='projekku d-flex'>
                        <h2 className='title-projk'>BMI-Calculator</h2>
                        <a className='link' href="https://nando-bmi.netlify.app" target='_blank'>
                   <i class="fa-sharp fa-solid fa-circle-arrow-up link-page"></i>
                   </a>
                   </div>
                   <p className="rinci-project">{contex.lang === "en" ? "Make BMI Count" : "Membuat BMI Calculator"} </p>
                   <img src={BMI} alt="" className='imgprojek' /> 
                    </div>
                    </div>

                </div>
                
                <div className='col-md-4 todo animate__animated animate__fadeInDown'  >
                <div className=' todo'>
                    <div className='lineproject'></div>
                    <div className='nameProject'>
                    <div className='projekku d-flex'>
                        <h2 className='title-projk'>ToDo-List</h2>
                        <a className='link' href="https://todo-list-nando.netlify.app" target='_blank'>
                   <i class="fa-sharp fa-solid fa-circle-arrow-up link-page-todo"></i></a>
                   </div>
                   <p className="rinci-project">{contex.lang === "en" ? "Creating activity logs using React js" : "Mebuat Catatan aktivitas menggunakan React js"} </p>
                   <img src={Todo} alt="" className='imgprojek ' /> 
                    </div>
                    </div>
                </div>

                <div className='col-md-4 terra animate__animated animate__fadeInDown'  >
                <div className=' terra' >
                    <div className='lineproject'></div>
                    <div className='nameProject'>
                    <div className='projekku d-flex'>
                        <h2 className='title-projk'>Terra-Fresh</h2>
                        <a className='link' href="https://terra-fresh-react.netlify.app/" target='_blank'>
                   <i class="fa-sharp fa-solid fa-circle-arrow-up link-page-terra"></i></a>
                   </div>
                   <p className="rinci-project">{contex.lang === "en" ? "Create a fruit buying and selling website (Group Project)" : "Membuat web jual beli buah (Group Project)"} </p>
                   <img src={Terra} alt="" className='imgprojek' /> 
                    </div>
                    
                    </div>
                    
                </div>

            </div>
            <div className='botbar'>
                <Link to='/skill'>
            <i class="fa-solid fa-arrow-left kiripanah"></i>
            </Link>
            
            <Link to='/'>
            <i class="fa-solid fa-house"></i>
            </Link>

          
            </div>
        </div>
        
    );
}

export default Project;