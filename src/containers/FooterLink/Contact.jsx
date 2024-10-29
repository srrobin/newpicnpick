import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { LiaPhoneSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";

const Contact = () => {
    return (
        <div className='containers'>
        <Breadcrumb />

        <div className='contact_area'>
            <div className='contact__title'>Love to hear from you</div>
            <p className="contact__sub">Feel free to contact us. We will get back to as soon as we can.</p>

            <div className="flex">
                <div className="contact-form">
                <form>
                    <div className="flex">
                    <div className="input-wrap">
                        <label>Name</label>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div className="input-wrap">
                        <label>Email</label>
                        <input type="text" placeholder="Your email" />
                    </div>
                    </div>
                    <div className="input-wrap">
                    <label>Subject</label>
                    <input type="text" placeholder="Subject" />
                    </div>
                    <div className="input-wrap">
                    <label>Message</label>
                    <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="flex j-end m-0">
                    <button aria-label="Submit" type="submit" className="ajax-btn primary-btn plr-30 plr-sm-15">
                        Submit
                    </button>
                    </div>
                </form>
                </div>
                <div className="contact-info pos-rel">
                <div className="flex">
                    <span>
                      <LiaPhoneSolid className="icon phone-icon"/>
                    </span>
                    <div>
                    <div className="contactinfo_title">Phone</div>
                    <a href="tel:+8801313588800">+880 1313-588800</a>
                    </div>
                </div>
                <div className="flex">
                    <span>
                    <TfiEmail className="icon email-icon"/>
                    </span>
                    <div>
                    <div className="contactinfo_title">Email</div>
                    <a href="mailto:picnpickbd@gmail.com">picnpickbd@gmail.com</a>
                    </div>
                </div>
                <div className="flex">
                    <span>
                    <TfiLocationPin  className="icon location-icon"/>
                    </span>
                    <div>
                    <div className="contactinfo_title">Address</div>
                    <p style={{color:"#121", lineHeight:"1.8"}}>66/3, Senpara Parbata, Mirpur-10, Dhaka-1216</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Contact;