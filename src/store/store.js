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

const persistedState = {
  shoppingCart: loadFromLocalStorage()
};

const reduxLogger = logger.logger || logger.default || logger;

export const store = createStore(
  rootReducer, 
  persistedState, 
  applyMiddleware(thunk, reduxLogger)
);

store.subscribe(() => {
  try {
    const state = store.getState();
    const stateToSave = state.shoppingCart;
    localStorage.setItem('shoppingCart', JSON.stringify(stateToSave));
  } catch (e) {
    console.warn("Local storage'a kaydedilemedi:", e);
  }
});