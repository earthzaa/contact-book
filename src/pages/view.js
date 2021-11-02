import React from 'react';
import AppContainer from '../containers/AppContainer';
import FormAction from '../components/Form/FormAction';

const ViewPage = () => {
    const goToIndexPage = () => {
        window.location.href = '/';
    };

    return (
        <AppContainer page>
            <FormAction
                title="View Contact"
                cancelText="Back"
                onCancel={goToIndexPage}
                view
            />
        </AppContainer>
    );
};

export default ViewPage;