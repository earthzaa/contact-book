import { TYPE, } from '../action/contact';

const INITIAL_STATE = {
    id: '',
    name: '',
    profilePic: '',
    email: '',
    contactNo: '',
    bgPic: '',
    gender: '',
    bio: '',
};

const contactReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        default:
            return state;

        case TYPE.SET_CONTACT:
            return {
                id: payload.id || '',
                name: payload.name || '',
                profilePic: payload.profilePic || '',
                email: payload.email || '',
                contactNo: payload.contactNo || '',
                bgPic: payload.bgPic || '',
                bio: payload.bio || '',
                gender: payload.gender || '',
            };

        case TYPE.CLEAR_CONTACT:
            return INITIAL_STATE;
    };
};

export default contactReducer;