import React from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import {
    Snackbar,
    Alert,
    Stack,
    Grow,
} from '@mui/material';
import { closeNotification, } from '../../redux/action/notification';

const Notification = () => {
    const dispatch = useDispatch();

    const notification = useSelector((state) => state.notification);

    const handleCloseNotification = () => {
        dispatch(closeNotification());
    };

    return (
        <Stack 
            spacing={2} 
            sx={{ width: '100%' }}
            aria-label="notification"
        >
            <Snackbar
                open={notification.isOpen}
                onClose={handleCloseNotification}
                autoHideDuration={5000}
                transitionDuration={500}
                TransitionComponent={Grow}
                arial-label="notification bar"
            >
                <Alert
                    security={notification.status}
                    onClose={handleCloseNotification}
                    aria-label="notification content"
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
};

export default Notification;