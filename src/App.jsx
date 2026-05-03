import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/actions/clientActions";
// T12: fetchCategories import edildi
import { fetchCategories } from "./store/actions/productActions"; 

import Header from "./layout/Header"; 
import Footer from "./layout/Footer"; 
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage'; 
import LoginPage from './pages/LoginPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // T11: Otomatik giriş kontrolü
    dispatch(verifyToken());
    // T12: Uygulama başlarken kategorileri çek
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/contact" element={<ContactPage />} />
        
        {/* T12: Kategoriye özel dinamik rota eklendi */}
        <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
        
        <Route path="/shop/:productId" element={<ProductDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;