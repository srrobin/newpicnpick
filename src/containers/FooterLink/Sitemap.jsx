import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const Sitemap = () => {
    return (
        <div className='containers gap-20 '>
        <Breadcrumb />

        <div className='about_area' style={{marginTop:"0px"}}>
            <div className='about__title' style={{ fontSize:"25px", fontWeight:"800"}}>Find product suitable for you</div>
            <div className='about__desc'>
            Buy hundreds of products from the infinity stock
            </div>
             
             <div className='sitemap'>
                 <div className='sitemap__title'> Categories</div>
                 <div className='sitemap__items'>
                    <div className='sitemap__item'>Men's Wear</div>
                    <div className='sitemap__item'>Men's Wear</div>
                    <div className='sitemap__item'>Men's Wear</div>
                    <div className='sitemap__item'>Men's Wear</div>
                 </div>
             </div>
             
             <div className='sitemap'>
                 <div className='sitemap__title'> Products</div>
                 <div className='sitemap__items'>
                    <div className='sitemap__item'>Stylish Mens fashionable Casual Sandal (Comfy) - PMS 08</div>
                    <div className='sitemap__item'>Security Alarm Lock for Bike and Door - Black</div>
                    <div className='sitemap__item'>SCARLETT 7-Speed Electric Hand Mixer with Whisk, Traditional Beaters, Snap-On Storage Case, 250 Watts (DH133-1)

12 Pieces Double Layer Spice Rack - Black</div>
                    <div className='sitemap__item'>2 Pieces Double Layer Spice Rack - Black</div>
                 </div>
             </div>

        </div>

    </div>
    );
};


export default Sitemap;