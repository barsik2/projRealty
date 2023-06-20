import React from "react";
import './About.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { CATEGORY_ROUTE } from "../constRoute/consts";

const About = () => {
    return (
        <div className="about_container">
            <Header />
                <div className="header_about">
                    <h1 className="txt_about">О НАС</h1>
                </div>
                <div className="con_con">
                    <div className="txt_about_con">
                        <h1 className="txt_about_h2">
                            БОЛЕЕ 100 ДИЗАЙНЕРСКИХ ПРОЕКТОВ
                        </h1>
                        <p className="txt_about_p">
                            Наш успех основан на надежности, экологичности и безопасности каждого сантиметра интерьера, а также на продуманном дизайне. Мы не скрываем наших принципов и можем предложить 100 проектов домов, которые подходят под любой возраст и стиль жизни. Наш каталог поможет каждому человеку найти идеальный вариант жилья, соответствующий его личным потребностям и предпочтениям. Мы строим абсолютно проекты из ЛЮБЫХ материалов.
                        </p>
                        <h1 className="txt_about_h2">
                            ГАРАНТИЯ СООТВЕТСТВИЯ СТРОИТЕЛЬНЫМ НОРМАМ
                        </h1>
                        <p className="txt_about_p">
                            Территория недвижимости внимательно следят за соблюдением действующего российского законодательства - СНиПам и СП, чтобы наша документация была актуальной. Это гарантирует надежность конструкций, исключающую опасность для безопасной эксплуатации, и уверенность клиентов в качестве нашей работы.
                        </p>
                        <h1 className="txt_about_h2">
                            ВНОСИМ ИЗМЕНЕНИЯ В ПРОЕКТ
                        </h1>
                        <p className="txt_about_p">
                            Менеджеры проектов Территория Недвижимости всегда готовы выслушать и учесть индивидуальные пожелания клиентов и адаптировать проект к особенностям участка и образа жизни. Мы предоставляем консультации на каждом этапе строительства, от момента приобретения проекта до завершения работ. При необходимости мы всегда готовы внести изменения в проект, чтобы соответствовать требованиям заказчика.
                        </p>
                        <h1 className="txt_about_h2">
                            ГАРАНТИЯ ОРИГИНАЛЬНОСТИ ПРОЕКТНОЙ ДОКУМЕНТАЦИИ
                        </h1>
                        <p className="txt_about_p">
                            Наше бюро предоставляет чистую и законную документацию, которая может быть использована в изменениях в будущей планировке.
                        </p>
                    </div>
                    <div className="div_img_about">
                        <img className="img_img_about" src="/image-about.png" alt="img_about" />
                    </div>
                </div>
                <Link to={CATEGORY_ROUTE}>
                  <div className="block_btn_sees">
                      <button className="btn_sees">Смотреть каталог</button>
                  </div>
                </Link>
            <Footer />
        </div>
    );
};

export default About;
