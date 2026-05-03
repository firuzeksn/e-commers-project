import { API } from "../../api/axiosInstance";

// Action Types... (aynı kalıyor)
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

// Action Creators... (aynı kalıyor)
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });

// T12: Kategorileri Getir... (aynı kalıyor)
export const fetchCategories = () => (dispatch) => {
  API.get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
    })
    .catch((err) => console.error("Kategoriler çekilemedi:", err));
};

// T14: GÜNCELLENMİŞ Ürünleri Getir (Query Params Destekli)
export const fetchProducts = (category, filter, sort, limit = 25, offset = 0) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  
  const params = {
    limit,
    offset
  };
  
  if (category) params.category = category;
  if (filter) params.filter = filter;
  if (sort) params.sort = sort;

  API.get("/products", { params })
    .then((res) => {
      // API'den gelen verileri store'a yaz
      dispatch(setProducts(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Ürünler yüklenirken hata oluştu:", err);
      dispatch(setFetchState("NOT_FETCHED"));
    });
};

