import React from 'react';
import p1 from "../assets/p1.jpg";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const ProductCardBorder = ({cardBg, border}) => {
    return (
        <div className='productcardnoborder__area' >
            <div className={`p-tile collection-bg-0 ${cardBg}`}>
                <Link to='/product/1' className={`page-link ${border}`}>
                    <span className='block img-wrapper'>
                    {/* <button aria-label="submit" title="Compare" className="compare-btn">
                        <TfiReload size={14}  className="icon reload-icon"/>
                        </button>   */}
                      <img src={p1} alt='' height="50" width="50"/>
                    </span>
                    <div className='product__title text-center'>
                         <div className="ellipsis ellipsis-2">
                            Stylish coffee cup and saucer
                         </div>
                    </div>
                    <span className="block mtb-5 text-center">
                        <span title="0 out of 5" className="rating-stars">
                        <MdOutlineStarBorderPurple500  size={14}/>
                        <MdOutlineStarBorderPurple500  size={14}/>
                        <MdOutlineStarPurple500  size={14}/>
                        <MdOutlineStarPurple500  size={14}/>
                        <MdOutlineStarPurple500  size={14}/>
                        </span> 
                        <span className="review"> 0 Reviews</span>
                    </span>
                    <div className='price__discount '>
                        <div className='priv__price'>৳ 1,600</div>
                        <div className='current__price'>৳ 1,100</div>
                        <div className='discount__rate'> -32% </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCardBorder;