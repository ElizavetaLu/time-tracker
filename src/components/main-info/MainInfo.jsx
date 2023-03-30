import { useDispatch, useSelector } from "react-redux";
import { openAddModal } from "../../redux/actions"
import ProgressList from "./progress-list/ProgressList";
import Timesheet from "./timesheet/Timesheet";
import AddModal from "../../modals/add-newProject-modal/AddModal"
import "./MainInfo.scss"

const MainInfo = () => {

    const isActive = useSelector(state => state.openAddModal.isOpen)
    const dispatch = useDispatch()

    return (
        <div className="main-info-container">
            <div className="header">
                <div className="date">
                    <div className="icon">
                        <img src="/time-tracker/build//icons/icons8-calendar-week-96.png" alt="" />
                    </div>
                    <div className="current-date">{new Date().toString().slice(0, 16)}</div>
                </div>
                <button className="button" onClick={() => dispatch(openAddModal())}>+ add project</button>
            </div>
            <div className="main-info">
                <ProgressList />
                <Timesheet />
            </div>


            <AddModal isActive={isActive} />
        </div>
    )
}

export default MainInfo