import Title from "../component/Title.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "@mui/material";

export const QAPage = (props) => {
    const theme = useTheme();

    return (

        <Title><FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faRobot}/>QA问答</Title>
    )
}

export const QAPageSidebar = () => {
    return (
        "QAPageSidebar"
    )
}

