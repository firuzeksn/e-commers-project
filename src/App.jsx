import React from "react";
import { Routes, Route } from "react-router-dom"; // Routes hatasını düzeltmek için
import Header from "./layout/Header";   // ./components/layout/ değil direkt ./layout/
import Footer from "./layout/Footer";   // ./components/layout/ değil direkt ./layout/
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/shop/:productId" element={<ProductDetailPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;