import React from 'react';
import { Paper, } from '@mui/material';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import ImageUpload from './ImageUpload';
import FormAction from './FormAction';

const CustomForm = (props) => {
    const bgPic = props.inputs[0];
    const profilePic = props.inputs[1];
    const infoInputs = props.inputs.slice(2);

    const [form, setForm] = React.useState(props.initData);
    const [formError, setFormError] = React.useState({});

    const handleChangeInput = (event) => {
        const { name, value, type, } = event.target;

        console.log(name, type);

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = () => props.onSubmit(form);

    const RenderInput = (input, index) => (
        <TextInput
            className="mb-2"
            type={input.type}
            key={`${input.name}-${index}`}
            name={input.name}
            value={form[input.name]}
            onChange={handleChangeInput}
            label={input.label}
            isError={formError[input.name] || false}
            helpText={input.helpText}
            maxLength={input.maxLength}
            placeholder={input.placeholder}
        />
    );

    return (
        <form className="m-2">
            <FormAction
                title={props.title}
                submitText={props.submitText}
                cancelText={props.cancelText}
                onSubmit={handleSubmit}
                onCancel={props.onCancel}
                disabled={props.disabled}
            />
            <ImageUpload
                id="input-upload-profile-bg"
                className="border rounded"
                label={bgPic.label}
                src={bgPic.value}
                height="300px"
                width="100%"
                name={bgPic.name}
                onChange={handleChangeInput}
            />
            <div className="contact-info-container">
                <Paper className="contact-info">
                    <ImageUpload
                        id="input-upload-profile-img"
                        className="contact-profile-img"
                        label={profilePic.label}
                        src={profilePic.value}
                        height="300px"
                        width="300px"
                        name={profilePic.name}
                        onChange={handleChangeInput}
                    />
                    <div className="d-flex flex-wrap">{infoInputs.map(RenderInput)}</div>
                </Paper>
            </div>
        </form>
    );
};

CustomForm.propTypes = {
    inputs: PropTypes.array.isRequired,
    initData: PropTypes.object,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    disabled: PropTypes.bool,
    submitText: PropTypes.string,
    cancelText: PropTypes.string,
    title: PropTypes.string,
};

CustomForm.defaultProps = {
    inputs: [],
    initData: {},
    onSubmit: () => { },
    onCancel: () => { },
    disabled: false,
    submitText: 'Submit',
    cancelText: 'Cancel',
    title: 'Title',
};

export default CustomForm;