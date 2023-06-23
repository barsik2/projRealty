import React from "react";
// import { Link } from "react-router-dom";
// import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../../constRoute/consts";
import '../../pages/MainPages.css';
import Main from "../Main/Main";
import Catalog from "../Catalog/Catalog";
import Submit from "../Submit/Submit";
import OurWork from "../OurWork/OurWork";
import Footer from "../Footer/Footer";

const MainPagesComponent = () => {
  return (
    <div className="main_main_comp">
      <Main />
      <Catalog />
      <Submit />
      <OurWork />
      <Footer />
    </div>
  );
};

export default MainPagesComponent;
