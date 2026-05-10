import React from 'react';
import { Icon } from '@iconify/react';

const ContactPage = () => {
  return (
    <div className="w-full bg-white font-montserrat">
      
      <div className="px-4 md:px-44 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col gap-8">
          <h5 className="text-[#252B42] font-bold uppercase tracking-wide">Contact Us</h5>
          <h1 className="text-[#252B42] text-5xl md:text-6xl font-bold leading-tight">
            Get in touch today!
          </h1>
          <p className="text-[#737373] text-lg max-w-sm">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="flex flex-col gap-2 text-[#252B42] font-bold text-xl">
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>
          <div className="flex gap-6 text-3xl text-[#252B42]">
            <Icon icon="ant-design:twitter-outlined" className="cursor-pointer" />
            <Icon icon="ant-design:facebook-filled" className="cursor-pointer" />
            <Icon icon="ant-design:instagram-outlined" className="cursor-pointer" />
            <Icon icon="ant-design:linkedin-filled" className="cursor-pointer" />
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#FFE9EA] rounded-full -z-10 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Family Shopping" 
            className="w-full h-auto object-contain relative z-10"
          />
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-28 px-4 md:px-44 text-center">
        <h5 className="text-[#252B42] font-bold text-sm uppercase mb-4">Visit Our Office</h5>
        <h2 className="text-[#252B42] text-4xl font-bold mb-20 max-w-xl mx-auto">
          We help small businesses with big ideas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="bg-white p-12 flex flex-col items-center gap-4">
            <Icon icon="ic:baseline-phone" className="text-[#23A6F0] text-7xl" />
            <div className="text-[#252B42] font-bold text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="text-[#252B42] font-bold text-lg mt-4">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
              Submit Request
            </button>
          </div>

          <div className="bg-[#252B42] p-20 flex flex-col items-center gap-4 text-white scale-110 shadow-2xl z-20">
            <Icon icon="ic:baseline-location-on" className="text-[#23A6F0] text-7xl" />
            <div className="font-bold text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="font-bold text-lg mt-4">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
              Submit Request
            </button>
          </div>

          <div className="bg-white p-12 flex flex-col items-center gap-4">
            <Icon icon="ic:baseline-email" className="text-[#23A6F0] text-7xl" />
            <div className="text-[#252B42] font-bold text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="text-[#252B42] font-bold text-lg mt-4">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 text-center flex flex-col items-center gap-6">
        <Icon icon="bi:arrow-90deg-down" className="text-[#23A6F0] text-5xl rotate-[180deg]" />
        <h5 className="text-[#252B42] font-bold uppercase">WE Can't WAIT TO MEET YOU</h5>
        <h2 className="text-[#252B42] text-6xl font-bold">Let's Talk</h2>
        <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all uppercase">
          Try it free now
        </button>
      </div>

    </div>
  );
};

export default ContactPage;