const chatHistory = []

export const chatHistoryReducer = (state = chatHistory, action) => {
    switch (action.type) {
        case "ADD_CHATHISTORY":
            return [...state, [action.role, action.content]];
        default:
            return state
    }
}
