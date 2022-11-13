export const addNewProject = (name, price) => ({
    type: 'ADD_NEW_PROJECT',
    name,
    price
})
export const deleteProject = name => ({
    type: 'DELETE_PROJECT',
    name,
})


export const addProgressCard = (name, assignment) => ({
    type: 'ADD_PROGRESS_CARD',
    name,
    assignment
})

export const removeProgressCard = (task, assignment) => ({
    type: 'REMOVE_PROGRESS_CARD',
    task,
    assignment
})




export const addDoneCard = (name, newAssignment, assignment, start, end, spent) => ({
    type: 'ADD_DONE_CARD',
    name,
    newAssignment,
    assignment,
    time: {
        start,
        end,
        spent
    }
})




export const changeDoneAssignment = (assignment, newAssignment) => ({
    type: 'CHANGE_DONE_ASSIGNMENT',
    assignment,
    newAssignment
})

export const changeProgressAssignment = (assignment, newAssignment) => ({
    type: 'CHANGE_PROGRESS_ASSIGNMENT',
    assignment,
    newAssignment
})

export const changeFullTime = (assignment, newStart, newEnd, newSpent) => ({
    type: 'CHANGE_TIME',
    assignment,
    newStart,
    newEnd,
    newSpent
})

export const openAddModal = () => ({ type: 'OPEN_ADDMODAL' })

export const openStartModal = () => ({ type: 'OPEN_STARTMODAL' })


















// export const delDoneCard = (assignment) => ({
//     type: 'DEL_CARD',
//     assignment
// })