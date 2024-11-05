import React from 'react';
import c9 from "../assets/c3.png"
const OrderDetails = () => {
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
            <div>
              <div className="order__card mb-15">
              <div className="p-20 p-sm-15 pt-20">
  <div className="flex f-reverse sided block-md mb-30 mb-sm-15">
    <ul className="mx-w-400x order-details mb-md-15">
      <li>
        <span>Order</span> <span>#PnPyqF0I8</span>
      </li>
      <li>
        <span>Delivery status</span> <span>Pending</span>
      </li>
      <li>
        <span>Order method</span> <span>Cash on delivery</span>
      </li>
      <li>
        <span>Order date</span> <span>01:07 pm, 04 Nov, 24</span>
      </li>
      <li>
        <span>Order amount</span> <span>৳1,230</span>
      </li>
      <li>
        <span>Payment status</span> <span>Unpaid</span>
      </li>
    </ul>
    <p className="mx-w-400x lh-2 mr-15">
      <b>uyy</b>
      <span className="block">yty, Barisal, Bangladesh</span>
      <span className="block">Phone: yyyyyyyyyy</span>
    </p>
  </div>
  <div className="mb-15">
    <div className="order-status">
      <div className="status-item active">
        <span className="flex">
          <b>1</b>
        </span>
        <span className="f-9 bold status-str mtb-10">Pending</span>
      </div>
      <div className="status-item">
        <span className="flex">
          <b>2</b>
        </span>
        <span className="f-9 bold status-str mtb-10">Confirmed</span>
      </div>
      <div className="status-item">
        <span className="flex">
          <b>3</b>
        </span>
        <span className="f-9 bold status-str mtb-10">Picked up</span>
      </div>
      <div className="status-item">
        <span className="flex">
          <b>4</b>
        </span>
        <span className="f-9 bold status-str mtb-10">On the way</span>
      </div>
      <div className="status-item">
        <span className="flex">
          <b>5</b>
        </span>
        <span className="f-9 bold status-str mtb-10">Delivered</span>
      </div>
    </div>
  </div>
  <div className="flow-auto mtb-15">
    <table className="mn-w-600x no-bg w-100 mtb-0">
      <thead>
        <tr className="lite-bold">
          <th>Image</th>
          <th>Title</th>
          <th>Ship To</th>
          <th>Delivery Fee</th>
          <th>Quantity</th>
          <th>Bundle offer</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a
              href="/product/stylish-coffee-cup-and-saucer/87675450"
              className="img-wrap"
              title="Stylish coffee cup and saucer"
            >
              <img
                alt="Stylish coffee cup and saucer"
                title="Stylish coffee cup and saucer"
                height="50"
                width="50"
                className="lazy-img"
                src={c9}
              />
            </a>
          </td>
          <td className="mn-w-200x-md">
            <a
              href="/product/stylish-coffee-cup-and-saucer/87675450"
              className="mb-5 block"
              title="Stylish coffee cup and saucer"
            >
              Stylish coffee cup and saucer
            </a>
          </td>
          <td>Location</td>
          <td>৳130</td>
          <td>1</td>
          <td>৳0</td>
          <td>৳1,100</td>
          <td>৳1,100</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="flex right no-space">
    <ul className="mx-w-400x order-details order-price">
      <li>
        <span>Subtotal</span>
        <span className="semi-bold">৳1,100</span>
      </li>
      <li>
        <span>Shipping cost</span>
        <span className="semi-bold">৳130</span>
      </li>
      <li className="mb-0">
        <span>Total</span>
        <span className="semi-bold f-11">৳1,230</span>
      </li>
      <li className="pb-0 mb-0 j-end mt-15 mt-sm">
        <button aria-label="Cancel this order" className="outline-btn plr-30 plr-sm-15">
          Cancel this order
        </button>
      </li>
    </ul>
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

export default OrderDetails;