import React from 'react';
import Header from './layout/Header';
import { Icon } from '@iconify/react';
function App() {

  const modelImages = [
    "src/assets/resim2.jpg",
    "src/assets/resim3.jpg",
    "src/assets/resim4.jpg",
    "src/assets/resim5.jpg",
    "src/assets/resim6.jpg",
    "src/assets/resim7.jpg",
    "src/assets/resim8.jpg",
    "src/assets/resim9.jpg",
    "src/assets/resim10.jpg",
    "src/assets/resim11.jpg"
  ];

  const bestsellerProducts = modelImages.map((imgSrc, index) => ({
    id: index,
    image: imgSrc,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "16.48",
    newPrice: "6.48"
  }));

  return (
    <div className="w-full min-h-screen bg-white font-montserrat">
      
      {/* 1. HEADER */}
      <Header />
      
      {/* 2. HERO SECTION */}
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
              <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-2xl hover:bg-[#1a88c7] transition-all uppercase shadow-lg active:scale-95">
                Shop Now
              </button>
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

      {/* 3. PARTNERS */}
<div className="py-16 px-10 bg-[#FAFAFA]">
  <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 lg:gap-8">
    {/* Hooli Logo */}
    <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
        <Icon icon="fa6-brands:hooli" className="text-[6.5rem] text-[#737373]" />
    </div>

    {/* Lyft Logo */}
    <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
        <Icon icon="fa6-brands:lyft" className="text-[5rem] text-[#737373]" />
    </div>

    {/* Pied Piper Hat - KESİN ÇALIŞAN ALTERNATİF */}
    <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
        <Icon icon="ph:leaf-fill" className="text-7xl text-[#737373]" />
    </div>

    {/* Stripe Logo */}
    <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
        <Icon icon="fa6-brands:stripe" className="text-[6.5rem] text-[#737373]" />
    </div>

    {/* AWS Logo */}
    <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
        <Icon icon="fa6-brands:aws" className="text-[6rem] text-[#737373]" />
    </div>

    {/* Reddit Logo */}
    <div className="flex items-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
        <Icon icon="fa6-brands:reddit-alien" className="text-[5.5rem] text-[#737373]" />
    </div>
  </div>
</div>

      {/* 4. TOP PRODUCTS SECTION */}
      <section className="py-12 px-4 md:px-24 bg-[#FAFAFA]">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
          <div className="relative w-full md:w-1/2 h-[500px] md:h-full overflow-hidden group">
            <img src="src/assets/fashionable-man-woman-sitting-stair.jpg" alt="Main Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-10 left-10 bg-[#23A6F0]/80 p-8 backdrop-blur-sm">
              <h3 className="text-white text-2xl font-bold mb-4 uppercase">Top Product Of the Week</h3>
              <button className="border-2 border-white text-white px-6 py-2 font-bold uppercase tracking-widest hover:bg-white hover:text-[#23A6F0] transition-colors">Explore Items</button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 h-full">
            <div className="relative h-[300px] md:h-1/2 overflow-hidden group">
              <img src="src/assets/pexels-warley-venancio-4255179-1365x2048.jpg.webp" alt="Product 2" className="w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-6 left-6 bg-[#23A6F0]/80 p-6 backdrop-blur-sm z-10">
                <h3 className="text-white text-lg font-bold mb-3 uppercase tracking-wider">Top Product Of the Week</h3>
                <button className="border border-white text-white px-4 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#23A6F0] transition-colors active:scale-95">Explore Items</button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-1/2 overflow-hidden group">
              <img src="src/assets/blog-2_1296x.webp" alt="Product 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-6 left-6 bg-[#23A6F0]/80 p-6 backdrop-blur-sm">
                <h3 className="text-white text-lg font-bold mb-3 uppercase">Top Product Of the Week</h3>
                <button className="border border-white text-white px-4 py-2 text-sm font-bold uppercase hover:bg-white hover:text-[#23A6F0] transition-colors">Explore Items</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BESTSELLER PRODUCTS SECTION */}
      <section className="py-20 px-4 md:px-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center gap-2 mb-20">
            <h4 className="text-[#737373] text-xl font-medium">Featured Products</h4>
            <h2 className="text-[#252B42] text-2xl font-bold uppercase tracking-wider">BESTSELLER PRODUCTS</h2>
            <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {bestsellerProducts.map((product, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full h-[360px] overflow-hidden mb-6">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Product" />
                </div>
                <h5 className="text-[#252B42] font-bold text-base mb-2">{product.title}</h5>
                <p className="text-[#737373] font-bold text-sm mb-3">{product.department}</p>
                <div className="flex gap-2 font-bold text-base mb-3">
                  <span className="text-[#BDBDBD] line-through">${product.oldPrice}</span>
                  <span className="text-[#23856D]">${product.newPrice}</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                  <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                  <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-10 py-4 rounded-md font-bold text-sm uppercase hover:bg-[#23A6F0] hover:text-white transition-all active:scale-95">
              LOAD MORE PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* 6. WE LOVE WHAT WE DO SECTION (HİZALANMIŞ HALİ) */}
      <section className="py-20 px-4 md:px-24 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol Taraf: İkili Görsel Yapısı (Aynı Hizada) */}
          <div className="w-full lg:w-1/2 flex gap-4 h-[450px] md:h-[600px]">
            <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="src\assets\beyaz kazakı gözlüklü kız.jpg" 
                alt="Model 1" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* mt-12 silindi, artık soldakiyle aynı hizada */}
            <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="src\assets\turuncu kıyafetli kız.avif" 
                alt="Model 2" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Sağ Taraf: İçerik */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <h4 className="text-[#23A6F0] font-bold text-base uppercase tracking-widest">
              Featured Products
            </h4>
            <h2 className="text-[#252B42] text-4xl md:text-[40px] font-bold leading-tight max-w-[400px]">
              We love what we do
            </h2>
            <div className="flex flex-col gap-5 text-[#737373] text-sm leading-relaxed max-w-[450px]">
              <p>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
              <p>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. THE BEST SERVICES SECTION */}
      <section className="py-20 px-4 md:px-24 bg-white">
        <div className="container mx-auto">
          {/* Başlık Grubu */}
          <div className="flex flex-col items-center text-center gap-2 mb-20">
            <h4 className="text-[#737373] text-xl font-medium">Featured Products</h4>
            <h2 className="text-[#252B42] text-2xl font-bold uppercase tracking-wider">THE BEST SERVICES</h2>
            <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between </p>
          </div>

          {/* Hizmet Kartları Grid Yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* 1. Hizmet: Easy Wins */}
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="w-20 h-20 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {/* DÜZENLENEN KISIM: Flowbite Book Open Reader Solid İkonu */}
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

      {/* 2. Hizmet: Concrete */}
      <div className="flex flex-col items-center text-center gap-4 group">
        <div className="w-20 h-20 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {/* İSTEDİĞİN YENİ İKON: Carbon Book */}
          <Icon icon="carbon:book" className="w-full h-full text-[#23A6F0]" />
        </div>
        <h3 className="text-[#252B42] text-2xl font-bold">Concrete</h3>
        <p className="text-[#737373] text-sm max-w-[230px] leading-relaxed">
          Defalcate is most focused in helping you discover your most beautiful smile
        </p>
      </div>

      {/* 3. Hizmet: Hack Growth */}
      <div className="flex flex-col items-center text-center gap-4 group">
        <div className="w-20 h-20 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-[#23A6F0]">
          {/* Yükseliş/Grafik İkonu - Iconify */}
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

      {/* 8. FEATURED POSTS SECTION */}
<section className="py-20 px-4 md:px-24 bg-white">
  <div className="container mx-auto">
    {/* Başlık Grubu */}
    <div className="flex flex-col items-center text-center gap-2 mb-20">
      <h4 className="text-[#23A6F0] font-bold text-sm tracking-wide">Practice Advice</h4>
      <h2 className="text-[#252B42] text-[40px] font-bold">Featured Posts</h2>
    </div>

    {/* Post Kartları Grid Yapısı */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {[1, 2].map((item) => (
        <div key={item} className="flex flex-col md:flex-row shadow-sm border border-[#E8E8E8] rounded-lg overflow-hidden transition-all hover:shadow-xl">
          
          {/* Sol Taraf: Görsel ve Overlay İkonlar */}
          <div className="relative w-full md:w-[40%] h-[300px] md:h-auto">
            <img 
              src={item === 1 ? "src/assets/havai.jpg" : "src/assets/images.jpg"} 
              alt="Post" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#E74C3C] text-white px-3 py-1 rounded-sm font-bold text-sm shadow-md">
              Sale
            </div>
            
            {/* Alt Orta İkonlar */}
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

          {/* Sağ Taraf: İçerik Bilgileri */}
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
            
            {/* Satış Bilgisi - İkon Güncellendi */}
            <div className="flex items-center gap-2 text-[#737373] font-bold text-sm">
              <Icon icon="ant-design:download-outlined" className="text-lg" />
              <span>15 Sales</span>
            </div>

            <div className="flex gap-2 font-bold text-base">
              <span className="text-[#BDBDBD]">$16.48</span>
              <span className="text-[#23856D]">$6.48</span>
            </div>

            {/* Renk Noktaları */}
            <div className="flex gap-2 my-2">
              <div className="w-4 h-4 bg-[#23A6F0] rounded-full cursor-pointer"></div>
              <div className="w-4 h-4 bg-[#23856D] rounded-full cursor-pointer"></div>
              <div className="w-4 h-4 bg-[#E77C40] rounded-full cursor-pointer"></div>
              <div className="w-4 h-4 bg-[#252B42] rounded-full cursor-pointer"></div>
            </div>

            {/* Alt Bilgi İkonları - Saat, Ders ve Grafik */}
            <div className="flex items-center gap-4 text-[#737373] text-xs font-semibold mt-auto pt-4">
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

            {/* Learn More Butonu - İkon Güncellendi */}
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

      {/* 9. FOOTER SECTION */}
      <footer className="bg-white">
        {/* Üst Kısım: Logo ve Sosyal Medya (GÜNCELLENDİ) */}
        <div className="bg-[#FAFAFA] py-10 px-4 md:px-24">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h3 className="text-[#252B42] text-2xl font-bold">Bandage</h3>
            <div className="flex gap-5 text-[#23A6F0]">
              {/* Facebook İkonu */}
              <Icon 
                icon="ant-design:facebook-filled" 
                className="text-2xl cursor-pointer hover:text-[#1a88c7] transition-colors" 
              />
              {/* Instagram İkonu */}
              <Icon 
                icon="ant-design:instagram-outlined" 
                className="text-2xl cursor-pointer hover:text-[#1a88c7] transition-colors" 
              />
              {/* Twitter/X İkonu */}
              <Icon 
                icon="ant-design:twitter-outlined" 
                className="text-2xl cursor-pointer hover:text-[#1a88c7] transition-colors" 
              />
            </div>
          </div>
        </div>

        {/* Orta Kısım: Link Sütunları */}
        <div className="py-20 px-4 md:px-24">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Sütun 1 */}
            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] font-bold text-base">Company Info</h5>
              <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">About Us</a>
                <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
                <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
                <a href="#" className="hover:text-[#23A6F0]">Blog</a>
              </div>
            </div>

            {/* Sütun 2 */}
            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] font-bold text-base">Legal</h5>
              <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">About Us</a>
                <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
                <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
                <a href="#" className="hover:text-[#23A6F0]">Blog</a>
              </div>
            </div>

            {/* Sütun 3 */}
            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] font-bold text-base">Features</h5>
              <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">Business Marketing</a>
                <a href="#" className="hover:text-[#23A6F0]">User Analytic</a>
                <a href="#" className="hover:text-[#23A6F0]">Live Chat</a>
                <a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a>
              </div>
            </div>

            {/* Sütun 4 */}
            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] font-bold text-base">Resources</h5>
              <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">IOS & Android</a>
                <a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a>
                <a href="#" className="hover:text-[#23A6F0]">Customers</a>
                <a href="#" className="hover:text-[#23A6F0]">API</a>
              </div>
            </div>

            {/* Get In Touch (Abone Olma Formu) - Tam Düzenlenmiş Versiyon */}
<div className="flex flex-col gap-5 lg:col-span-1 min-w-[280px]">
  <h5 className="text-[#252B42] font-bold text-base">Get In Touch</h5>
  <div className="flex flex-col">
    {/* Form Alanı */}
    <form className="flex w-full h-[58px] rounded-md overflow-hidden border border-[#E6E6E6]" onSubmit={(e) => e.preventDefault()}>
      <input 
        type="email" 
        placeholder="Your Email" 
        className="flex-[2] px-5 bg-[#F9F9F9] text-[#737373] outline-none text-sm border-none min-w-0"
      />
      <button 
        type="submit"
        className="flex-1 bg-[#23A6F0] text-white px-4 text-sm font-normal hover:bg-[#1a88c7] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
    {/* Alt Metin */}
    <p className="text-[#737373] text-xs font-normal mt-2">
      Lore imp sum dolor Amit
    </p>
  </div>
</div>

          </div>
        </div>

        {/* Alt Kısım: Telif Hakkı */}
        <div className="bg-[#FAFAFA] py-6 px-4 md:px-24">
          <div className="container mx-auto">
            <p className="text-[#737373] font-bold text-sm text-center md:text-left">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;