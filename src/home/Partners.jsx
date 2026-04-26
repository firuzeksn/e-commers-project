import React from 'react';
import { Icon } from '@iconify/react';

export default function Partners() {
  return (
    <div className="py-16 px-10 bg-[#FAFAFA]">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 lg:gap-8">
        <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
            <Icon icon="fa6-brands:hooli" className="text-[6.5rem] text-[#737373]" />
        </div>
        <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
            <Icon icon="fa6-brands:lyft" className="text-[5rem] text-[#737373]" />
        </div>
        <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
            <Icon icon="ph:leaf-fill" className="text-7xl text-[#737373]" />
        </div>
        <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
            <Icon icon="fa6-brands:stripe" className="text-[6.5rem] text-[#737373]" />
        </div>
        <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
            <Icon icon="fa6-brands:aws" className="text-[6rem] text-[#737373]" />
        </div>
        <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
            <Icon icon="fa6-brands:reddit-alien" className="text-[5.5rem] text-[#737373]" />
        </div>
      </div>
    </div>
  );
}