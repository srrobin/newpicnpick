import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import D1 from "../assets/p1.jpg";
import { FaWhatsapp } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { SlClose } from "react-icons/sl";
import SuggestionProducts from "../components/SuggestionProducts"
import ProductImageMagnify from "../components/ProductImageMagnify";
import useAxios from "../utils/useAxios";
import { MEDIA_BASE_URL } from "../constants/URL";
import { Rating } from "react-simple-star-rating";

const DetailsProduct = () => {
  const [show, setShow] = useState(false);
  const {id} = useParams();

  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  const {loading, data, error} = useAxios(`product/${id}`)

  function handleAddToCart() {
    console.log("Item added to cart");
    navigate("/cart");
  }
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className="d-flex justify-content-between align-items-center" >
        <span>Transaction is secured</span>
        <SlClose onClick={handleClose} style={{ cursor: "pointer" }} />
      </Popover.Header>
      <Popover.Body>
        Secure transaction We work hard to protect your security and privacy. Our payment security system encrypts your information during transmission. We don’t share your credit card details with third-party sellers.
      </Popover.Body>
    </Popover>
  );

  if(loading){
    return <p>Loading...</p>
}

  return (
    <>
      <div className="sticky-cart-wrap " style={{ paddingTop: '30px' }}>
        <div className="container__fluid">
          <div className="sticky-cart">
            <div className="sticky-title">
              <img
                alt="Super soft Leather shoes for Men's -PMS 105"
                title="Super soft Leather shoes for Men's -PMS 105"
                height="50"
                width="50"
                className="lazy-img"
                src={MEDIA_BASE_URL+data?.data?.image}
                data-loaded="true"
                style={{ opacity: 1 }}
              />
              <h5 className="ellipsis ellipsis-2">
                {data?.data?.title}
              </h5>
            </div>
            <div className="btn-wrap">
              <button
                type="button"
                aria-label="Add to cart"
                className="ajax-btn primary-btn btn"
                id="add-to-cart"
              >
                <span>Add to cart</span>
              </button>
              <button
                type="button"
                aria-label="Buy now"
                className="ajax-btn outline-btn btn"
              >
                <span>Buy now</span>
              </button>
              <button aria-label="submit" className="compare-btn">
                <i className="icon heart-icon"></i>
              </button>
              <button
                aria-label="submit"
                title="Compare"
                className="compare-btn"
              >
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
          <FaWhatsapp className="icon whatsapp-icon" />
        </a>
        <div className="detail-menu hide-sm">
          <div className="container__fluid">
            <div className="mlr--15">
              <a href="/all/mens-wear" className="" title="Men's Wear">
                Men's Wear
              </a>
              <a href="/all/mens-shoes" className="" title="Men's Shoes">
                Men's Shoes
              </a>
              <a
                href="/all/mens-accessories"
                className=""
                title="Men's Accessories"
              >
                Men's Accessories
              </a>
              <a href="/all/womans-wear" className="" title="Woman's Wear">
                Woman's Wear
              </a>
              <a href="/all/womans-shoes" className="" title="Woman's Shoes">
                Woman's Shoes
              </a>
              <a
                href="/all/beauty--personal-care"
                className=""
                title="Beauty & Personal Care"
              >
                Beauty &amp; Personal Care
              </a>
              <a href="/all/kids--toys" className="" title="Kids & Toys">
                Kids &amp; Toys
              </a>
              <a href="/all/skin-care" className="" title="Skin Care">
                Skin Care
              </a>
              <a
                href="/all/kitchen--dining"
                className=""
                title="Kitchen & Dining"
              >
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
            <Breadcrumb />
            <div className="product-detail">
              <div className="detail-left">
                <div className="flex start align-start block-md">





                  <ProductImageMagnify data={data?.data?.images} />







                  <div className="pl-30 pl-md grow">
                    <div className="f-16">
                      { data?.data?.title }
                    </div>
                    <div className="mt-10">
                      <span title="0 out of 5" className="rating-stars">
                        {/* <span>☆☆☆☆☆</span> */}
                        {/* <span className="rating" style={{ width: "0%" }}>
                          ★★★★★
                        </span> */}
                           <Rating
                                initialValue={data?.data?.rating || 0}
                                readonly
                                fillColor='yellow'
                                size={12}
                                allowFraction={true}
                                iconsCount={5}
                            />
                      </span>
                      <span className="f-10 ml-5 semi-bold color-lite">
                        {data?.data?.rating} Reviews
                      </span>
                    </div>
                    <div className="devider w-md-100 mtb-15">&nbsp;</div>
                    <h4 className="mb-15 bold color-success">In Stock</h4>
                    <div className="two-sided mb-15">
                      <h6 className="left">Brand</h6>
                      <div className="right">
                        <a
                          href="/brand/undefined?brand=9442200"
                          className="link"
                        >
                          Run Leather
                        </a>
                      </div>
                    </div>
                    <div className="two-sided mb-15">
                      <span className="left">Size</span>
                      <div className="start flex wrap gap-10">
                        <label className="rd-container rd-attr">
                          <input type="radio" name="size" value="374" />
                          <span className="rd-checkmark"></span>
                          <span className="input-content">39</span>
                        </label>
                        <label className="rd-container rd-attr">
                          <input type="radio" name="size" value="375" />
                          <span className="rd-checkmark"></span>
                          <span className="input-content">41</span>
                        </label>
                        <label className="rd-container rd-attr">
                          <input type="radio" name="size" value="376" />
                          <span className="rd-checkmark"></span>
                          <span className="input-content">42</span>
                        </label>
                        <label className="rd-container rd-attr">
                          <input type="radio" name="size" value="377" />
                          <span className="rd-checkmark"></span>
                          <span className="input-content">43</span>
                        </label>
                        <label className="rd-container rd-attr">
                          <input type="radio" name="size" value="432" />
                          <span className="rd-checkmark"></span>
                          <span className="input-content">44</span>
                        </label>
                      </div>
                    </div>

                    <div className="wrap two-sided mb-15 align-start">
                      <h6 className="left">Refund &amp; warranty</h6>
                      <div className="right">
                        <div className="mb-5">Not refundable</div>
                        <div>Warranty available</div>
                        <div className="mt_5">100% authentic</div>
                      </div>
                    </div>
                    <div className="editor mt-30 mt-sm-15">
                      <div>• Brand: Run</div>
                      <div>• Origin: Bangladesh.</div>
                      <div>• Model: PMS 105</div>
                      <div>• Color: Black</div>
                      <div>• Style: Belt Sandal</div>
                      <div>• Material: 100% Leather.</div>
                      <div>• Upper Material: Full Genuine Leather.</div>
                      <div>• Sole: Rubber</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="sticky-right">
                  <div className="content">
                    <h2 className="price-wrapper mb-5">
                      <span className="color-deep price">৳{data?.data?.offered}</span>
                      <span className="strike-through f-7">৳{data?.data?.selling}</span>
                    </h2>
                    <div>
                      <span className="mr-5 block">
                        + <span>৳130</span> Shipping Fee
                      </span>
                      {/* <div className="pos-rel lh-30 z-7 inline">
                                                            <button aria-label="Details" className="semi-bold clear-height mt-10">
                                                            <span className="flex no-click">
                                                                <span className="mt-2">Details</span>
                                                                <i className="icon black scale-8 arrow-down"></i>
                                                            </span>
                                                            </button>
                                                        </div> */}

                    </div>
                    <div className="start flex gap-10 mb-10 wrap">
                      <span className="mt__5 mn-w-70x">Quantity</span>
                      <span className="quantity-area mt__5">
                        <button aria-label="subtract">-</button>
                        <span className="no-control">1</span>
                        <button aria-label="add">+</button>
                      </span>
                    </div>
                    <div className="flex-sm mlr-sm--2-5">
                      <button
                        onClick={handleAddToCart}
                        type="button"
                        aria-label="Add to cart"
                        className="ajax-btn w-100 w-sm-50 outline-btn mtb-10 mlr-sm-2-5"
                        id="add-to-cart"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Buy now"
                        className="ajax-btn w-100 w-sm-50 primary-btn mtb-10 mlr-sm-2-5"
                      >
                        <span>Buy now</span>
                      </button>
                    </div>
                    <div className="pos-rel inline">
                      {/* <button
                        aria-label="submit"
                        data-ignore="secure-trans"
                        className="clear-height ml--7-5 mtb-10 f-10 semi-bold flex color-deep"
                      >
                        <CiLock className="no-click icon lock-icon mr-5 opacity-35 dimen-20x" />
                        Secure transaction
                      </button> */}
                      <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={popover}
                        show={show}
                        onToggle={handleToggle}
                      >
                        <button
                          className="clear-height ml--7-5 mtb-10 f-10 semi-bold flex color-deep"
                        >
                          <CiLock className="no-click icon lock-icon mr-5 opacity-35 dimen-20x" />
                          Secure transaction
                        </button>
                      </OverlayTrigger>
                    </div>
                    <p className="f-9">
                      Arrives:{" "}
                      <span className="color-lite semi-bold">
                        Saturday, Nov 9
                      </span>
                    </p>

                    <button
                      aria-label="Add to wishlist"
                      className="ajax-btn mt-15 w-100 outline-btn hide-sm"
                    >
                      <span>Add to wishlist</span>
                    </button>
                  </div>
                  <div className="flex start mt-15 mt-sm social-share hide-sm mb-15">
                    <span className="mr-10 color-lite hide-sm">Share:</span>
                    <a href="/" className="share-network-facebook">
                      <ImFacebook2 className=" facebook-icon" size={19} />
                      <span className="hide block-sm">Facebook</span>
                    </a>
                    <a href="/" className="mlr-5 share-network-twitter">
                      <RiTwitterXLine className=" twitter-icon" size={19} />
                      <span className="hide block-sm">X</span>
                    </a>
                    <a href="/" className="share-network-pinterest">
                      <FaPinterest className=" pinterest-icon" size={19} />
                      <span className="hide block-sm">Pinterest</span>
                    </a>
                  </div>
                  <div className="store-info mt-10">
                    <div className="btn-wrap">
                      <div>
                        <p className="store-name">picnpick</p>
                        <h6 className="store-date">
                          Member since <b className="block">May 28, 2024</b>
                        </h6>
                      </div>
                      <div className="action-btn">
                        <a href="/shop/picnpick" className="visit-btn ajax-btn">
                          Visit Store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container__fluid suggested-container mn-h-400x ">
          <div>
            <div className="">
              <div className="b-t pt-20 pt-sm-15 npb-5">
                <div className="flex sided align-start">
                  <h4 className="bold">Recommended for you</h4>
                </div>

                <div className="c_slider__wrapper">
                  <SuggestionProducts />
                </div>
              </div>
              <div className="b-t pt-20 pt-sm-15 npb-5">
                <div className="flex sided align-start">
                  <h4 className="bold">People who viewed this item also viewed</h4>
                </div>

                <div className="c_slider__wrapper">
                  <SuggestionProducts />
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