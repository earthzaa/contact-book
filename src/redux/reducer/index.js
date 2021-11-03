import { combineReducers, } from 'redux';
import contactReducer from "./contact";
import notificationReducer from './notification';

const rootReducer = {
    contact: contactReducer,
    notification: notificationReducer,
};

export default combineReducers(rootReducer);