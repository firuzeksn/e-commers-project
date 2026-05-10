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

export const verifyToken = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    API.defaults.headers.common["Authorization"] = token;

    API.get("/verify")
      .then((res) => {
        dispatch({ type: "SET_USER", payload: res.data });
        localStorage.setItem("token", res.data.token);
        API.defaults.headers.common["Authorization"] = res.data.token;
      })
      .catch((err) => {
        console.error("Token geçersiz:", err);
        localStorage.removeItem("token");
        delete API.defaults.headers.common["Authorization"];
      });
  }
};

export const loginUser = (formData, navigate) => (dispatch) => {
  API.post("/login", formData)
    .then((res) => {
      dispatch({ type: "SET_USER", payload: res.data });
      API.defaults.headers.common["Authorization"] = res.data.token;
      if (formData.remember) {
        localStorage.setItem("token", res.data.token);
      } else {
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
