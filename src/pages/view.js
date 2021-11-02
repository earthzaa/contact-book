import React from 'react';
import { useSelector, } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import FormAction from '../components/Form/FormAction';
import ContactCard from '../components/ContactCard';

const ViewPage = () => {
    const contact = useSelector((state) => state.contact);

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
            <ContactCard
                profilePic={contact.profilePic}
                bgPic={contact.bgPic}
                name={contact.name}
                email={contact.email}
                contactNo={contact.contactNo}
                gender={contact.gender}
                address={contact.address}
            />
        </AppContainer>
    );
};

export default ViewPage;