import {
    ADD_PROGRESS_CARD,
    REMOVE_PROGRESS_CARD,
    CHANGE_PROGRESS_ASSIGNMENT
} from "../actions/types";

const initialSate = [];


const addProgressCardReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case ADD_PROGRESS_CARD:
            return [...state, payload];

        case REMOVE_PROGRESS_CARD:

            return state = state.filter(card => card.assignment
                !== payload.assignment
                && payload.task
            );

        case CHANGE_PROGRESS_ASSIGNMENT: {
            const index = state.findIndex(card => card.assignment === payload.assignment);
            state[index].assignment = payload.newAssignment;

            return state
        }

        default:
            return state
    }
}

export default addProgressCardReducer
