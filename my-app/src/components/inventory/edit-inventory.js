import React from 'react';
import client from '../../ultis/client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TextField, Slide, DialogActions, Dialog, Box, Button, Typography } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditItemForm({ open, handleClose, resetItem, setResetMembers, item }) {

    const blankForm = {
        description: '',
        quantity: '',
        sponsored: '',
        price: '',
        location: '',
    }
    const [editItem, setEditItem] = useState(item)
    console.log(editItem)
    const handleChange = (event) => {
        const { value, name } = event.target
        setEditItem({
            ...editItem,
            [name]: value
        })
    }
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        client.patch('/inventory/edititem', editItem)
            .then((res) => {
                setResetMembers(resetItem + 1)
                setEditItem(blankForm)
                navigate('/inventory')
                console.log('added inventory item client', res)
            })
            .catch((err) => console.log(err.response))

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
                        value={editItem.description}
                        variant='outlined'
                        name='description'
                        onChange={handleChange}
                        placeholder='Description' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={editItem.quantity}
                        variant='outlined'
                        name='quantity'
                        onChange={handleChange}
                        placeholder='Quantity' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={editItem.sponsored}
                        variant='outlined'
                        name='sponsored'
                        onChange={handleChange}
                        placeholder='Sponsored' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={editItem.price}
                        variant='outlined'
                        name='price'
                        onChange={handleChange}
                        placeholder='Price' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={editItem.location}
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