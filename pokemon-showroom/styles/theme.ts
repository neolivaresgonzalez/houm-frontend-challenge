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
    }
})

export default theme;