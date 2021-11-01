import { combineReducers, } from 'redux';
import contactReducer from "./contact";

const rootReducer = {
    contact: contactReducer,
};

export default combineReducers(rootReducer);