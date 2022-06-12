import { Box, Grid, List, ListItem, ListItemText, ListItemButton, Typography, Link, Divider } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
export default function UsefulLinks() {
    return (
        <Grid item justifyContent='center'>
        <Box sx={{ color: 'primary.light', maxWidth: 370, mt: 1, mb: 1 }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Useful Links" primaryTypographyProps={{ color: 'secondary.main', variant: 'h6' }} />
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton component={RouterLink} to='/members'>
                            <ListItemText primary="London branch members" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={RouterLink} to='/contactus'>
                            <ListItemText primary="Contact us" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="http://bccuk.org/wp-content/uploads/2020/03/membership_form-1.pdf">
                            <ListItemText primary="New membership form download" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </nav>


        </Box>
        </Grid>
    )
}