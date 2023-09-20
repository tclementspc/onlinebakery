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
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ProductDirectoryPage from "./pages/ProductDirectoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
//putting in the ProductDetailPage to pull out individual productId ne line below
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="products" element={<ProductDirectoryPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
