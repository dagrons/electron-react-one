import {combineReducers, createStore} from "redux";
import {sideBarReducer} from "./sidebar.ts";
import {chatInputReducer} from "./chatInput.ts";
import {chatHistoryReducer} from "./chatHistory.ts";


const reducer = combineReducers({
    sidebar: sideBarReducer,
    chatInput: chatInputReducer,
    chatHistory: chatHistoryReducer
})

const store = createStore(reducer)

export default store;
