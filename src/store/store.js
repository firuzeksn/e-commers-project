import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
// Logger'ı bu şekilde import etmeyi dene:
import logger from 'redux-logger'; 

import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});

// EĞER konsoldaki o obje yapısı devam ederse, 
// applyMiddleware içine "logger" yerine "logger.default" veya "logger.logger" yazmamız gerekebilir.
// Ama önce şunu dene:

export const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger.logger || logger) // Objenin içindeki logger fonksiyonunu bulur
);