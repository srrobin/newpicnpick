import React from 'react';

import h1 from "../assets/h1.jpg"
import h2 from "../assets/h2.png"
import h3 from "../assets/h3.png"
import h4 from "../assets/s1.png"
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
const HeroSection = () => {
    return (
        <div className='main__slide hero__section'>
            <div className='row'>
                <div className='col-md-10'> 
                <img
                    className="d-block w-100 img-fluid image__radius"
                    src={h1}
                    alt="Second slide"
                    />
                </div>
                <div className='col-md-2'> 
                    <div className='row'>
                        <div className='col-md-12'> 
                            <img
                                className="d-block w-100 img-fluid image__radius "
                                src={h3}
                                alt="Second slide"
                                />   
                        </div>
                        <div className='col-md-12 mt-4'> 
                            <img
                                className="d-block w-100 img-fluid image__radius"
                                src={h4}
                                alt="Second slide"
                                />   
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;