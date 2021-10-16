import React from 'react';
import Logo from '../../../../images/adeza_white 2.svg';
import LogoInstagram from '../../../../images/logo-instagram.svg';
import LogoVk from '../../../../images/logo-vk.svg';
import LogoFacebook from '../../../../images/logo-facebook.svg';
import RussianFlag from '../../../../images/image 3.svg';
import EnglishFlag from '../../../../images/image 2.svg';
import MenuBurger from '../../../../images/menu.svg';

const Header = () => {
    return (
        <div className="header-wrapper animated fadeInDown">
            <div className="header-wrapper__menu-and-language">
                <div className="menu-burger"><a href=""><img src={MenuBurger} /></a></div>
                <div className="language"><img src={RussianFlag} /><span>Русский</span>
                    <div className="choose-lan-wrapper">
                        <div className="language"><a href=""><img src={RussianFlag} /><span>Русский</span></a></div>
                        <div className="language"><a href=""><img src={EnglishFlag} /><span>English</span></a></div>
                    </div>
                </div>
            </div>
            <div className="header-wrapper__logo">
                <span>ADEZA</span>
                <img src={Logo} />
                <span>KENNEL</span>
            </div>
            <div className="header-wrapper__social-networks">
                <div className="networks">
                    <a href=""><img src={LogoInstagram} /></a>
                    <a href=""><img src={LogoVk} /></a>
                    <a href=""><img src={LogoFacebook} /></a>
                </div>
            </div>
        </div>
    )
}

export default Header