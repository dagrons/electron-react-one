import {Typography, useTheme} from "@mui/material";
import MainContentItemBox from "./MainContentItemBox.tsx";


const Title = ({children}) => {
    const theme = useTheme();
    return (
        <MainContentItemBox theme={theme} sx={{
            paddingTop: theme.spacing(12)
        }}>
            <Typography variant={"h1"}>
                {children}
            </Typography>
        </MainContentItemBox>
    )
}

export default Title;
