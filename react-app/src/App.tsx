import {Box, createTheme, ThemeProvider} from '@mui/material';
import {MainContent, Sidebar} from "./component/SidebarLayout.tsx";
import logoImage from './assets/logo.png';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from "./page/About.tsx";
import OSToolPage from "./page/OSToolPage.tsx"
import QAPage from "./page/QAPage.tsx"
import SideBarMenuButton from "./component/SidebarMenuButton.tsx";


const theme = createTheme()


function App() {
    // shared state by Sidebar and MainContent
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}>
                        <Sidebar>
                            <img style={{
                                flexBasis: "100px",
                                flexGrow: 1,
                                flexShrink: 1
                            }} src={logoImage} alt="Your image description"/>
                            <Box sx={{
                                // size
                                padding: "1rem",
                                borderRadius: ".5rem",
                                // display
                                display: "flex",
                                flexDirection: "column",
                                gap: ".5rem",
                                // color
                                backgroundColor: "white",
                            }}>
                                <SideBarMenuButton to={"/"}>自动化终端运维</SideBarMenuButton>
                                <SideBarMenuButton to={"/qa"}>QA问答</SideBarMenuButton>
                            </Box>
                        </Sidebar>
                        <MainContent>
                            <Routes>
                                <Route path='/' element={<OSToolPage/>}/>
                                <Route path='/qa' element={<QAPage/>}/>
                                <Route path='/about' element={<About/>}/>
                            </Routes>
                        </MainContent>
                    </Box>
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

export default App;
