import { useState } from "react";
import { useSelector } from "react-redux";
import StartModal from "../../modals/start-modal/StartModal";
import ProjectCard from "../project-card/ProjectCard";
import "./CreatedProgects.scss";

const CreatedProjects = () => {

    const newProject = useSelector(state => state.addProject);
    const isActive = useSelector(state => state.openStartModal.isOpen);
    const [prjName, setPrjName] = useState('');


    return (
        <div className="proj-container">
            <div className="title">New projects:</div>
            <div className="created-projects">
                {newProject &&
                    newProject.map(card => (<ProjectCard
                        key={card.name}
                        name={card.name}
                        price={card.price}
                        date={card.date}
                        setPrjName={setPrjName}
                    />))}

                {newProject.length === 0 && <div className="dummy">No active projects...</div>}

                <StartModal isActive={isActive} name={prjName} />
            </div>
        </div>
    )
}

export default CreatedProjects