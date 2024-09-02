import {Typography} from "@mui/material";
import MainContentItemBox from "./MainContentItemBox.tsx";


const Title = ({children}) => {
    return (
        <MainContentItemBox sx={{
            paddingTop: "6rem"
        }}>
            <Typography sx={{
                fontSize: "2.75rem",
                fontWeight: "bold",
            }}>
                {children}
            </Typography>
        </MainContentItemBox>
    )
}

export default Title;
