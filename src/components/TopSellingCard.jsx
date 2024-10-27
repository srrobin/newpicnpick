import React from 'react';
import sellImg from "../assets/p1.jpg"
const TopSellingCard = () => {
    return (
        <a href="/" className="topselling__card item text-center page-link">
            <div className="item-inner">
                <div className="img-container">
                    <div className="img-wrapper">
                        <img 
                            src={sellImg} 
                            alt="Stylish coffee cup and saucer" 
                            title="Stylish coffee cup and saucer" 
                            height="50" 
                            width="50" 
                            className="lazy-img" 
                            style={{ opacity: 1 }} 
                        />
                    </div>
                </div>
                
                <div className="title-wrap">
                    <div className="ellipsis ellipsis-1 topsell__title">
                        Stylish coffee cup and saucer
                    </div>
                    
                    <div className="price-section pos-rel flex start">
                        <h5>
                            <span className="strike-through">
                                <span>৳1,600</span>
                            </span>
                            <span className="f-12 ml-2">
                                <span>৳1,100</span>
                            </span>
                        </h5>
                        <span className="discount ml-10">-32%</span>
                        <button 
                            aria-label="Compare" 
                            title="Compare" 
                            className="compare-btn ml-10"
                        >
                            <i className="icon reload-icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default TopSellingCard;
