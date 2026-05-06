import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import logger from 'redux-logger'; 
import shoppingCartReducer from './reducers/shoppingCartReducer';
import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});

// 1. Local Storage'dan Sepet ve Favori verilerini oku
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('shoppingCart');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Local storage verisi okunamadı:", e);
    return undefined;
  }
};

// 2. Başlangıç state'ini ayarla
const persistedState = {
  shoppingCart: loadFromLocalStorage()
};

// 3. Logger fonksiyonunu güvenli bir şekilde belirle
const reduxLogger = logger.logger || logger.default || logger;

export const store = createStore(
  rootReducer, 
  persistedState, // Sayfa yüklendiğinde local storage verisini içine basıyoruz
  applyMiddleware(thunk, reduxLogger)
);

// 4. State her değiştiğinde sadece shoppingCart kısmını Local Storage'a kaydet
store.subscribe(() => {
  try {
    const state = store.getState();
    const stateToSave = state.shoppingCart;
    localStorage.setItem('shoppingCart', JSON.stringify(stateToSave));
  } catch (e) {
    console.warn("Local storage'a kaydedilemedi:", e);
  }
});