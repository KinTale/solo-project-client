import React from 'react';
import client from '../../ultis/client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TextField, Slide, DialogActions, Dialog, Box, Button, Typography } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddMemberForm({ open, handleClose, resetMembers, setResetMembers }) {

    const blankForm = {
        name: '',
        title: '',
    }
    const [member, setMember] = useState(blankForm)

    const handleChange = (event) => {
        const { value, name } = event.target
        setMember({
            ...member,
            [name]: value
        })
    }
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        client.post('/members/addmember', member)
            .then((res) => {
                setResetMembers(resetMembers + 1)
                navigate('/members')
                console.log('added member client', res)
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
                        value={member.name}
                        variant='outlined'
                        name='name'
                        onChange={handleChange}
                        placeholder='Name' sx={{ bgcolor: 'white' }} />
                    <TextField
                        className='user-form-input'
                        value={member.title}
                        variant='outlined'
                        name='title'
                        onChange={handleChange}
                        placeholder='Title' sx={{ bgcolor: 'white' }} />
                    <DialogActions>
                        <Button type='submit' variant='contained' onClick={handleClose} >
                            Create Member
                        </Button>
                    </DialogActions>
                </form >
            </Dialog >
        </Box >
    )
}