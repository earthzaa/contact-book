import React from 'react';
import PropTypes from 'prop-types';
import { TextField, } from '@mui/material';

const TextInput = (props) => {
    if (props.type === 'textarea') {
        return (
            <TextField
                className={props.className}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                label={props.label}
                helperText={props.helpText}
                variant="filled"
                placeholder="typing..."
                inputProps={{
                    maxLength: props.maxLength,
                }}
                rows={4}
                error={props.require && props.isError}
                placeholder={props.placeholder}
                multiline
                fullWidth
            />
        );
    }
    else {
        return (
            <TextField
                className={props.className}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                label={props.label}
                helperText={props.helpText}
                variant="filled"
                inputProps={{
                    maxLength: props.maxLength,
                }}
                placeholder={props.placeholder}
                error={props.require && props.isError}
                fullWidth
            />
        );
    }
};

TextInput.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    isError: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    helpText: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    require: PropTypes.bool,
};

TextInput.defaultProps = {
    className: '',
    type: 'text',
    value: '',
    name: '',
    isError: false,
    onChange: () => { },
    label: 'input',
    helpText: 'text',
    maxLength: 50,
    placeholder: 'typing...',
    require: false,
};

export default TextInput;