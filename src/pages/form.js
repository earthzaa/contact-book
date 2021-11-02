import React from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import Form from '../components/Form';
import { clearContactInfo, } from '../redux/action/contact';
import useContact from '../util/useContact';
import { INPUTS, } from '../constants/form';

const FormContactPage = () => {
    const dispatch = useDispatch();

    const contact = useSelector((state) => state.contact);
    const [{ createData, updateData, }, { isLoading, }] = useContact();

    const isCreate = !contact.id;

    const clearContact = () => dispatch(clearContactInfo());

    const goToIndexPage = () => {
        clearContact();
        setTimeout(() => window.location.href = '/', 500);
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
                bio: formContact.bio || '',
            };

            if (isCreate) await createData(submitForm);
            else await updateData(formContact.id, submitForm);

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
                disabled={isLoading}
            />
        </AppContainer>
    );
};

export default FormContactPage;