import {combineReducers, createStore} from "redux";
import {sideBarReducer} from "./sidebar.ts";
import {chatHistoryReducer} from "./chatHistory.ts";


const reducer = combineReducers({
    sidebar: sideBarReducer,
    chatHistory: chatHistoryReducer,
})

const store = createStore(reducer)

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
