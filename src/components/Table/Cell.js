import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@mui/material';

const Cell = (props) => {
    return (
        <TableCell
            className={props.className}
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
    colSpan: PropTypes.number,
    onClick: PropTypes.func,
};

Cell.defaultProps = {
    className: '',
    children: '',
    colSpan: 1,
    onClick: () => { },
};

export default Cell;