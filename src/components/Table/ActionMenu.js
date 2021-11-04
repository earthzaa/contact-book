import React from 'react';
import {
    Menu,
    MenuItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Fade,
} from '@mui/material';
import { MoreVert, } from '@mui/icons-material';
import PropTypes from 'prop-types';

const ActionMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleCloseMenu = () => setAnchorEl(null);

    const handleClickMenuItem = (callback = () => { }) => {
        handleCloseMenu();
        callback(props.data);
    };

    const handleSetAnchorEl = (event) => setAnchorEl(event.currentTarget);

    const RenderMenu = () => {
        return props.menu.map((item, index) => (
            <MenuItem
                key={`${item.text}-${index}`}
                onClick={() => handleClickMenuItem(item.onClick)}
                arial-label="action menu list"
                role="listitem"
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
            </MenuItem>
        ));
    };

    return (
        <React.Fragment>
            <IconButton 
                title="Action Toggle"
                onClick={handleSetAnchorEl} 
                arial-label="action toggle"
            >
                <MoreVert />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                TransitionComponent={Fade}
                arial-label="action menu"
                role="list"
            >
                {RenderMenu()}
            </Menu>
        </React.Fragment>
    );
};

ActionMenu.propTypes = {
    data: PropTypes.object,
    menu: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        text: PropTypes.string,
        onClick: PropTypes.func,
    })),
};

ActionMenu.defaultProps = {
    data: {},
    menu: [],
};

export default ActionMenu;