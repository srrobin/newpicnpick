import React from 'react';
import p1 from "../assets/p1.jpg";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { MEDIA_BASE_URL } from '../constants/URL';
import { Rating } from 'react-simple-star-rating';

const ProductCardBorder = ({cardBg, border, data}) => {
    return (
        <div className='productcardborder__area'  style={{ width: '100%' }}>
            {data?.badge ? <span className='product_card_badge'>{data?.badge}</span> : ''}
            <div className={`p-tile collection-bg-0 ${cardBg}`}>
                <Link to={`/product/${data?.product_id}`} className={`page-link ${border}`}>
                    <span className='block img-wrapper'>
                    <button aria-label="submit" title="Compare" className="compare-btn">
                        <TfiReload size={14}  className="icon reload-icon"/>
                        </button>  
                      <img src={MEDIA_BASE_URL+data?.image} alt='' height="50" width="50"/>
                    </span>
                    <div className='product__title text-center'>
                         <div className="ellipsis ellipsis-2">
                            { data?.title }
                         </div>
                    </div>
                    <span className="block mtb-5 text-center">
                        <span title="0 out of 5" className="rating-stars">
                        {/* <MdOutlineStarBorderPurple500  size={14}/>
                        <MdOutlineStarBorderPurple500  size={14}/>
                        <MdOutlineStarPurple500  size={14}/>
                        <MdOutlineStarPurple500  size={14}/>
                        <MdOutlineStarPurple500  size={14}/> */}
                            <Rating
                                initialValue={data?.rating || 0}
                                readonly
                                fillColor='yellow'
                                size={12}
                                allowFraction={true}
                                iconsCount={5}
                            />
                        </span> 
                        <span className="review"> {data?.rating} Reviews</span>
                    </span>
                    <div className='price__discount '>
                        <div className='priv__price'>৳ {data?.selling}</div>
                        <div className='current__price'>৳ {data?.offered}</div>
                        {/* <div className='discount__rate'> -32% </div> */}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCardBorder;