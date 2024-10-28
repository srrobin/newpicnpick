import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const About = () => {
    return (
        <div className='containers gap-20 '>
        <Breadcrumb />

        <div className='about_area'>
            <div className='about__title'>About picnpick?</div>
            <div className='about__desc'>
            Greetings from picnpick. These terms and conditions govern your access to and use of picnpick and all of its associated sub-areas, destinations, mobile applications, services, and equipment. We are an online commercial center. By using the site, you agree to be bound by these terms and conditions and declare that you understand and accept them. Your use of the site indicates that you accept these terms, and using the site constitutes acceptance of this User Agreement. picnpick is the owner and operator of this website. 
            And this is our official website link: <span style={{color: "rgb(0, 102, 204)"}}>https://www.picnpick.com</span>
            </div>
            <div className='about__desc'>
            The site retains the right to amend, modify, add to, or remove portions of these terms and conditions at any time and without prior notice. When changes are put on the site and no further notification is given, they are considered successful. Please review these terms and conditions regularly for updates, if it's not too much effort. When modifications to the Terms and Conditions of Use are presented, your continued use of the site indicates your acceptance of those changes. The orders are subject to availability of stock. If there is any problem with stock, then the order can be canceled at any time, irrespective of its duration. Also, if you are facing any trouble related to our product or have any issues, feel free to go to our contact page and claim your problem, We are always ready to solve any kind of issue by that time
            </div>
            <div className='about__desc'>
            The merchant selling the item or providing the administration records all expenses on the site in Bangladeshi Taka (BDT), including VAT. Items in your shopping cart will always reflect the most recent value displayed on the item detail page. If it's not too much trouble, take notice that this price can be different from what the item originally appeared to be worth when you placed it in your truck. Its value vanished at that time when you put it in your truck. Additionally, it's possible that an item's price will decrease between the time you put it in your bin and the time you purchase it.
            </div>
            <div className='about__desc'>
            Stay connected with picnpick and Happy Shopping!
            </div>
        </div>

    </div>
    );
};

export default About;