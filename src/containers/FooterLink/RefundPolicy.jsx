import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const RefundPolicy = () => {
    return (
        <div className='containers gap-20 '>
        <Breadcrumb />

        <div className='about_area' style={{marginTop:"0px"}}>
            <div className='about__title' style={{ fontSize:"25px", fontWeight:"800"}}>Return­­­­ Policy:</div>
            <div className='about__desc'>
            1) Within seven days of the delivery date, please use the Picnpick app or website to initiate a return request if your product is incomplete, wrong, damaged, or defective. (If there's a refund for your merchandise.)
            2) If problems with mobile phones and electronic goods occur after use or after the return policy time, it is advised to check if the device is covered by the seller's warranty or the manufacturer's warranty.
            3) A shift of perspective is acceptable in some situations. For further information, see the "Return Policy per Category" section below.
            </div>
            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}> Legitimate Reasons for Initiating a Return</strong> <br/>
                Change of Mind: If you wish to return an item due to a change of mind, we facilitate such requests within the specified timeframe, abiding by the conditions outlined in our Return Policy.
Faulty or malfunctioning: (for example, physically broken or destroyed) or faulty (for example, unable to turn on).
Incomplete Order: (products and/or accessories are missing, for example).
Shipped incorrect item: (e.g., incorrect product, size, or color, fake item, or expired).
Not up to par The product's quality delivery does not correspond with its description or image (i.e., it is not what was advertised).
Incorrect Color/Size: The goods is delivered in an incorrect size, for example.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}> Return Policy Category Wise </strong> <br/>
                Change of Mind: If you wish to return an item due to a change of mind, we facilitate 
                For a comprehensive list of returnable & non-returnable items, please refer to the provided information.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}> Phones & Accessories </strong> <br/>
                Cell phones, tablets, chargers and batteries, headsets and earphones, and accessories for smartphones and tablets
Refunds and returns are not eligible for changes of heart.
In the event that the item is incomplete, erroneous, damaged, or defective upon receipt, picnpick will determine whether to give a refund.
Note: Used products cannot be returned to us. If your mobile phone is dead when it arrives (i.e., doesn't come on at all), you can submit a return request straight to picnpick. In the event that the smartphone has previously been set up, 
For information about the manufacturer's warranty, please get in touch with the seller or brand warranty provider directly.
A mobile phone is deemed operational after a SIM card is inserted or after it is Wi-Fi linked to the internet.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}> Fashion & Lifestyle</strong> <br/>
                Clothes, Accessories, Sunglasses, Shoes, and Apparel
Returns and refunds are accepted for changes of heart.
In the event that the item is incomplete, erroneous, damaged, or defective upon receipt, picnpick will determine whether to give a refund. Items need to be in original tags, unwashed, unworn, and undamaged. Any used items will be refused and sent back to the buyers.

            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}>Household Electronics & Appliances</strong> <br/>
                Returns and refunds are not accepted for changes of heart. picknpick will determine whether to offer a refund if the item is incomplete, inaccurate, damaged, or defective.
                Note: Please verify if the item is covered under seller or brand warranty for concerns pertaining to the gadget after usage or the expiration of the return policy term. 

            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}>Beauty & Health </strong> <br/>
                Accessories for Bath & Body, Personal Care & Health, Fragrance, Moisturizers, Creams, Scrubs, Oils, Shapewear, and Food Supplements
Refunds and returns are not available for changes of heart.
A refund will be given in accordance with picnpick's evaluation if the item is broken, flawed, inaccurate, or incomplete when it is received.
Note: Please verify if the item is covered under seller or brand warranty for concerns pertaining to the gadget after usage or the expiration of the return policy term. 

            </div>

        </div>

    </div>
    );
};

export default RefundPolicy;