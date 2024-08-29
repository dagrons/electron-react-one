import styled from "@emotion/styled";
import {Box, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


const setOpen = (open) => ({type: "SET_OPEN", open: open});
const setSidebarWidth = (sideBarWidth) => ({type: "SET_SIDEBAR_WIDTH", sideBarWidth: sideBarWidth});
const setIsDragging = (isDragging) => ({type: "SET_IS_DRAGGING", isDragging: isDragging});
const setTransitionEnabled = (transitionEnabled) => ({
    type: "SET_TRANSITION_ENABLED",
    transitionEnabled: transitionEnabled
});

const SidebarBox = styled(Box, {
    shouldForwardProp(propName) {
        return !['theme', 'open', 'sideBarWidth', 'transitionEnabled'].includes(propName);
    }
})(({theme, open, sideBarWidth, transitionEnabled}) => ({
    position: "absolute",
    // size
    color: "rgb(49, 51, 63)",
    minHeight: "100vh",
    width: open ? sideBarWidth : 0,
    overflow: "hidden",
    // color
    backgroundColor: theme.palette.grey[100],
    // transition
    transition: transitionEnabled ? theme.transitions.create(['width'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.sharp
    }) : "none",
    // zIndex
    elevation: theme.zIndex.drawer + 1,
}))


export const Sidebar = ({children}) => {
    const isOpen = useSelector(state => state.open);
    const sideBarWidth = useSelector(state => state.sideBarWidth);
    const isDragging = useSelector(state => state.isDragging);
    const transitionEnabled = useSelector(state => state.transitionEnabled);
    const dispatch = useDispatch()
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                dispatch(setTransitionEnabled(false))
                const newWidth = e.clientX;
                if (newWidth > 210) {
                    dispatch(setSidebarWidth(newWidth))
                }
            }
        }
        const handleMouseUp = (e) => {
            dispatch(setIsDragging(false));
            dispatch(setTransitionEnabled(true));
        }
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
    }, [isDragging])
    return (
        <SidebarBox open={isOpen} sideBarWidth={sideBarWidth} transitionEnabled={transitionEnabled}>
            <IconButton
                onClick={() => {
                    dispatch(setOpen(!isOpen))
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
                right: 0,
                top: 0,
                zIndex: 1
            }} onMouseDown={() => {
                dispatch(setIsDragging(true))
            }}>
            </Box>
        </SidebarBox>
    )
}

const MainContentBox = styled(Box, {
    shouldForwardProp(propName) {
        return !['theme', 'open', 'sideBarWidth', 'transitionEnabled'].includes(propName);
    }
})(({theme, open, sideBarWidth, transitionEnabled}) => ({
    // size
    color: "rgb(49, 51, 63)",
    minHeight: "100vh",
    overflow: "hidden",
    marginLeft: open ? sideBarWidth : 0,
    // transition
    transition: transitionEnabled ? theme.transitions.create(['margin-left'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.sharp
    }) : "none",
}))

export const MainContent = ({children}) => {
    const isOpen = useSelector(state => state.open);
    const sideBarWidth = useSelector(state => state.sideBarWidth);
    const transitionEnabled = useSelector(state => state.transitionEnabled);
    const dispatch = useDispatch()
    return (
        <MainContentBox open={isOpen} sideBarWidth={sideBarWidth} transitionEnabled={transitionEnabled}>
            <IconButton
                onClick={() => {
                    dispatch(setOpen(!isOpen))
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


