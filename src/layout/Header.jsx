import React from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // URL /shop ile başlıyorsa (örn: /shop/1) yeşil yap, aksi halde lacivert kalsın
  const isShopOrDetail = location.pathname.startsWith('/shop');
  const topBarColor = isShopOrDetail ? 'bg-[#23856D]' : 'bg-[#252B42]';

  return (
    <header className="w-full flex flex-col font-montserrat">
      {/* 1. ÜST BAR - Shop ve Detay sayfasında yeşil (#23856D) olur */}
      <div className={`${topBarColor} text-white py-3 px-4 md:px-8 hidden lg:flex justify-between items-center text-sm font-bold transition-colors duration-300`}>
        {/* Sol Taraf: İletişim */}
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
        
        {/* Orta: Slogan */}
        <div>Follow Us and get a chance to win 80% off</div>
        
        {/* Sağ Taraf: Sosyal Medya */}
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
          <li><Link to="/pages" className="hover:text-[#252B42]">Pages</Link></li>
        </ul>

        {/* Sağ Taraf İkonlar */}
        <div className="flex items-center gap-4 md:gap-6 text-[#23A6F0] font-bold text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
            <Icon icon="ic:outline-person" className="text-xl" />
            <span className="hidden sm:inline">Login / Register</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <Icon icon="ic:outline-search" />
            <div className="flex items-center gap-1">
              <Icon icon="ic:outline-shopping-cart" />
              <span className="text-xs font-normal">1</span>
            </div>
            <div className="flex items-center gap-1">
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