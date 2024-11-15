import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ProductCardNoBorder from '../components/ProductCardNoBorder';

const Products = () => {
    return (
        <>
            <div className="detail-menu product-page-detail-menu">
                <div className="container__fluid">
                    <div className="list-heading flex sided">
                    <p className="hide-sm">
                        Showing 1 to 30 of 89 results
                        <span>
                        for
                        <span className="bold">"Discover"</span>
                        </span>
                    </p>
                    <div className="flex gap__5">
                        <span className="hide-sm">Sort by</span>
                        <div className="custom-dropdown sort-dropdown left">
                        <div className="dropdown">
                        <button className="btn  dropdown-toggle custom-dropdown " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Featured <MdKeyboardArrowDown />
                        </button>
                        <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/">Price low to high</Link></li>
                        <li><Link className="dropdown-item" to="/">Price high to low</Link></li>
                        <li><Link className="dropdown-item" to="/">Avg. customer review</Link></li>
                        </ul>
                    </div>
                        </div>
                        <button
                        aria-label="submit"
                        className="filter-btn flex outline-btn plr-20"
                        style={{ display: 'none' }}
                        >
                        Filter
                        <i className="icon black arrow-up"></i>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div  className="container__fluid mtb-20 mtb-sm-15">
               <div className='product-list-page'>
                    <div className="left-area">
                    <div className="layer"></div>
                    <div className="sticky">
                        {/* <div className="close-btn-wrapper">
                        <button aria-label="submit">Close</button>
                        </div> */}
                    
                        <div className="sidebar">
                        <div className="category-wrapper">
                            <ul className="table-tree">
                            {[
                                { href: "/all/mens-wear", title: "Men's Wear" },
                                { href: "/all/mens-shoes", title: "Men's Shoes" },
                                { href: "/all/womans-wear", title: "Woman's Wear" },
                                { href: "/all/womans-shoes", title: "Woman's Shoes" },
                                { href: "/all/beauty--personal-care", title: "Beauty & Personal Care" },
                                { href: "/all/kids--toys", title: "Kids & Toys" },
                                { href: "/all/kitchen--dining", title: "Kitchen & Dining" },
                                { href: "/all/home--living", title: "Home & Living" },
                                { href: "/all/furniture--dcor-", title: "Furniture & Décor" },
                                { href: "/all/health--exercise", title: "Health & Exercise" },
                                { href: "/all/gadgets", title: "Gadgets" },
                                { href: "/all/home-appliances", title: "Home Appliances" }
                            ].map((item, index) => (
                                <li key={index} className="tree-node">
                                <span className="node-data">
                                    <a href={item.href} title={item.title}>{item.title}</a>
                                </span>
                                <ul></ul>
                                </li>
                            ))}
                            </ul>
                        </div>

                        <div className="sidebar-section mt-xs-5 mb-xs-10" style={{ marginTop: '15px' }}>
                            <h4 className="title">Price</h4>
                            <button aria-label="submit" disabled className="clear-btn mb-10">Any price</button>
                            <div className="price-search flex" style={{ flexDirection: 'column' }}>
                            <div className="input-wrap" style={{ width: '100%' }}>
                                <div className="input-text">
                                <span>৳</span>
                                <input type="number" placeholder="Min" />
                                </div>
                            </div>
                            <div className="input-wrap" style={{ width: '100%' }}>
                                <div className="input-text">
                                <span>৳</span>
                                <input type="number" placeholder="Max" />
                                </div>
                            </div>
                            <button aria-label="submit" className="outline-btn plr-10" style={{ width: '100%' }}>Go</button>
                            </div>
                        </div>

                        <div className="sidebar-section star-filter mt-xs-10 mb-xs-10" style={{ marginTop: '15px' }}>
                            <h4 className="title">Customer reviews</h4>
                            {/* <button aria-label="submit" disabled className="clear-btn">Clear</button> */}
                            {[20, 40, 60, 80].map((width, i) => (
                            <button key={i} aria-label="submit" style={{ display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
                                <span title={`${i + 1} out of 5`} className="rating-stars">
                                <span>☆☆☆☆☆</span>
                                <span className="rating" style={{ width: `${width}%` }}>★★★★★</span>
                                <span style={{ color: 'black', paddingLeft: '25px' }}>& up</span>
                                </span>
                            </button>
                            ))}
                        </div>

                        <div className="sidebar-section mt-xs" style={{ marginTop: '10px' }}>
                            <h4 className="title mb-xs-5">Brands</h4>
                            <div className="collapsible">
                            {[
                                { id: "brand-9442200", label: "Run Leather" },
                                { id: "brand-9442201", label: "Addidas" },
                                { id: "brand-9442202", label: "H&M" },
                                { id: "brand-9442203", label: "Rolex" },
                                { id: "brand-9442204", label: "Apple" },
                                { id: "brand-9442205", label: "Gucci" },
                                { id: "brand-9442209", label: "Gillette" },
                                { id: "brand-9442211", label: "Nescafe" },
                                { id: "brand-9442213", label: "Chinese" }
                            ].map((brand, index) => (
                                <label key={index} htmlFor={brand.id} className="block mtb-10">
                                <input type="checkbox" id={brand.id} name="brand" value={brand.id} style={{marginRight:"5px"}} />
                                {brand.label}
                                </label>
                            ))}
                            </div>
                            <button aria-label="Show/Hide" className="link mt-15">Show all</button>
                        </div>

                        <div className="sidebar-section">
                            <h4 className="title">Collections</h4>
                            <div>
                            {[
                                { id: "collection-1", label: "Products" },
                                { id: "collection-2", label: "Trending products" },
                                { id: "collection-3", label: "Top selling products" }
                            ].map((collection, index) => (
                                <label key={index} htmlFor={collection.id} className="block mtb-10">
                                <input type="checkbox" id={collection.id} value={collection.id} style={{marginRight:"5px"}} />
                                {collection.label}
                                </label>
                            ))}
                            </div>
                        </div>

                        <div className="sidebar-section">
                            <h4 className="title">Shipping Options</h4>
                            <label htmlFor="cb-1" className="block mtb-10">
                            <input type="checkbox" id="cb-1" name="shipping" value="1" style={{marginRight:"5px"}} />
                            Bangladesh
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="main-content">
                    <div className="pos-rel">
                        <p className="hide block-sm ml-10 ml-xs-5 mb-10">
                        Showing 1 to 30 of 89 results <span className="bold">"Discover"</span>
                        </p>

                        <div className="tile-container products__product-page"> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div> 
                            <div className='singleproduct__area'>
                             <ProductCardNoBorder cardBg="cardWhite" />
                            </div>
                        </div>
                    </div>
               </div>
               </div>

            </div>
        </>
    );
};

export default Products;