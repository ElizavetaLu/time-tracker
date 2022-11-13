import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, openStartModal } from "../../actions";
import StartModal from "../../modals/start-modal/StartModal"
import "./ProjectCard.scss"

const ProjectCard = ({name, price, setPrjName}) => {

    // const isActive = useSelector(state => state.openStartModal)
    const dispatch = useDispatch()


    return (
        <div className="project-card">
            <div className="delete" onClick={()=> dispatch(deleteProject(name))}>
                <img src="/time-tracker/build//icons/icons8-multiply-30.png" alt="" width="15px" />
            </div>
            <div className="prj-name">{name}</div>
            <div className="prj-price">${price} per hour</div>
            <div className="btn">
                <button className="button" onClick={() => {
                    setPrjName(name)
                    dispatch(openStartModal())}
                    }>start</button>
            </div>

            {/* <StartModal isActive={isActive} name={name} /> */}
        </div>
    )
}

export default ProjectCard