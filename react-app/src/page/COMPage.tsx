import Title from "../component/Title.tsx";
import {useTheme} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMarkdown} from "@fortawesome/free-brands-svg-icons";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MainContentItemBox from "../component/MainContentItemBox.tsx";

export const COMPage = () => {
    const theme = useTheme();
    return (
        <>
            <Title><FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faMarkdown}/>组件市场</Title>
            <MainContentItemBox>
                <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                    # 聊天
                </Markdown>
            </MainContentItemBox>
        </>
    )
}




