import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export default function TableRows({ item }) {
    const rowStyle = {
        color: 'primary.main',
        borderBlockColor: 'primary.main',
        textAlign: 'left'
    };
    const rowBackground = {
        backgroundColor: 'background.paper',
    };
    return (<TableRow
        sx={rowBackground}>
        
        <TableCell sx={rowStyle} >
            {item.id}
        </TableCell>
        <TableCell sx={rowStyle} >
            {item.description}
        </TableCell>
        <TableCell sx={rowStyle} >
            {item.quantity}
        </TableCell>
        <TableCell sx={rowStyle} >
            {item.sponsored}
        </TableCell>
        <TableCell sx={rowStyle} >
            {item.price}
        </TableCell>
        <TableCell sx={rowStyle} >
            {item.location}
        </TableCell>
    </TableRow>
    );
};
