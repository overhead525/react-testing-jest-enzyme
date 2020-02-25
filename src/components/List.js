import React from "react";
import providers from "sample/providers.json";

import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
});

const List = () => {
    const classes = useStyles();

    const renderHeaderCells = () => {
        const newArr = Object.keys(providers[0]).splice(1).map((element, index) => {
            return index !== 0 ? <TableCell key={index} align="right">{element}</TableCell> : <TableCell key={index}>{element}</TableCell>
        });
        return newArr;
    };

    const renderSingleRowCells = rowDataArr => {
        return rowDataArr.map((element, index) => {
            return index !== 0 ? <TableCell key={index} align="right">{element}</TableCell> : <TableCell key={index}>{element}</TableCell>
        });
    };

    const renderTableRows = providerDataArr => {
        const newArr = providerDataArr.map((provider, index) => {
            const dataValues = Object.values(provider).splice(1);
            return <TableRow key={index}>{renderSingleRowCells(dataValues)}</TableRow>;
        });
        return newArr;
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {renderHeaderCells()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRows(providers)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default List;