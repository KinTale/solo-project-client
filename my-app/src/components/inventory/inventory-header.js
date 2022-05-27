import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function TableHeader() {
    const headerStyle = {
        color: 'primary.light',
        fontWeight: 'bold',
        borderBlockColor: 'background.paper',
        textAlign: 'left'
    
    };
    const headerBackground = {
        backgroundColor: 'primary.main'
    };
    return (<TableHead sx={headerBackground} >
        <TableRow>
            <TableCell sx={headerStyle} >
            Id
            </TableCell>
            <TableCell sx={headerStyle} >
            Item Description
            </TableCell>
            <TableCell sx={headerStyle} >
            Quantity
            </TableCell>
            <TableCell sx={headerStyle} >
            Sponsored by
            </TableCell>
            <TableCell sx={headerStyle} >
            Price
            </TableCell>
            <TableCell sx={headerStyle} >
            Location
            </TableCell>
        </TableRow>
    </TableHead>
    );
};