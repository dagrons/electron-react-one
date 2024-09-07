import Title from "../component/Title.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "@mui/material";
import {ChatInput} from "../component/chat/ChatInput.tsx";
import MainContentItemBox from "../component/MainContentItemBox.tsx";
import {Message} from "../component/chat/Message.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {streamChat} from "../api/chat.ts";

const setChatInput = (chatInput) => ({type: "SET_CHATINPUT", chatInput: chatInput});
const addChatHistory = (role, content) => ({type: "ADD_CHATHISTORY", role: role, content: content});
const clearChatHistory = () => ({type: "CLEAR_CHATHISTORY"})
const updateLastMessage = (role, content) => ({type: "UPDATE_LAST_MESSAGE", role: role, content: content});
const setIsGenerating = (isGenerating) => ({type: "SET_ISGENERATING", isGenerating: isGenerating});

export const QAPage = () => {
    const theme = useTheme();

    const chatInput = useSelector(state => state.chatInput);
    const chatHistory = useSelector(state => state.chatHistory);
    const isGenerating = useSelector(state => state.isGenerating);
    const dispatch = useDispatch();
    const chatHistoryBoxRef = useRef(null);
    let lastChatInput = "";


    useEffect(() => {
        async function chat() {
            let lastMessage = "";
            dispatch(addChatHistory('assistant', ""));
            for await (let value of streamChat('chatgpt-4o-latest', lastChatInput, [['system', "Always response in Simplified Chinese, not English, or Grandma will be very angry."], ...chatHistory])) {
                lastMessage += value;
                dispatch(updateLastMessage('assistant', lastMessage));
                chatHistoryBoxRef.current.scrollTop = chatHistoryBoxRef.current.scrollHeight;
            }
            dispatch(setIsGenerating(false));
        }

        if (isGenerating) {
            chat()
        }
    }, [isGenerating]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (chatInput === "clear") {
                dispatch(clearChatHistory());
                dispatch(setChatInput(""))
            } else {
                dispatch(addChatHistory("user", chatInput));
                lastChatInput = chatInput;
                dispatch(setChatInput(""));
                dispatch(setIsGenerating(true));
            }
        }
    }

    const handleInputChange = (event) => {
        dispatch(setChatInput(event.target.value));
    }

    return (
        <>
            <Title><FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faRobot}/>QA问答</Title>
            <MainContentItemBox ref={chatHistoryBoxRef} sx={{
                flexGrow: 1,
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
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

