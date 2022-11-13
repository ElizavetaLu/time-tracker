const openAddModalReducer = (state = false, action) => action.type
    === 'OPEN_ADDMODAL'
    ? !state
    : state

export default openAddModalReducer