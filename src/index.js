import React from 'react';
import { Provider, } from 'react-redux';
import { PersistGate, } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom';
import App from './pages/app';
import { store, persistor, } from './redux/store';
import './style/index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);