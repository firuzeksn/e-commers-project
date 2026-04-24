import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white px-10 md:px-20 py-10">
      <div className="flex justify-between items-center border-b pb-10">
        <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
        <div className="flex gap-4 text-[#23A6F0]">
          <Facebook size={24} /> <Instagram size={24} /> <Twitter size={24} />
        </div>
      </div>
      <div className="py-10 text-[#737373] font-bold text-sm">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;