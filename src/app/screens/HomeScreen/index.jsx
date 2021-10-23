import React from 'react';
import OwnerImg from '../../../../photos/7.jpg';
import FirstMainImg from '../../../../photos/2.jpg';
import SecondMainImg from '../../../../photos/8.jpg';
import ThirdMainImg from '../../../../photos/10.jpg';
import ThirdBigImg from '../../../../photos/1.jpg';
import ReviewerImg from '../../../../images/Ellipse 1.jpg';
import ChevronRight from '../../../../images/24/arrows/chevron-right.svg';
import Calling from '../../../../images/24/call/call-calling.svg';
import Delivery from '../../../../images/24/shopping/delivery.svg';
import Discount from '../../../../images/24/shopping/discount.svg';



const HomeScreen = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="big-screen-wrapper animated fadeIn">
                    <div className="big-screen-wrapper__half">
                        <div className="big-screen-wrapper__half__big-wrapper">
                            <div className="big-screen-wrapper__half__big-wrapper__image"><img src={FirstMainImg} /></div>
                            <div className="big-screen-wrapper__half__big-wrapper__content">
                                <h1>Мы разводим собак декоративных пород</h1>
                                <p>На нашем сайте вы сможете познакомиться с нашими питомцами и их родословными</p>
                                <a href=""><div className="standart-button">ВЫБРАТЬ ПИТОМЦА</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="big-screen-wrapper__half">

                        <div className="big-screen-wrapper__half__mini-wrapper">
                            <div className="big-screen-wrapper__half__mini-wrapper__dog-box">
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__image"><img src={SecondMainImg} /></div>
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__content">
                                    <h1>Производители</h1>
                                    <p>элегантная и миловидная собака, славящаяся своей необычной кудрявой шерстью.</p>
                                </div>
                            </div>

                            <div className="big-screen-wrapper__half__mini-wrapper__dog-box">
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__image"><img src={ThirdMainImg} /></div>
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__content">
                                    <h1>Щенки</h1>
                                    <p>элегантная и миловидная собака, славящаяся своей необычной кудрявой шерстью.</p>
                                </div>
                            </div>
                        </div>

                        <div className="big-screen-wrapper__half__mini-wrapper mini-wrapper-margin dog-box__shadow">
                            <iframe src="https://www.youtube.com/embed/sPZkHaKCNFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>


            </div>



            <div className="about-owner__wrapper animated fadeIn">

                <div className="about-owner__wrapper__content-box">
                    <h1>Илона<br />Ткачук</h1>
                    <h2>ДИРЕКТОР ПИТОМНИКА</h2>
                    <p>Меня зовут Илона Ткачук, я являюсь владельцем питомника ADEZA KENNEL. Наш питомник был образован в 2010 году. Мы занимаемся профессиональным разведением собак декоративных пород Бивер, Биро, Йоркширский терьер (разных окрасов), Мальтезе, Пудель Фантом. Мы занимаемся профессиональным разведением собак декоративных пород Бивер, Биро, Йоркширский терьер (разных окрасов), Мальтезе, Пудель Фантом.</p>
                    <a href=""><div className="standart-button">УЗНАТЬ БОЛЬШЕ</div></a>
                </div>
                <div className="about-owner__wrapper__photo-box">
                    <img src={OwnerImg} />
                </div>
            </div>



            <div className="about-dogs__wrapper animated fadeIn">
                <div className="about-dogs__wrapper__photo-box">
                    <img src={ThirdBigImg} />
                </div>
                <div className="about-dogs__wrapper__content-box">
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.</p>
                </div>

            </div>


            <div className="preferences-wrapper animated fadeIn">

                <div className="preferences-wrapper__box light-brown first">
                    <div className="preferences-wrapper__box-image"><img src={Discount} /></div>
                    <h2>Низкие<br />цены</h2>
                    <p>Мы предлагаем самые низкие и приятные цены на рынке по предоставлению услуг</p>
                </div>

                <div className="preferences-wrapper__box light-red preference-center__margin second">
                    <div className="preferences-wrapper__box-image"><img src={Delivery} /></div>
                    <h2>Доставка по всему миру</h2>
                    <p>Мы предлагаем самые низкие и приятные цены на рынке по предоставлению услуг, связанных с получением военного билета</p>
                </div>

                <div className="preferences-wrapper__box dark-brown third">
                    <div className="preferences-wrapper__box-image"><img src={Calling} /></div>
                    <h2>Помощь и консультации</h2>
                    <p>Мы предлагаем самые низкие и приятные цены на рынке по предоставлению услуг, связанных с получением военного билета</p>
                </div>
            </div>



            <div className="review_wrapper animated fadeIn">

                <div className="review_wrapper__box">
                    <div className="review_wrapper__box__reviewer">
                        <div className="review_wrapper__box__reviewer-color"></div>
                        <div className="review_wrapper__box__reviewer-photo"><img src={ReviewerImg} /></div>
                        <div className="review_wrapper__box__reviewer-name"><h2>Анастасия Федорова</h2><span>@anastas_f2000</span></div>
                    </div>
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.  </p>
                </div>

                <div className="review_wrapper__box">
                    <div className="review_wrapper__box__reviewer">
                        <div className="review_wrapper__box__reviewer-color"></div>
                        <div className="review_wrapper__box__reviewer-photo"><img src={ReviewerImg} /></div>
                        <div className="review_wrapper__box__reviewer-name"><h2>Анастасия Федорова</h2><span>@anastas_f2000</span></div>
                    </div>
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.  </p>
                </div>

                <div className="review_wrapper__box">
                    <div className="review_wrapper__box__reviewer">
                        <div className="review_wrapper__box__reviewer-color"></div>
                        <div className="review_wrapper__box__reviewer-photo"><img src={ReviewerImg} /></div>
                        <div className="review_wrapper__box__reviewer-name"><h2>Анастасия Федорова</h2><span>@anastas_f2000</span></div>
                    </div>
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.  </p>
                </div>

            </div>

            <div className="more-reviews-button">Больше отзывов о  нас <img src={ChevronRight} /></div>
        </div>
    )
}

export default HomeScreen