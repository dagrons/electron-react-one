import styled from "@emotion/styled";
import {Box, IconButton, useTheme} from "@mui/material";
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
    position: "fixed",
    // overflowX
    overflowY: "auto",
    // size
    width: sideBarWidth,
    height: "100vh",
    // color
    backgroundColor: theme.palette.grey[100],
    // transform
    transform: open ? "translateX(0)" : `translateX(-100%)`,
    // transition
    transition: transitionEnabled ? theme.transitions.create(['width', 'transform'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.sharp
    }) : "none",
}))


export const Sidebar = ({children}) => {
    const theme = useTheme();
    const isOpen = useSelector(state => state.sidebar.open);
    const sideBarWidth = useSelector(state => state.sidebar.sideBarWidth);
    const isDragging = useSelector(state => state.sidebar.isDragging);
    const transitionEnabled = useSelector(state => state.sidebar.transitionEnabled);
    const dispatch = useDispatch()
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                dispatch(setTransitionEnabled(false))
                const newWidth = e.clientX;
                if (newWidth > 210 && newWidth <550) {
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
                    padding: theme.spacing(2),
                    position: "absolute",
                    top: theme.spacing(0.5),
                    right: theme.spacing(0.5)
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
                padding: theme.spacing(12, 3, 3, 3),
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(0.5)
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
})(({theme, open, sideBarWidth, transitionEnabled}) => {
    return {
        // display
        position: "relative",
        // size
        height: "100vh",
        marginLeft: open ? sideBarWidth : 0,
        transition: transitionEnabled? theme.transitions.create(['margin-left'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.sharp
        }) : "none",
    }
})

export const MainContent = ({children}) => {
    const theme = useTheme();
    const isOpen = useSelector(state => state.sidebar.open);
    const sideBarWidth = useSelector(state => state.sidebar.sideBarWidth);
    const transitionEnabled = useSelector(state => state.sidebar.transitionEnabled);
    const dispatch = useDispatch()
    return (
        <MainContentBox open={isOpen} sideBarWidth={sideBarWidth} transitionEnabled={transitionEnabled}>
            {
                !isOpen && <IconButton
                    onClick={() => {
                        dispatch(setOpen(!isOpen))
                    }}
                    sx={{
                        padding: theme.spacing(2),
                        position: "absolute",
                        top: theme.spacing(0.5),
                        left: theme.spacing(0.5),
                    }}
                >
                    <MenuIcon sx={{color: 'black', width: "1.25rem", height: "1.25rem"}}/>
                </IconButton>
            }
            <Box sx={{
                // display
                display: "flex",
                gap: theme.spacing(2),
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
            }}>
                {children}
            </Box>
        </MainContentBox>
    )
}
