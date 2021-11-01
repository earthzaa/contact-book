import React from 'react';
import { TableBody, CircularProgress, Typography, } from '@mui/material';
import PropTypes from 'prop-types';
import Row from './Row';
import Cell from './Cell';
import ActionMenu from './ActionMenu';

const Body = (props) => {
    const RenderQuery = (data = {}) => props.queries.map((query, index) => (
        <Cell key={`${query}-${index}`} onClick={props.onClickRow}>{data[query]}</Cell>
    ));

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
                    <Cell className="text-center" colSpan={5}>
                        <CircularProgress />
                        <br />
                        <Typography color="primary" variant="caption">Loading ...</Typography>
                    </Cell>
                </Row>
            );
        }
        else if (props.data.length === 0) {
            return (
                <Row>
                    <Cell className="text-center" colSpan={5}>
                        <Typography color="inherit" variant="subtitle2">No data</Typography>
                    </Cell>
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
    onClickRow: PropTypes.func,
};

Body.defaultProps = {
    queries: [],
    data: [],
    isLoading: false,
    actionMenu: [],
    onClickRow: () => { },
};

export default Body;