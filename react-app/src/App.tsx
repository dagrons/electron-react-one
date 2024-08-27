import {useState} from 'react';
import {Box, createTheme, ThemeProvider, Button} from '@mui/material';
import {Sidebar, MainContent} from "./component/SideBarLayout.tsx";
import logoImage from './assets/logo.png';


const theme = createTheme()



function App() {
    const [isOpen, setisOpen] = useState(true);
    const [siderWidth, setSiderWidth] = useState(200);
    return (
        <ThemeProvider theme={theme}>
            <Sidebar isOpen={isOpen} setisOpen={setisOpen}>
                <Box sx={{
                    display: "flex",
                    alignItems: "stretch",
                    flexDirection: "column",
                    flexGrow: 0,
                }}>
                    <img src={logoImage} alt="Your image description" />
                </Box>
            </Sidebar>
            <MainContent isOpen={isOpen} setisOpen={setisOpen}>
            </MainContent>
        </ThemeProvider>
    )
}

export default App;
