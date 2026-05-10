import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "./store/actions/clientActions";
import { fetchCategories } from "./store/actions/productActions"; 
import FavoritesPage from './pages/FavoritesPage';
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
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import PreviousOrdersPage from './pages/PreviousOrdersPage';

const ProtectedRoute = ({ element }) => {
  const user = useSelector(state => state.client.user);
  return user ? element : <Navigate to="/login" replace />;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
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
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" element={<ProductDetailPage />} />
        <Route path="/shop/:productId" element={<ProductDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<ProtectedRoute element={<CheckoutPage />} />} />
        <Route path="/orders" element={<ProtectedRoute element={<PreviousOrdersPage />} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;