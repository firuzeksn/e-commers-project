import axios from 'axios';

/**
 * axiosWithAuth, kimlik doğrulaması gereken (token isteyen) 
 * API istekleri için yapılandırılmış bir axios örneği döndürür.
 */
export const axiosWithAuth = () => {
  // LocalStorage'dan token'ı alıyoruz
  const token = localStorage.getItem('token');

  return axios.create({
    // API ana dizini (base URL)
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    headers: {
      // API dokümantasyonuna uygun olarak token'ı header'a ekliyoruz
      Authorization: token,
    },
  });
};