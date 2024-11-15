import React from 'react';
import b1 from "../assets/c1.png"
import b2 from "../assets/c2.png"
import b3 from "../assets/c3.png"
import b4 from "../assets/c4.png"
import b5 from "../assets/c5.png"
import b6 from "../assets/c6.png"
import b7 from "../assets/c7.png"
import b8 from "../assets/c8.png"
import b9 from "../assets/c9.png"
import b10 from "../assets/c10.png"
import useAxios from '../utils/useAxios';
const Categories = () => {

    const { loading, data, error } = useAxios('categories');

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div className="container__fluid gap-20 ptb-sm-15 flow-hidden">
            <div className='category-tile-wrapper2'>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b1}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">                  
                        Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b2}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                     Men's Shoes
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b3}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b4}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b5}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b6}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b7}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b8}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b9}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
                <a href="/" className="block page-link category-tile" >
                   <div className="img-wrapper">
                    <img 
                    src={b10}
                    alt="Run Leather" 
                    height="50" 
                    width="50"   />
                    </div>
                    <div className="item-title ellipsis ellipsis-1">
                    Men's Wear
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Categories;