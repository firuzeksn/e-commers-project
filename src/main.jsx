// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // 1. Provider'ı import et
import { store } from './store/store';  // 2. Birazdan oluşturacağımız store'u import et
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* 3. Uygulamayı sarmala */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);