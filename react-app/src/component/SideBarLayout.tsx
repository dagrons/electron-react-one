import styled from "@emotion/styled";
import {Box, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';


const SidebarBox = styled(Box, {
    shouldForwardProp(propName) {
        return propName != "theme" || propName != "open"
    }
})(({theme, open}) => ({
    position: "absolute",
    transform: open ? "translateX(0)" : "translateX(-100%)",
    // size
    color: "rgb(49, 51, 63)",
    minHeight: "100vh",
    width: "25%",
    overflow: "hidden",
    // color
    backgroundColor: theme.palette.grey[100],
    // transition
    transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.sharp
    }),
    // zIndex
    elevation: theme.zIndex.drawer + 1,
}))


export const Sidebar = ({children, isOpen, setisOpen}) => {
    return (
        <SidebarBox open={isOpen}>
            <IconButton
                onClick={() => {
                    setisOpen(isOpen => !isOpen)
                }}
                sx={{
                    padding: 1.5,
                    position: "absolute",
                    top: "0.375rem",
                    right: "0.25rem",
                }}
            >
                <CloseIcon sx={{color: 'black', width: "1.25rem", height: "1.25rem"}}/>
            </IconButton>
            <Box sx={{
                padding: "6rem 1.5rem"
            }}>
                {children}
            </Box>
            <Box sx={{
                width: 10,
                height: "100%",
                cursor: "ew-resize",
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1
            }}>
            </Box>
        </SidebarBox>
    )
}

const MainContentBox = styled(Box, {
    shouldForwardProp(propName) {
        return propName != "theme" || propName != "open"
    }
})(({theme, open}) => ({
    // size
    color: "rgb(49, 51, 63)",
    minHeight: "100vh",
    overflow: "hidden",
    marginLeft: open ? "25%" : 0,
    // transition
    transition: theme.transitions.create(['margin-left'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.sharp
    }),
}))

export const MainContent = ({children, isOpen, setisOpen}) => {
    return (
        <MainContentBox open={isOpen}>
            <IconButton
                onClick={() => {
                    setisOpen(isOpen => !isOpen)
                }}
                sx={{
                    padding: 1.5,
                    position: "absolute",
                    top: "0.375rem",
                    left: "0.25rem+25%",
                }}
            >
                {
                    !isOpen && <MenuIcon sx={{color: 'black', width: "1.25rem", height: "1.25rem"}}/>
                }
            </IconButton>
            {children}
        </MainContentBox>
    )
}


