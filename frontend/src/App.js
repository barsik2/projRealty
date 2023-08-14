import React, { useEffect, useRef } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { ModalProvider } from 'src/shared/lib/modals/model';

import AppRouter from './components/AppRouter';

import 'src/shared/styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef("");

  useEffect(() => {
    // Проверяем, что переход произошел на новую страницу
    if (pathname !== prevPathRef.current) {
      // Проверяем, что ссылка содержит якорь
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Прокручиваем страницу до нужного блока
          element.scrollIntoView({ behavior: "smooth" });
        }
      }  } else {
        // Если нет якоря, прокручиваем страницу вверх
        window.scrollTo({ top: 0, behavior: "smooth" });
}

    prevPathRef.current = pathname;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop />
        <AppRouter />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
