import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function AdminForm({ handleChange,handleSubmit, loginError }) {
const formContainer ={
    display: 'flex',
    flexDirection: 'column',
    gap:5
}
    return (
        <form className='user-form' style={formContainer} onSubmit={handleSubmit}>
            <TextField className='user-form-input' type='email' label='Email' variant='outlined' name='email' onChange={handleChange} />
            <TextField className='user-form-input' type='password' label='Password' variant='outlined' name='password' onChange={handleChange} />
            {loginError && <p className='login-error'>{loginError}</p>}
            <Button id='user-submit-button' type='submit' variant='contained'>Submit</Button>
        </form>
    )
}