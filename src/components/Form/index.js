import React from 'react';
import { Paper, } from '@mui/material';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import ImageUpload from './ImageUpload';
import FormAction from './FormAction';
import { EMAIL, } from '../../constants/regex';

const CustomForm = (props) => {
    const bgPic = props.inputs[0];
    const profilePic = props.inputs[1];
    const infoInputs = props.inputs.slice(2);

    const [form, setForm] = React.useState(props.initData);
    const [formError, setFormError] = React.useState({});
    const [disabledAction, setDisabledAction] = React.useState(props.disabled);

    const handleErrorForm = (name = '', value = '', type = 'text') => {
        let isError = false;

        if (type === 'email') isError = !EMAIL.test(value);
        else isError = !Boolean(value);

        setFormError((prevState) => ({
            ...prevState,
            [name]: isError,
        }));
    };

    const handleChangeInput = (event = {}) => {
        const { name, type, } = event.target;
        let { value, } = event.target;

        if (name === 'contactNo') value = value.toUpperCase();

        handleErrorForm(name, value, type);
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => props.onSubmit(form);

    const validateFormToSubmit = () => {
        const keys = Object.keys(formError);
        const inputsRequire = props.inputs.filter((input) => input.require);
        const inputsValid = keys.filter((key) =>
            inputsRequire.find((input) => key === input.name && !formError[key])
        );
        const isValidToAction = inputsValid.length === inputsRequire.length;

        setDisabledAction(!isValidToAction);
    };

    React.useEffect(() => {
        props.inputs.forEach((input) => {
            const { name, type, } = input;

            handleErrorForm(name, props.initData[name], type);
        });
    }, []);

    React.useEffect(() => {
        validateFormToSubmit();
    }, [formError]);

    const RenderInput = (input, index) => (
        <TextInput
            className="mb-2"
            type={input.type}
            key={`${input.name}-${index}`}
            name={input.name}
            value={form[input.name]}
            onChange={handleChangeInput}
            label={input.label}
            isError={Boolean(formError[input.name])}
            helpText={input.helpText}
            maxLength={input.maxLength}
            placeholder={input.placeholder}
            require={input.require}
            options={input.options || []}
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
                disabled={disabledAction}
                isLoading={props.isLoading}
            />
            <ImageUpload
                id="input-upload-profile-bg"
                className="border rounded"
                label={bgPic.label}
                src={form[bgPic.name]}
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
                        src={form[profilePic.name]}
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
    disabledSubmit: PropTypes.bool,
    submitText: PropTypes.string,
    cancelText: PropTypes.string,
    title: PropTypes.string,
    isLoading: PropTypes.bool,
};

CustomForm.defaultProps = {
    inputs: [],
    initData: {},
    onSubmit: () => { },
    onCancel: () => { },
    disabledSubmit: false,
    submitText: 'Submit',
    cancelText: 'Cancel',
    title: 'Title',
    isLoading: false,
};

export default CustomForm;