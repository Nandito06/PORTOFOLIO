import React from 'react';
import '../css/Project.css'
import BMI from '../img/BMI.png'
import Todo from '../img/Todo.png'
import { Link } from 'react-router-dom';
import { AppContext } from '../Contex/appContext';
import Terra from '../img/Terra.png'
function Project() {
    const contex = React.useContext(AppContext)

    const cardProject=[
        {image:{Todo}, title:'To Do - List',linkWeb:'https://todo-list-nando.netlify.app',linkGit:'https://github.com/Nandito06/To-Do-LIst-Project',rincian:'Creating activity logs using React js'},

        {image:'dw', title:'BMI-Calculator',linkWeb:'https://nando-bmi.netlify.app',linkGit:'https://github.com/Nandito06/Tecnical-Project-2',rincian:'Make BMI Count Using HTML,CSS,JS '},

        {image:'dw', title:'Terra-Fresh',linkWeb:'https://terra-fresh-react.netlify.app/',linkGit:'https://github.com/lazminutes/TerraFresh',rincian:'Create a fruit buying and selling website (Group Project) using React js',},

        {image:'dw', title:'Portofolio',linkWeb:'https://nandohtml.netlify.app/',linkGit:'https://github.com/Nandito06/Technical-Project-Assignment-1',rincian:'this is my first project which is making a portfolio using HTML and CSS ',},
        {image:'dw', title:'Movie-App',linkWeb:'https://nando-movie.netlify.app/',linkGit:'https://github.com/Nandito06/TA-3',rincian:'Create a Movie app using API to receive data',},
        {image:'dw', title:'Portofolio-V2',linkWeb:'https://portofolio-ku-09.netlify.app/',linkGit:'https://github.com/Nandito06/TA-4',rincian:'Update my Portofolio using React Js',},

    ];
    const renderProject=(card,index)=>{
        return(
            <div className='col-md-4'>
            <div className=' todo'key={index}>
                <div className='lineproject'></div>
                <div className='nameProject'>
                <div className='projekku d-flex'>
                    <h2 className='title-projk'>{card.title}</h2>

                    <div className='linkprojek'>
                    <a className=''  href={card.linkWeb} target='_blank'>
               <i class="fa-sharp fa-solid fa-circle-arrow-up linkweb  link-page-todo"></i></a>
               <a href={card.linkGit} target='_blank'>
               <i class="fa-brands fa-github git todogit link-page-todos"></i></a>
               </div>

               </div>
               <p className="rinci-project">{card.rincian} </p>
               <img src={card.image} alt="" className='imgprojek ' /> 
                </div>
                </div>
           </div>
        )
    }




    return (
        <div className='container-fluid Project'id='PROJECT'>
            <div className=''  >
                <div className=''  >
                   
                    <div className='Title-skill' >
                        <h1 className='Skill-intro' data-aos="fade-up">{contex.lang === "en" ? "Latest" : "Projek"}</h1>
                        <h1 className='Skill-intro'data-aos="fade-up"><span>{contex.lang === "en" ? "Project" : "Terbaru"}</span> </h1>
                    </div>
                    <div >
                       <div className='d-flex  flex-wrap'>{cardProject.map(renderProject)}</div> 
                        </div>

                </div>
               
                
            </div>
           
        </div>
        
    );
}

export default Project;