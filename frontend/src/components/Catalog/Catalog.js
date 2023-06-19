import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../../constRoute/consts";
import '../Catalog/Catalog.css';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const fetchData = async (filter) => {
    try {
      const response = await axios.get(`http://195.24.67.222:5000/api/house/filters?garage=${filter.garage}&floor=${filter.floor}&tent=${filter.tent}&style=${filter.style}&room=${filter.rooms}`);
      return response.data.rows;
    } catch (error) {
      console.error(error);
    }
  };

const images = [
    { id:1, image: '/image-allProject-card.svg'},
    { id: 2, image: '/image-card-comfort.png' },
    { id: 3, image: '/image-card-compact.png'},
    { id:4, image: '/image-card-bernhouse.png'},
    { id:5, image: '/image-card-mansard.png'},
    { id:6, image: '/image-card-brick.png'},
    { id:7, image: '/image-card-modern.png'},
    { id:8, image: '/image-card-classic.png'},
    { id:9, image: '/image-card-two.png'},
    { id:10, image: '/image-card-one.png'},
  ];


const Catalog = () => {

    const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    garage: '', // гараж
    floor: '', // этажи
    tent: '', // навес
    style: '', // стиль
    rooms: '', // комнаты
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSearch = async () => {
    const newData = await fetchData(filter);
    setData(newData);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://195.24.67.222:5000/api/house');
        setData(response.data.rows);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

    return (
        <div className="catalog_block">
            <h1 className="text_catalog">КАТАЛОГ НЕДВИЖИМОСТИ</h1>

            <div className="filter_container">

      <Form className="form_filter">
          <Form.Group controlId="garage">
            <Form.Control as="select" name="garage" value={filter.garage} onChange={handleChange}>
              <option value="">Гараж</option>
              <option value="1">Один</option>
              <option value="2">Два</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="floor">
            <Form.Control as="select" name="floor" value={filter.floor} onChange={handleChange}>
              <option value="">Этажи</option>
              <option value="1">1 этаж</option>
              <option value="2">2 этажа</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="tent">
            <Form.Control
              as="select"
              name="tent"
              value={filter.tent}
              onChange={handleChange}
            >
              <option value="">Навес</option>
              <option value="true">Есть</option>
              <option value="false">Нет</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="style">
            <Form.Control
              as="select"
              name="style"
              value={filter.style}
              onChange={handleChange}
            >
              <option value="">Стиль</option>
              <option value="Барнхаус">Барнхаус</option>
              <option value="Классический">Классический</option>
              <option value="Европейский">Европейский</option>
              <option value="Модерн">Модерн</option>
              <option value="Современные">Современный</option>
              <option value="Хай-тек">Хай-тек</option>
              <option value="Кубизм">Кубизм</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="rooms">
            <Form.Control
              as="select"
              name="rooms"
              value={filter.rooms}
              onChange={handleChange}
            >
              <option value="">Комнаты</option>
              <option value='4'>Четыре</option>
              <option value='5'>Пять</option>
              <option value='6'>Шесть</option>
              <option value='7'>Семь</option>
            </Form.Control>
          </Form.Group>

          <Link to={CATEGORY_ROUTE}>
            <Button variant="primary" onClick={handleSearch}>
                Найти
            </Button>
          </Link>

        </Form>
      </div>

                    <div className="container_cat_card">
                        <div className="div_card_allProject">
                            <Link to='/category' key={images[0].id} className="card_allProject">
                                <img className="img_card_allProject" src={images[0].image} alt="Card" />
                            </Link>
                        </div>

                        <div className="two_str" >
                            <div className="div_card_comfort">
                                <Link to='/category' key={images[1].id} className="card_comfort">
                                <img className="img_card_comfort" src={images[1].image} alt="Card" />
                            </Link>
                            </div>
                            <div className="div_card_compact">
                                <Link to='/category' key={images[2].id} className="card_compact">
                                    <img className="img_card_compact" src={images[2].image} alt="Card" />
                                </Link>
                            </div>
                        </div>


                        <div className="three_str">
                            <div className="div_card_bernhouse">
                                <Link to='/category' key={images[3].id} className="card_bernhouse">
                                    <img className="img_card_bernhouse" src={images[3].image} alt="Card" />
                                </Link>
                            </div>
                            <div className="div_card_mansard">
                                <Link to='/category' key={images[4].id} className="card_mansard">
                                <img className="img_card_mansard" src={images[4].image} alt="Card" />
                            </Link>
                            </div>
                            <div className="div_card_brick">
                                <Link to='/category' key={images[5].id} className="card_brick">
                                    <img className="img_card_brick" src={images[5].image} alt="Card" />
                                </Link>
                            </div>
                        </div>


                        <div className="four_str">
                           <div className="div_card_modern">
                                <Link to='/category' key={images[6].id} className="card_modern">
                                    <img className="img_card_modern" src={images[6].image} alt="Card" />
                                </Link>
                            </div>
                            <div className="div_card_classic">
                                <Link to='/category' key={images[7].id} className="card_classic">
                                    <img className="img_card_classic" src={images[7].image} alt="Card" />
                                </Link>
                            </div>
                            <div className="div_card_two">
                                <Link to='/category' key={images[8].id} className="card_two">
                                    <img className="img_card_two" src={images[8].image} alt="Card" />
                                </Link>
                            </div>
                            <div className="div_card_one">
                                <Link to='/category' key={images[9].id} className="card_one">
                                    <img className="img_card_one" src={images[9].image} alt="Card" />
                                </Link>
                            </div>
                        </div>
                    </div>

                <Link to={CATEGORY_ROUTE}>
                  <div className="block_btn_sees">
                      <button className="btn_sees">Смотреть еще</button>
                  </div>
                </Link>


        </div>
    );
};

export default Catalog;
