import {Box, createTheme, ThemeProvider} from '@mui/material';
import {MainContent, Sidebar} from "./component/SidebarLayout.tsx";
import logoImage from './assets/logo.png';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {AboutPage, AboutPageSidebar} from "./page/About.tsx";
import {OSToolPage, OSToolPageSidebar} from "./page/OSToolPage.tsx"
import {QAPage, QAPageSidebar} from "./page/QAPage.tsx"
import {SidebarMenu, SideBarMenuButton} from "./component/SidebarMenuButton.tsx";


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
                            <SidebarMenu>
                                <SideBarMenuButton to={"/"}>自动化终端运维</SideBarMenuButton>
                                <SideBarMenuButton to={"/qa"}>QA问答</SideBarMenuButton>
                            </SidebarMenu>
                            <Routes>
                                <Route path='/' element={<OSToolPageSidebar/>}/>
                                <Route path='/qa' element={<QAPageSidebar/>}/>
                                <Route path='/about' element={<AboutPageSidebar/>}/>
                            </Routes>
                        </Sidebar>
                        <MainContent>
                            <Routes>
                                <Route path='/' element={<OSToolPage/>}/>
                                <Route path='/qa' element={<QAPage/>}/>
                                <Route path='/about' element={<AboutPage/>}/>
                            </Routes>
                        </MainContent>
                    </Box>
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

export default App;
