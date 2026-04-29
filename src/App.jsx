import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header"; 
import Footer from "./layout/Footer"; 
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Contact rotasına element prop'unu ekledik */}
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/shop/:productId" element={<ProductDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;