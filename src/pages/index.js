import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { 
    Edit, 
    Delete, 
    Visibility, 
    EmojiPeople,
} from '@mui/icons-material'
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
        setTimeout(() => dispatch(clearContactInfo()), 500);
    };

    const goToFormPage = () => {
        setTimeout(() => window.location.href = '/form', 500);
    };

    const goToViewPage = () => {
        setTimeout(() => window.location.href = '/view', 500);
    };

    const goTo404Page = () => {
        window.location.href = '/help';
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

    const subStringText = (text = '', max = 0) => (
        text.length >= max ? text.substring(0, max).concat('...') : text
    )

    const handleDeleteContact = async () => {
        try {
            const { id } = contactInfo;

            await api.deleteData(id);
            handleCloseDialog();
            dispatch(setNotification({
                isOpen: true,
                message: `Delete contact "${subStringText(contactInfo.name, 20)}" success`,
                status: 'success',
            }));
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
            <DialogConfirm
                isOpen={isOpenDialog}
                onClose={handleCloseDialog}
                onDecline={handleCloseDialog}
                onAccept={handleDeleteContact}
                title={`Do you want to delete "${subStringText(contactInfo.name, 20)}" ?`}
                contentText={`If answer "Yes", contact's name "${subStringText(contactInfo.name, 20)}" will lost forever.`}
                disabled={isLoading}
            />
            <Table
                title="Contact Book"
                headers={['ID', 'Name', 'Email', 'Contact', 'Action']}
                queries={['id', 'name', 'email', 'contactNo']}
                actionMenu={[
                    { icon: <Visibility fontSize="8px" />, text: 'view', onClick: handleViewContact, },
                    { icon: <Edit fontSize="8px" />, text: 'edit', onClick: handleEditContact, },
                    { icon: <Delete fontSize="8px" />, text: 'delete', onClick: handleClickDeleteContact, },
                    { icon: <EmojiPeople fontSize="8px" />, text: 'help', onClick: goTo404Page, }
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