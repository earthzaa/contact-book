import React from 'react';
import { Typography, } from '@mui/material';
import { SentimentDissatisfied } from '@mui/icons-material';
import AppContainer from '../containers/AppContainer';

const PageNotFound = () => {
    return (
        <AppContainer className="page-not-found">
            <SentimentDissatisfied className="icon-sad" color="primary" />
            <Typography
                variant="h4"
                color="primary"
                fontWeight="700"
            >
                Page not found !
            </Typography>
        </AppContainer>
    );
};

export default PageNotFound;