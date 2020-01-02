import { VIEW, LIST } from './ActionType';

const initialState = {
    viewOpen: false
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case VIEW: return {
            ...state,
            viewOpen: true
        }
        case LIST: return {
            ...state,
            viewOpen: false
        }
        default: return state
    }
}
export default reducers