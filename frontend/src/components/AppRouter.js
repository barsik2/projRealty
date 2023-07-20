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
const Card = lazy(() => import('src/pages/CardPages'));

const AppRouter = () => {
  return (
    <MainLayout>
      <Suspense fallback={null}>
        <Routes>
          <Route path={HOME_ROUTE} element={<Landing />} />
          <Route path={ABOUTE_ROUTE} element={<About />} />
          <Route path={CATEGORY_ROUTE} element={<Category />} />
          <Route path={CARD_ROUTE} element={<Card />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default AppRouter;
