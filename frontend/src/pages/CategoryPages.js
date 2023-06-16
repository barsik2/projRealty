import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import "./CategoryPages.css";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { CARD_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../constRoute/consts";

const fetchData = async () => {
  try {
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
    axios.defaults.headers.common['Content-Type'] = 'text/html; charset=utf-8';
    const response = await axios.get('http://localhost:5000/api/house');
    return response.data.rows;
  } catch (error) {
    console.error(error);
  }
};

const CategoryPages = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/house');
        setData(response.data.rows);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [floors, setFloors] = useState('');

  const loadData = (floorsParam) => {
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
    axios.defaults.headers.common['Content-Type'] = 'text/html; charset=utf-8';
    axios.get(`http://localhost:5000/api/house/filters?floors=${floorsParam}`)
      .then(response => setData(response.data.rows))
      .catch(error => console.log(error));
  }

  const handleDropdownChange = (event) => {
    setFloors(event.target.value)
  }

  useEffect(() => {
    if (floors === '') {
      setData([]);
    } else {
      loadData(floors);
    }
  }, [floors]);

  return (
    <div className="main_container_category">
      <Header />
      <h1 className="txt_catalog">КАТАЛОГ ПРОЕКТОВ</h1>
      <div className='filters'>
        <select value={floors} onChange={handleDropdownChange}>
          <option value="">этажи</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="m_c_container">
        {data && data.map((item) => (
          <div className="container_card_category" key={item.id}>
            {item.img_title !== null && (
              <Link className="first_card_category" to={CARD_ROUTE}>
                <img
                  className="img_img_title"
                  src={`http://localhost:5000/${item.img_title}`}
                  alt="a"
                />
              </Link>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPages;
