import React from 'react';
import { Icon } from '@iconify/react';

export default function FeaturedPosts() {
  const posts = [1, 2];

  return (
    <section className="py-20 px-4 md:px-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-2 mb-20">
          <h4 className="text-[#23A6F0] font-bold text-sm tracking-wide">Practice Advice</h4>
          <h2 className="text-[#252B42] text-[40px] font-bold">Featured Posts</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((item) => (
            <div key={item} className="flex flex-col md:flex-row shadow-sm border border-[#E8E8E8] rounded-lg overflow-hidden transition-all hover:shadow-xl">
              
              <div className="relative w-full md:w-[40%] h-[300px] md:h-auto">
                <img 
                  src={item === 1 ? "src/assets/havai.jpg" : "src/assets/images.jpg"} 
                  alt="Post" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#E74C3C] text-white px-3 py-1 rounded-sm font-bold text-sm shadow-md">
                  Sale
                </div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                    <Icon icon="ant-design:heart-outlined" className="text-xl" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                    <Icon icon="ant-design:shopping-cart-outlined" className="text-xl" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                    <Icon icon="ant-design:eye-outlined" className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="w-full md:w-[60%] p-8 flex flex-col gap-4 bg-white">
                <div className="flex justify-between items-center">
                  <span className="text-[#23A6F0] font-bold text-sm">English Department</span>
                  <div className="flex items-center gap-1 bg-[#252B42] text-white px-3 py-1 rounded-2xl text-xs font-bold">
                    <Icon icon="ant-design:star-filled" className="text-yellow-400 text-sm" />
                    <span>4.9</span>
                  </div>
                </div>
                
                <h5 className="text-[#252B42] font-bold text-base">Graphic Design</h5>
                <p className="text-[#737373] text-sm leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                
                <div className="flex items-center gap-2 text-[#737373] font-bold text-sm">
                  <Icon icon="ant-design:download-outlined" className="text-lg" />
                  <span>15 Sales</span>
                </div>

                <div className="flex gap-2 font-bold text-base">
                  <span className="text-[#BDBDBD]">$16.48</span>
                  <span className="text-[#23856D]">$6.48</span>
                </div>

                <div className="flex gap-2 my-2">
                  <div className="w-4 h-4 bg-[#23A6F0] rounded-full cursor-pointer"></div>
                  <div className="w-4 h-4 bg-[#23856D] rounded-full cursor-pointer"></div>
                  <div className="w-4 h-4 bg-[#E77C40] rounded-full cursor-pointer"></div>
                  <div className="w-4 h-4 bg-[#252B42] rounded-full cursor-pointer"></div>
                </div>

                <div className="flex items-center gap-4 text-[#737373] text-xs font-semibold mt-auto pt-4 border-t border-[#F1F1F1]">
                  <div className="flex items-center gap-1">
                    <Icon icon="ant-design:clock-circle-outlined" className="text-[#23A6F0] text-sm" />
                    <span>22h...</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="ant-design:ordered-list-outlined" className="text-[#E77C40] text-sm" />
                    <span>64 Lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="ant-design:area-chart-outlined" className="text-[#23856D] text-sm" />
                    <span>Progress</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm border border-[#23A6F0] rounded-full px-5 py-2 w-fit mt-4 hover:bg-[#23A6F0] hover:text-white transition-all group">
                  Learn More 
                  <Icon icon="ant-design:right-outlined" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}