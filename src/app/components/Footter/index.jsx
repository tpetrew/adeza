import React from 'react';
import Logo from '../../../../images/adeza_white 2.svg';
import LogoInstagram from '../../../../images/logo-instagram.svg';
import LogoVk from '../../../../images/logo-vk.svg';
import LogoFacebook from '../../../../images/logo-facebook.svg';
import { Link } from 'react-router-dom'; 

const Footter = () => {
    return (
        <div>
            <div className="footter-wrapper">
                <div className="footter-wrapper__content-box flex-start">
                    <span>8 (999) 123-12-32</span>
                </div>
                <div className="footter-wrapper__content-box flex-between">
                    <Link to="/puppies">Щенки</Link>
                    <Link to="/producers">Производители</Link>
                </div>
                <div className="footter-wrapper__content-box flex-center">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </div>
                <div className="footter-wrapper__content-box flex-between">
                    <Link to="/reviews">Отзывы</Link>
                    <Link to="/news">Новости</Link>
                </div>
                <div className="footter-wrapper__content-box flex-end">
                    <div className="networks">
                        <a href=""><img src={LogoInstagram} /></a>
                        <a href=""><img src={LogoVk} /></a>
                        <a href=""><img src={LogoFacebook} /></a>
                    </div>
                </div>
            </div>

            <div className="copyright-box">
                <div className="copyright-box__content flex-end">Copyright © “Adeza Kennel” 2020</div>
                <div className="vertical-line"></div>
                <div className="copyright-box__content flex-start">All rights reserved <span>Russia</span></div>
            </div>


            <div className="developed-by">Developed by <span><a href="http://tpetrew.moscow"> tpetrew.moscow</a></span></div>
        </div>
    )
}

export default Footter