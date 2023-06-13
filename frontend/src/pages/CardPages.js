import React, {useState} from "react";
import Header from "../components/Header/Header";
import '../components/Header/Header.css';
import '../components/Header/Header.css';
import './CategoryPages.css';
import Footer from "../components/Footer/Footer";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { CATEGORY_ROUTE } from "../constRoute/consts";
import './CardPages.css';
import { Button, Modal } from "react-bootstrap";

function ModalShow() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };
    return (
        <div>
          <button onClick={handleShowModal} className="btn_sees_card">Оставить заявку</button>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Оставить заявку</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal_form">
                    <h2 className="modal_name">ФИО</h2>
                    <input className="input_name" type="text" placeholder="Введите ФИО" />
                    <h2 className="modal_name">Номер телефона</h2>
                    <input className="input_name" type="text" placeholder="Введите номер телефона" />
                    <h2 className="modal_name">Почта</h2>
                    <input className="input_name" type="email" placeholder="Введите адрес электронной почты" />
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Закрыть
              </Button>
              <Button variant="primary" onClick={handleCloseModal}>
                Отправить заявку
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }


const CardPages = () => {


    const handleClick = () => {
        const content = document.querySelector('.txt_haracteristic_h1'); // находим контент на странице
        content.scrollIntoView({ behavior: 'smooth' }); // прокручиваем страницу до контента
      };

      const handleClickTwo = () => {
        const content = document.querySelector('.plan'); // находим контент на странице
        content.scrollIntoView({ behavior: 'smooth' }); // прокручиваем страницу до контента
      };

    return (
        <div className="main_body">
            <div className="main_container_card_pages">
                <Header />
                <div className="div_container">
                            <div className="header_card">
                                <Link className="btn_back" to={CATEGORY_ROUTE}>
                                    <img className="img_back" src="/image-btn-back.png" alt="back" />
                                    <p className="btn_text_catalog">Каталог</p>
                                </Link>
                                <div className="category_header_card">
                                    <p>T128</p>
                                </div>
                                <div className="about_header">
                                    <button className="about_header_link_har" onClick={handleClick}>
                                        <p className="btn_text_catalog">Характеристика</p>
                                    </button>
                                </div>
                                <div className="about_header">
                                    <button className="about_header_link_har" onClick={handleClickTwo}>
                                        <p className="btn_text_catalog">Планировка</p>
                                    </button>
                                </div>
                            </div>
                    <Carousel className="carousel_block">
                        <Carousel.Item>
                            <img src="/image-slider-one.png" alt="home1" />
                            <Carousel.Caption className="bg_txt">
                                <p className="txt_slider">
                                    T128,
                                    127м2
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
                </div>

                <div className="haracteristic">
                    <div className="block_one">
                        <h1 className="txt_haracteristic_h1">
                            Проект красивого одноэтажного дома с террасой
                        </h1>
                        <p className="txt_haracteristic_p">Задайте вопрос об этом проекте +7-800-35-35 или отправьте заявку</p>
                        <h1 className="txt_opis">Описание</h1>
                        <p className="txt_haracteristic_p">
                            Самый популярный проект дома в каталоге Территории Недвжимости.
                            Этот загородный коттедж обладает элегантным дизайном, сочетающим в экстерьере контрастную отделку светлым и темным кирпичом и большие окна, что в целом придает строению очень уютный вид. Изюминкой проекта является большая крытая терраса, на которой хозяева могут обустроить летнюю столовую или место для комфортного послеобеденного отдыха.

                            Жилая честь дома условно разделена на обеденную и спальную зоны. Первая, включает в себя просторный гостиный зал, соединенный с террасой и по-современному объединенный со столовой и кухней. Зал оборудован внутренним камином, который создает в помещении особую атмосферу домашнего очага, уюта и спокойствия.В спальной зоне, находящейся в левой половине коттеджа, архитекторы распланировали ванную комнату и четыре комфортабельные спальни, выходящие в общий холл, соединенный с прихожей.

                            Благодаря удачной планировке, включающей, в том числе, и помещение автономной котельной, этот дом пригоден для всесезонной эксплуатации и круглогодичного проживания семьи из четырех – пяти человек.

                            Если вы подыскиваете себе проект красивого дома с террасой, предлагаем Вам обратить внимание на эксклюзивный проект красивого одноэтажного дома с навесом для автомобиля и с большой крытой террасой T127 – авторскую работу архитекторов студии
                        </p>
                    </div>

                    <div className="block_two">
                        <img src="/image-count.png" alt="count"/>
                        <h1 className="txt_opis">Характеристики</h1>
                        <p className="txt_haracteristic_p">
                            Площадь дома: 127 м2
                        </p>
                        <p className="txt_haracteristic_p">
                            Количество комнат: 4
                        </p>
                        <p className="txt_haracteristic_p">
                            Гараж: 2 места
                        </p>
                        <p className="txt_haracteristic_p">
                            Длина: 12,4 м2
                        </p>
                        <p className="txt_haracteristic_p">
                            Ширина: 22,7 м2
                        </p>
                        <p className="txt_haracteristic_p">
                            Материалы стен: газобетон или пеноблов, кирпич, керамические блоки
                        </p>

                    </div>

                </div>

                <div className="plan">
                    <h1 className="txt_opis">План помещений</h1>
                    <div className="img_plan">
                        <img src="/image-t128-plan.png" alt="plan" />
                    </div>

                </div>

                <div className="block_btn_sees_card">
                    <ModalShow />
                </div>


                <Footer />
            </div>
        </div>

    );
};

export default CardPages;
