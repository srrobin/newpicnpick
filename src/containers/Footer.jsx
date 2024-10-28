
import React from 'react';
import footerLogo from "../assets/footer_logo-1714203696-7.png";
import paymentMethod from "../assets/payment.svg";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import bgImage from "../assets/footer.svg";
import { MdOutlineSmartToy } from "react-icons/md";
import { GiSonicShoes } from "react-icons/gi";
import { GiHandBag } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';
const bgStyle = {
  backgroundColor: "#000",
  backgroundImage: `url(${bgImage})`,  
  backgroundRepeat: "repeat",
  backgroundSize: "28px 28px",
  color: "#c7c7c7",
  paddingBottom: "20px",
  paddingTop: "30px"
};

const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <div className='section'>
                <div className='containers'>
                    <div className='footer__top_area'>
                        <div className='footer__logo text-center'>
                            <a href='/' className="logo">
                                <img
                                    src={footerLogo}
                                    alt='footer logo'
                                    width="200"
                                    height="50"
                                    className=''
                                />
                            </a>
                        </div>
                        <div className='payment__method'>
                            <img
                                src={paymentMethod}
                                alt='payment methods'
                                width="330"
                                height="15"
                                className=''
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__area' style={bgStyle}>
                <div className='containers'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'> 
                                    Important Links
                                </div>
                                <div className='footer__link'>
                                    <Link to="/page/about">
                                    About                            
                                    </Link>
                                </div>
                                <div className='footer__link'>
                                <Link to="/page/faq">
                                Faq                            
                                </Link>   
                               </div>
                                <div className='footer__link'>
                                    <Link to="/page/contact">Contact</Link>
                                    
                                </div>
                                <div className='footer__link'>
                                <Link to="/page/help">Help</Link>
                                      
                                    </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'> About</div>
                                <div className='footer__link'> <Link to="/page/refund-policy">Refund Policy</Link></div>
                                <div className='footer__link'> <Link to="/page/privacy-policy">Privacy Policy</Link></div>
                                <div className='footer__link'> <Link to="/page/help">Help</Link></div>
                                <div className='footer__link'> <Link to="/page/sitemap">Sitemap</Link></div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'> Category</div>
                                <div className='footer__link'><MdOutlineSmartToy size={16} style={{ fill: '#ddd',marginRight:"8px" }}/> Kids & Toys</div>
                                <div className='footer__link'> <GiSonicShoes size={16} style={{ fill: '#ddd',marginRight:"8px" }}/> Formal Shoes</div>
                                <div className='footer__link'><GiHandBag size={16} style={{ fill: '#ddd',marginRight:"8px" }}/>Travel Bags & Backpacks </div>
                                <div className='footer__link'><FaTools size={16} style={{ fill: '#ddd',marginRight:"8px" }}/>Tools, DIY & Outdoors  </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'> Social</div>
                                <div className='footer__link'>
                                    <FaYoutube  size={16} style={{ fill: '#ED1F25',marginRight:"8px" }} />  YouTube
                                 </div>
                                <div className='footer__link'>
                                    <FaWhatsapp size={16} style={{ fill: 'green',marginRight:"8px" }}/>  Whatsapp
                                 </div>
                                <div className='footer__link'>
                                    <FaInstagram size={16}  style={{ fill: '#ED1F25',marginRight:"8px" }}/> Instagram
                                </div>
                                <div className='footer__link'>
                                    <FaFacebookF size={16}  style={{ fill: 'blue',marginRight:"8px" }}/> Facebook
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright__area text-center">
                        <div className="copyirgt__text">
                            © 2024 - picnpick All rights reserved. Developed by PnH IT Solution
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
