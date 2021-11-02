export const TYPE = {
    SET_CONTACT: 'SET_CONTACT',
    CLEAR_CONTACT: 'CLEAR_CONTACT',
};

export const setContactInfo = (payload) => ({
    type: TYPE.SET_CONTACT,
    payload,
});

export const clearContactInfo = () => ({
    type: TYPE.CLEAR_CONTACT,
    payload: {},
});