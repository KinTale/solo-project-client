import { Box, Grid, List, ListItem, ListItemText, ListItemButton, Typography, Link, Divider } from "@mui/material"
import MembersList from "../member/member-list"
export default function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'primary.main',
            minWidth: '105vw',
            ml: -5
        }}>
            <Box sx={{ width: '100%', maxWidth: 360, color: 'primary.light' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemText primary="Useful Links" primaryTypographyProps={{ color: 'secondary.main', variant: 'h6' }} />

                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText primary="London branch members"  />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Contact us" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="New membership form download" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </nav>


            </Box>
        </Box>
    )
}