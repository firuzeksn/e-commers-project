import React from 'react';
import HeroSection from '../home/HeroSection';
import Partners from '../home/Partners';
import TopProducts from '../home/TopProducts';
import BestsellerProducts from '../home/BestsellerProducts';
import FeaturedContent from '../home/FeaturedContent';
import Services from '../home/Services';
// FeaturedPosts senin yapında 'home' klasöründe olduğu için:
import FeaturedPosts from '../home/FeaturedPosts'; 

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Partners />
      <TopProducts />
      <BestsellerProducts />
      <FeaturedContent />
      <Services />
      <FeaturedPosts />
    </main>
  );
}