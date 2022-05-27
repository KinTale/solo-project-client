
import * as React from 'react';
import { useState, useEffect } from 'react'
import client from '../../ultis/client';
import { Box, Table, TableBody, TableContainer, Link, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableRows from './inventory-row';
import TableHeader from './inventory-header';

export default function InventoryTable({ role }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([])
    const [resetMembers, setResetMembers] = useState(0)

    useEffect(() => {
        client.get('/inventory')
            .then((res) => setItems(res.data.data))
            .catch((err) => console.log(err.response))
    }, [resetMembers])
    console.log('items', items)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = (memberId) => {

        client.delete(`/members/delete/${memberId}`)
            .then((res) => setResetMembers(resetMembers + 1))
            .catch((err) => console.log(err.response))
    };
    const fontStyle = {
        color: 'primary.main',

    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 5
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 5
            }}>
                <Typography variant='h4' gutterBottom sx={fontStyle}>BCCUK London Branch Property Inventory <hr style={{ border: '1px solid ' }}></hr></Typography>

                {role === 'ADMIN' && (
                    <Box>
                        <Link to='/additem'><Button size="small" onClick={handleClickOpen} >Add item</Button></Link>
                    </Box>
                )}
            </Box>
            <TableContainer component={Paper} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 1100
            }}>
                <Table aria-label="simple table">

                    <TableHeader open={open} handleClose={handleClose} resetMembers={resetMembers} setResetMembers={setResetMembers} />
                    <TableBody>
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableRows item={item} />
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
