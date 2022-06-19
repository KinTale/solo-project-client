import { Box, Grid, List, ListItem, ListItemText, ListItemButton, Divider } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
export default function UsefulLinks() {
    return (
        <Grid item justifyContent='center'>
        <Box sx={{ color: 'background.paper',  maxWidth: 370, minWidth: 270, mt: 1, mb: 1  }}>
                <List>
                    <ListItem disablePadding >
                        <ListItemText primary="Useful Links" primaryTypographyProps={{ color: 'background.paper', variant: 'h6' }} />
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton component={RouterLink} to='/members'>
                            <ListItemText primary="London branch members" sx={{ '&:hover':{color: 'white'}}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={RouterLink} to='/contactus' sx={{ '&:hover':{color: 'white'}}}>
                            <ListItemText primary="Contact us" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="http://bccuk.org/wp-content/uploads/2020/03/membership_form-1.pdf">
                            <ListItemText primary="New membership form download"  sx={{ '&:hover':{color: 'white'}}}/>
                        </ListItemButton>
                    </ListItem>
                </List>

        </Box>
        </Grid>
    )
}