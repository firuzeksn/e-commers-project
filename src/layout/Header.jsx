import React from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className="w-full font-['Montserrat']">
      {/* Üst Bar - Desktop */}
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-8 justify-between items-center text-sm font-bold">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Icon icon="ant-design:phone-outlined" className="text-base" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ant-design:mail-outlined" className="text-base" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        
        <div>Follow Us and get a chance to win 80% off</div>
        
        <div className="flex items-center gap-4">
          <span>Follow Us :</span>
          <div className="flex gap-3 text-lg">
            <Icon icon="ant-design:instagram-outlined" className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Icon icon="ant-design:youtube-outlined" className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Icon icon="ant-design:facebook-filled" className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Icon icon="ant-design:twitter-outlined" className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
          </div>
        </div>
      </div>

      {/* Ana Navigasyon */}
      <nav className="bg-white py-4 px-8 md:px-12 flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#252B42]">Bandage</div>
        
        {/* Menü Linkleri */}
        <div className="hidden md:flex gap-6 text-[#737373] font-bold text-sm">
          <a href="#" className="hover:text-[#252B42] transition-colors">Home</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#252B42] transition-colors">
            <span>Shop</span>
            <Icon icon="ant-design:down-outlined" className="text-xs" />
          </div>
          <a href="#" className="hover:text-[#252B42] transition-colors">About</a>
          <a href="#" className="hover:text-[#252B42] transition-colors">Blog</a>
          <a href="#" className="hover:text-[#252B42] transition-colors">Contact</a>
          <a href="#" className="hover:text-[#252B42] transition-colors">Pages</a>
        </div>

        {/* Sağ Taraf: Kullanıcı ve Aksiyonlar */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm cursor-pointer hover:opacity-80">
            <Icon icon="ant-design:user-outlined" className="text-lg" />
            <span>Login / Register</span>
          </div>
          
          <div className="flex items-center gap-5 text-[#23A6F0]">
            <Icon icon="ant-design:search-outlined" className="text-xl cursor-pointer hover:scale-110 transition-transform" />
            
            {/* Sepet ve Favori - Yanındaki rakamlarla birlikte */}
            <div className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
              <Icon icon="ant-design:shopping-cart-outlined" className="text-xl" />
              <span className="text-xs font-medium">1</span>
            </div>
            
            <div className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
              <Icon icon="ant-design:heart-outlined" className="text-xl" />
              <span className="text-xs font-medium">1</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;