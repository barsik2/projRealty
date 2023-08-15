import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { HOME, CARD, CATEGORY, ABOUT, SERVICES } from 'src/shared/config/routes';
import ScrollToTop from './ScrollToTop/ScrollToTop';

const Landing = lazy(() => import('src/pages/Landing'));
const NotFound = lazy(() => import('src/pages/NotFound'));
const AboutUs = lazy(() => import('src/pages/AboutUs'));
const Product = lazy(() => import('src/pages/Product'));
const Catalog = lazy(() => import('src/pages/Catalog'));
const Services = lazy(() => import('src/pages/Services'));

const AppRouter = () => {
  return (
    <MainLayout>
      <Suspense fallback={null}>
        <Routes>
          <Route path={HOME} element={<Landing />} />
          <Route path={CATEGORY} element={<Catalog />} />
          <Route path={ABOUT} element={<AboutUs />} />
          <Route path={CARD} element={<Product />} />
          <Route path={SERVICES} element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default AppRouter;
