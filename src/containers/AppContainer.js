import React from 'react';
import PropTypes from 'prop-types';
import { Provider, } from 'react-redux';
import { store, } from '../redux/store';

const AppContainer = (props) => {
    const { children } = props;

    return (
        <Provider store={store}>
            <div>{children}</div>
        </Provider>
    );
};

AppContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContainer;