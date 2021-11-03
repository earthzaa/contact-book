import React from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material';

const TextInput = (props) => {
    if (props.type === 'select') {
        return (
            <FormControl className={`${props.className} mt-1 mb-4`} fullWidth>
                <InputLabel>{props.label}</InputLabel>
                <Select
                    name={props.name}
                    onChange={props.onChange}
                    value={props.value}
                    variant={props.variant}
                    autoComplete="none"
                >
                    {
                        props.options.map((option, index) => (
                            <MenuItem
                                key={`${option.value}-${index}`}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))
                    }
                </Select>
                <FormHelperText>{props.helpText}</FormHelperText>
            </FormControl>
        );
    }
    else if (props.type === 'textarea') {
        return (
            <TextField
                className={props.className}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                label={props.label}
                helperText={props.helpText}
                variant={props.variant}
                inputProps={{
                    maxLength: props.maxLength,
                }}
                rows={4}
                error={props.require && props.isError}
                placeholder={props.placeholder}
                disabled={props.disabled}
                autoComplete="none"
                autoCapitalize={props.autoCapitalize}
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
                variant={props.variant}
                inputProps={{
                    maxLength: props.maxLength,
                }}
                placeholder={props.placeholder}
                error={props.require && props.isError}
                disabled={props.disabled}
                autoComplete="none"
                autoCapitalize={props.autoCapitalize}
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
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
    })),
    autoCapitalize: PropTypes.string,
};

TextInput.defaultProps = {
    className: '',
    type: 'text',
    value: '',
    name: '',
    isError: false,
    onChange: () => { },
    label: 'input',
    helpText: '',
    maxLength: 50,
    placeholder: 'typing...',
    require: false,
    disabled: false,
    variant: 'filled',
    options: [],
    autoCapitalize: 'off',
};

export default TextInput;