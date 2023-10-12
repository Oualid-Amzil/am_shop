import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import ContactScreen from "./pages/ContactScreen";
import AboutScreen from "./pages/AboutScreen";
import ShopScreen from "./pages/ShopScreen";
import LoveListScreen from "./pages/LoveListScreen";
import Header from "./component/Header";
import Footer from "./component/Footer";

import CartScreen from "./pages/CartScreen";
import ProductInfo from "./pages/ProductInfo";
import AuthScreen from "./pages/AuthScreen";

import "./App.css";

function App() {
  const showInfo = useSelector((state) => state.module.showInfo);
  const showAuth = useSelector((state) => state.module.showAuth);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      {showInfo && <ProductInfo />}
      {showAuth && <AuthScreen />}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="/shop" element={<ShopScreen />}></Route>
        {isAuthenticated && (
          <Route path="/lovelist" element={<LoveListScreen />}></Route>
        )}
        {isAuthenticated && (
          <Route path="/cart" element={<CartScreen />}></Route>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
