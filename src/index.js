import React from 'react';
import { Provider, } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './pages/app';
import { store, } from './redux/store';
import './style/index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);