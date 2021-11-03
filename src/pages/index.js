import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { Edit, Delete, Visibility, } from '@mui/icons-material'
import AppContainer from '../containers/AppContainer';
import useContact from '../util/useContact';
import Table from '../components/Table';
import DialogConfirm from '../components/DialogConfirm';
import { setContactInfo, clearContactInfo, } from '../redux/action/contact';
import { setNotification, } from '../redux/action/notification';

const IndexPage = () => {
    const dispatch = useDispatch();

    const contactInfo = useSelector((state) => state.contact);

    const [api, { isLoading }] = useContact();
    const [contacts, setContacts] = React.useState([]);
    const [isOpenDialog, setIsOpenDialog] = React.useState(false);

    const fetchContact = async () => {
        const data = await api.getData();

        setContacts(data);
    };

    const handleClickDeleteContact = (contact = {}) => {
        dispatch(setContactInfo(contact));
        setIsOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setIsOpenDialog(false);
        dispatch(clearContactInfo());
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

    const handleDeleteContact = async () => {
        try {
            const { id } = contactInfo;

            await api.deleteData(id);
            await fetchContact();
            handleCloseDialog();
        }
        catch (error) {
            console.log('delete contact ->', error);
        }
    };

    React.useEffect(() => {
        fetchContact();
        dispatch(setNotification({ isOpen: true, message: 'Alert', }))
    }, []);

    return (
        <AppContainer page>
            <DialogConfirm
                isOpen={isOpenDialog}
                onClose={handleCloseDialog}
                onDecline={handleCloseDialog}
                onAccept={handleDeleteContact}
                title="Do you want to delete contact ?"
                contentText={`Contact "${contactInfo.id} (${contactInfo.name} )" will lost forever.`}
            />
            <Table
                headers={['id', 'name', 'email', 'contact', 'action']}
                queries={['id', 'name', 'email', 'contactNo']}
                actionMenu={[
                    { icon: <Visibility fontSize="8px" />, text: 'view', onClick: handleViewContact, },
                    { icon: <Edit fontSize="8px" />, text: 'edit', onClick: handleEditContact, },
                    { icon: <Delete fontSize="8px" />, text: 'delete', onClick: handleClickDeleteContact, }
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