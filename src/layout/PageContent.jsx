import React from 'react';
import HomePage from '../pages/HomePage';

const PageContent = () => {
  return (
    <main className="w-full flex-grow">
      {/* Sayfalar buraya gelecek. Şimdilik sadece HomePage */}
      <HomePage />
    </main>
  );
};

export default PageContent;