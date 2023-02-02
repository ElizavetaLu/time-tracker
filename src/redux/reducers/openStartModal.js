import { OPEN_STARTMODAL } from "../actions/types";
const initialState = {
    isOpen: false
}

const openStartModalReducer = (state = initialState, { type }) => {
    if (type === OPEN_STARTMODAL) return { isOpen: !state.isOpen };

    return state;
}

export default openStartModalReducer