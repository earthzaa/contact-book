import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../Form/TextInput';
import { INPUTS, GENDER, } from '../../constants/form';

const ContactCard = (props) => {
    const getGenderLabel = (type = '', value = '') => {
        if (!value) return '';
        else if (type === 'gender') return GENDER[value]?.label;
        else return value;
    };

    const RenderInput = (input = {}, index = 0) => {
        return (
            <TextInput
                className="mb-2"
                key={`${input.name}-${index}`}
                label={input.label.split('*')[0]}
                value={getGenderLabel(input.name, props[input.name])}
                variant="filled"
                type={input.name === 'address' ? 'textarea' : 'text'}
                disabled
            />
        )
    };

    return (
        <div className="contact-card-container" role="group" aria-label="contact info">
            <img
                className="contact-card-bg"
                src={props.bgPic}
                alt="contact background"
                onError={(e) => e.target.src = 'image-not-found.png'}
            />
            <div className="contact-card-image" aria-label="profile image container">
                <img
                    src={props.profilePic}
                    alt="contact profile"
                    onError={(e) => e.target.src = 'image-not-found.png'}
                />
            </div>
            <div className="contact-card-info" role="group" aria-label="info group">
                <TextInput 
                    className="mb-2"
                    label="ID"
                    value={props.id}
                    variant="filled"
                    disabled
                />
                {INPUTS.slice(2).map(RenderInput)}
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    id: PropTypes.string,
    profilePic: PropTypes.string,
    bgPic: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    contactNo: PropTypes.string,
    address: PropTypes.string,
    gender: PropTypes.string,
    alias: PropTypes.string,
};

ContactCard.defaultProps = {
    id: '',
    profilePic: '',
    bgPic: '',
    name: '',
    email: '',
    contactNo: '',
    address: '',
    gender: '',
    alias: '',
};

export default ContactCard;