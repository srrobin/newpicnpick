import React from 'react';
import c9 from "../assets/c3.png"
const UserOrder = () => {
    return (
        <div className="container__fluid gap-20">
        <div className="order-wrapper">
          <ul className="left-sidebar">
            <li><a href="/user/profile">My profile</a></li>
            <li><a href="/user/addresses">My address book</a></li>
            <li><a href="/user/vouchers">Vouchers</a></li>
            <li className="active"><a href="/user/orders" className="nuxt-link-active">My orders</a></li>
            <li><a href="/user/following">Following Stores</a></li>
            <li><a href="/user/wishlists">My wishlist</a></li>
            <li><a href="/user/compared">Compared list</a></li>
          </ul>
          
          <div className="right-area grow pos-rel">
            <div className="mb-10 flex start wrap">
              <div className="ck-button">
                <label>
                  <input hidden type="checkbox" name="orders-variation" />
                  <span>Cancelled</span>
                </label>
              </div>
              <div className="ck-button">
                <label>
                  <input hidden type="checkbox" name="orders-variation" />
                  <span>Cash on delivery</span>
                </label>
              </div>
              <div className="ck-button">
                <label>
                  <input hidden type="checkbox" name="orders-variation" />
                  <span>Card payment</span>
                </label>
              </div>
              <div className="ck-button">
                <label>
                  <input hidden type="checkbox" name="orders-variation" />
                  <span>Paid</span>
                </label>
              </div>
              <div className="ck-button">
                <label>
                  <input hidden type="checkbox" name="orders-variation" />
                  <span>Unpaid</span>
                </label>
              </div>
            </div>
    
            <div>
              <div className="order__card mb-15">
                <div className="flex sided b-b ptb-10 plr-20 plr-sm-15 block-xs">
                  <div>
                    <a href="/user/order/1448" className="block">
                      Order <span className="link-color">#PnPcMHVB11</span>
                    </a>
                    <span className="color-lite f-9">Placed on 11:42 pm, 28 Oct, 24</span>
                  </div>
                  <div>
                    <a href="/user/order/1448" className="link-color mt-xs-5">Manage order</a>
                  </div>
                </div>
                
                <div className="flex sided ptb-10 plr-20 plr-sm-15">
                  <div className="flex grow gap-15">
                    <div className="w-80x">
                      <a href="/product/stylish-coffee-cup-and-saucer/87675450" className="img-wrapper w-100">
                        <img
                          alt="Stylish coffee cup and saucer"
                          title="Stylish coffee cup and saucer"
                          height="50"
                          width="50"
                          className="lazy-img"
                          src={c9}
                          data-loaded="true"
                          style={{ opacity: 1 }}
                        />
                      </a>
                    </div>
                    <div className="flex grow sided block-xs">
                      <div>
                        <h5>
                          <a href="/product/stylish-coffee-cup-and-saucer/87675450" title="Stylish coffee cup and saucer">
                            Stylish coffee cup and saucer
                          </a>
                        </h5>
                      </div>
                      <div className="flex start">
                        <h5 className="mr-20 mr-sm-15">
                          <span className="color-lite f-9 mr-5">Qty</span> 1
                        </h5>
                        <h5>
                          <span className="color-lite f-9 mr-5">Price</span> <span>৳1,100</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="flex sided block-xs b-t ptb-10 plr-20 plr-sm-15 pos-rel">
                  <p className="mr-15">
                    <span className="color-lite f-8 mr-5">Shipping status</span> <span>Pending</span>
                  </p>
                  <div className="flex sided">
                    <p>
                      <span className="color-lite f-8 mr-5">Payment status</span> <span className="mr-5">Unpaid</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flow-hidden"></div>
          </div>
        </div>
      </div>
    );
};

export default UserOrder;