import { ADD_NEW_PROJECT, DELETE_PROJECT } from "../actions/types";

const initialSate = [];

const addNewProjectReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case ADD_NEW_PROJECT:
            return [...state, payload];

        case DELETE_PROJECT:
            return state = state.filter(card => card.name !== payload);

        default:
            return state
    }
}

export default addNewProjectReducer