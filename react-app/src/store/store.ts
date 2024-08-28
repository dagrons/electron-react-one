import {createStore} from "redux";

const initialState = {
    open: true,
    sideBarWidth: "25%",
    isDragging: false,
    transitionEnabled: true,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_OPEN': return {...state, open: action.open};
        case 'SET_SIDEBAR_WIDTH': return {...state, sideBarWidth: action.sideBarWidth};
        case 'SET_IS_DRAGGING': return {...state, isDragging: action.isDragging};
        case 'SET_TRANSITION_ENABLED': return {...state, transitionEnabled: action.transitionEnabled};
        default: return state
    }
}

const store = createStore(reducer)

export default store;
