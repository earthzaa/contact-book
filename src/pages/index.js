import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { Edit, Delete, } from '@mui/icons-material'
import AppContainer from '../containers/AppContainer';
import useContact from '../util/useContact';
import Table from '../components/Table';
import { setContactInfo, } from '../redux/action/contact';

const IndexPage = () => {
    const dispatch = useDispatch();

    const [api, { isLoading, }] = useContact();
    const userContact = useSelector((state) => state);
    const [contacts, setContacts] = React.useState([]);

    const fetchContact = async () => {
        const data = await api.getData();

        setContacts(data);
    };

    const handleCreateContact = async () => {

    };

    const handleEditContact = async (contact = {}) => {
        dispatch(setContactInfo(contact));
    };

    const handleDeleteContact = async (contact = {}) => {

    };

    React.useEffect(() => {
        fetchContact();
    }, []);

    console.log(userContact)

    return (
        <AppContainer>
            <Table
                headers={['id', 'name', 'email', 'contact', 'action']}
                queries={['id', 'name', 'email', 'contact']}
                actionMenu={[
                    { icon: <Edit fontSize="8px" />, text: 'edit', func: handleEditContact, },
                    { icon: <Delete fontSize="8px" />, text: 'delete', func: handleDeleteContact, }
                ]}
                data={contacts}
                isLoading={isLoading}
                onCreate={handleCreateContact}
            />
        </AppContainer>
    );
};

export default IndexPage;