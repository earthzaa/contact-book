import React from 'react';
import { TableBody, CircularProgress, Typography, } from '@mui/material';
import PropTypes from 'prop-types';
import Row from './Row';
import Cell from './Cell';
import ActionMenu from './ActionMenu';

const Body = (props) => {
    const RenderQuery = (query = {}, index = 0, item = {}) => (
        <Cell
            key={`${item[query]}-${query}-${index}`}
            onClick={() => props.onClickRow && props.onClickRow(item)}
        >
            {item[query]}
        </Cell>
    );

    const RenderCell = (item = {}, index = 0) => (
        <React.Fragment key={`${item?.id || ''}-${index}`}>
            {props.queries.map((query, queryIndex) => RenderQuery(query, queryIndex, item))}
            <Cell>
                <ActionMenu data={item} menu={props.actionMenu} />
            </Cell>
        </React.Fragment>
    );

    const RenderRow = (list = []) => list.map((item, index) => (
        <Row key={`${item}-${index}`}>{RenderCell(item, index)}</Row>
    ));

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
        else if (!props.data?.length) {
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