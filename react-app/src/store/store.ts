import {combineReducers, createStore} from "redux";
import {sideBarReducer} from "./sidebar.ts";
import {chatHistoryReducer, chatInputDisabledReducer, chatInputReducer, isGeneratingReducer} from "./chat.ts";


const reducer = combineReducers({
    sidebar: sideBarReducer,
    chatInput: chatInputReducer,
    chatHistory: chatHistoryReducer,
    isGenerating: isGeneratingReducer,
    chatInputDisabled: chatInputDisabledReducer
})

const store = createStore(reducer)

export default store;
