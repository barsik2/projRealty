import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../../constRoute/consts";
import '../Catalog/Catalog.css';
// import allProject from './image-allProject.png';


function DropdownButton() {
    const [menuOpenSquare, setMenuOpenSquare] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpenSquare(!menuOpenSquare);
    };
    ///////////

    const [menuOpenRooms, setMenuOpenRooms] = useState(false);

    const handleMenuToggleRooms = () => {
        setMenuOpenRooms(!menuOpenRooms);
    };
    ////////

    const [menuOpenFloors, setMenuOpenFloors] = useState(false);

    const handleMenuToggleFloors = () => {
        setMenuOpenFloors(!menuOpenFloors);
    };
    //////

    const [menuOpenStyle, setMenuOpenStyle] = useState(false);

    const handleMenuToggleStyle = () => {
        setMenuOpenStyle(!menuOpenStyle);
    };
    /////

    const [menuOpenPrice, setMenuOpenPrice] = useState(false);

    const handleMenuTogglePrice = () => {
        setMenuOpenPrice(!menuOpenPrice);
    };

    return (
        <div className="dropdown_menu_block">
           <div className="dropdown">
                <button className="dropdown-button" onClick={handleMenuToggle}>
                    <p className="text_dropdown">Площадь</p>
                    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0.961529L9.04163 8.27674C8.64746 8.69112 7.98668 8.69112 7.59252 8.27674L1 1.34614" stroke="black" stroke-linecap="round"/>
                    </svg>
                </button>
                {menuOpenSquare && (
                    <div className="dropdown-menu">
                        <p href="#item1">Малая</p>
                        <p href="#item2">Средняя</p>
                        <p href="#item3">Большая</p>
                    </div>
                )}
            </div>

            <div className="dropdown">
            <button className="dropdown-button" onClick={handleMenuToggleRooms}>
                <p className="text_dropdown">Комнаты</p>
                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.961529L9.04163 8.27674C8.64746 8.69112 7.98668 8.69112 7.59252 8.27674L1 1.34614" stroke="black" stroke-linecap="round"/>
                </svg>
            </button>
            {menuOpenRooms && (
                <div className="dropdown-menu">
                    <p href="#item1">Комната 1</p>
                    <p href="#item2">Комната 2</p>
                    <p href="#item3">Комната 3</p>
                </div>
            )}
            </div>

            <div className="dropdown">
            <button className="dropdown-button" onClick={handleMenuToggleFloors}>
                <p className="text_dropdown">Этажи</p>
                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.961529L9.04163 8.27674C8.64746 8.69112 7.98668 8.69112 7.59252 8.27674L1 1.34614" stroke="black" stroke-linecap="round"/>
                </svg>
            </button>
            {menuOpenFloors && (
                <div className="dropdown-menu">
                    <p href="#item1">Этаж 1</p>
                    <p href="#item2">Этаж 2</p>
                    <p href="#item3">Этаж 3</p>
                </div>
            )}
            </div>

            <div className="dropdown">
            <button className="dropdown-button" onClick={handleMenuToggleStyle}>
                <p className="text_dropdown">Стиль</p>
                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.961529L9.04163 8.27674C8.64746 8.69112 7.98668 8.69112 7.59252 8.27674L1 1.34614" stroke="black" stroke-linecap="round"/>
                </svg>
            </button>
            {menuOpenStyle && (
                <div className="dropdown-menu">
                    <p href="#item1">Стиль 1</p>
                    <p href="#item2">Стиль 2</p>
                    <p href="#item3">Стиль 3</p>
                </div>
            )}
            </div>

            <div className="dropdown">
            <button className="dropdown-button" onClick={handleMenuTogglePrice}>
                <p className="text_dropdown">Цена</p>
                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.961529L9.04163 8.27674C8.64746 8.69112 7.98668 8.69112 7.59252 8.27674L1 1.34614" stroke="black" stroke-linecap="round"/>
                </svg>
            </button>
            {menuOpenPrice && (
                <div className="dropdown-menu">
                    <p href="#item1">150000-300000</p>
                    <p href="#item2">300000-450000</p>
                    <p href="#item3">450000-600000</p>
                </div>
            )}
            </div>

            <button className="btn_search"><p className="text_btn_search">Найти</p></button>
        </div>

    );
}

const images = [
    { id:1, image: '/image-allProject.png', width: 700, height: 380 },
    { id: 2, image: '/image-card-comfort.png', width: 400, height: 380 },
    { id: 3, image: '/image-card-compact.png', width: 400, height: 380 },
    { id:4, image: '/image-card-bernhouse.png', width: 400, height: 380 },
    { id:5, image: '/image-card-mansard.png', width: 400, height: 380 },
    { id:6, image: '/image-card-brick.png', width: 400, height: 380 },
    { id:7, image: '/image-card-modern.png', width: 400, height: 380 },
    { id:8, image: '/image-card-classic.png', width: 400, height: 380 },
    { id:9, image: '/image-card-two.png', width: 400, height: 380 },
    { id:10, image: '/image-card-one.png', width: 400, height: 380 },
  ];


const Catalog = () => {

    return (
        <div className="catalog_block">
            <h1 className="text_catalog">КАТАЛОГ НЕДВИЖИМОСТИ</h1>

            <DropdownButton />

                <div className="main_main_con">
                    <div className="container">
                        <Link to={CATEGORY_ROUTE} key={images[0].id} className="card_allProject">
                                <img className="img_card_allProject" src={images[0].image} alt="Card" />
                        </Link>

                        <Link to={CATEGORY_ROUTE} key={images[1].id} className="card_comfort">
                            <img className="img_card_comfort" src={images[1].image} alt="Card" />
                        </Link>
                        <Link to={CATEGORY_ROUTE} key={images[2].id} className="card_compact">
                            <img className="img_card_compact" src={images[2].image} alt="Card" />
                        </Link>

                        <Link to={CATEGORY_ROUTE} key={images[3].id} className="card_bernhouse">
                            <img className="img_card_bernhouse" src={images[3].image} alt="Card" />
                        </Link>
                        <Link to={CATEGORY_ROUTE} key={images[4].id} className="card_mansard">
                            <img className="img_card_mansard" src={images[4].image} alt="Card" />
                        </Link>
                        <Link to={CATEGORY_ROUTE} key={images[5].id} className="card_brick">
                            <img className="img_card_brick" src={images[5].image} alt="Card" />
                        </Link>

                        <Link to={CATEGORY_ROUTE} key={images[6].id} className="card_modern">
                            <img className="img_card_modern" src={images[6].image} alt="Card" />
                        </Link>
                        <Link to={CATEGORY_ROUTE} key={images[7].id} className="card_classic">
                            <img className="img_card_classic" src={images[7].image} alt="Card" />
                        </Link>
                        <Link to={CATEGORY_ROUTE} key={images[8].id} className="card_two">
                            <img className="img_card_two" src={images[8].image} alt="Card" />
                        </Link>
                        <Link to={CATEGORY_ROUTE} key={images[9].id} className="card_one">
                            <img className="img_card_one" src={images[9].image} alt="Card" />
                        </Link>

                    </div>
                </div>


                <div className="block_btn_sees">
                    <button className="btn_sees">Смотреть еще</button>
                </div>

        </div>
    );
};

export default Catalog;
