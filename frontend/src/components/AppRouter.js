import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ABOUTE_ROUTE,
  CARD_ROUTE,
  CATEGORY_ROUTE,
  HOME_ROUTE,
} from '../constRoute/consts';
import MainLayout from './layouts/MainLayout';

const Landing = lazy(() => import('src/pages/Landing'));
const NotFound = lazy(() => import('src/pages/NotFound'));
const About = lazy(() => import('src/pages/About'));
const Category = lazy(() => import('src/pages/CategoryPages'));
const Product = lazy(() => import('src/pages/Product'));
const Catalog = lazy(() => import('src/pages/Catalog'));
const Card = lazy(() => import('src/pages/CardPages'));

const AppRouter = () => {
  return (
    <MainLayout>
      <Suspense fallback={null}>
        <Routes>
          <Route path={HOME_ROUTE} element={<Landing />} />
          <Route path={CATEGORY_ROUTE} element={<Catalog />} />
          <Route path={ABOUTE_ROUTE} element={<About />} />
          <Route path={CARD_ROUTE} element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default AppRouter;
