const chatInput = "";

export const chatInputReducer = (state = chatInput, action) => {
    switch (action.type) {
        case 'SET_CHATINPUT':
            return action.chatInput;
        default:
            return state;
    }
}
