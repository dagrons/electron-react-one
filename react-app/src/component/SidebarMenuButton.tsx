import {Link, useLocation} from "react-router-dom";
import {Box, Button, Theme, Typography, useTheme} from "@mui/material";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

export const SidebarMenu = styled(Box)<{theme: Theme}>(({theme}) => (
    {
        // size
        padding: theme.spacing(2),
        borderRadius: ".5rem",
        // display
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1),
        // color
        backgroundColor: "white",
    }
))

export const SideBarMenuButton = ({children, to}) => {
    const location = useLocation();
    const theme = useTheme()

    return (
        <Button sx={{
            display: "block",
            color: to === location.pathname ? "white" : "black",
            backgroundColor: to === location.pathname ? theme.palette.primary.main : "white",
            '&:hover': {
                backgroundColor: to === location.pathname ? theme.palette.primary.main : "white", // 保持与初始颜色一致
            },
        }} component={Link} to={to} variant="text">
            <Typography variant={"h5"}>
                <FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faAngleRight}/>
                {children}
            </Typography>
        </Button>
    )
}


