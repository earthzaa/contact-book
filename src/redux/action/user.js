export const TYPE = {
    SET_USER: 'SET_USER',
};

export const setUserInfo = (payload) => (dispatch) => dispatch({
    type: TYPE.SET_USER,
    payload,
});