export const TYPE = {
    SET_CONTACT: 'SET_CONTACT',
};

export const setContactInfo = (payload) => ({
    type: TYPE.SET_CONTACT,
    payload,
});