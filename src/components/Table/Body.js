import React from 'react';
import { TableBody, } from '@mui/material';
import PropTypes from 'prop-types';
import Row from './Row';
import Cell from './Cell';
import ActionMenu from './ActionMenu';

const Body = (props) => {
    const RenderQuery = (data = {}) => {
        return props.queries.map((query, index) => (
            <Cell
                key={`${query}-${index}`}
            >
                {data[query]}
            </Cell>
        ));
    };

    const RenderCell = (index = 0) => {
        return (
            <React.Fragment>
                {props.data.map((data) => RenderQuery(data))}
                <Cell>
                    <ActionMenu data={props.data[index]} menu={props.actionMenu} />
                </Cell>
            </React.Fragment>
        );
    };

    const RenderRow = (rows = []) => {
        return rows.map((row, index) => (
            <Row
                key={`${row}-${index}`}
            >
                {RenderCell(index)}
            </Row>
        ));
    };

    const RenderBody = () => {
        if (props.isLoading) {
            return (
                <Row>
                    <Cell colSpan={4}>Loading ...</Cell>
                </Row>
            );
        }
        else if (props.data.length === 0) {
            return (
                <Row>
                    <Cell colSpan={4}>No data</Cell>
                </Row>
            )
        }
        else {
            return RenderRow(props.data);
        }
    };

    return (
        <TableBody>
            {RenderBody()}
        </TableBody>
    );
};

Body.propTypes = {
    data: PropTypes.array.isRequired,
    queries: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    actionMenu: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        text: PropTypes.string,
        func: PropTypes.func,
    })),
};

Body.defaultProps = {
    queries: [],
    data: [],
    isLoading: false,
    actionMenu: [],
};

export default Body;