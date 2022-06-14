
import * as React from 'react';
import { useState, useEffect } from 'react'
import client from '../../ultis/client';
import { Box, Table, TableBody, TableContainer, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableRows from './inventory-row';
import TableHeader from './inventory-header';
import AddItemForm from './add-inventory';
import AddBoxIcon from '@mui/icons-material/AddBox';


export default function InventoryTable({ role }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([])
    const [resetItem, setResetItem] = useState(0)
    const [onClick, setOnClick] = useState("")
    const [currentEdit, setCurrentEdit] = useState(null)

    useEffect(() => {
        client.get('/inventory')
            .then((res) => setItems(res.data.data))
            .catch((err) => console.log(err.response))
    }, [resetItem])
    console.log('reset', resetItem)


    const handleClickOpen = (e, item) => {
        console.log('open', e.currentTarget.value)
        setOnClick(e.currentTarget.value)
        console.log('item', item)
        if (item) {
            setCurrentEdit(item)
        }
        setOpen(true);
        console.log('curr', currentEdit)
    };

    const handleClose = () => {
        setCurrentEdit(null)
        setOpen(false);

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
            mt: 5,
            mb: 10
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 5
            }}>
                <Typography variant='h4' gutterBottom sx={fontStyle}>BCCUK London Branch Property Inventory <hr style={{ border: '1px solid ' }}></hr></Typography>
                <AddItemForm onClick={onClick} open={open} handleClose={handleClose} resetItem={resetItem} setResetItem={setResetItem} currentEdit={currentEdit} setCurrentEdit={setCurrentEdit} />
                {role === 'ADMIN' && (
                    <Box>
                        <Button size="small" value="ADD-ITEM" startIcon={<AddBoxIcon/>} onClick={(e) => handleClickOpen(e)} >  Add item</Button>
                    </Box>
                )}
            </Box>
            <TableContainer component={Paper} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 1100
            }}>
                <Table aria-label="simple table">

                    <TableHeader />
                    <TableBody>
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <TableRows item={item} role={role} resetItem={resetItem} setResetItem={setResetItem} open={open} handleClose={handleClose} handleClickOpen={handleClickOpen} />
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
