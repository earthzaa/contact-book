import React from 'react';
import { useSelector, } from 'react-redux';
import { Typography, Button, ButtonGroup, } from '@mui/material';
import AppContainer from '../containers/AppContainer';
import Form from '../components/Form';

const FormContactPage = () => {
    const contact = useSelector((state) => state.contact);
    const isCreate = !contact.id;

    const handleCancel = () => {
        window.location.href = '/';
    };

    return (
        <AppContainer page>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Typography
                    variant="h3"
                    fontWeight="700"
                    color="primary"
                >
                    {isCreate ? 'Create Contact' : 'Edit Contact'}
                </Typography>
                <ButtonGroup>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleCancel}
                    >
                        Back
                    </Button>
                    <Button
                        color="primary"
                        variant="outlined"
                    >
                        {isCreate ? 'Create' : 'Update'}
                    </Button>
                </ButtonGroup>
            </div>
            <Form />
        </AppContainer>
    );
};

export default FormContactPage;