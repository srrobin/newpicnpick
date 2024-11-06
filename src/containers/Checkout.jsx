import React from 'react';
import { FcMoneyTransfer } from "react-icons/fc";
import { FaCcMastercard } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/user/order/1")
    }
    return (
            <div className="container__fluid mtb-20 mtb-sm-15" style={{display:"inline-block"}} >
            <div className="product-detail checkout-detail">
                <div className="area detail-left pt-10 plr-20 plr-sm-15 pb-20 pb-sm-15 mr-20 mr-sm mb-sm-15">
                <h5 className="b-b pb-10 mb-15 bold">Select payment method</h5>
                <div className="pos-rel">
                    <form>
                    <div className="heading-tab-wrapper">
                        <div className="tab-heading">
                        <label onClick={handleClick}>
                            <input type="radio" name="payment" value="2" />
                            <FcMoneyTransfer className="icon cod-icon" />
                            <span>Cash on delivery</span>
                        </label>
                        <label>
                            <input type="radio" name="payment" value="8" />
                            <FaCcMastercard  className="icon card-icon mb-5" style={{color:"#2195f2"}}/>
                            <span>Payment API</span>
                        </label>
                        </div>
                        <div className="tab-content">
                        <button
                            disabled
                            type="button"
                            aria-label="Confirm order and pay now (৳0)"
                            className="ajax-btn primary-btn plr-30 plr-sm-15"
                        >
                            <span>Confirm order and pay now (৳0)</span>
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div className="detail-right" route-link="checkout">
                <div className="area pt-10 plr-20 plr-sm-15 pb-20 pb-sm-15">
                    <h5 className="bold b-b pb-10 mb-15">Checkout</h5>
                    <div className="flex sided mb-15">
                    <h5 className="fw-400">Subtotal (0 items)</h5>
                    <h5 className="price">
                        <span>৳0</span>
                    </h5>
                    </div>
                    <div className="flex sided pb-10">
                    <h5 className="fw-400">Shipping</h5>
                    <h5 className="price">
                        <span className="color-free">Free</span>
                    </h5>
                    </div>
                    <div className="flex sided mb-20 mb-sm-15 b-t pt-10">
                    <h5 className="fw-400">Total</h5>
                    <h4 className="price">
                        <span>৳0</span>
                    </h4>
                    </div>
                    <div>
                    <form className="mt-15 btn-input">
                        <input placeholder="Code" type="text" className="pl-15 pr-80" />
                        <button
                        disabled
                        type="button"
                        aria-label="Apply"
                        className="ajax-btn primary-btn plr-15"
                        >
                        <span>Apply</span>
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Checkout;