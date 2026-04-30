import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header"; 
import Footer from "./layout/Footer"; 
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage'; // Yeni eklendi
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        
        {/* LOGIN BURADA - element eklemesi yapıldı */}
        <Route path="/login" element={<LoginPage />} /> 
        
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