import Title from "../component/Title.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "@mui/material";
import {ChatInput} from "../component/chat/ChatInput.tsx";
import MainContentItemBox from "../component/MainContentItemBox.tsx";
import {Message} from "../component/chat/Message.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {streamChat} from "../api/chat.ts";
import {RootState} from "../store/store.ts";
import ChatMessage from "../types/chat.ts";


const appendMessage = (message: ChatMessage) => ({type: "ADD_CHATHISTORY", message: message});
const clearChatHistory = () => ({type: "CLEAR_CHATHISTORY"})
const updateLastMessage = (message: ChatMessage) => ({type: "UPDATE_LAST_MESSAGE", message: message});


export const QAPage = () => {
    const theme = useTheme();

    // store state
    const chatHistory = useSelector((state: RootState) => state.chatHistory);
    const dispatch = useDispatch();

    // page local state
    const [chatInput, setChatInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [chatInputDisabled, setChatInputDisabled] = useState(false);

    // ref
    const chatHistoryBoxRef = useRef(null);
    let lastChatInput = "";


    useEffect(() => {
        async function chat() {
            let lastMessage = "";
            for await (let value of streamChat('chatgpt-4o-latest', lastChatInput, chatHistory)) {
                lastMessage += value;
                dispatch(updateLastMessage(["assistant", lastMessage]));
                chatHistoryBoxRef.current.scrollTop = chatHistoryBoxRef.current.scrollHeight;
            }
            setIsGenerating(false);
            setChatInputDisabled(false);
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
                setChatInput("")
            } else {
                dispatch(appendMessage(["user", chatInput]));
                dispatch(appendMessage(["assistant", ""]));
                lastChatInput = chatInput;
                setChatInput("");
                setChatInputDisabled(true);
                setIsGenerating(true)
            }
        }
    }

    const handleInputChange = (event) => {
        setChatInput(event.target.value);
    }

    return (
        <>
            <Title><FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faRobot}/>QA问答</Title>
            <MainContentItemBox theme={theme} ref={chatHistoryBoxRef} sx={{
                flexGrow: 1,
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
            }}>
                {
                    chatHistory.map((item, index) => (
                        <Message key={index} message={item}/>
                    ))
                }
            </MainContentItemBox>
            <MainContentItemBox theme={theme} sx={{
                paddingBottom: theme.spacing(4)
            }}>
                <ChatInput disabled={chatInputDisabled} value={chatInput} onChange={handleInputChange}
                           onKeyDown={handleKeyDown}
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

