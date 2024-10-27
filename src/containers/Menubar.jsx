import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from 'react-router-dom';
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
            <form className="search-input grow mx-h-30x-xs">
                <input type="text" placeholder="Search picnpick" className="mx-h-30x-xs" />
                <button aria-label="submit search" type="submit" className="flex mx-h-30x-xs">
                <i className="icon search-icon"></i>
                Search
                </button>
            </form>
            
            {/* Right area with My Account and Cart */}
            <div className="right-area flex gap-15 right">
            <div className="dropdown">
            <button className="btn  dropdown-toggle custom-dropdown " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              My Account <MdKeyboardArrowDown />
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Orders</a></li>
              <li><a className="dropdown-item" href="/">Wish List</a></li>
              <li><a className="dropdown-item" href="/">Compared List</a></li>
              <li><a className="dropdown-item" href="/">Vouchers </a></li>
            </ul>
          </div>
                <a href="/cart" className="cart-btn flex pos-rel h-40x gap-2">
                <BsCart3 />
                <span className="title">Cart</span>
                </a>
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
                    <NavLink to="/"><span>Track Order</span></NavLink>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>

    );
};

export default Menubar;