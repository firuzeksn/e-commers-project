import React from 'react';
import { Icon } from '@iconify/react';

const AboutPage = () => {
  return (
    <div className="w-full bg-white font-montserrat">
      
      <div className="px-4 md:px-44 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col gap-8">
          <h5 className="text-[#252B42] font-bold uppercase tracking-wide hidden md:block">About Company</h5>
          <h1 className="text-[#252B42] text-5xl md:text-6xl font-bold leading-tight">ABOUT US</h1>
          <p className="text-[#737373] text-lg max-w-sm">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold w-fit hover:bg-[#1b8ecf] transition-all">
            Get Quote Now
          </button>
        </div>
        <div className="flex-1 relative flex justify-center">
          <div className="absolute top-0 w-72 h-72 bg-[#FFE9EA] rounded-full -z-10"></div>
          <img 
            src="https://my-new-style.vercel.app/static/media/aboutPhoto.7b7672a306852cdecc3f.png" 
            alt="About Us" 
            className="w-full max-w-md h-auto object-contain relative z-10"
          />
        </div>
      </div>

      <div className="px-4 md:px-44 py-20 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex-1 flex flex-col gap-6">
          <h6 className="text-[#E74040] text-sm">Problems trying</h6>
          <h3 className="text-[#252B42] text-2xl font-bold max-w-md">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="flex-1">
          <p className="text-[#737373] text-sm leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="px-4 md:px-44 py-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <div>
          <h2 className="text-[#252B42] text-6xl font-bold">15K</h2>
          <p className="text-[#737373] font-bold">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-[#252B42] text-6xl font-bold">150K</h2>
          <p className="text-[#737373] font-bold">Monthly Visitors</p>
        </div>
        <div>
          <h2 className="text-[#252B42] text-6xl font-bold">15</h2>
          <p className="text-[#737373] font-bold">Countries Worldwide</p>
        </div>
        <div>
          <h2 className="text-[#252B42] text-6xl font-bold">100+</h2>
          <p className="text-[#737373] font-bold">Top Partners</p>
        </div>
      </div>

      <div className="px-4 md:px-44 py-20 flex justify-center">
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
            alt="Video Cover" 
            className="w-full h-[540px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#23A6F0] w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
              <Icon icon="bi:play-fill" className="text-4xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-28 px-4 md:px-44 text-center">
        <h2 className="text-[#252B42] text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-[#737373] mb-20 max-w-sm mx-auto text-sm">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center gap-4">
              <img src={`https://i.pravatar.cc/300?img=${item+10}`} className="w-full h-[230px] object-cover" alt="Team" />
              <div className="flex flex-col gap-2">
                <h5 className="text-[#252B42] font-bold">Username</h5>
                <h6 className="text-[#737373] font-bold text-sm">Profession</h6>
                <div className="flex gap-4 text-[#23A6F0] text-2xl justify-center">
                  <Icon icon="ant-design:facebook-filled" />
                  <Icon icon="ant-design:instagram-outlined" />
                  <Icon icon="ant-design:twitter-outlined" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-20 px-4 md:px-44 text-center">
        <h2 className="text-[#252B42] text-4xl font-bold mb-4">Big Companies Are Here</h2>
        <p className="text-[#737373] mb-16 max-w-sm mx-auto text-sm">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 grayscale opacity-60">
          <Icon icon="fa6-brands:hooli" className="text-7xl" />
          <Icon icon="fa6-brands:lyft" className="text-7xl" />
          <Icon icon="fa6-brands:pied-piper-hat" className="text-7xl" />
          <Icon icon="fa6-brands:stripe" className="text-7xl" />
          <Icon icon="fa6-brands:aws" className="text-7xl" />
          <Icon icon="fa6-brands:reddit-alien" className="text-7xl" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[600px]">
        <div className="flex-1 bg-[#23856D] flex flex-col justify-center px-4 md:px-44 gap-8 text-white">
          <h5 className="font-bold uppercase tracking-widest">Work with us</h5>
          <h2 className="text-5xl font-bold">Now Let's grow Yours</h2>
          <p className="text-sm max-w-sm leading-relaxed">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
          </p>
          <button className="border border-white px-10 py-4 rounded-md font-bold w-fit hover:bg-white hover:text-[#23856D] transition-all">
            Button
          </button>
        </div>
        <div className="flex-1 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Working"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutPage;