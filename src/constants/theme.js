import { createTheme, } from '@mui/material';

const primary = {
    main: '#9c27b0',
};

const secondary = {
    main: '#00b0ff',
};

const palette = {
    primary,
    secondary,
};

const theme = createTheme({
    palette,
});

export default theme;