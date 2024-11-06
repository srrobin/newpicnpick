import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
const Shipping = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    function handleAddToCart() {
      console.log("Item added to checkout");
      navigate('/checkout');
    }
    return (
            <div className="container__fluid mtb-20 mtb-sm-15" style={{display:"inline-block"}}>
            <div className="product-detail checkout-detail">
                <div className="detail-left p-20 p-sm-15 pb-10 area mr-20 mr-sm mb-sm-15">
                <h5 className="mb-20">Delivery Address</h5>
                <div className="flex align-start gap-15 start">
                    <div className="address-wrapper">
                    <div>
                        <div className="flex gaps-20 align-initial wrap start">
                        <label className="card p-15 address-card active">
                            <input type="radio" name="user_address" value="0" />
                            <span className="flex gap-10 mb-10 align-initial sided address-title">
                            <span className="block bold">uyy</span>
                            <span className="flex gap-10">
                                <button type="button" aria-label="Edit" className="ajax-btn outline-btn plr-10">
                                <span>Edit</span>
                                </button>
                                <button type="button" aria-label="Delete" className="ajax-btn outline-btn plr-10">
                                <span>Delete</span>
                                </button>
                            </span>
                            </span>
                            <span>yty, null-null, Barisal, Bangladesh</span>
                            <span className="block mts-5">tel: yyyyyyyyyy</span>
                        </label>
                        <button type="button" className="address-btn card" onClick={handleShow}>
                            <span className="icon-wrap mb-10">
                            <FaPlus className="icon plus-icon"/>
                            </span>
                            Add new address
                        </button>
                        </div>
                    </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                    <form className="address-form">
  <div className="pop-over has-layer">
    <div data-ignore="shipping-address-pop-over" className="layer"></div>
    <div id="shipping-address-pop-over" className="pop-over-inner">
      <div className="pop-heading flex sided plr-20 plr-sm-15 ptb-10 b-b pos-rel">
        <h5 className="bold">User Address</h5>
        {/* <button aria-label="submit" className="right-btn close-btn pos-static no-shadow">
          <i className="icon close-icon"></i>
        </button> */}
      </div>
      <div className="sb pop-over-content p-20 p-sm-15">
        <div className="flex gap-15">
          <div className="input-wrap flex-1">
            <label>Country</label>
            {/* <div className="custom-dropdown left">
              <span data-ignore="dropdown-311">
                <span>Bangladesh</span>
                <i className="icon black ignore-click arrow-down"></i>
              </span>
            </div> */}
            <select class="form-select" aria-label="Default select example">
                <option selected>Bangladesh</option>
                <option value="1">India</option>
                <option value="2">Nepal</option>
                <option value="3">Bhutan</option>
            </select>
          </div>
          <div className="input-wrap flex-1">
            <label>Email</label>
            <div className="icon-input">
                <TfiEmail className="icon email-icon" />
              <input type="text" placeholder="Your email" />
            </div>
          </div>
        </div>
        <div className="flex block-xxs gap-15">
          <div className="input-wrap flex-1">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="input-wrap flex-1">
            <label>&nbsp;</label>
            <div className="input-text">
              <span>+880</span>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="input-wrap">
          <label>Address</label>
          <input type="text" placeholder="Street address or P.O. Box" className="mb-10" />
          <input type="text" placeholder="Apt, suite, unit, building, floor, etc." />
        </div>
        <div className="flex block-xxs gap-15 sided">
          <div className="input-wrap">
            <label>City</label>
            <input type="text" />
          </div>
          <div className="input-wrap">
            <label>Zip code</label>
            <input type="text" />
          </div>
          <div className="input-wrap">
            <label>Division</label>
            {/* <div className="custom-dropdown right">
              <span data-ignore="dropdown-312">
                <span>Barisal</span>
                <i className="icon black ignore-click arrow-down"></i>
              </span>
            </div> */}
            <select class="form-select" aria-label="Default select example">
                <option selected>Dhaka</option>
                <option value="1">Rajshahi</option>
                <option value="2">Rangpur</option>
                <option value="3">Mymensingh</option>
                <option value="3">Sylhet</option>
                <option value="3">Mymensingh</option>
                <option value="3">Khulna</option>
                <option value="3">Chattogram</option>
                <option value="3">Barishal</option>
            </select>
          </div>
        </div>
        <div className="input-wrap mb-0">
          <label>Delivery instruction</label>
          <textarea></textarea>
        </div>
      </div>
      <div className="pop-footer b-t plr-20 plr-sm-15 pt-10 pb-10">
        <div className="flex sided mlr-0 gap-10">
          <button aria-label="submit" className="outline-btn plr-30 plr-sm-15">
            Cancel
          </button>
          <button aria-label="Save this address" type="submit" className="ajax-btn primary-btn plr-30 plr-sm-15">
            Save this address
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
                    </Modal>
                </div>
                <div className="mt-30">
                    <h5 className="mb-10">Order Summary</h5>
                    <div>
                    <div className="gaps-20 flex sided align-start b-b pb-20 pt-10 mb-10 cart-product-tile">
                        <div className="flex gap-15">
                        <label className="cb-container">
                            <input type="checkbox" className="cp" value="3642" />
                            <span className="checkmark"></span>
                        </label>
                        <a
                            href="/product/cosmetics-makeup-organizer-3d-rotating-360/88820447"
                            className="w-100x img-wrapper"
                            title="Cosmetics Makeup Organizer 3D Rotating 360"
                        >
                            <img
                            alt="Cosmetics Makeup Organizer 3D Rotating 360"
                            title="Cosmetics Makeup Organizer 3D Rotating 360"
                            height="50"
                            width="50"
                            className="lazy-img"
                            src="https://www.picnpick.com/uploads/thumb-product-1729575958-8.jpg"
                            data-loaded="true"
                            style={{ opacity: 1 }}
                            />
                        </a>
                        </div>
                        <div className="content-wrap flex align-start grow block-sm gap-15">
                        <div className="grow">
                            <div>
                            <h5 className="semi-bold mb-5">
                                <a
                                href="/product/cosmetics-makeup-organizer-3d-rotating-360/88820447"
                                className="ellipsis-1"
                                title="Cosmetics Makeup Organizer 3D Rotating 360"
                                >
                                Cosmetics Makeup Organizer 3D Rotating 360
                                </a>
                            </h5>
                            <h6 className="color-lite mb-15 mt-10">
                                <span>
                                <span className="color-reduced strike-through">৳1,600</span>{" "}
                                <span className="bold color-offer">25% Offer</span>
                                </span>
                            </h6>
                            </div>
                            <form>
                            <div>
                                <label className="mr-15 cp rd-container color-lite">
                                <input type="radio" name="shipping_3642_type" className="mt-5 cp" value="1" />
                                <span className="rd-checkmark"></span>
                                From location (<span>৳130</span>)
                                </label>
                            </div>
                            </form>
                        </div>
                        <div className="mt-sm-10 mn-w-90x right-text">
                            <h5 className="price inl-b-sm">
                            <span>৳1,200</span>
                            </h5>
                            <p className="inl-b-sm">x 1</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="detail-right" route-link="checkout">
                <div className="area pt-10 plr-20 plr-sm-15 pb-20 pb-sm-15">
                    <h5 className="bold b-b pb-10 mb-15">Checkout</h5>
                    <div className="flex sided mb-15">
                    <h5 className="fw-400">Subtotal (1 items)</h5>
                    <h5 className="price">
                        <span>৳1,200</span>
                    </h5>
                    </div>
                    <div className="flex sided mb-20 mb-sm-15 b-t pt-10">
                    <h5 className="fw-400">Total</h5>
                    <h4 className="price">
                        <span>৳1,200</span>
                    </h4>
                    </div>
                    <button onClick={handleAddToCart} type="button" aria-label="Proceed to Payment" className="ajax-btn primary-btn w-100">
                    <span>Proceed to Payment</span>
                    </button>
                    <div className="discounted-price success-msg mt-20">
                    <span>Your total saving amount on this order </span>
                    <h4 className="price">
                        <span>৳400</span>
                    </h4>
                    </div>
                </div>
                </div>
            </div>
            </div>

    );
};

export default Shipping;