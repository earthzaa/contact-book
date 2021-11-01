import React from 'react';
import PropTypes from 'prop-types';
import { TextField, } from '@mui/material';

const TextInput = (props) => {
    return (
        <TextField
            type="text"
        />
    )
};

TextInput.propTypes = {
    data: PropTypes.object,
};

TextInput.defaultProps = {
    data: {},
};

export default TextInput;