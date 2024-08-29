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
    // position
    position: "relative",
    // color
    color: "rgb(49, 51, 63)",
    // overflowX
    overflowY: "auto",
    // size
    width: open ? sideBarWidth : 0,
    height: "100vh",
    // color
    backgroundColor: theme.palette.grey[100],
    // transition
    transition: transitionEnabled ? theme.transitions.create(['width'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.sharp
    }) : "none",
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
            <Box sx={{
                padding: "6rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}>
                {children}
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
    flexBasis: "100px",
    flexGrow: 1,
    flexShrink: 1,
    // color
    color: "rgb(49, 51, 63)",
    // size
    height: "100vh",
}))

export const MainContent = ({children}) => {
    const isOpen = useSelector(state => state.open);
    const dispatch = useDispatch()
    return (
        <MainContentBox open={isOpen}>
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


