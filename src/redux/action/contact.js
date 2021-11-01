export const TYPE = {
    SET_CONTACT: 'SET_CONTACT',
};

export const setContactInfo = (payload) => (dispatch) => dispatch({
    type: TYPE.SET_CONTACT,
    payload,
});