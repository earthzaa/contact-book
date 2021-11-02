import React from 'react';
import { useDispatch, } from 'react-redux';
import { Edit, Delete, Visibility, } from '@mui/icons-material'
import AppContainer from '../containers/AppContainer';
import useContact from '../util/useContact';
import Table from '../components/Table';
import { setContactInfo, clearContactInfo, } from '../redux/action/contact';

const IndexPage = () => {
    const dispatch = useDispatch();

    const [api, { isLoading }] = useContact();
    const [contacts, setContacts] = React.useState([]);

    const fetchContact = async () => {
        const data = await api.getData();

        setContacts(data);
    };

    const goToFormPage = () => {
        setTimeout(() => window.location.href = '/form', 500);
    };

    const goToViewPage = () => {
        setTimeout(() => window.location.href = '/view', 500);
    };

    const handleViewContact = (contact = {}) => {
        dispatch(setContactInfo(contact));
        goToViewPage();
    };

    const handleCreateContact = async () => {
        dispatch(clearContactInfo());
        goToFormPage();
    };

    const handleEditContact = async (contact = {}) => {
        dispatch(setContactInfo(contact));
        goToFormPage();
    };

    const handleDeleteContact = async (contact = {}) => {
        try {
            const { id } = contact;

            await api.deleteData(id);
            await fetchContact();
        }
        catch (error) {
            console.log('delete contact ->', error);
        }
    };

    React.useEffect(() => {
        fetchContact();
    }, []);

    return (
        <AppContainer page>
            <Table
                headers={['id', 'name', 'email', 'contact', 'action']}
                queries={['id', 'name', 'email', 'contactNo']}
                actionMenu={[
                    { icon: <Visibility fontSize="8px" />, text: 'view', onClick: handleViewContact, },
                    { icon: <Edit fontSize="8px" />, text: 'edit', onClick: handleEditContact, },
                    { icon: <Delete fontSize="8px" />, text: 'delete', onClick: handleDeleteContact, }
                ]}
                data={contacts}
                isLoading={isLoading}
                onCreate={handleCreateContact}
                onClickBody={handleViewContact}
            />
        </AppContainer>
    );
};

export default IndexPage;