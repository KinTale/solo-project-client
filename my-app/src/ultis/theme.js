import { createTheme  } from "@mui/material";

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
typography:{
    h4: {
        fontFamily: [
            "Nunito",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif"
          ].join(","),
        fontWeight:'bold',
        color:'#D8A773'
    }
}

})