import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from '@mui/material';

const Row = (props) => {
    return (
        <TableRow 
            className={props.className} 
            onClick={props.onClick}
            arial-label="row container"
        >
            {props.children}
        </TableRow>
    )
};

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClick: PropTypes.func,
};

Row.defaultProps = {
    className: '',
    children: '',
    onClick: () => { },
};

export default Row;