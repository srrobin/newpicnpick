import React from 'react';
import sellImg from "../assets/p1.jpg"
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { MEDIA_BASE_URL } from '../constants/URL';
const TopSellingCard = ({data}) => {
    return (
        <Link to={`/product/${data?.product_id}`} className="topselling__card item text-center page-link">
            <div className="item-inner">
                <div className="img-container">
                    <div className="img-wrapper">
                        <img 
                            src={MEDIA_BASE_URL+data?.image} 
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
                        { data?.title }
                    </div>
                    
                    <div className="price-section pos-rel flex start">
                        <h5>
                            <span className="strike-through">
                                <span>৳{data?.selling}</span>
                            </span>
                            <span className=" ml-2 topsalling__price">
                                <span>৳{ data?.offered}</span>
                            </span>
                        </h5>
                        {/* <span className="discount discount__rate  ml-10">-32%</span> */}
                        {/* <button 
                            aria-label="Compare" 
                            title="Compare" 
                            className="compare-btn ml-10"
                        >
                            <TfiReload className='icon reload-icon'/>
                        </button> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TopSellingCard;
