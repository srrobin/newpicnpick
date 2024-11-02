import React from 'react';
import p1 from "../assets/p1.jpg";
const Cart = () => {
    return (
            <div className="container__fluid  gap-20 mtb-sm-15 cart">
            <div className="product-detail checkout-detail">
                <div className="detail-left ptb-10 plr-20 plr-sm-15 mr-sm area mr-20 mb-sm-15">
                <div className="b-b pb-10 mb-10 flex sided">
                    <h5 className="bold">Shopping cart</h5>
                    <p>
                    <button aria-label="submit" className="link f-9">
                        Deselect all items
                    </button>
                    </p>
                </div>

                <div>
                    <div className="gaps-20 flex sided align-start b-b pb-20 pt-10 mb-10 cart-product-tile">
                    <div className="flex gap-15">
                        <label className="cb-container">
                        <input type="checkbox" className="cp" value="3617" />
                        <span className="checkmark"></span>
                        </label>
                        <a
                        href="/product/electric-multifunction-smart-curry-cooker/62111444"
                        className="w-100x img-wrapper"
                        title="Electric Multifunction Smart Curry Cooker"
                        >
                        <img
                            alt="Electric Multifunction Smart Curry Cooker"
                            title="Electric Multifunction Smart Curry Cooker"
                            height="50"
                            width="50"
                            className="lazy-img"
                            src={p1}
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
                                href="/product/electric-multifunction-smart-curry-cooker/62111444"
                                className="ellipsis-1"
                                title="Electric Multifunction Smart Curry Cooker"
                            >
                                Electric Multifunction Smart Curry Cooker
                            </a>
                            </h5>
                            <h6 className="color-lite mb-15 mt-10">
                            <span>
                                <span className="color-reduced strike-through">৳2,080</span>
                                <span className="bold color-offer">40% Offer</span>
                            </span>
                            </h6>
                        </div>
                        <div className="flex gap-10 start wrap mt-10">
                            <span className="quantity-area mtb-5">
                            <button aria-label="subtract">-</button>
                            <span className="no-control">2</span>
                            <button aria-label="add">+</button>
                            </span>
                            <button
                            type="button"
                            aria-label="Delete"
                            className="ajax-btn outline-btn plr-20 mtb-5"
                            >
                            <span>Delete</span>
                            </button>
                        </div>
                        </div>
                        <div className="mt-sm-10 mn-w-90x right-text">
                        <h5 className="price inl-b-sm">
                            <span>৳1,250</span>
                        </h5>
                        <p className="inl-b-sm">x 2</p>
                        </div>
                    </div>
                    </div>

                    <div className="gap-20 flex sided align-start b-b pb-20 pt-10 mb-10 cart-product-tile">
                    <div className="flex gap-15">
                        <label className="cb-container">
                        <input type="checkbox" className="cp" value="3640" />
                        <span className="checkmark"></span>
                        </label>
                        <a
                        href="/product/stylish-coffee-cup-and-saucer/87675450"
                        className="w-100x img-wrapper"
                        title="Stylish coffee cup and saucer"
                        >
                        <img
                            alt="Stylish coffee cup and saucer"
                            title="Stylish coffee cup and saucer"
                            height="50"
                            width="50"
                            className="lazy-img"
                            src="https://www.picnpick.com/uploads/thumb-product-1729576392-4.jpg"
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
                                href="/product/stylish-coffee-cup-and-saucer/87675450"
                                className="ellipsis-1"
                                title="Stylish coffee cup and saucer"
                            >
                                Stylish coffee cup and saucer
                            </a>
                            </h5>
                            <h6 className="color-lite mb-15 mt-10">
                            <span>
                                <span className="color-reduced strike-through">৳1,600</span>
                                <span className="bold color-offer">32% Offer</span>
                            </span>
                            </h6>
                        </div>
                        <div className="flex gap-10 start wrap mt-10">
                            <span className="quantity-area mtb-5">
                            <button aria-label="subtract">-</button>
                            <span className="no-control">2</span>
                            <button aria-label="add">+</button>
                            </span>
                            <button
                            type="button"
                            aria-label="Delete"
                            className="ajax-btn outline-btn plr-20 mtb-5"
                            >
                            <span>Delete</span>
                            </button>
                        </div>
                        </div>
                        <div className="mt-sm-10 mn-w-90x right-text">
                        <h5 className="price inl-b-sm">
                            <span>৳1,100</span>
                        </h5>
                        <p className="inl-b-sm">x 2</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex sided pb-5">
                    <h5 className="price">Subtotal (2 items)</h5>
                    <h4 className="price">
                    <span>৳2,200</span>
                    </h4>
                </div>
                </div>

                {/* <div className="detail-right">
                <div className="area pt-10 plr-20 plr-sm-15 pb-20 pb-sm-15">
                    <h5 className="bold b-b pb-10 mb-15">Checkout</h5>
                    <div className="flex sided mb-15">
                    <h5 className="fw-400">Subtotal (2 items)</h5>
                    <h5 className="price">
                        <span>৳2,200</span>
                    </h5>
                    </div>
                    <div className="flex sided mb-20 mb-sm-15 b-t pt-10">
                    <h5 className="fw-400">Total</h5>
                    <h4 className="price">
                        <span>৳2,200</span>
                    </h4>
                    </div>
                    <button
                    type="button"
                    aria-label="Proceed to checkout"
                    className="ajax-btn primary-btn w-100"
                    >
                    <span>Proceed to checkout</span>
                    </button>
                    <div className="discounted-price success-msg mt-20">
                    <span>Your total saving amount on this order </span>
                    <h4 className="price">
                        <span>৳1,000</span>
                    </h4>
                    </div>
                </div>
                </div> */}
            </div>
            </div>

    );
};

export default Cart;