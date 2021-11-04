import { TYPE, } from '../action/contact';

const INITIAL_STATE = {
    id: '',
    name: '',
    profilePic: '',
    email: '',
    contactNo: '',
    bgPic: '',
    gender: '',
    address: '',
    alias: '',
};

const contactReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        default:
            return state;

        case TYPE.SET_CONTACT:
            return {
                id: payload.id || INITIAL_STATE.id,
                name: payload.name || INITIAL_STATE.name,
                profilePic: payload.profilePic || INITIAL_STATE.profilePic,
                email: payload.email || INITIAL_STATE.email,
                contactNo: payload.contactNo || INITIAL_STATE.contactNo,
                bgPic: payload.bgPic || INITIAL_STATE.bgPic,
                address: payload.address || INITIAL_STATE.address,
                gender: payload.gender || INITIAL_STATE.gender,
                alias: payload.alias || INITIAL_STATE.alias,
            };

        case TYPE.CLEAR_CONTACT:
            return INITIAL_STATE;
    };
};

export default contactReducer;