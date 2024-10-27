import React from 'react';
import b1 from '../assets/b1.png'; 

const FeatureBrands = () => {
    return (
        <div className="card" style={{ minHeight: "300px" }}>
            <div className="card-header card__header" style={{ borderBottom: "none", background: "#fff" }}>
                <div className="card__title">Featured Brands</div>
                <div className="card__button">
                    <a className="" href="/">Show All</a>
                </div>
            </div>
            <div className="card-body feature__body">
                <div className="all__features d-flex align-items-center gap-3  flex-wrap " >
                    <a href='/' className="single__features text-center "  >
                        <img 
                            src={b1} 
                            alt="Addidus brand logo" 
                            width="99" 
                            height="99" 
                            className="rounded-circle pt-2" 
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="brandName">Addidus</div>
                    </a>
                    <a href='/' className="single__features text-center " >
                        <img 
                            src={b1} 
                            alt="Addidus brand logo" 
                            width="99" 
                            height="99" 
                            className="rounded-circle pt-2" 
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="brandName">Addidus</div>
                    </a>
                    <a href='/' className="single__features text-center "  >
                        <img 
                            src={b1} 
                            alt="Addidus brand logo" 
                            width="99" 
                            height="99" 
                            className="rounded-circle pt-2" 
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="brandName">Addidus</div>
                    </a>

                    <a href='/' className="single__features text-center "  >
                        <img 
                            src={b1} 
                            alt="Addidus brand logo" 
                            width="99" 
                            height="99" 
                            className="rounded-circle pt-2" 
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="brandName">Addidus</div>
                    </a>
                    <a href='/' className="single__features text-center "  >
                        <img 
                            src={b1} 
                            alt="Addidus brand logo" 
                            width="99" 
                            height="99" 
                            className="rounded-circle pt-2" 
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="brandName">Addidus</div>
                    </a>
                    <a href='/' className="single__features text-center "  >
                        <img 
                            src={b1} 
                            alt="Addidus brand logo" 
                            width="99" 
                            height="99" 
                            className="rounded-circle pt-2" 
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="brandName">Addidus</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeatureBrands;
