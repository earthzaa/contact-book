import { createStore } from 'redux';
import { persistReducer, persistStore, } from 'redux-persist';
import rootReducer from './reducer';
import { PERSIST_CONFIG, } from '../constants/redux';

const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);

export const store = createStore(persistedReducer, {});

export const persistor = persistStore(store);
