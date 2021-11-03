import { TYPE, } from '../action/notification';

const INITIAL_STATE = {
    isOpen: false,
    message: '',
    status: 'success',
};

const notificationReducer = (state = INITIAL_STATE, { type, payload, }) => {
    switch (type) {
        default:
            return state;

        case TYPE.SET_NOTIFICATION:
            return {
                ...state,
                isOpen: payload.isOpen || INITIAL_STATE.isOpen,
                message: payload.message || INITIAL_STATE.message,
                status: payload.status || INITIAL_STATE.status,
            };

        case TYPE.CLOSE_NOTIFICATION:
            return {
                ...state,
                isOpen: payload.isOpen,
            };

        case TYPE.CLEAR_NOTIFICATION:
            return INITIAL_STATE;
    }
};

export default notificationReducer;