export const TYPE = {
    SET_NOTIFICATION: 'SET_NOTIFICATION',
    CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
    CLOSE_NOTIFICATION: 'CLOSE_NOTIFICATION',
};

export const setNotification = (
    payload = { message: '', isOpen: false, status: 'success', }
) => ({
    type: TYPE.SET_NOTIFICATION,
    payload,
});

export const closeNotification = () => ({
    type: TYPE.CLOSE_NOTIFICATION,
    payload: { isOpen: false, },
});

export const clearNotification = () => ({
    type: TYPE.CLEAR_NOTIFICATION,
    payload: {},
});