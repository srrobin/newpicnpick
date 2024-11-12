import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import User from "../assets/user.png"
const Menubar = () => {
    return (
        <header className="no-banner">
        <div className="header-sticky">
            <div className="container__fluid flex pos-rel">
            
            {/* Left area with logo */}
            <div className="left-area">
                <a href="/" aria-current="page" className="logo nuxt-link-exact-active nuxt-link-active">
                <img
                    src="https://www.picnpick.com/uploads/header_logo-1714203692-3.png"
                    alt="Site Logo"
                    height="40"
                    width="139"
                />
                </a>
            </div>
            
            {/* Search bar */}
            <form className="search-input grow margin-y-nav mx-h-30x-xs">
                <input type="text" placeholder="Search picnpick" className="mx-h-30x-xs" />
                <button aria-label="submit search" type="submit" className="flex mx-h-30x-xs">
                {/* <i className="icon search-icon"></i> */}
                Search
                </button>
            </form>
            
            {/* Right area with My Account and Cart */}
            <div className="right-area flex gap-15 right">
            <div className="dropdown">
            <button className="btn xs__display dropdown-toggle custom-dropdown " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span  className="hide-xs"> My Account </span> 

            <img src={User}
                height="50" width="50"  
                className="hide block-xs mx-w-28x "
                alt='use'
            />
            <MdKeyboardArrowDown  style={{ fontSize:"20px"}} className='icon arrow-down black'/>

            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/user/order">Orders</Link></li>
              <li><Link className="dropdown-item" to="/login">Wish List</Link></li>
              <li><Link className="dropdown-item" to="/login">Compared List</Link></li>
              <li><Link className="dropdown-item" to="/login">Vouchers </Link></li>
            </ul>
          </div>
                <Link to="/cart" className="cart-btn flex pos-rel h-40x gap-2">
                <BsCart3 />
                <span className="title">Cart</span>
                </Link>
            </div>
            </div>

            {/* Bottom navigation links */}
            <div className="bottom-area text-nowrap">
            <div className="container__fluid">
                <div className="flex sided">
                <div>
                    <NavLink to="/" aria-current="page">
                    <span>Home</span>
                    </NavLink>
                    <NavLink to="/products"><span>Products</span></NavLink>
                    <NavLink to="/categories"><span>Categories</span></NavLink>
                    <NavLink to="/brands"><span>Brands</span></NavLink>
                    <NavLink to="/flash-sale"><span>Hot Deals</span></NavLink>
                </div>
                <div>
                    <NavLink to="/track-order"><span>Track Order</span></NavLink>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>

    );
};

export default Menubar;