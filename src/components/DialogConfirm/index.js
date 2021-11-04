import React from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button,
} from '@mui/material';

const DialogConfirm = (props) => {
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.onClose}
            aria-label="dialog confirm"
            role="dialog"
        >
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.contentText}</DialogContentText>
            </DialogContent>
            <DialogActions aria-label="dialog action">
                <Button 
                    onClick={props.onDecline} 
                    variant="contained" 
                    color="primary"
                    disabled={props.disabled}
                >
                    {props.declineText}
                </Button>
                <Button 
                    onClick={props.onAccept} 
                    variant="outlined" 
                    color="primary"
                    disabled={props.disabled}
                >
                    {props.acceptText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

DialogConfirm.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    contentText: PropTypes.string,
    acceptText: PropTypes.string,
    declineText: PropTypes.string,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
    onDecline: PropTypes.func,
    disabled: PropTypes.bool,
};

DialogConfirm.defaultProps = {
    isOpen: false,
    title: 'Title',
    contentText: 'Content',
    acceptText: 'Yes',
    declineText: 'No',
    onClose: () => { },
    onDecline: () => { },
    onAccept: () => { },
    disabled: false,
};

export default DialogConfirm;