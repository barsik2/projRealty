import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../constRoute/consts";

const Footer = () => {
  return (
    <div className="main_footer">
        <div className="content_footer">
            <div>
                <h2 className="txt_h2">Каталог</h2>
                <p className="txt_inf">Дома и учатки</p>
                <p className="txt_inf">Коттеджи</p>
            </div>

            <div>
                <h2 className="txt_h2">Наши проекты</h2>
                <p className="txt_inf">Готовые планировки</p>
                <p className="txt_inf">Работы</p>
                <p className="txt_inf">Отзывы</p>
            </div>

            <div>
                <h2 className="txt_h2">Контакты</h2>
                <p className="txt_inf">+7-800-555-35-35</p>
                <p className="txt_inf">terned@mail.ru</p>
            </div>

            <div>
                <h2 className="txt_h2">Другое</h2>
                <p className="txt_inf">Полезные решения</p>
                <p className="txt_inf">Документы</p>
            </div>
        </div>

        <hr className="line_horizontal" />

        <p className="addr">Санкт-Петербург, ул. Романова 327, 3 этаж</p>

        <div className="img_logo">
            <img src="/img-logo-site.svg" alt="logo" />
        </div>

    </div>
  );
};

export default Footer;
