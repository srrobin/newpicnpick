import React from 'react';
import barndLogo from "../assets/footer_logo-1714203696-7.png"
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import { PiEyeSlashThin } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {
    return (
        <div className='login__area login__section'>
            <div className='brand__logo'>
                 <img 
                   src={barndLogo}
                   alt="brand logo"
                   height="55"
                   width="219"
                   className=""
                 />
            </div>

            <div className='user__form'>
               <div className='userform__title'>Welcome to picnpick</div>
               <form>
                <div className="input-wrap">
                    <label>Email</label>
                    <div className="icon-input">
                        <TfiEmail className="icon email-icon"/> 
                    <input type="text" placeholder="Your email" />
                    </div>
                </div>

                <div className="input-wrap">
                    <label>Password</label>
                    <div className="icon-input right-icon">
                        <CiLock className="icon lock-icon"/> 
                    <input type="password" placeholder="Your password" className="invalid" />
                    <i className="icon eye-close-icon">
                        <PiEyeSlashThin className="icon eye-close-icon"/> 
                    </i>
                    </div>
                </div>

                <div className="no-space flex sided">
                    <a href="/" className="link color-lite">
                    Forgot password
                    </a>
                    <button aria-label="Submit" type="submit" className="ajax-btn primary-btn plr-30 plr-sm-15">
                    Submit
                    </button>
                </div>

                <div className="mt-20 mt-sm-15 mb-10 create__account" >
                    Don't have an account?
                    <a href="/register">
                    Create an account
                    </a>
                </div>
                </form>
                <div className="or__text">
                    OR
                </div>
                <div className="flex flex-xs gap-10">
                    <button aria-label="submit" className="flex flex-1  primary-btn google-btn">
                        <FcGoogle  className="icon google-icon" /> 
                        Login with Google
                    </button>
                </div>
                <p className="mt-20 mt-sm-15 f-9 plr-40">
                    By continuing, you agree to the{' '}
                    <a href="/" className="link">
                        Privacy policy
                    </a>
                    .
                    </p>
            </div>
            <p className="ptb-15 mt-30 mt-sm-15 b-t text-center">
            © 2024 - picnpick All rights reserved.
            </p>
        </div>
    );
};

export default LoginPage;