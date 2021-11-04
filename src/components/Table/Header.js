import React from 'react';
import { TableHead, Typography, } from '@mui/material';
import PropTypes from 'prop-types';
import Row from './Row';
import Cell from './Cell';

const Header = (props) => {
    const RenderCell = (value = '', index = 0) => {
        return (
            <Cell key={`${value}-${index}`}>
                <Typography color="black" fontWeight="600">{value}</Typography>
            </Cell>
        );
    };

    return (
        <TableHead aria-label="table header">
            <Row>
                {props.data.map(RenderCell)}
            </Row>
        </TableHead>
    );
};

Header.propTypes = {
    data: PropTypes.array.isRequired,
};

Header.defaultProps = {
    data: [],
};

export default Header;