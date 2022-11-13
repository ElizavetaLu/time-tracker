const openStartModalReducer = (state = false, action) => action.type
    === 'OPEN_STARTMODAL'
    ? !state
    : state

export default openStartModalReducer