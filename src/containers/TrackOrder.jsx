import React from 'react';
import Breadcrumb from "../components/Breadcrumb"
import trackOrder from "../assets/track-order.png"
import { BsBoxSeam } from "react-icons/bs";

const TrackOrder = () => {
    return (
        <div className='containers tract-order'>
        <Breadcrumb />

        {/* <div className='contact_area'>
            <div className='contact__title'>Track Your Order</div>
            <p className="contact__sub">Have an order? Want to know where your order is now?</p>
        </div> */}
            <div className="track-container">
                <div className="form-wrapper">
                <h1 className="contact__title">Track Your Order</h1>
                <p className="contact__sub">Have an order? Want to know where your order is now?</p>
                <form className="track-form user-form">
                    <div className="track__form__title">
                    <b>Enter the track code of your order</b>
                    </div>
                    <div className="input-wrap">
                    <label>Order</label>
                    <div className="icon-input">
                    <BsBoxSeam className="icon order-icon" />
                    <input type="text" placeholder="Your Order. eg. 20230704N2H5X2" />
                    </div>
                    </div>
                    <div className="trac__bottom">Know the progress of your product delivery.</div>
                    <div className="flex right no-space">
                    <button aria-label="Submit" type="submit" className="ajax-btn primary-btn plr-20 w-50">
                        Submit
                    </button>
                    </div>
                </form>
                </div>
                <div className="img-wrap track-order-img">
                <img src={trackOrder} alt="trac order"  />
                </div>
            </div>
    </div>
    );
};


export default TrackOrder;