import { API } from "../../api/axiosInstance";
import { axiosWithAuth } from '../../api/axiosWithAuth';
import { toast } from 'react-toastify';


export const setRoles = (roles) => ({ type: 'SET_ROLES', payload: roles });

export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length === 0) {
    API .get('/roles')
      .then(res => dispatch(setRoles(res.data)))
      .catch(err => console.error("Roller çekilemedi:", err));
  }
};

// --- T11: Auto Login / Verify Token Thunk ---
export const verifyToken = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    // T11: put token to axios authorization header
    // NOT: Bearer prefix eklemiyoruz
    API.defaults.headers.common["Authorization"] = token;

    API.get("/verify")
      .then((res) => {
        // T11: if token authorized, put User object to reducer
        dispatch({ type: "SET_USER", payload: res.data });
        
        // T11: renew token in localStorage & axios header
        localStorage.setItem("token", res.data.token);
        API.defaults.headers.common["Authorization"] = res.data.token;
      })
      .catch((err) => {
        console.error("Token geçersiz:", err);
        // T11: if token is not authorized, delete token from localStorage & axios
        localStorage.removeItem("token");
        delete API.defaults.headers.common["Authorization"];
      });
  }
};

export const loginUser = (formData, navigate) => (dispatch) => {
  API.post("/login", formData)
    .then((res) => {
      // 1. Redux state güncelle
      dispatch({ type: "SET_USER", payload: res.data });
      
      // 2. Axios header'ı HEMEN güncelle (T11 kuralı)
      API.defaults.headers.common["Authorization"] = res.data.token;

      // 3. Eğer "Beni Hatırla" seçiliyse localStorage'a yaz
      if (formData.remember) {
        localStorage.setItem("token", res.data.token);
      } else {
        // Seçili değilse eski token'ı temizle ki verify hatası almayalım
        localStorage.removeItem("token");
      }

      toast.success(`Hoş geldin, ${res.data.name}!`);
      navigate("/"); 
    })
    .catch((err) => {
      toast.error("Giriş başarısız.");
      console.error("Login hatası:", err);
    });
};

export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";

// Thunk Action: Adresleri getirir ve Store'a kaydeder
export const getAddressList = () => (dispatch) => {
  axiosWithAuth()
    .get('/user/address')
    .then((res) => {
      dispatch({ type: SET_ADDRESS_LIST, payload: res.data });
    })
    .catch((err) => {
      console.error("Adresler yüklenirken hata oluştu:", err);
    });
};
