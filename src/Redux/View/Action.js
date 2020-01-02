import { VIEW, LIST } from './ActionType';

export const toggleViewOpen = () => {
    return {
        type: GRID_VIEW
    }
}

export const toggleListClose = () => {
    return {
        type: LIST_VIEW
    }
}