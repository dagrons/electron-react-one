import Title from "../component/Title.tsx";
import {faWrench} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const OSToolPage = () => {
    return (
        <>
            <Title><FontAwesomeIcon style={{marginRight: ".5rem"}} icon={faWrench}/>终端问题修复工具</Title>
        </>
    )
}

export const OSToolPageSidebar = () => {
    return (
        "OSToolPageSidebar"
    )
}


