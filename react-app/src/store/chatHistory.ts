const chatHistory = []

export const chatHistoryReducer = (state = chatHistory, action) => {
    switch (action.type) {
        case "ADD_CHATHISTORY":
            return [...state, [action.role, action.content]];
        case "CLEAR_CHATHISTORY":
            return [];
        case "UPDATE_LAST_MESSAGE":
            return [...state.slice(0, state.length-1), [action.role, action.content]]
        default:
            return state
    }
}
