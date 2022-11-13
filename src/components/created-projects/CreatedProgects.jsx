import React, { useState } from "react";
import { useSelector } from "react-redux";
import StartModal from "../../modals/start-modal/StartModal";
import ProjectCard from "../project-card/ProjectCard";
import "./CreatedProgects.scss"

const CreatedProjects = () => {

    const newProject = useSelector(state => state.addProject)
    const isActive = useSelector(state => state.openStartModal)
    const [prjName, setPrjName] = useState('')


    return (
        <div className="proj-container">
            <div className="logo">
                <div className="icon">
                    <img src="/time-tracker/build//logo.png" alt="" className="logo-icon"/>
                </div>
                <div className="logo-text">
                    <span className="left">stay</span>
                    <span className="top">productive</span>
                </div>
            </div>
            <div className="created-projects">
                {newProject && newProject.map(card => (<ProjectCard key={card.name} name={card.name} price={card.price} setPrjName={setPrjName}/>))}

                {newProject.length === 0 && <div className="dummy">Start by adding new project...</div>}


                <StartModal isActive={isActive} name={prjName}/>
            </div>
        </div>
    )
}

export default CreatedProjects