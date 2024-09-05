const sideBarState = {
    open: true,
    sideBarWidth: 271,
    isDragging: false,
    transitionEnabled: true,
}

export const sideBarReducer = (state = sideBarState, action) => {
    switch (action.type) {
        case 'SET_OPEN':
            return {...state, open: action.open};
        case 'SET_SIDEBAR_WIDTH':
            return {...state, sideBarWidth: action.sideBarWidth};
        case 'SET_IS_DRAGGING':
            return {...state, isDragging: action.isDragging};
        case 'SET_TRANSITION_ENABLED':
            return {...state, transitionEnabled: action.transitionEnabled};
        default:
            return state
    }
}
