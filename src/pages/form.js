import React from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import Form from '../components/Form';
import { clearContactInfo, } from '../redux/action/contact';
import useContact from '../util/useContact';
import { INPUTS, } from '../constants/form';
import { setNotification, } from '../redux/action/notification';

const FormContactPage = () => {
    const dispatch = useDispatch();

    const contact = useSelector((state) => state.contact);
    const [{ createData, updateData, }, { isLoading, }] = useContact();

    const isCreate = !contact.id;

    const clearContact = () => dispatch(clearContactInfo());

    const goToIndexPage = () => {
        window.location.href = '/'
        setTimeout(() => clearContact(), 500);
    };

    const handleSubmitContact = async (formContact = {}) => {
        try {
            const submitForm = {
                bgPic: formContact.bgPic || '',
                profilePic: formContact.profilePic || '',
                name: formContact.name || '',
                email: formContact.email || '',
                contactNo: formContact.contactNo || '',
                gender: formContact.gender || '',
                address: formContact.address || '',
                alias: formContact.alias || '',
            };

            if (isCreate) await createData(submitForm);
            else await updateData(formContact.id || '', submitForm);

            dispatch(setNotification({
                isOpen: true,
                message: isCreate ? 'Create contact success' : 'Update contact success',
                status: 'success',
            }));

            goToIndexPage();
        }
        catch (error) {
            console.log('create contact ->', error);
        }
    };

    return (
        <AppContainer page>
            <Form
                inputs={INPUTS}
                initData={contact}
                title={isCreate ? 'Create Contact' : 'Update Contact'}
                submitText={isCreate ? 'Create' : 'Update'}
                cancelText="Back"
                onSubmit={handleSubmitContact}
                onCancel={goToIndexPage}
                disabledSubmit={isCreate}
                isLoading={isLoading}
            />
        </AppContainer>
    );
};

export default FormContactPage;