import React, {useState, useEffect} from "react";
import './CategoryPages.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useParams } from "react-router-dom";
import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../constRoute/consts";
import './CardPages.css';
import { Modal } from "react-bootstrap";
import axios from "axios";

function ModalShow({houseId}) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
      fullname: '',
      number: '',
      email: '',
      house_id: houseId
  });

  const handleShowModal = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
  };

  const handleChange = (event) => {
      setFormData({
          ...formData,
          [event.target.name]: event.target.value
      });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://195.24.67.222:5000/api/order', {
          ...formData,
          house_id: houseId // использование значения houseId из props
      })
          .then(response => {
              console.log(response);
              handleCloseModal();
          })
          .catch(error => {
              console.log(error);
          });
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
                  <form onSubmit={handleSubmit}>
                          <input name="fullname" value={formData.fullname} onChange={handleChange} className="input_name" type="text" placeholder="Введите ФИО" />
                          <input name="number" value={formData.number} onChange={handleChange} className="input_name" type="text" placeholder="Введите номер телефона" />
                          <input name="email" value={formData.email} onChange={handleChange} className="input_name" type="email" placeholder="Введите адрес электронной почты" />
                          <button className="btn_card_data" type="submit">Отправить заявку</button>
                      </form>
              </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }


const CardPages = () => {

    const { id } = useParams(); // Получение значения id из URL
    const [cardData, setCardData] = useState(null);
    const [formData, setFormData] = useState({
      fullname: '',
      number: '',
      email: '',
      house_id: id // передача значения id в состояние formData
    });

    useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get(`http://195.24.67.222:5000/api/house/${id}`);
            setCardData(response.data);
            setFormData({
              ...formData,
              house_id: response.data.id // обновление значения house_id при получении данных о доме
            });
          } catch (error) {
              console.error(error);
          }
      };
      fetchData();
  }, [id]);

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

            <div className="div_container">
                        <div className="header_card">
                            <Link className="btn_back" to={CATEGORY_ROUTE}>
                                <img className="img_back" src="/image-btn-back.png" alt="back" />
                                <p className="btn_text_catalog">Каталог</p>
                            </Link>
                            {cardData && (
                              <div className="category_header_card">
                                  <p>{cardData.name}</p>
                              </div>
                            )}
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
                        {cardData && (
                          <img className="img_slider" src={`http://195.24.67.222:5000/${cardData.img_title}`} alt="home1" />
                        )}
                        <Carousel.Caption className="bg_txt">
                          {cardData && (
                            <p className="txt_slider">
                                {cardData.name},
                                {cardData.size}м2
                            </p>
                          )}
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </div>

            <div className="haracteristic">
                <div className="block_one">
                  {cardData && (
                    <h1 className="txt_haracteristic_h1">
                      {cardData.short_description}
                    </h1>
                  )}

                    <p className="txt_haracteristic_p">Задайте вопрос об этом проекте +7-800-35-35 или отправьте заявку</p>
                    <h1 className="txt_opis">Описание</h1>
                    {cardData && (
                      <p className="txt_haracteristic_p">
                        {cardData.full_description}
                      </p>
                    )}
                </div>

                <div className="block_two">
                  {cardData && (
                      <div className="price_border">
                        <p className="txt_price">{cardData.price}₽</p>
                      </div>
                  )}
                    <h1 className="txt_opis">Характеристики</h1>
                    {cardData && (
                      <div>
                        <p className="txt_haracteristic_p">
                            {cardData.size} м2
                        </p>
                        <p className="txt_haracteristic_p">
                            Количество комнат: {cardData.rooms}
                        </p>
                        <p className="txt_haracteristic_p">
                            Гараж: {cardData.garage}
                        </p>
                        <p className="txt_haracteristic_p">
                            Длина: {cardData.length} м2
                        </p>
                        <p className="txt_haracteristic_p">
                            Ширина: {cardData.width} м2
                        </p>
                        <p className="txt_haracteristic_p">
                            Материалы стен: {cardData.material}
                        </p>
                      </div>
                    )
                    }

                </div>

            </div>

            <div className="plan">
                <h1 className="txt_opis">План помещений</h1>
                {cardData && (
                  <div className="img_plan">
                    <img className="img_img_plan" src={`http://195.24.67.222:5000/${cardData.img_plan1}`} alt="plan" />
                </div>
                )}
            </div>

            <div className="block_btn_sees_card">
            {cardData && (
              <ModalShow houseId={cardData.id} /> // передача значения id дома в компонент ModalShow
            )}
                {/* <ModalShow houseId={cardData.id} /> */}
            </div>
        </div>
    </div>
    );
};

export default CardPages;
