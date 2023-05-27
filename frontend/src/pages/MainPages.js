import React from "react";
import { Link } from "react-router-dom";
import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../constRoute/consts";
import './MainPages.css';
import MainPagesComponent from "../components/MainPagesComponent/MainPagesComponent";

const MainPages = () => {
    return (
        <div>
            <MainPagesComponent />
        </div>


    );
};

export default MainPages;
