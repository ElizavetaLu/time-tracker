import { OPEN_ADDMODAL } from "../actions/types";
const initialState = {
    isOpen: false
}

const openAddModalReducer = (state = initialState, { type }) => {
    if (type === OPEN_ADDMODAL)  return { isOpen: !state.isOpen };

    return state;
}

export default openAddModalReducer