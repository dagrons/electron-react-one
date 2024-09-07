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

const chatInput = "";

export const chatInputReducer = (state = chatInput, action) => {
    switch (action.type) {
        case 'SET_CHATINPUT':
            return action.chatInput;
        default:
            return state;
    }
}


const isGenerating = false;

export const isGeneratingReducer = (state=isGenerating, action) => {
    switch (action.type) {
        case "SET_ISGENERATING":
            return action.isGenerating;
        default:
            return isGenerating;
    }
}
