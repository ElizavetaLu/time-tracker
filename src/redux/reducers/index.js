import addNewProjectReducer from "./addNewProject";
import addProgressCardReducer from "./addProgressCard";
import addDoneCardReducer from "./addDoneCard";
import openAddModalReducer from "./openAddModal";
import openStartModalReducer from "./openStartModal";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    addProject: addNewProjectReducer,
    addProgressCard: addProgressCardReducer,
    addDoneCard: addDoneCardReducer,
    openAddModal: openAddModalReducer,
    openStartModal: openStartModalReducer
})

export default allReducers