import Title from "../component/Title.tsx";
import {faWrench} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTheme} from "@mui/material";

export const OSToolPage = (props) => {
    const theme = useTheme()
    return (
        <>
            <Title><FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faWrench}/>常见工具</Title>
        </>
    )
}

export const OSToolPageSidebar = () => {
    return (
        <></>
    )
}


