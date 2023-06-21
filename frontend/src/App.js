import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter basename="/" >
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
