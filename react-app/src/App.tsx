import {useState} from 'react';
import {Box, createTheme, ThemeProvider, Button} from '@mui/material';
import {Sidebar, MainContent} from "./component/SideBarLayout.tsx";
import logoImage from './assets/logo.png';


const theme = createTheme()


function App() {
    // shared state by Sidebar and MainContent
    const [isOpen, setIsOpen] = useState(true);
    const [sideBarWidth, setSideBarWidth] = useState("25%");
    const [isDragging, setIsDragging] = useState(false);
    const [transitionEnanbled, setTransitionEanbled] = useState(true);
    return (
        <ThemeProvider theme={theme}>
            <Sidebar isOpen={isOpen}
                     setIsOpen={setIsOpen}
                     sideBarWidth={sideBarWidth}
                     setSideBarWidth={setSideBarWidth}
                     isDragging={isDragging}
                     setIsDragging={setIsDragging}
                     transitionEnabled={transitionEnanbled}
                     setTransitionEnabled={setTransitionEanbled}
            >
                <Box sx={{
                    display: "flex",
                    alignItems: "stretch",
                    flexDirection: "column",
                    flexGrow: 0,
                }}>
                    <img src={logoImage} alt="Your image description"/>
                </Box>
            </Sidebar>
            <MainContent isOpen={isOpen}
                         setIsOpen={setIsOpen}
                         sideBarWidth={sideBarWidth}
                         isDragging={isDragging}
                         transitionEnabled={transitionEnanbled}
                         setTransitionEnabled={setTransitionEanbled}
            >
            </MainContent>
        </ThemeProvider>
    )
}

export default App;
