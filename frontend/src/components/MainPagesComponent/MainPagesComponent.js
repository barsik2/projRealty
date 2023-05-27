import React from "react";
import { Link } from "react-router-dom";
import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../../constRoute/consts";
import '../../pages/MainPages.css';

const MainPagesComponent = () => {
    return (
        <div className="lending">
            <div className="main_page">
                <div className="header">
                    <div className="main_header">
                        <Link className="main_header_link" to={HOME_ROUTE}>Главная</Link>
                    </div>
                    <div className="category_header">
                        <Link className="category_header_link" to={CATEGORY_ROUTE}>Категории</Link>
                    </div>
                    <div className="about_header">
                        <Link className="about_header_link" to={ABOUTE_ROUTE}>О нас</Link>
                    </div>
                </div>

                <div className="body_main_page">
                    <p className="text_realty">
                        ТЕРРИТОРИЯ НЕДВИЖИМОСТИ
                    </p>
                    <p className="text_realty_low">
                        Найди себе место на все случаи жизни
                    </p>

                    <button className="btn_saw_catalog">
                        Смотреть каталог
                    </button>
                </div>

            </div>



        </div>
    );
};

export default MainPagesComponent;
