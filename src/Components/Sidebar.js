import React from 'react';
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import github from "../assets/icons/github.svg"
import pin from "../assets/icons/pin.svg"
import tie from "../assets/icons/tie.svg"
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe=()=>{
        window.open("mailto:navaugade1996@gmail.com");
    }
    
    
    return (

        <div className="sidebar">
            <img src={mightycoder}alt="avatar" className="sidebar__avatar"/>
            <div className="sidebar__name"> Navnath<span> Ugade</span></div>
            <div className="sidebar__item sidebar__title"> Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar_resume">
                    <img src={tie}alt="resume" className="sidebar__icon"/>Dowenload Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/navnath.ugade.12" ><img src={facebook} alt="facebook" className="sidebar__icon mr-3"/></a>
                <a href="https://www.instagram.com/iamnava96/" ><img src={instagram} alt="instagarm" className="sidebar__icon"/></a>
               
            </figure>
               <div className="sidebar__contact">
                   <div className="sidebar__item sidebar__github">
                       <a href="https://github.com/NavaUgade96"><img src={github} alt="github" className="sidebar__icon mr-3"/>Github</a>
                       </div>
                       <div className="sidebar__location"> 
                       <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                       Pune,India</div>
                       <div className="sidebar__item flex ">navauagde1996@gmail.com</div>
                       <div className="sidebar__item flex">8482840495</div>
                       </div>
                        <div className="sidebar__item sidebar__email" onClick={handleEmailMe}> Email Me</div>
        </div>
    );
};

export default Sidebar;