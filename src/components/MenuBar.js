import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";

const MenuBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    News
                </Typography>
                <Button color="primary">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;
