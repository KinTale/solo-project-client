import { createTheme,  } from "@mui/material";

export const theme = createTheme({
 palette: {
     primary:{
         main: '#5B0111',
         light: 'white',
         dark: 'black'
     }, 
     secondary:{
         main: '#EDAC52',
         contrastText: '#ffbf002e'
     },
     background: {
        paper: '#D8A773',
      }
 },


})