import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
