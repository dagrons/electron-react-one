import ChatMessage from "../types/chat.ts";

const chatHistory: Array<ChatMessage> = []

export const chatHistoryReducer = (state = chatHistory, action) => {
    switch (action.type) {
        case "ADD_CHATHISTORY":
            return [...state, action.message];
        case "CLEAR_CHATHISTORY":
            return [];
        case "UPDATE_LAST_MESSAGE":
            return [...state.slice(0, state.length - 1), action.message]
        default:
            return state
    }
}
