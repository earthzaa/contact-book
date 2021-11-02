import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../Form/TextInput';
import { INPUTS, GENDER, } from '../../constants/form';

const ContactCard = (props) => {
    const getGenderLabel = (type = '', value = '') => {
        if (!value) return '';
        else if (type === 'gender') return GENDER[type];
        else return value;
    };

    const RenderInput = (input = {}, index = 0) => {
        return (
            <TextInput
                className="mb-2"
                key={`${input.name}-${index}`}
                label={input.label.split('*')[0]}
                value={getGenderLabel(input.name, props[input.name])}
                variant="standard"
                disabled
            />
        )
    };

    return (
        <div
            className="contact-card-container"
            style={{
                backgroundImage: props.bgPic,
            }}
        >
            <div className="contact-card-image">
                <img src={props.profilePic} alt="contact-profile" />
            </div>
            <div className="contact-card-info">
                {INPUTS.slice(2).map(RenderInput)}
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    profilePic: PropTypes.string,
    bgPic: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    contactNo: PropTypes.string,
    address: PropTypes.string,
    gender: PropTypes.string,
};

ContactCard.defaultProps = {
    profilePic: '',
    bgPic: '',
    name: '',
    email: '',
    contactNo: '',
    address: '',
    gender: '',
};

export default ContactCard;