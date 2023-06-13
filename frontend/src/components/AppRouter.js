import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import { ABOUTE_ROUTE, CARD_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../constRoute/consts";
import MainPages from "../pages/MainPages";
import About from "../pages/About";
import CategoryPages from "../pages/CategoryPages";
import NotFound from "../pages/NotFound";
import CardPages from "../pages/CardPages";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<MainPages />} />
            <Route path={ABOUTE_ROUTE} element={<About />} />
            <Route path={CATEGORY_ROUTE} element={<CategoryPages />} />
            <Route path={CARD_ROUTE} element={<CardPages />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
