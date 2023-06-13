import React, {useState} from "react";
import Header from "../components/Header/Header";
import '../components/Header/Header.css';
import './CategoryPages.css';
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { CARD_ROUTE } from "../constRoute/consts";

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
        <div className="dropdown_menu_block_cat">
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
        </div>

    );
}

const CategoryPages = () => {
    return (
        <div className="main_container_category">
            <Header />
            <h1 className="txt_catalog">КАТАЛОГ ПРОЕКТОВ</h1>
            <DropdownButton />
            <div className="m_c_container">
                <div className="container_card_category">
                    <Link className="first_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t128.png" alt="card1" />
                    </Link>

                    <Link className="second_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t7.png" alt="card1" />
                    </Link>

                    <Link className="third_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t119.png" alt="card1" />
                    </Link>
                </div>

                <div className="container_card_category">
                    <Link className="four_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t128.png" alt="card1" />
                    </Link>

                    <Link className="five_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t7.png" alt="card1" />
                    </Link>

                    <Link className="six_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t119.png" alt="card1" />
                    </Link>
                </div>

                <div className="container_card_category">
                    <Link className="four_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t128.png" alt="card1" />
                    </Link>

                    <Link className="five_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t7.png" alt="card1" />
                    </Link>

                    <Link className="six_card_category" to={CARD_ROUTE}>
                        <img src="/image-card-t119.png" alt="card1" />
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CategoryPages;
