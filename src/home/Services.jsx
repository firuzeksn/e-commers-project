import React from 'react';
import { Icon } from '@iconify/react';

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-24 bg-white">
      <div className="container mx-auto">

        <div className="flex flex-col items-center text-center gap-2 mb-20">
          <h4 className="text-[#737373] text-xl font-medium">Featured Products</h4>
          <h2 className="text-[#252B42] text-2xl font-bold uppercase tracking-wider">THE BEST SERVICES</h2>
          <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          

          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="w-20 h-20 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Icon 
                icon="flowbite:book-open-reader-solid" 
                className="w-full h-full text-[#23A6F0]" 
              />
            </div>
            <h3 className="text-[#252B42] text-2xl font-bold">Easy Wins</h3>
            <p className="text-[#737373] text-sm max-w-[230px] leading-relaxed">
              Get your best looking smile now!
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="w-20 h-20 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Icon icon="carbon:book" className="w-full h-full text-[#23A6F0]" />
            </div>
            <h3 className="text-[#252B42] text-2xl font-bold">Concrete</h3>
            <p className="text-[#737373] text-sm max-w-[230px] leading-relaxed">
              Defalcate is most focused in helping you discover your most beautiful smile
            </p>
          </div>


          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="w-20 h-20 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-[#23A6F0]">
              <Icon icon="ant-design:line-chart-outlined" className="text-7xl" />
            </div>
            <h3 className="text-[#252B42] text-2xl font-bold">Hack Growth</h3>
            <p className="text-[#737373] text-sm max-w-[230px] leading-relaxed">
              Overcame any hurdle or any other problem.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}