import axios from 'axios';

// İsmi tekrar API yapıyoruz
export const API = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});