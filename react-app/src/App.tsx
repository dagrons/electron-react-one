import {Box, Button, createTheme, Stack, ThemeProvider} from '@mui/material';
import {MainContent, Sidebar} from "./component/SideBarLayout.tsx";
import logoImage from './assets/logo.png';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Home from "./page/Home.ts";
import About from "./page/About.ts";


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
                            <Button sx={{display: "block"}} component={Link} to="/" variant="contained" color="secondary">
                                Home
                            </Button>
                            <Button sx={{display: "block"}} component={Link} to="/about" variant="outlined"
                                    color="secondary">
                                About
                            </Button>
                        </Sidebar>
                        <MainContent>
                            <Routes>
                                <Route path='/' element={<Home/>}/>
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
