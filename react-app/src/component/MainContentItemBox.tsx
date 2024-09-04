import {Box} from "@mui/material";
import styled from "@emotion/styled";

const MainContentItemBox = styled(Box)(({theme}) => (
    {
        width: "100%",
        maxWidth: "46rem",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    }
))

export default MainContentItemBox;
