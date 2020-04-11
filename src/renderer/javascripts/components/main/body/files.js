import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
});

// "Info": "{\"ModTime\":\"2020-03-10T18:33:07.038893+01:00\",\"Mode\":438,\"Name\":\"66860812_p0.png\",\"Size\":822093}",
const renderFileInfo = (file) => {
    let info
    try {
        info = JSON.parse(file.Info);
    } catch (err) {
        console.log('renderFileInfo(): JSON.parse');
        console.log(err);
    }
    return (
        <TableRow key={file.Path}>
            <TableCell component="th" scope="row">
                {file.Path}
            </TableCell>
            <TableCell align="right">{info ? info.Size : '?'}</TableCell>
        </TableRow>
    )
}

const Files = ({ list }) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Path</TableCell>
                        <TableCell align="right">Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        list.map((file) => (
                            renderFileInfo(file)
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Files
