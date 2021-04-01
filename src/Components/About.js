import React from 'react';

import Skillcard from './Skillcard';
import skills from '../Components/Data/about__data'
const About = () => {
    return (
        <div className='about'>
            <div className="about__intro">
         <h6>
                I Describe My Self As Someone Who's Persistant,Quick Learner And Loves Problem Solving By Using 
                   Simpal And Scalable Solutions
         </h6>
         </div>
         <div className="about__container">
             <h6 className="about__heading"> What I Offer </h6>
             <div className="row">
                 {
                     skills.map(skill=>
                    <Skillcard skill={skill}/>
                     )
                 }
             </div>
         </div>
        </div>
    );
};

export default About;