import React from "react";
import "../src/App.css";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../src/pages/ContactPage";
import HomePage from "../src/pages/HomePage";
import Header from "../src/components/Header";
//import RollsDirectoryPage from "../src/pages/RollsDirectoryPage";
import Footer from "../src/components/Footer";
//import RollsDetailPage from "../src/pages/RollsDetailPage";

//header contains navbar which should keep track of items in cart
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ProductDirectoryPage from "./pages/ProductDirectoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
//putting in the ProductDetailPage to pull out individual productId and comments

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/shop" element={<ProductDirectoryPage />} />

        <Route path="shop/:productId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
