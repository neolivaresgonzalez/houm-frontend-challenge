import { createTheme } from "@mui/material/styles";
import { red, orange, blue } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[800]
        },
        secondary:{
            main: blue[800]
        },
        error:{
            main: red.A400
        }
    },
    components:{
        MuiButton:{
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    borderRadius: '30px'
                  }
            }
        },
        MuiTextField:{
            styleOverrides: {
                root: {
                    borderRadius: '2rem',
                    width: '100%',
                    fontSize: '1rem',
                    backgroundColor: '#F5F5F5',
                    
                }
            }
        },
        MuiFilledInput:{
            defaultProps:{
                disableUnderline: true
            },
            styleOverrides: {
                root:{
                    backgroundColor: "transparent",
                    "& :focus":{
                        borderColor: orange
                    }
                }
            }
        },
        MuiCard:{
            styleOverrides:{
                root:{
                    border:"1px solid orange"
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: "white",
                    color: "black"
                }
            }
        }
    }
})

export default theme;