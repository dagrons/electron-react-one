import {Box} from "@mui/material";
import styled from "@emotion/styled";

const MainContentBox = styled(Box)(({children}) => (
    {
        width: "100%",
        maxWidth: "46rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    }
))

export default MainContentBox;
