import { useDispatch } from "react-redux";
import { deleteProject, openStartModal } from "../../redux/actions";
import "./ProjectCard.scss"

const ProjectCard = ({ name, price, setPrjName, date }) => {

    const dispatch = useDispatch()

    return (
        <div className="project-card">
            <div className="header">
                <div className="data">{date}</div>
                <div onClick={() => dispatch(deleteProject(name))} className="delete">
                    <img src="/time-tracker/build//icons/icons8-trash-96.png" alt="del" className="delete-icon" />
                </div>
            </div>

            <div className="content">
                <span className="name">{name}</span>
                <span className="price">${price} per hour</span>
            </div>

            <div className="btn">
                <button className="button" onClick={() => {
                    setPrjName(name)
                    dispatch(openStartModal())
                }}>start</button>
            </div>
        </div>
    )
}

export default ProjectCard