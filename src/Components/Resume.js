import React from 'react';

import Bar from './Bar';
import{Tools,languages} from '../Components/Data/resume__data'
const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Eduction
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Master Of Computer Science
                        </h5>
                        <span> Academic Year(2019-2021)</span>
                        <p className="resume-card__name">
                            Tuljaram Chaturchand Collage Baramati </p>
                            
                            
                        
                        <p className="resume-card__details">I'm Currently Pursuing Master of Computer Science from Tuljaram Chaturchand Collage From Baramati </p>
                        <span>SGPA(till 2nd semester):7.5</span>
                    </div>
                    
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Batchelor Of Computer Science
                        </h5>
                        <span> Academic Year(2015-2018)</span>
                        <p className="resume-card__name">
                            Vidya Pratishthans Arts Science Commerce Collage Baramati </p>
                        
                        <span>Percentage (56.26%)</span>
                    </div>
                    </div>
                    <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience

                    
                    </h4>
                    <p> Currently Not Having Any Experience</p>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            
                        </h5>
                        <p className="resume-card__name">
                            
                        </p>
                        <p className="resume-card__details"></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language And Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                                languages.map(language=>
                                    <Bar value={language}/>
                                    )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools And SoftWares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            Tools.map(tool=>
                                <Bar value={tool}/>
                                )
                        }
                    </div>
                </div>

            </div>
        </div>

       
    );
};

export default Resume;