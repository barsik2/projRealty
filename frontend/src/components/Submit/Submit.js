import React from "react";
import './Submit.css';
import { Link } from "react-router-dom";
import { CATEGORY_ROUTE } from "../../constRoute/consts";

const Submit = () => {
  return (
    <div className="main_container">
        <div className="content">
            <div className="content_txt_btn">
                <h1 className="text_submit">
                    ВЫБЕРИ ДОМ СВОЕЙ МЕЧТЫ
                </h1>
                <h1 className="text_submit_two">
                    И ПРОСНИСЬ В НЕМ УЖЕ
                </h1>
                <h1 className="text_submit_three">
                    ЗАВТРА
                </h1>
                <div className="btn_content">
                    <Link to={CATEGORY_ROUTE} className="btn_zayzvka">
                        Оставить заявку
                    </Link>
                </div>
            </div>

            {/* <div className="img_submit">
                <img className="img_submit_img" src="/image-Submit.png" alt="img_submit"/>
            </div> */}
        </div>


        <div className="plus">
            <h1 className="plus_text">ЧТО МЫ ПРЕДЛАГАЕМ</h1>
            <h1 className="text_plus_h2">Основные преимущества компании Территория Недвижимости</h1>
            <div className="plus_image">
                <div className="first_plus">
                    <img className="img_plus" src="/image-fix-count.png" alt="fix count" />
                    <img className="img_plus" src="/image-calendar.png" alt="fix count" />
                    <img className="img_plus" src="/image-worker.png" alt="fix count" />
                </div>
                <div className="second_plus">
                    <img className="img_plus" src="/image-projecting.png" alt="fix count" />
                    <img className="img_plus" src="/image-materials.png" alt="fix count" />
                    <img className="img_plus" src="/image-key.png" alt="fix count" />
                </div>
            </div>

        </div>


    </div>
  );
};

export default Submit;
