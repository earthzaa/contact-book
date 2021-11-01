import React from 'react';
import {
    Table,
    TableContainer,
    Typography,
    IconButton,
} from '@mui/material';
import { AddCircle, } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';

const CustomTable = (props) => {
    return (
        <TableContainer>
            <div className="d-flex align-items-center justify-content-between">
                <Typography color="primary" variant="h3" fontWeight="700">
                    Contact People
                </Typography>
                <IconButton onClick={props.onCreate}>
                    <AddCircle />
                </IconButton>
            </div>
            <Table>
                <Header data={props.headers} />
                <Body
                    data={props.data}
                    isLoading={props.isLoading}
                    queries={props.queries}
                    actionMenu={props.actionMenu}
                />
            </Table>
        </TableContainer>
    );
};

CustomTable.propTypes = {
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    queries: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    onCreate: PropTypes.func,
    actionMenu: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        text: PropTypes.string,
        func: PropTypes.func,
    })),
};

CustomTable.defaultProps = {
    headers: [],
    queries: [],
    data: [],
    isLoading: false,
    onCreate: () => { },
    actionMenu: [],
};

export default CustomTable;