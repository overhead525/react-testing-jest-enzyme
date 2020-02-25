import "setupTests";

import React from "react";
import { shallow, mount } from "enzyme";

import MenuBar from "components/MenuBar";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

let wrapper;

beforeEach(() => {
    wrapper = mount(<MenuBar />);
});

afterEach(() => {
    wrapper.unmount();
});

describe('The function of the Menu Component', () => {
    it('should contain an AppBar child', () => {
        expect(wrapper.find(AppBar).length).toBe(1);
    });

    it('should contain a ToolBar child', () => {
        expect(wrapper.find(AppBar).find(ToolBar).length).toBe(1);
    });

    it('should contain a ToolBar with a [IconButton, Typography, Button]', () => {
        expect(wrapper.find(AppBar).find(ToolBar).find(IconButton).length).toBe(1);
        expect(wrapper.find(AppBar).find(ToolBar).find(Typography).length).toBe(1);
        expect(wrapper.find(AppBar).find(ToolBar).find(Button).length).toBe(1);
    });
});
