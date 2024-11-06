import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import D1 from "../assets/d1.png"
const DetailsProduct = () => {
    return (
        <>
        <div className="sticky-cart-wrap">
        <div className="container__fluid">
            <div className="sticky-cart">
            <div className="sticky-title">
                <img
                alt="Super soft Leather shoes for Men's -PMS 105"
                title="Super soft Leather shoes for Men's -PMS 105"
                height="50"
                width="50"
                className="lazy-img"
                src={D1}
                data-loaded="true"
                style={{ opacity: 1 }}
                />
                <h5 className="ellipsis ellipsis-2">Super soft Leather shoes for Men's -PMS 105</h5>
            </div>
            <div className="btn-wrap">
                <button type="button" aria-label="Add to cart" className="ajax-btn primary-btn btn" id="add-to-cart">
                <span>Add to cart</span>
                </button>
                <button type="button" aria-label="Buy now" className="ajax-btn outline-btn btn">
                <span>Buy now</span>
                </button>
                <button aria-label="submit" className="compare-btn">
                <i className="icon heart-icon"></i>
                </button>
                <button aria-label="submit" title="Compare" className="compare-btn">
                <i className="icon reload-icon"></i>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+8801829003004?text=Hi, I want to purchase a product"
                className="whatsapp-btn-wrap"
                >
                <i className="icon whatsapp-icon"></i>
            </a>
            <div className="detail-menu hide-sm">
                <div className="container-fluid">
                    <div className="mlr--15">
                    <a href="/all/mens-wear" className="" title="Men's Wear">
                        Men's Wear
                    </a>
                    <a href="/all/mens-shoes" className="" title="Men's Shoes">
                        Men's Shoes
                    </a>
                    <a href="/all/mens-accessories" className="" title="Men's Accessories">
                        Men's Accessories
                    </a>
                    <a href="/all/womans-wear" className="" title="Woman's Wear">
                        Woman's Wear
                    </a>
                    <a href="/all/womans-shoes" className="" title="Woman's Shoes">
                        Woman's Shoes
                    </a>
                    <a href="/all/beauty--personal-care" className="" title="Beauty & Personal Care">
                        Beauty &amp; Personal Care
                    </a>
                    <a href="/all/kids--toys" className="" title="Kids & Toys">
                        Kids &amp; Toys
                    </a>
                    <a href="/all/skin-care" className="" title="Skin Care">
                        Skin Care
                    </a>
                    <a href="/all/kitchen--dining" className="" title="Kitchen & Dining">
                        Kitchen &amp; Dining
                    </a>
                    <a href="/all/home--living" className="" title="Home & Living">
                        Home &amp; Living
                    </a>
                    </div>
                </div>
            </div>
            <div className="container__fluid mtb-15 mt-sm-10 mn-h-400x">
                <div>
                        {/* <nav aria-label="breadcrumb" className="mb-20 mb-sm-15">
                        <ol itemscope="itemscope" itemType="https://schema.org/BreadcrumbList" className="breadcrumb">
                            <li itemProp="itemListElement" itemscope="itemscope" itemType="https://schema.org/ListItem">
                            <a href="/" className="nuxt-link-active" itemProp="item">
                                <span itemProp="name">Home</span>
                            </a>
                            <meta itemProp="position" content="1" />
                            </li>
                            <li itemProp="itemListElement" itemscope="itemscope" itemType="https://schema.org/ListItem" className="breadcrumb-item">
                            <span itemProp="name">Super soft Leather shoes for Men's -PMS 105</span>
                            <meta itemProp="position" content="2" />
                            </li>
                        </ol>
                        </nav> */}
                        <Breadcrumb/>
                        <div className="product-detail">
                        <div className="detail-left pr-30 pr-sm-0">
                            <div className="flex start align-start block-md">
                            <div className="product-main">
                                <div className="detail-image-wrapper">
                                <div className="detail-image-inner">
                                    <div className="detail-image shimmer-wrapper">
                                    <div className="hide-md mx-h-100">
                                        <div className="mx-h-100 zoomer-base-container scroller-at-left arrow-hide" style={{ width: "422px", position: "relative" }}>
                                        <img
                                            draggable="false"
                                            className="responsive-image preview-box"
                                            src={D1}
                                            data-zoom="https://www.picnpick.com/uploads/product-1728131264-8.jpg"
                                            alt="Super soft Leather shoes for Men's -PMS 105"
                                        />
                                        <div className="thumb-list" style={{ height: "350px", width: "70px", gridTemplateRows: "calc(100%/6/2) repeat(4, auto) calc(100%/6/2)", visibility: "visible" }}>
                                            <img
                                            src={D1}
                                            alt="move thumb icon"
                                            className="zoomer-control responsive-image"
                                            />
                                            <img 
                                            draggable="false"
                                            src={D1}
                                            className="responsive-image" alt="Thumbnail " />
                                            <img draggable="false" 
                                            src={D1}
                                            className="responsive-image" 
                                            alt="Thumbnail " />
                                        </div>
                                        <div id="zoomer-pane-container" className="pane-container" style={{ width: "400px", height: "478.333px", left: "405px", display: "none" }}></div>
                                        </div>
                                    </div>
                                    <p className="mt-5 pb-15 center-text lh-30 hide-md">
                                        <span>Roll over image to zoom in</span>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="pl-30 pl-md grow">
                                <h1 className="f-16">Super soft Leather shoes for Men's -PMS 105</h1>
                                <div className="mt-10">
                                <span title="0 out of 5" className="rating-stars">
                                    <span>☆☆☆☆☆</span>
                                    <span className="rating" style={{ width: "0%" }}>★★★★★</span>
                                </span>
                                <span className="f-10 ml-5 semi-bold color-lite">0 Reviews</span>
                                </div>
                                <div className="devider w-md-100 mtb-15">&nbsp;</div>
                                <h4 className="mb-15 bold color-success">In Stock</h4>
                                <div className="two-sided mb-15">
                                <h6 className="left">Brand</h6>
                                <div className="right">
                                    <a href="/brand/undefined?brand=9442200" className="link">Run Leather</a>
                                </div>
                                </div>
                                <div className="two-sided mb-15">
                                <span className="left">Size</span>
                                <div className="start flex wrap gap-10">
                                    <label className="rd-container rd-attr">
                                    <input type="radio" name="5" value="442" />
                                    <span className="rd-checkmark"></span>
                                    <span className="input-content">39</span>
                                    </label>
                                    {/* Additional sizes here */}
                                </div>
                                </div>
                                <div className="wrap two-sided mb-15 align-start">
                                <h6 className="left">Refund &amp; warranty</h6>
                                <div className="right">
                                    <div className="mb-5">Not refundable</div>
                                    <div>Warranty available</div>
                                    <div className="mt-5">100% authentic</div>
                                </div>
                                </div>
                                <div className="editor mt-30 mt-sm-15">
                                <h5>• Brand: Run</h5>
                                <h5>• Origin: Bangladesh.</h5>
                                <h5>• Model: PMS 105</h5>
                                <h5>• Color: Black</h5>
                                <h5>• Style: Belt Sandal</h5>
                                <h5>• Material: 100% Leather.</h5>
                                <h5>• Upper Material: Full Genuine Leather.</h5>
                                <h5>• Sole: Rubber</h5>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="detail-right">
                            <div className="sticky-right">
                            <div className="content">
                                <h2 className="price-wrapper mb-5">
                                <span className="color-deep price">৳1,590</span>
                                <span className="strike-through f-7">৳3,180</span>
                                </h2>
                                <div>
                                <span className="mr-5 block">
                                    + <span>৳130</span> Shipping Fee
                                </span>
                                <div className="pos-rel lh-30 z-7 inline">
                                    <button aria-label="Details" className="semi-bold clear-height mt-10">
                                    <span className="flex no-click">
                                        <span className="mt-2">Details</span>
                                        <i className="icon black scale-8 arrow-down"></i>
                                    </span>
                                    </button>
                                </div>
                                </div>
                                <div className="start flex gap-10 mb-10 wrap">
                                <span className="mt-5 mn-w-70x">Quantity</span>
                                <span className="quantity-area mt-5">
                                    <button aria-label="subtract">-</button>
                                    <span className="no-control">1</span>
                                    <button aria-label="add">+</button>
                                </span>
                                </div>
                                <div className="flex-sm mlr-sm--2-5">
                                <button type="button" aria-label="Add to cart" className="ajax-btn w-100 w-sm-50 outline-btn mtb-10 mlr-sm-2-5" id="add-to-cart">
                                    <span>Add to cart</span>
                                </button>
                                <button type="button" aria-label="Buy now" className="ajax-btn w-100 w-sm-50 primary-btn mtb-10 mlr-sm-2-5">
                                    <span>Buy now</span>
                                </button>
                                </div>
                                <button aria-label="Add to wishlist" className="ajax-btn mt-15 w-100 outline-btn hide-sm">
                                <span>Add to wishlist</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="container__fluid suggested-container mn-h-400x mx-h-0">
                <div>
                    <div className="rating-review pb-5 b-t pt-20 pt-sm-15">
                    <div className="flex gap-15 start align-initial block-sm">
                        
                        {/* Total Rating Section */}
                        <div className="pr-15 pr-sm total-rating">
                        <div className="pos-sticky">
                            <h4 className="mb-10 bold">Customer reviews</h4>
                            <div className="flex start">
                            <span title="0 out of 5" className="rating-stars mr-10">
                                <span>☆☆☆☆☆</span>
                                <span className="rating" style={{ width: '0%' }}>★★★★★</span>
                            </span>
                            <h4>0 out of 5</h4>
                            </div>
                            <p className="mb-15">0 people reviewed this product</p>
                            <div>
                            <table className="mb-15">
                                {['5', '4', '3', '2', '1'].map((star) => (
                                <tr key={star}>
                                    <td>{star} star</td>
                                    <td>
                                    <span className="rating-bar mtb-5 mlr-10">
                                        <span style={{ width: '0%' }}></span>
                                    </span>
                                    </td>
                                    <td>0% (0)</td>
                                </tr>
                                ))}
                            </table>
                            </div>
                        </div>
                        </div>

                        {/* All Reviews Section */}
                        <div className="all-review mlr--15">
                        <div className="mlr-15">
                            <div className="review-list">
                            <p>No review yet.</p>
                            </div>
                        </div>
                        
                        {/* Banner */}
                        <a href="/products/christmas-offer?banner=7" className="block banner-wrapper rating-banner mb-15 mlr-15">
                            <img
                            src="https://www.picnpick.com/uploads/banner-1714219159-9.png"
                            alt="Christmas Offer"
                            height="100"
                            width="500"
                            />
                        </a>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

export default DetailsProduct;