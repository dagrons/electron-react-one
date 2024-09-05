import {ThemeProvider} from '@mui/material';
import {MainContent, Sidebar} from "./component/SidebarLayout.tsx";
import logoImage from './assets/nyan-cat.png';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {OSToolPage, OSToolPageSidebar} from "./page/OSToolPage.tsx"
import {QAPage, QAPageSidebar} from "./page/QAPage.tsx"
import {SidebarMenu, SideBarMenuButton} from "./component/SidebarMenuButton.tsx";
import {theme} from "./theme.ts";


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
                            <SideBarMenuButton to={"/"}>常见工具</SideBarMenuButton>
                            <SideBarMenuButton to={"/qa"}>QA问答</SideBarMenuButton>
                        </SidebarMenu>
                        <Routes>
                            <Route path='/' element={<OSToolPageSidebar/>}/>
                            <Route path='/qa' element={<QAPageSidebar/>}/>
                        </Routes>
                    </Sidebar>
                    <MainContent>
                        <Routes>
                            <Route path='/' element={<OSToolPage/>}/>
                            <Route path='/qa' element={<QAPage/>}/>
                        </Routes>
                    </MainContent>
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

export default App;
