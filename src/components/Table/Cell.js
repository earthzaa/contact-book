import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@mui/material';

const Cell = (props) => {
    return (
        <TableCell
            className={props.className}
            key={props.key}
            colSpan={props.colSpan}
            onClick={props.onClick}
        >
            {props.children}
        </TableCell>
    )
};

Cell.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    key: PropTypes.string,
    colSpan: PropTypes.number,
    onClick: PropTypes.func,
};

Cell.defaultProps = {
    className: '',
    children: '',
    key: '',
    colSpan: 1,
    onClick: () => { },
};

export default Cell;