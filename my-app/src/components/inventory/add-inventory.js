import React from 'react';
import client from '../../ultis/client';
import { useState, useEffect } from 'react';
import { TextField, Slide, DialogActions, Dialog, Box, Button, Typography } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddItemForm({ onClick, open, handleClose, resetItem, setResetItem, currentEdit, setCurrentEdit }) {

    const blankForm = {
        description: '',
        quantity: '',
        sponsored: '',
        price: '',
        location: '',
    }
    const [item, setItem] = useState(blankForm)

    useEffect(() => {
        setItem(currentEdit ? currentEdit : blankForm)
    }, [currentEdit])

    const handleChange = (event) => {
        const { value, name } = event.target
        setItem({
            ...item,
            [name]: value
        })
    }
    console.log('EDITForm', item, currentEdit)


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('form SUBMITTED', onClick)

        if (onClick === 'ADD-ITEM') {
            client.post('/inventory/additem', item)
                .then((res) => {
                    setResetItem(resetItem + 1)
                    setItem(blankForm)
                    console.log('added inventory item client', res)
                })
                .catch((err) => console.log(err))
        }
        if (onClick === 'EDIT-ITEM') {
            client.patch('/inventory/edititem', item)
                .then((res) => {
                    setResetItem(resetItem + 1)
                    setItem(blankForm)
                    console.log('pacthed item client', res)
                })
                .catch((err) => console.log(err))
        }
    }

    const formContainer = {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        padding: 15,
        width: 300
    }
    const addMemberContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 10,
    }
    return (
        <Box sx={addMemberContainer}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <form onSubmit={handleSubmit} style={formContainer}>
                    <Typography variant='h6' sx={{ color: 'primary.main' }}>Add new member</Typography>
                    <TextField
                        className='user-form-input'
                        value={item.description}
                        variant='outlined'
                        name='description'
                        onChange={handleChange}
                        placeholder='Description' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={item.quantity}
                        variant='outlined'
                        name='quantity'
                        onChange={handleChange}
                        placeholder='Quantity' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={item.sponsored}
                        variant='outlined'
                        name='sponsored'
                        onChange={handleChange}
                        placeholder='Sponsored' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={item.price}
                        variant='outlined'
                        name='price'
                        onChange={handleChange}
                        placeholder='Price' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={item.location}
                        variant='outlined'
                        name='location'
                        onChange={handleChange}
                        placeholder='Location' sx={{ bgcolor: 'white' }} />
                    <DialogActions>
                        <Button type='submit' variant='contained' onClick={handleClose} >
                            Add item
                        </Button>
                    </DialogActions>
                </form >
            </Dialog >
        </Box >
    )
}