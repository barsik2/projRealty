import React from "react";
import '../Catalog/Catalog';
import '../../pages/MainPages.css';
import Header from "../Header/Header";

const Main = () => {

  const handleClick = () => {
    const content = document.querySelector('.catalog_block'); // находим контент на странице
    content.scrollIntoView({ behavior: 'smooth' }); // прокручиваем страницу до контента
  };

  return (
    <div className="lending">
      <div className="main_page">
        <Header />

        <div className="body_main_page">
          <p className="text_realty">
            ТЕРРИТОРИЯ
          </p>
          <p className="text_realty">
            НЕДВИЖИМОСТИ
          </p>
          <p className="text_realty_low">
            Найди себе место на все случаи жизни
          </p>
          <button className="btn_saw_catalog" onClick={handleClick}>
            Смотреть каталог
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
