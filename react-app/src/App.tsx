import {useState} from 'react';
import {Box, createTheme, ThemeProvider, Button} from '@mui/material';
import {Sidebar, MainContent} from "./component/SideBarLayout.tsx";
import logoImage from './assets/logo.png';
import {Provider} from "react-redux";
import store from "./store/store.ts";


const theme = createTheme()


function App() {
    // shared state by Sidebar and MainContent
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Sidebar>
                    <Box sx={{
                        display: "flex",
                        alignItems: "stretch",
                        flexDirection: "column",
                        flexGrow: 0,
                    }}>
                        <img src={logoImage} alt="Your image description"/>
                    </Box>
                </Sidebar>
                <MainContent>
                </MainContent>
            </ThemeProvider>
        </Provider>
    )
}

export default App;
