import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Game from './components/Game/Game';
import ContextProvider from "./utils/Context";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Game />
    <Footer />
  </ContextProvider>
);
