import React from 'react';
import AppContainer from '../containers/AppContainer';
import useContact from '../util/useContact';

const IndexPage = () => {
    const [getContact, { isLoading, data }] = useContact()

    React.useEffect(() => {
        getContact();
    }, []);

    return (
        <AppContainer>
            <div>Hello World !</div>
        </AppContainer>
    );
};

export default IndexPage;