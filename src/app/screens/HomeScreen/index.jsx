import React from 'react';

const HomeScreen = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="big-screen-wrapper animated fadeIn">
                    <div className="big-screen-wrapper__half">
                        <div className="big-screen-wrapper__half__big-wrapper">
                            <div className="big-screen-wrapper__half__big-wrapper__image"><img src="images/Rectangle 40.png" /></div>
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
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__image"><img src="images/Rectangle 48.png" /></div>
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__content">
                                    <h1>Пудель</h1>
                                    <p>элегантная и миловидная собака, славящаяся своей необычной кудрявой шерстью.</p>
                                </div>
                            </div>

                            <div className="big-screen-wrapper__half__mini-wrapper__dog-box">
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__image"><img src="images/Rectangle 41.png" /></div>
                                <div className="big-screen-wrapper__half__mini-wrapper__dog-box__content">
                                    <h1>Мальтийская болонка</h1>
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
                    <h1>Мария<br />Мальтезовна</h1>
                    <h2>ДИРЕКТОР ПИТОМНИКА</h2>
                    <p>Меня зовут Мария Мальтезовна, я являюсь владельцем питомника ADEZA KENNEL. Наш питомник был образован в 2010 году. Мы занимаемся профессиональным разведением собак декоративных пород Бивер, Биро, Йоркширский терьер (разных окрасов), Мальтезе, Пудель Фантом. Мы занимаемся профессиональным разведением собак декоративных пород Бивер, Биро, Йоркширский терьер (разных окрасов), Мальтезе, Пудель Фантом.</p>
                    <a href=""><div className="standart-button">УЗНАТЬ БОЛЬШЕ</div></a>
                </div>
                <div className="about-owner__wrapper__photo-box">
                    <img src="images/Rectangle 24.jpg" />
                </div>
            </div>



            <div className="about-dogs__wrapper animated fadeIn">
                <div className="about-dogs__wrapper__photo-box">
                    <img src="images/Rectangle 49.jpg" />
                </div>
                <div className="about-dogs__wrapper__content-box">
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.</p>
                </div>

            </div>


            <div className="preferences-wrapper animated fadeIn">

                <div className="preferences-wrapper__box light-brown first">
                    <div className="preferences-wrapper__box-image"><img src="images/24/shopping/discount.svg" /></div>
                    <h2>Низкие<br />цены</h2>
                    <p>Мы предлагаем самые низкие и приятные цены на рынке по предоставлению услуг</p>
                </div>

                <div className="preferences-wrapper__box light-red preference-center__margin second">
                    <div className="preferences-wrapper__box-image"><img src="images/24/shopping/delivery.svg" /></div>
                    <h2>Доставка по всему миру</h2>
                    <p>Мы предлагаем самые низкие и приятные цены на рынке по предоставлению услуг, связанных с получением военного билета</p>
                </div>

                <div className="preferences-wrapper__box dark-brown third">
                    <div className="preferences-wrapper__box-image"><img src="images/24/call/call-calling.svg" /></div>
                    <h2>Помощь и консультации</h2>
                    <p>Мы предлагаем самые низкие и приятные цены на рынке по предоставлению услуг, связанных с получением военного билета</p>
                </div>
            </div>



            <div className="review_wrapper animated fadeIn">

                <div className="review_wrapper__box">
                    <div className="review_wrapper__box__reviewer">
                        <div className="review_wrapper__box__reviewer-color"></div>
                        <div className="review_wrapper__box__reviewer-photo"><img src="images/Ellipse 1.jpg" /></div>
                        <div className="review_wrapper__box__reviewer-name"><h2>Анастасия Федорова</h2><span>@anastas_f2000</span></div>
                    </div>
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.  </p>
                </div>

                <div className="review_wrapper__box">
                    <div className="review_wrapper__box__reviewer">
                        <div className="review_wrapper__box__reviewer-color"></div>
                        <div className="review_wrapper__box__reviewer-photo"><img src="images/Ellipse 1.jpg" /></div>
                        <div className="review_wrapper__box__reviewer-name"><h2>Анастасия Федорова</h2><span>@anastas_f2000</span></div>
                    </div>
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.  </p>
                </div>

                <div className="review_wrapper__box">
                    <div className="review_wrapper__box__reviewer">
                        <div className="review_wrapper__box__reviewer-color"></div>
                        <div className="review_wrapper__box__reviewer-photo"><img src="images/Ellipse 1.jpg" /></div>
                        <div className="review_wrapper__box__reviewer-name"><h2>Анастасия Федорова</h2><span>@anastas_f2000</span></div>
                    </div>
                    <p>Все производители нашего питомника имеют отличные родословные, они титулованные, являются многократными победителями выставок в России и во многих странах мира.  </p>
                </div>

            </div>

            <div className="more-reviews-button">Больше отзывов о  нас <img src="images/24/arrows/chevron-right.svg" /></div>
        </div>
    )
}

export default HomeScreen