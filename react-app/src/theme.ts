import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ff4b4b', // 设置主色
        },
        secondary: {
            main: '#1976d2', // 设置次要色
        },
    },
    typography: {
        h1: {
            fontFamily: "Avenir,Helvetica,Arial,sans-serif",
            fontSize: "2.75rem",
            fontWeight: "bold"
        },
        h5: {
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Avenir,Helvetica,Arial,sans-serif"
        }
    },
    spacing: 8
});
