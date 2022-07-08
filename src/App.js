import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from  './components/Header';
import RollsDirectoryPage from "./pages/RollsDirectoryPage";
import Footer from "./components/Footer";
import RollsDetailPage from "./pages/RollsDetailPage";
// import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';


function App() {
  return (
    <div className="App">
      <Header />
    
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='contact' element={<ContactPage />} />
            <Route path='shop' element={<RollsDirectoryPage />} />
            <Route path='shop/:rollId' element={<RollsDetailPage />} /> 
            <Route path='cart' element={<CartPage/>} /> 
        </Routes>
      <Footer />
    </div>
  );
}

export default App;


