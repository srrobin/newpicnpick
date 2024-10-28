import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const Faq = () => {
    return (
        <div className='containers gap-20 '>
        <Breadcrumb />

        <div className='about_area'>
            <div className='about__title'>Frequently asked questions <br/> Overview?</div>
            <div className='about__desc'>
            picnPick is a multi-vendor e-commerce CMS. The API is built with <strong>Laravel, and the</strong> admin panel and front end are built with <strong>Nuxtjs</strong>. For storing data, <strong>MySQL</strong> is being used. The performance of the site is super fast because of the advanced caching system. It is fully responsive and highly customizable. In the regular license, admin panel build files will not be found, which means you won't be able to customize any design of the admin panel. Frontend and API source code will be found in the package folder. You can customize the frontend and API as your requirements very easily. The admin panel source code will be found in the extended license. For any query, please contact our team for support at ...
            </div>
            <div className='about__desc'>
                <strong style={{fontWeight:"700"}}> Do we provide installation support to the users?</strong> <br/>
              Yes, we provide installation support to the users. Feel free to email us anytime.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"700"}}> Do we provide installation guides to users?</strong> <br/>
                Yes, we provide installation guides to the users with the packages.
            </div>

            <div className='about__desc'>
                <strong style={{fontWeight:"700"}}> How much time do we take to get back to the user?</strong> <br/>
                We reply to users as soon as possible.
            </div>
    
        </div>

    </div>
    );
};


export default Faq;