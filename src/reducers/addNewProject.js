const addNewProjectReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_PROJECT':
            return [...state, {
                name: action.name,
                price: action.price
            }];

        case 'DELETE_PROJECT':
            return state = state.filter(card => card.name !== action.name);

        default:
            return state
    }
}

export default addNewProjectReducer