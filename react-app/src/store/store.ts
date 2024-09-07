import {combineReducers, createStore} from "redux";
import {sideBarReducer} from "./sidebar.ts";
import {chatHistoryReducer, chatInputReducer, isGeneratingReducer} from "./chat.ts";


const reducer = combineReducers({
    sidebar: sideBarReducer,
    chatInput: chatInputReducer,
    chatHistory: chatHistoryReducer,
    isGenerating: isGeneratingReducer
})

const store = createStore(reducer)

export default store;
