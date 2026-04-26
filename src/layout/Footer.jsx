import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-montserrat">
      {/* 1. Kısım: Logo ve Sosyal Medya */}
      <div className="bg-[#FFFFFF] py-10 px-4 md:px-44 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <h3 className="text-[#252B42] text-2xl font-bold">Bandage</h3>
        <div className="flex gap-5 text-[#23A6F0] text-2xl">
          <Icon icon="ant-design:facebook-filled" className="cursor-pointer" />
          <Icon icon="ant-design:instagram-outlined" className="cursor-pointer" />
          <Icon icon="ant-design:twitter-outlined" className="cursor-pointer" />
        </div>
      </div>

      {/* 2. Kısım: Link Grupları ve Newsletter */}
      <div className="px-4 md:px-44 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Company Info</h5>
          <ul className="text-[#737373] text-sm font-bold flex flex-col gap-3">
            <li className="hover:text-[#23A6F0] cursor-pointer">About Us</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Carrier</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">We are hiring</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Legal</h5>
          <ul className="text-[#737373] text-sm font-bold flex flex-col gap-3">
            <li className="hover:text-[#23A6F0] cursor-pointer">About Us</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Carrier</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">We are hiring</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Features</h5>
          <ul className="text-[#737373] text-sm font-bold flex flex-col gap-3">
            <li className="hover:text-[#23A6F0] cursor-pointer">Business Marketing</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">User Analytic</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Live Chat</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Resources</h5>
          <ul className="text-[#737373] text-sm font-bold flex flex-col gap-3">
            <li className="hover:text-[#23A6F0] cursor-pointer">IOS & Android</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Watch a Demo</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">Customers</li>
            <li className="hover:text-[#23A6F0] cursor-pointer">API</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-[#252B42] font-bold">Get In Touch</h5>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-md px-4 py-3 text-sm w-full outline-none"
            />
            <button className="bg-[#23A6F0] text-white px-4 py-3 rounded-r-md text-sm hover:bg-[#1b8ecf] transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-[#737373] text-xs">Lore impusu dor sit amet</p>
        </div>
      </div>

      {/* 3. Kısım: Copyright Çubuğu (Görselde eklediğimiz en alt alan) */}
      <div className="bg-[#FAFAFA] py-6 px-4 md:px-44">
        <div className="flex justify-center md:justify-start">
          <p className="text-[#737373] font-bold text-sm tracking-wide">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;