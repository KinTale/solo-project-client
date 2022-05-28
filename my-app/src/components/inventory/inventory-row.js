import * as React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import client from '../../ultis/client';
import EditItemForm from './edit-inventory';

export default function TableRows({ item, resetItem, setResetItem, role, open }) {
    const rowStyle = {
        color: 'primary.main',
        borderBlockColor: 'primary.main',
        textAlign: 'left'
    };
    const rowBackground = {
        backgroundColor: 'background.paper',
    };
    const handleDelete = (itemId) => {

        client.delete(`/inventory/delete/${itemId}`)
            .then((res) => setResetItem(resetItem + 1))
            .catch((err) => console.log(err.response))
    };


    return (<TableRow
        sx={rowBackground}>

        <TableCell sx={rowStyle} >

            {item.id}
        </TableCell>
        <TableCell sx={rowStyle} >
            {/* <EditItemForm open={open} resetItem={resetItem} setResetItem={setResetItem}  /> */}
            {role === 'ADMIN' && (
                <Button onClick={() => handleDelete(item.id)} ><DeleteIcon /></Button>
            )}
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
