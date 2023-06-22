import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import "./CategoryPages.css";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const fetchData = async (filter) => {
  try {
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
    axios.defaults.headers.common['Content-Type'] = 'text/html; charset=utf-8';
    const response = await axios.get(`http://195.24.67.222:5000/api/house/filters?garage=${filter.garage}&floors=${filter.floor}&tent=${filter.tent}&rooms=${filter.rooms}&price_min=${filter.priceFrom}&price_max=${filter.priceTo}&size_min=${filter.sizeFrom}&size_max=${filter.sizeTo}`);

    const filteredData = response.data.rows.filter(item => item.style.includes(filter.style));

    return filteredData;
  } catch (error) {
    console.error(error);
  }
};

const CategoryPages = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    garage: '', // гараж
    floor: '', // этажи
    tent: '', // навес
    style: '', // стиль
    rooms: '', // комнаты
    priceFrom: '', // минимальное значение цены
    priceTo: '', // максимальное значение цены
    sizeFrom: '', // минимальное значение площади
    sizeTo: '', // максимальное значение площади
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'priceRange') {
      const [priceFrom, priceTo] = value.split('-').map((str) => str.trim());
      setFilter({ ...filter, priceFrom, priceTo });
    } else if (name === 'sizeRange') {
      const [sizeFrom, sizeTo] = value.split('-').map((str) => str.trim());
      setFilter({ ...filter, sizeFrom, sizeTo });
    } else {
      setFilter({ ...filter, [name]: value });
    }
  };

  const handleSearch = async () => {
    const newData = await fetchData(filter);
    setData(newData);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
        axios.defaults.headers.common['Content-Type'] = 'text/html; charset=utf-8';
        const response = await axios.get('http://195.24.67.222:5000/api/house');
        setData(response.data.rows);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main_container_category">
      <Header />
      <h1 className="txt_catalog">КАТАЛОГ ПРОЕКТОВ</h1>

      <div className="filter_container">

      <Form className="form_filter">

      <Form.Group controlId="priceRange">
        <Form.Label>Цена</Form.Label>
        <Form.Control
          type="text"
          name="priceRange"
          placeholder="Цена"
          value={`${filter.priceFrom} - ${filter.priceTo}`}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="sizeRange">
      <Form.Label>Площадь</Form.Label>
        <Form.Control
          type="text"
          name="sizeRange"
          placeholder="Площадь"
          value={`${filter.sizeFrom} - ${filter.sizeTo}`}
          onChange={handleChange}

        />
      </Form.Group>

        <Form.Group controlId="garage">
            <Form.Label></Form.Label>
            <Form.Control as="select" name="garage" value={filter.garage} onChange={handleChange}>
              <option value="">Гараж</option>
              <option value="0">Нет</option>
              <option value="1">Один</option>
              <option value="2">Два</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="floor">
          <Form.Label></Form.Label>
            <Form.Control as="select" name="floor" value={filter.floor} onChange={handleChange}>
              <option value="">Этажи</option>
              <option value="1">1 этаж</option>
              <option value="2">2 этажа</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="tent">
          <Form.Label></Form.Label>
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
          <Form.Label></Form.Label>
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
          <Form.Label></Form.Label>
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


          <Form.Group className="filter_btn">
              <Button className="filter_one" variant="primary" onClick={handleSearch}>
                Найти
              </Button>
          </Form.Group>

        </Form>
      </div>

      <div className="m_c_container">
          {data && data.map((item) => (
            <div className="container_card_category" key={item.id}>
              {item.img_title !== null && (
                <Card className="img_img_title">
                  <Link to={`/category/${item.id}`}>
                    <Card.Img variant="top" src={`http://195.24.67.222:5000/${item.img_title}`} alt="card" />
                  </Link>
                  <Card.Body className="background_card">
                    <Card.Title className="text_card">{item.name}</Card.Title>
                    <Card.Text className="text_card">
                      {item.short_description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )}
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPages;
