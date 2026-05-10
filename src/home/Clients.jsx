import React from 'react';
import { Icon } from '@iconify/react';

const Clients = () => {
  const logos = [
    "fa6-brands:hooli",
    "fa6-brands:lyft",
    "fa6-brands:pied-piper-hat",
    "fa6-brands:stripe",
    "fa6-brands:aws",
    "fa6-brands:reddit-alien"
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-12 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all">
        {logos.map((logo, index) => (
          <Icon key={index} icon={logo} className="text-7xl text-[#737373]" />
        ))}
      </div>
    </section>
  );
};

export default Clients;