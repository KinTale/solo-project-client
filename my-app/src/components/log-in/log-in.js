import { Box, Typography } from "@mui/material"
import { useState } from 'react';
import client from "../../ultis/client";
import AdminForm from "./log-in-form";
import storage from "../../ultis/storage";

export default function LogIn() {
    const [admin, setAdmin] = useState({
        email: '',
        password: ''
    })
    const logInContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 10
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        setAdmin({
            ...admin,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        client
            .post('/login', admin)
            .then((res) => {
                const { id, role } = res.data.foundAdmin
                storage.saveStorage(res.data.token, id, role)
            })
    }

    return (
        <Box variant='paper' sx={logInContainer}>
            <Typography variant="h4" sx={{ color: 'gray' }}> Admin Log in</Typography>
            <AdminForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </Box>
    )
}