import {Box} from "@mui/material";
import styled from "@emotion/styled";

const MainContentItemBox = styled(Box)(({theme}) =>
    `
        width: 100%;
        max-width: 46rem;
        padding-left: ${theme.spacing(2)};
        padding-right: ${theme.spacing(2)};
    `
)

export default MainContentItemBox;
