
import h1 from "../assets/h1.jpg"
import h2 from "../assets/h2.png"
import h3 from "../assets/h3.png"
import h4 from "../assets/s1.png"
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
const HeroSection = () => {
    return (
        <div className='main__slide hero__section'>
            <div className='parent'>
                <div className='div1'> 
                <div id="carouselExampleCaptions" class="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={h1} className="d-block w-100 image__radius" alt="..."/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                    </div>
                    <div className="carousel-item">
                    <img src={h2} className="d-block w-100 image__radius " alt="..."/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div> */}
                    </div>
                    <div className="carousel-item">
                    <img src={h1} className="d-block w-100 image__radius" alt="..."/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                    <GrFormPrevious />
                    </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                    <GrFormNext />
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>  

                </div>

                <div className="div2">
                    <img src={h3} alt="Hero 2" className=' image__radius'/>
                </div>
                <div className="div3">
                    <img src={h4} alt="Hero 3" className='image__radius'/>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;