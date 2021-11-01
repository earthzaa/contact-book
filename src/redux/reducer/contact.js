import { TYPE, } from '../action/contact';

const INITIAL_STATE = {
    id: '',
    name: '',
    profilePic: '',
    email: '',
    contactNo: '',
};

const contactReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        default:
            return state;

        case TYPE.SET_CONTACT:
            return {
                ...state,
                id: payload.id || '',
                name: payload.name || '',
                profilePic: payload.profilePic || '',
                email: payload.email || '',
                contactNo: payload.contactNo || '',
            };
    };
};

export default contactReducer;