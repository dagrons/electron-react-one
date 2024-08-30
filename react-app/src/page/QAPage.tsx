import Title from "../component/Title.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";

export const QAPage = () => {
    return (

        <Title><FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faRobot} />QA问答</Title>
    )
}

export const QAPageSidebar = () => {
    return (
        "QAPageSidebar"
    )
}

