import Title from "../component/Title.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "@mui/material";
import {ChatInput} from "../component/chat/ChatInput.tsx";
import MainContentItemBox from "../component/MainContentItemBox.tsx";
import {Message} from "../component/chat/Message.tsx";
import {useDispatch, useSelector} from "react-redux";

const setChatInput = (chatInput) => ({type: "SET_CHATINPUT", chatInput: chatInput});
const addChatHistory = (role, content) => ({type: "ADD_CHATHISTORY", role: role, content: content});
const clearChatHistory = () => ({type: "CLEAR_CHATHISTORY"})
const updateLastMessage = (role, content) => ({type: "UPDATE_LAST_MESSAGE", role: role, content: content});

export const QAPage = () => {
    const theme = useTheme();

    const chatInput = useSelector(state => state.chatInput);
    const chatHistory = useSelector(state => state.chatHistory);
    const dispatch = useDispatch();
    let lastMessage = chatInput;

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (chatInput === "clear") {
                dispatch(clearChatHistory())
            } else {
                dispatch(addChatHistory("user", chatInput));
                dispatch(addChatHistory("assistant", chatInput));
            }
            dispatch(setChatInput(''))
        }
    }

    const handleInputChange = (event) => {
        dispatch(setChatInput(event.target.value));
    }

    return (
        <>
            <Title><FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faRobot}/>QA问答</Title>
            <MainContentItemBox sx={{
                flexGrow: 1,
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            }}>
                {
                    chatHistory.map((item, index) => (
                        <Message key={index} content={item[1]} role={item[0]}/>
                    ))
                }
            </MainContentItemBox>
            <MainContentItemBox sx={{
                paddingBottom: theme.spacing(4)
            }}>
                <ChatInput value={chatInput} onChange={handleInputChange} onKeyDown={handleKeyDown}
                           aria-label="empty textarea" placeholder="你好，我是QA问答机器人，请问有什么想要问我的吗"/>
            </MainContentItemBox>
        </>
    )
}

export const QAPageSidebar = () => {
    return (
        <></>
    )
}

