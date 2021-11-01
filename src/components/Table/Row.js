import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from '@mui/material';

const Row = (props) => {
    return (
        <TableRow 
            className={props.className} 
            key={props.key}
            onClick={props.onClick}
        >
            {props.children}
        </TableRow>
    )
};

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    key: PropTypes.string,
    onClick: PropTypes.func,
};

Row.defaultProps = {
    className: '',
    children: '',
    key: '',
    onClick: () => { },
};

export default Row;