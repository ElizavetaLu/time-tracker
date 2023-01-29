const addDoneCardReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_DONE_CARD':
            return [...state, {
                name: action.name,
                assignment: action.assignment,
                time: {
                    start: action.time.start,
                    end: action.time.end,
                    spent: action.time.spent
                }
            }];

        case 'CHANGE_DONE_ASSIGNMENT': {
            const index = state.findIndex(card => card.assignment === action.assignment)
            state[index].assignment = action.newAssignment

            return [...state]
        };


        case 'CHANGE_TIME': {
            const index = state.findIndex(card => card.assignment === action.assignment)
            console.log(`reducer: start:${action.newStart}, end:${action.newEnd}, spent:${action.newSpent}`)
            console.log('')

            state[index].time = {
                start: action.newStart,
                end: action.newEnd,
                spent: action.newSpent
            }

            return [...state]
        }

        default:
            return state
    }
}

export default addDoneCardReducer
