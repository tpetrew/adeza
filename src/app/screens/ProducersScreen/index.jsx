import React from 'react'
import ChevronRight from '../../../../images/24/arrows/chevron-right.svg';
import DogImg from '../../../../photos/12.jpg';

import Malteze from '../../../../photos/9.jpg';
import Puddle from '../../../../photos/3.jpg';

const ProducersScreen = () => {
    return (
        <div>  

            

            <div className="title animated fadeIn">
                Наши производители / Мальтезе
            </div>

            <div className="dogs-wrapper animated fadeIn">

                <div className="dogs-wrapper__dog-card dog-card-bottom first">
                    <div className="dogs-wrapper__dog-card__image-box">
                        <img src={DogImg} />
                        <a href="">
                            <div className="button-bottom">
                                ПОСМОТРЕТЬ ПОТОМСТВО
                                <img src={ChevronRight} />
                            </div>
                        </a>
                    </div>
                    <div className="dogs-wrapper__dog-card__image-content">
                        <h1>JEREMY PRINCE CHARMING LAVISTA</h1>
                        <div className="some-info-box">
                            <div className="mini-info">Пол:<span>Девочка</span></div>
                            <div className="mini-info">Порода:<span>Бивер</span></div>
                            <div className="mini-info">Дата рождения:<span>25 октября 2018 г.</span></div>
                        </div>
                        <a href=""><div className="dogs-wrapper__dog-card__look-button">Родословная</div></a>
                        <div className="win-list">
                            Юный Чемпион России<br />
                            Чемпион России<br />
                            Чемпион Беларуси<br />
                            Чемпион РКФ * 5<br />
                            Чемпион Евразии 2018 года<br />
                            Чемпион Турции<br />
                            Гранд Чемпион Турции<br />
                            Победитель (лучший представитель породы) <br />Международная выставка собак Россия 2018 года<br />
                            Юный Чемпион России<br />
                            Чемпион России<br />
                            Чемпион Беларуси<br />
                            Чемпион РКФ * 5<br />
                            Чемпион Евразии 2018 года<br />
                            Чемпион Турции<br />
                            Гранд Чемпион Турции<br />
                        </div>
                    </div>
                </div>

                {/* 2 */}

                <div className="dogs-wrapper__dog-card dog-card-bottom first">
                    <div className="dogs-wrapper__dog-card__image-box">
                        <img src={DogImg} />
                        <a href="">
                            <div className="button-bottom">
                                ПОСМОТРЕТЬ ПОТОМСТВО
                                <img src={ChevronRight} />
                            </div>
                        </a>
                    </div>
                    <div className="dogs-wrapper__dog-card__image-content">
                        <h1>JEREMY PRINCE CHARMING LAVISTA</h1>
                        <div className="some-info-box">
                            <div className="mini-info">Пол:<span>Девочка</span></div>
                            <div className="mini-info">Порода:<span>Бивер</span></div>
                            <div className="mini-info">Дата рождения:<span>25 октября 2018 г.</span></div>
                        </div>
                        <a href=""><div className="dogs-wrapper__dog-card__look-button">Родословная</div></a>
                        <div className="win-list">
                            Юный Чемпион России<br />
                            Чемпион России<br />
                            Чемпион Беларуси<br />
                            Чемпион РКФ * 5<br />
                            Чемпион Евразии 2018 года<br />
                            Чемпион Турции<br />
                            Гранд Чемпион Турции<br />
                            Победитель (лучший представитель породы) <br />Международная выставка собак Россия 2018 года<br />
                            Юный Чемпион России<br />
                            Чемпион России<br />
                            Чемпион Беларуси<br />
                            Чемпион РКФ * 5<br />
                            Чемпион Евразии 2018 года<br />
                            Чемпион Турции<br />
                            Гранд Чемпион Турции<br />
                        </div>
                    </div>
                </div>

                {/* 2-3 */}

                {/* 3 */}

                <div className="dogs-wrapper__dog-card dog-card-bottom first">
                    <div className="dogs-wrapper__dog-card__image-box">
                        <img src={DogImg} />
                        <a href="">
                            <div className="button-bottom">
                                ПОСМОТРЕТЬ ПОТОМСТВО
                                <img src={ChevronRight} />
                            </div>
                        </a>
                    </div>
                    <div className="dogs-wrapper__dog-card__image-content">
                        <h1>JEREMY PRINCE CHARMING LAVISTA</h1>
                        <div className="some-info-box">
                            <div className="mini-info">Пол:<span>Девочка</span></div>
                            <div className="mini-info">Порода:<span>Бивер</span></div>
                            <div className="mini-info">Дата рождения:<span>25 октября 2018 г.</span></div>
                        </div>
                        <a href=""><div className="dogs-wrapper__dog-card__look-button">Родословная</div></a>
                        <div className="win-list">
                            Юный Чемпион России<br />
                            Чемпион России<br />
                            Чемпион Беларуси<br />
                            Чемпион РКФ * 5<br />
                            Чемпион Евразии 2018 года<br />
                            Чемпион Турции<br />
                            Гранд Чемпион Турции<br />
                            Победитель (лучший представитель породы) <br />Международная выставка собак Россия 2018 года<br />
                            Юный Чемпион России<br />
                            Чемпион России<br />
                            Чемпион Беларуси<br />
                            Чемпион РКФ * 5<br />
                            Чемпион Евразии 2018 года<br />
                            Чемпион Турции<br />
                            Гранд Чемпион Турции<br />
                        </div>
                    </div>
                </div>

                {/* 3 -- */}
            </div>


            <div className="choose-type-wrapper">
                <div className="choose-type-element">
                    <div className="choose-type-image">
                        <img src={Puddle} />
                    </div>
                    <div className="choose-type-text">Пудели</div>
                </div>
                <div className="choose-type-element">
                    <div className="choose-type-image">
                        <img src={Malteze} />
                    </div>
                    <div className="choose-type-text">Мальтезе</div>
                </div>
            </div>
        </div>
    )
}

export default ProducersScreen