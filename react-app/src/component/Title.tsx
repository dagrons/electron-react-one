import {Typography} from "@mui/material";
import MainContentBox from "./MainContentBox.tsx";

const Title = ({children}) => {
    return (
        <MainContentBox sx={{
            paddingTop: "6rem"
        }}>
            <Typography sx={{
                fontSize: "2.75rem",
                fontWeight: "bold",
            }}>
                {children}
            </Typography>
        </MainContentBox>
    )
}

export default Title;
