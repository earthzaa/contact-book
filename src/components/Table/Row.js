import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from '@mui/material';

const Row = (props) => {
    return <TableRow className={props.className} key={props.key}>{props.children}</TableRow>
};

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    key: PropTypes.string,
};

Row.defaultProps = {
    className: '',
    children: '',
    key: '',
};

export default Row;