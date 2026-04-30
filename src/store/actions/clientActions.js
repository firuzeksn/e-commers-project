import { API } from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const setRoles = (roles) => ({ type: 'SET_ROLES', payload: roles });

// Thunk action: Sadece ihtiyaç duyulduğunda (liste boşsa) çekilir
export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  
  if (roles.length === 0) {
    API.get('/roles')
      .then(res => dispatch(setRoles(res.data)))
      .catch(err => console.error("Roller çekilemedi:", err));
  }
};
export const loginUser = (formData, navigate) => (dispatch) => {
  API.post("/login", formData)
    .then((res) => {
      dispatch({ type: "SET_USER", payload: res.data });

      if (formData.remember) {
        localStorage.setItem("token", res.data.token);
      }

      toast.success(`Hoş geldin, ${res.data.name}!`);
      navigate("/"); 
    })
    .catch((err) => {
      toast.error("Giriş başarısız: E-posta veya şifre hatalı.");
      console.error("Login hatası:", err);
    });
};