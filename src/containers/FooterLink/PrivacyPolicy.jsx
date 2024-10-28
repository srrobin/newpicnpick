import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const PrivacyPolicy = () => {
    return (
        <div className='containers gap-20 '>
        <Breadcrumb />

        <div className='about_area' style={{marginTop:"0px"}}>
            <div className='about__title' style={{ fontSize:"25px", fontWeight:"800"}}>Privacy Policy</div>
            <div className='about__desc'>
            Effective Date: 13-06-24
            </div>
            <div className='about__desc'>
            This Privacy Policy describes how picnpick collects, uses, and discloses information about you when you use our website, picnpick.com and the services offered through the site (the "Services"). By accessing or using the Site or Services, you agree to this Privacy Policy.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}> 1. Information We Collect</strong> <br/>
                Personal Information**: When you use our site or services, we may collect personal information such as your name, email address, shipping address, billing information, and phone number.  
                Usage Information**: We automatically collect information about how you interact with our site and services, such as your IP address, browser type, operating system, pages viewed, and the referring website.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}> 2. Use of Information </strong> <br/>
                We may use the information we collect for various purposes, including:
providing and improving our Services;
processing and fulfilling orders;
communicating with you about your account and orders;
personalizing your experience on our Site;
analyzing trends and user behavior;
protecting against fraud and unauthorized transactions.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}>3. Disclosure of Information </strong> <br/>
                We may share your information with third parties in the following circumstances:
with service providers who assist us in providing the Services;
with third-party vendors for marketing and advertising purposes;
in response to a subpoena, court order, or other legal request;
to protect our rights, property, or safety, or the rights, property, or safety of others.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}> 4. Your Choices</strong> <br/>
                You may choose not to provide certain information, but this may limit your ability to use certain features of the Site or Services.
You may opt out of receiving promotional communications from us by following the instructions in those communications or by contacting us directly.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}>5. Security</strong> <br/>
                We take reasonable measures to protect your information from unauthorized access, use, or disclosure.

            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}>6. Children’s Privacy: </strong> <br/>
                Our Site and Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.
            </div>
            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}>7. Changes to this Privacy Policy: </strong> <br/>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
            </div>
            <div className='about__desc'>
                <strong style={{fontWeight:"600",color:"rgb(0, 102, 204)"}}>7. 
                8. Contact Us </strong> <br/>
                If you have any questions or concerns about this Privacy Policy, please contact us at [contact email].
            </div>
            <div className='about__desc'>
            This is a basic template and should be customized to fit the specific needs and practices of your e-commerce website. It's also advisable to have legal counsel review your Privacy Policy to ensure compliance with applicable laws and regulations.
            </div>

        </div>

    </div>
    );
};


export default PrivacyPolicy;