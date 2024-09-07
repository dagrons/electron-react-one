import {combineReducers, createStore} from "redux";
import {sideBarReducer} from "./sidebar.ts";
import {chatHistoryReducer} from "./chatHistory.ts";


const reducer = combineReducers({
    sidebar: sideBarReducer,
    chatHistory: chatHistoryReducer,
})

const store = createStore(reducer)

export default store;
