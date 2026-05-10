import { API } from "../../api/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });

export const fetchCategories = () => (dispatch) => {
  API.get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
    })
    .catch((err) => console.error("Kategoriler çekilemedi:", err));
};

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
      dispatch(setProducts(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Ürünler yüklenirken hata oluştu:", err);
      dispatch(setFetchState("NOT_FETCHED"));
    });
};

export const setProductDetail = (product) => ({ type: "SET_PRODUCT_DETAIL", payload: product });

export const fetchProductDetail = (productId) => (dispatch) => {
  dispatch({ type: "SET_FETCH_STATE", payload: "FETCHING" }); 
  
  API
    .get(`/products/${productId}`)
    .then((res) => {
      dispatch({ type: "SET_PRODUCT_DETAIL", payload: res.data }); 
      dispatch({ type: "SET_FETCH_STATE", payload: "FETCHED" });
    })
    .catch((err) => {
      console.error("Ürün detayı çekilemedi:", err);
      dispatch({ type: "SET_FETCH_STATE", payload: "ERROR" });
    });
};

