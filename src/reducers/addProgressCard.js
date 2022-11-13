const addProgressCardReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROGRESS_CARD':
            return [...state, {
                name: action.name,
                assignment: action.assignment,
            }];

        case 'REMOVE_PROGRESS_CARD':

            return state = state.filter(card => card.assignment
                !== action.assignment
                && action.task
            );


        case 'CHANGE_PROGRESS_ASSIGNMENT': {
            const index = state.findIndex(card => card.assignment === action.assignment)
            state[index].assignment = action.newAssignment

            return [...state]
        }

        default:
            return state
    }
}

export default addProgressCardReducer
