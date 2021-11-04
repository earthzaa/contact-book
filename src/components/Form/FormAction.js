import React from 'react';
import {
    Typography,
    Button,
    ButtonGroup,
} from '@mui/material';
import PropTypes from 'prop-types';

const FormAction = (props) => {
    return (
        <div 
            className="d-flex justify-content-between align-items-center mb-3"
            aria-label="form action"
            role="toolbar"
        >
            <Typography
                variant="h3"
                fontWeight="700"
                color="primary"
            >
                {props.title}
            </Typography>
            <ButtonGroup>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={props.onCancel}
                    disabled={props.isLoading}
                >
                    {props.cancelText}
                </Button>
                {
                    !props.view &&
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={props.onSubmit}
                        disabled={props.disabled || props.isLoading}
                    >
                        {props.submitText}
                    </Button>
                }
            </ButtonGroup>
        </div>
    );
};

FormAction.propTypes = {
    submitText: PropTypes.string,
    cancelText: PropTypes.string,
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    view: PropTypes.bool,
};

FormAction.defaultProps = {
    title: 'Title',
    cancelText: 'Cancel',
    submitText: 'Submit',
    onSubmit: () => { },
    onCancel: () => { },
    disabled: false,
    isLoading: false,
    view: false,
};

export default FormAction;