import {Link, useLocation} from "react-router-dom";
import {Button, Typography} from "@mui/material";

const SideBarMenuButton = ({children, to}) => {
    const location = useLocation()
    return (
        <Button sx={{
            display: "block",
            color: to === location.pathname ? "white" : "black",
            backgroundColor: to === location.pathname ? "#ff4b4b" : "white",
            '&:hover': {
                backgroundColor: to === location.pathname ? "#ff4b4b" : "white", // 保持与初始颜色一致
            },
        }} component={Link} to={to} variant="text">
            <Typography sx={{
                fontSize: "1rem",
                fontWeight: 400,
                fontFamily: "Avenir,Helvetica,Arial,sans-serif"
            }}>{children}</Typography>
        </Button>
    )
}


export default SideBarMenuButton;
