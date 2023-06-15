import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import "./CategoryPages.css";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { CARD_ROUTE } from "../constRoute/consts";

function DropdownButton({ handleFloorsFilter, handleGaragesFilter }) {
  // Код для DropdownButton
  const [menuOpenFloors, setMenuOpenFloors] = useState(false);
  const oneFloors = 1;
  const twoFloors = 2;
  const threeFloors = 3;

  const handleMenuToggleFloors = () => {
    setMenuOpenFloors(!menuOpenFloors);
  };

  const handleFloorsSelect = (floors) => {
    setMenuOpenFloors(false);
    handleFloorsFilter(floors);
  };


  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleMenuToggleFloors}>
        <p className="text_dropdown">Этажи</p>
        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0.961529L9.04163 8.27674C8.64746 8.69112 7.98668 8.69112 7.59252 8.27674L1 1.34614" stroke="black" strokeLinecap="round"/>
        </svg>
      </button>
      {menuOpenFloors && (
        <div className="dropdown-menu">
          <button onClick={() => handleFloorsSelect(oneFloors)}>{oneFloors}</button>
          <button onClick={() => handleFloorsSelect(twoFloors)}>{twoFloors}</button>
          <button onClick={() => handleFloorsSelect(threeFloors)}>{threeFloors}</button>
        </div>
      )}

    </div>
  );
}

function DropdownButtonGarages({ handleGaragesFilter }) {
  // Код для DropdownButtonGarages
  const [menuOpenGarages, setMenuOpenGarages] = useState(false);
  const noGarages = 0;
  const oneGarage = 1;
  const twoGarages = 2;

  const handleMenuToggleGarages = () => {
    setMenuOpenGarages(!menuOpenGarages);
  };

  const handleGaragesSelect = (garages) => {
    setMenuOpenGarages(false);
    handleGaragesFilter(garages);
  };


  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleMenuToggleGarages}>
        <p className="text_dropdown">Гаражи</p>
        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0.961529L9.04163 8.27674C8.64746 8.69112 7.98668 8.69112 7.59252 8.27674L1 1.34614" stroke="black" strokeLinecap="round"/>
        </svg>
      </button>
      {menuOpenGarages && (
        <div className="dropdown-menu">
          <button onClick={() => handleGaragesSelect(noGarages)}>Нет</button>
          <button onClick={() => handleGaragesSelect(oneGarage)}>1</button>
          <button onClick={() => handleGaragesSelect(twoGarages)}>2</button>
        </div>
      )}

    </div>
  );
}

const fetchData = async () => {
  try {
    // Код для fetchData
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
    axios.defaults.headers.common['Content-Type'] = 'text/html; charset=utf-8';
    const response = await axios.get('https://terned.loca.lt/api/house');
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
        const response = await axios.get('https://terned.loca.lt/api/house');
        setData(response.data.rows);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [floorsFilter, setFloorsFilter] = useState(0);
  const [garagesFilter, setGaragesFilter] = useState(0);
  const [projects, setProjects] = useState([]);

  const handleFloorsFilter = (floors) => {
    setFloorsFilter(floors);
  };

  const handleGaragesFilter = (garages) => {
    setGaragesFilter(garages);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://terned.loca.lt/api/house/filters?floors=${floorsFilter}&garages=${garagesFilter}`
      );
      setProjects(response.data);
    };

    if (floorsFilter !== null || garagesFilter !== null) {
      fetchData();
    }
  }, [floorsFilter, garagesFilter]);

  return (
    <div className="main_container_category">
      <Header />
      <h1 className="txt_catalog">КАТАЛОГ ПРОЕКТОВ</h1>
      <div className="dropdown_buttons_container">
        <DropdownButton handleFloorsFilter={handleFloorsFilter} />
        <DropdownButtonGarages handleGaragesFilter={handleGaragesFilter} />
      </div>

      <div className="m_c_container">
        {data.map((item) => (
          <div className="container_card_category" key={item.id}>
            {item.img_title !== null && (
              <Link className="first_card_category" to={CARD_ROUTE}>
                <img
                  className="img_img_title"
                  src={`https://terned.loca.lt/${item.img_title}`}
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
