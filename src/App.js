import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ContactScreen from "./pages/ContactScreen";
import AboutScreen from "./pages/AboutScreen";
import ShopScreen from "./pages/ShopScreen";
import Header from "./component/Header";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="/shop" element={<ShopScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
