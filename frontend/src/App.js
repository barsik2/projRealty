import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { ModalProvider } from 'src/shared/lib/modals/model';

import AppRouter from './components/AppRouter';

import 'src/shared/styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
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
