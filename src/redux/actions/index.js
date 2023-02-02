import {
    ADD_DONE_CARD,
    ADD_NEW_PROJECT,
    ADD_PROGRESS_CARD,
    CHANGE_DONE_ASSIGNMENT,
    CHANGE_PROGRESS_ASSIGNMENT,
    CHANGE_TIME,
    DELETE_PROJECT,
    OPEN_ADDMODAL,
    OPEN_STARTMODAL,
    REMOVE_PROGRESS_CARD
} from "./types"

export const addNewProject = (name, price, date) => ({
    type: ADD_NEW_PROJECT,
    payload: {
        name,
        price,
        date
    }
})
export const deleteProject = name => ({
    type: DELETE_PROJECT,
    payload: name,
})


export const addProgressCard = (name, assignment) => ({
    type: ADD_PROGRESS_CARD,
    payload: {
        name,
        assignment
    }
})

export const removeProgressCard = (task, assignment) => ({
    type: REMOVE_PROGRESS_CARD,
    payload: {
        task,
        assignment
    }
})



export const addDoneCard = (name, newAssignment, assignment, start, end, spent) => ({
    type: ADD_DONE_CARD,
    payload: {
        name,
        newAssignment,
        assignment,
        time: {
            start,
            end,
            spent
        }
    }
})



export const changeDoneAssignment = (assignment, newAssignment) => ({
    type: CHANGE_DONE_ASSIGNMENT,
    payload: {
        assignment,
        newAssignment
    }
})

export const changeProgressAssignment = (assignment, newAssignment) => ({
    type: CHANGE_PROGRESS_ASSIGNMENT,
    payload: {
        assignment,
        newAssignment
    }
})

export const changeFullTime = (assignment, newStart, newEnd, newSpent) => ({
    type: CHANGE_TIME,
    payload: {
        assignment,
        newStart,
        newEnd,
        newSpent
    }
})

export const openAddModal = () => ({ type: OPEN_ADDMODAL })

export const openStartModal = () => ({ type: OPEN_STARTMODAL })