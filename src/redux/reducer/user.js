const INITIAL_STATE = {
    id: '',
    name: '',
    profilePic: '',
    email: '',
    contactNo: '',
};

export default function formReducer(state = INITIAL_STATE, { type, action }) {
    switch(type) {
        default: 
            return state;
    };
};