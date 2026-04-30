import React from 'react';
import { Icon } from '@iconify/react';

const TeamPage = () => {
  const teamMembers = [
    { name: "Gökhan Özdemir", role: "Project Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
    { name: "Firuze", role: "Full Stack Developer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
    { name: "Username", role: "Profession", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
    { name: "Username", role: "Profession", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Username", role: "Profession", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" },
    { name: "Username", role: "Profession", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
    { name: "Username", role: "Profession", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Username", role: "Profession", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop" },
    { name: "Username", role: "Profession", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" },
  ];

  return (
    <div className="w-full bg-white font-montserrat">
      {/* 1. BAŞLIK VE BREADCRUMB */}
      <div className="text-center py-20 flex flex-col gap-6">
        <h5 className="text-[#737373] font-bold uppercase tracking-widest text-lg">What we do</h5>
        <h1 className="text-[#252B42] text-6xl md:text-7xl font-bold">Innovation tailored for you</h1>
        <div className="flex justify-center gap-3 font-bold text-base">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#BDBDBD] font-light text-xl">/</span>
          <span className="text-[#737373]">Team</span>
        </div>
      </div>

      {/* 2. GÖRSEL GALERİSİ (GRID) - Yükseklik 700px'e çıkarıldı */}
      <div className="flex flex-col md:flex-row gap-3 px-4 md:h-[700px]">
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover object-top hover:opacity-90 transition-opacity duration-300" 
               alt="Team large" />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover object-top" alt="Team small 1" />
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover object-top" alt="Team small 2" />
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" className="w-full h-full object-cover object-top" alt="Team small 3" />
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover object-top" alt="Team small 4" />
        </div>
      </div>

      {/* 3. EKİP ÜYELERİ - Kenar boşlukları daraltıldı, resim boyları 400px yapıldı */}
      <div className="py-32 px-4 md:px-24 text-center">
        <h2 className="text-[#252B42] text-5xl font-bold mb-24">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-6 group">
              <div className="overflow-hidden w-full">
                <img 
                  src={member.img} 
                  className="w-full h-[450px] object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  alt={member.name} 
                />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-[#252B42] font-bold text-2xl">{member.name}</h5>
                <h6 className="text-[#737373] font-bold text-lg">{member.role}</h6>
                <div className="flex gap-6 text-[#23A6F0] text-3xl justify-center mt-3">
                  <Icon icon="ant-design:facebook-filled" className="hover:text-[#252B42] cursor-pointer transition-colors" />
                  <Icon icon="ant-design:instagram-outlined" className="hover:text-[#252B42] cursor-pointer transition-colors" />
                  <Icon icon="ant-design:twitter-outlined" className="hover:text-[#252B42] cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CTA BÖLÜMÜ */}
      <div className="py-24 text-center flex flex-col items-center gap-10 px-4 bg-gray-50/50">
        <h2 className="text-[#252B42] text-5xl md:text-6xl font-bold max-w-2xl leading-tight">
          Start your 14 days free trial
        </h2>
        <p className="text-[#737373] max-w-md text-lg leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <button className="bg-[#23A6F0] text-white px-12 py-5 rounded-md font-bold text-lg hover:bg-[#1b8ecf] shadow-xl hover:shadow-[#23A6F0]/30 transition-all active:scale-95">
          Try it free now
        </button>
        <div className="flex gap-10 text-4xl mt-4">
          <Icon icon="ant-design:twitter-outlined" className="cursor-pointer text-[#55ACEE] hover:scale-110 transition-transform" />
          <Icon icon="ant-design:facebook-filled" className="cursor-pointer text-[#395185] hover:scale-110 transition-transform" />
          <Icon icon="ant-design:instagram-outlined" className="cursor-pointer text-black hover:scale-110 transition-transform" />
          <Icon icon="ant-design:linkedin-filled" className="cursor-pointer text-[#0A66C2] hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;