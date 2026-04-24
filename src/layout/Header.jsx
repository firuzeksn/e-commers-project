import React from 'react';

const Header = () => {
  return (
    <header className="w-full font-['Montserrat']">
      {/* Üst Bar */}
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-8 justify-between items-center text-sm font-bold">
        <div className="flex gap-6 items-center">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-4">
          <span>Follow Us :</span>
          {/* İkonları şimdilik yazı olarak bıraktık ki hata vermesin */}
          <div className="flex gap-3">
            <span>Insta</span>
            <span>Youtube</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>

      {/* Navigasyon */}
      <nav className="bg-white py-4 px-8 md:px-12 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold text-[#252B42]">Bandage</div>
        <div className="hidden md:flex gap-6 text-[#737373] font-bold text-sm">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Pages</a>
        </div>
        <div className="text-[#23A6F0] font-bold">
          Login / Register
        </div>
      </nav>
    </header>
  );
};

export default Header;