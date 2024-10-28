import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const Help = () => {
    return (
        <div className='containers gap-20 '>
        <Breadcrumb />

        <div className='help_area'>
            <div className='about__desc'>
            Using Picnpick, making an order is similar to placing a "piece of product." Simply adhere to the few easy instructions listed below:
            </div>
            <div className='about__desc'>

               Find your desired product on our PicnPick website or app.<br/>
From the product page, click on <span style={{fontWeight:"700", color:"red"}}>"Buy Now"</span>  if you just want a single product to order<br/>
Click on <span style={{fontWeight:"700", color:"red"}}>"Add To Cart"</span> if you want to add more products to the cart.<br/>
After adding all of your desired products to your cart, Go to the cart and select the products you want to order.<br/>
Then fill your   <span style={{fontWeight:"700", color:"red"}}>"Details"</span> <br/>
Click on the <span style={{fontWeight:"700", color:"red"}}>“Proceed to Checkout” </span> button <br/>
Select your desired delivery option (home delivery or pickup location) and, if applicable, apply any coupons or promo codes.<br/>
Click the "Proceed to Pay" button to start the payment process. Click "Confirm order" after choosing a payment method.
            </div>
            <div className='about__desc'>
            You will receive a confirmation notification through the app and via SMS or email to confirm that the order was successfully placed after confirming it and completing the payment.
            </div>

          
    
        </div>

    </div>
    );
};


export default Help;