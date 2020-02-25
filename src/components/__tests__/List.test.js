import "setupTests";

import React from "react";
import { shallow, mount } from "enzyme";
import providers from "sample/providers.json";

import List from "components/List";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

let wrapper;

beforeEach(() => {
    wrapper = mount(<List />);
});

afterEach(() => {
    wrapper.unmount();
});

describe('what the Table should look like', () => {
    it('should contain a Table component', () => {
        expect(wrapper.find(Table).length).toBe(1);
    });
    
    it('should contain a TableHead', () => {
        expect(wrapper.find(Table).find(TableHead).length).toBe(1);
    });

    it('should contain a header row with a TableCell for each category in the database, except for id', () => {
        const expectedNumCells = (Object.keys(providers[0])).length - 1;
        expect(wrapper.find(Table).find(TableHead).find(TableRow).find(TableCell).length).toBe(expectedNumCells);
    });
    
    it('should contain a TableBody', () => {
        expect(wrapper.find(Table).find(TableBody).length).toBe(1);
    });

    it(`should contain a Table with ${providers.length} TableRows in the TableBody`, () => {
        const expectedNumRows = providers.length;
        expect(wrapper.find(Table).find(TableBody).find(TableRow).length).toBe(expectedNumRows);
    });    
});