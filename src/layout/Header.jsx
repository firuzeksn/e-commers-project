import React from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.client.user);

  const isShopOrDetail = location.pathname.startsWith('/shop');
  const topBarColor = isShopOrDetail ? 'bg-[#23856D]' : 'bg-[#252B42]';

  // Logout Fonksiyonu
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "SET_USER", payload: {} });
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <header className="w-full flex flex-col font-montserrat">
      {/* 1. ÜST BAR (Aynı kalıyor) */}
      <div className={`${topBarColor} text-white py-3 px-4 md:px-8 hidden lg:flex justify-between items-center text-sm font-bold transition-colors duration-300`}>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Icon icon="ic:outline-phone" className="text-lg" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ic:outline-email" className="text-lg" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-3">
          <span>Follow Us :</span>
          <div className="flex gap-3 text-lg">
            <Icon icon="ant-design:instagram-outlined" className="cursor-pointer" />
            <Icon icon="ant-design:youtube-filled" className="cursor-pointer" />
            <Icon icon="ant-design:facebook-filled" className="cursor-pointer" />
            <Icon icon="ant-design:twitter-outlined" className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. BEYAZ ANA NAVİGASYON */}
      <nav className="py-4 px-4 md:px-8 flex justify-between items-center bg-white shadow-sm">
        <div className="text-[#252B42] text-2xl font-bold tracking-tight">
          <Link to="/">Bandage</Link>
        </div>
        
        {/* Nav Linkleri (Aynı kalıyor) */}
        <ul className="hidden md:flex gap-5 text-[#737373] font-bold text-sm items-center">
          <li><Link to="/" className="hover:text-[#252B42]">Home</Link></li>
          <li className="flex items-center gap-1 cursor-pointer group">
            <Link to="/shop" className="hover:text-[#252B42] flex items-center gap-1">
              Shop <Icon icon="iconamoon:arrow-down-2-light" className="text-xl" />
            </Link>
          </li>
          <li><Link to="/about" className="hover:text-[#252B42]">About</Link></li>
          <li><Link to="/blog" className="hover:text-[#252B42]">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-[#252B42]">Contact</Link></li>
          <li><Link to="/team" className="hover:text-[#252B42]">Team</Link></li>
          <li><Link to="/pages" className="hover:text-[#252B42]">Pages</Link></li>
        </ul>

        {/* SAĞ TARAF - KULLANICI DURUMU */}
        <div className="flex items-center gap-4 md:gap-6 text-[#23A6F0] font-bold text-sm">
          <div className="flex items-center gap-2">
            {user.name ? (
              <div className="flex items-center gap-3">
                {/* RESİM YERİNE ŞIK BİR İKON DAİRESİ */}
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-[#23A6F0] flex items-center justify-center text-white border-2 border-white shadow-sm">
                    <Icon icon="ic:baseline-person" className="text-xl" />
                  </div>
                  <span className="text-[#252B42]">{user.name}</span>
                </div>
                
                {/* Logout Butonu */}
                <button 
                  onClick={handleLogout}
                  className="text-[#E74040] hover:text-red-700 text-xs font-bold transition-colors border border-[#E74040] px-2 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Icon icon="ic:outline-person" className="text-xl" />
                <div className="hidden sm:inline">
                  <Link to="/login" className="hover:underline">Login</Link>
                  <span> / </span>
                  <Link to="/signup" className="hover:underline">Register</Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Arama, Sepet, Favori (Aynı kalıyor) */}
          <div className="flex items-center gap-4 text-xl">
            <Icon icon="ic:outline-search" className="cursor-pointer" />
            <div className="flex items-center gap-1 cursor-pointer">
              <Icon icon="ic:outline-shopping-cart" />
              <span className="text-xs font-normal">1</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <Icon icon="ic:outline-favorite-border" />
              <span className="text-xs font-normal">1</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;