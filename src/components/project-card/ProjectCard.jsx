import React from "react";
import { useDispatch } from "react-redux";
import { deleteProject, openStartModal } from "../../actions";
import "./ProjectCard.scss"

const ProjectCard = ({name, price, setPrjName}) => {

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
        </div>
    )
}

export default ProjectCard