import {ThemeProvider} from '@mui/material';
import {MainContent, Sidebar} from "./component/SidebarLayout.tsx";
import logoImage from './assets/nyan-cat.png';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {QAPage, QAPageSidebar} from "./page/QAPage.tsx"
import {SidebarMenu, SideBarMenuButton} from "./component/SidebarMenuButton.tsx";
import {theme} from "./theme.ts";
import {AboutPage} from "./page/About.tsx";


function App() {
    // shared state by Sidebar and MainContent
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Sidebar>
                        <img style={{
                            flexBasis: "100px",
                            flexGrow: 1,
                            flexShrink: 1
                        }} src={logoImage} alt="Your image description"/>
                        <SidebarMenu>
                            <SideBarMenuButton to={"/"}>QA问答</SideBarMenuButton>
                            <SideBarMenuButton to={"/about"}>关于</SideBarMenuButton>
                        </SidebarMenu>
                        <Routes>
                            <Route path='/' element={<QAPageSidebar/>}/>
                        </Routes>
                    </Sidebar>
                    <MainContent>
                        <Routes>
                            <Route path='/' element={<QAPage/>}/>
                            <Route path={"/about"} element={<AboutPage />} />
                        </Routes>
                    </MainContent>
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

export default App;
