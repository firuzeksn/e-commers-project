import React from 'react';
import { Link } from "react-router-dom"; // Eksik olan satır bu!
export default function HeroSection() {
  return (
    <div className="w-full mt-12">
      <div className="px-4 md:px-8 pb-4"> 
        <div className="relative w-full min-h-[620px] rounded-[40px] overflow-hidden bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] flex items-center">
          <div className="absolute top-[10%] right-[35%] w-20 h-20 bg-white rounded-full opacity-60 z-0"></div>
          <div className="absolute bottom-[25%] left-[55%] w-4 h-4 bg-[#977DF4] rounded-full z-10 opacity-80 shadow-sm"></div>
          <div className="absolute top-[20%] right-[2%] w-3 h-3 bg-[#977DF4] rounded-full z-10"></div>

          <div className="relative z-20 w-full md:w-1/2 pl-10 md:pl-24 flex flex-col items-start gap-6">
            <h5 className="font-bold text-[#2A7CC7] tracking-[0.1em] text-base uppercase">Summer 2020</h5>
            <h1 className="text-[#252B42] text-5xl md:text-[58px] font-extrabold leading-tight">NEW COLLECTION</h1>
            <h4 className="text-[#737373] text-xl max-w-[380px] font-medium leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </h4>
          <Link to="/shop">
            <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-2xl hover:bg-[#1a88c7] transition-all uppercase shadow-lg active:scale-95">
              Shop Now
            </button>
          </Link>
          </div>

          <div className="hidden md:flex absolute right-0 bottom-0 h-full w-1/2 items-end justify-end overflow-hidden">
            <div className="absolute right-[-5%] bottom-[-5%] w-[110%] h-[110%] bg-white rounded-full z-0 translate-x-10 translate-y-10"></div>
            <img 
              src="src/assets/portrait-beautiful-ginger-girl-touching-hair-smiling-showing-tongue.png" 
              className="relative h-[95%] object-cover z-20 translate-y-2 translate-x-10" 
              alt="Model"
            />
          </div>
        </div>
      </div>
    </div>
  );
}