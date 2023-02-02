import {
    ADD_DONE_CARD,
    CHANGE_DONE_ASSIGNMENT,
    CHANGE_TIME
} from "../actions/types";

const initialSate = [];

const addDoneCardReducer = (state = initialSate, { type, payload }) => {

    switch (type) {
        case ADD_DONE_CARD:
            return [payload, ...state];

        case CHANGE_DONE_ASSIGNMENT: {
            const index = state.findIndex(card => card.assignment === payload.assignment);
            state[index].assignment = payload.newAssignment;

            return state;
        }

        case CHANGE_TIME: {
            const index = state.findIndex(card => card.assignment === payload.assignment);
            state[index].time = {
                start: payload.newStart,
                end: payload.newEnd,
                spent: payload.newSpent
            };

            return state;
        }

        default:
            return state;
    }
}

export default addDoneCardReducer
