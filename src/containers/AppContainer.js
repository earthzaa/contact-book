import React from 'react';
import { ThemeProvider, Paper, CssBaseline, } from '@mui/material'
import PropTypes from 'prop-types';
import theme from '../constants/theme';

const AppContainer = (props) => {
    const { children } = props;

    return (
        <React.Fragment>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main className={`container p-3 ${props.className}`}>
                    {
                        props.page ?
                            <Paper className="mt-5 p-4">
                                {children}
                            </Paper>
                            : <React.Fragment>{children}</React.Fragment>
                    }
                </main>
            </ThemeProvider>
        </React.Fragment>
    );
};

AppContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    page: PropTypes.bool,
};

AppContainer.defaultProps = {
    className: '',
    children: <React.Fragment></React.Fragment>,
    page: false,
};

export default AppContainer;