import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProgressCard, openStartModal } from "../../redux/actions"
import './startModal.scss';

const StartModal = ({ isActive, name }) => {

    const [assignment, setAssignment] = useState('')
    const dispatch = useDispatch()
    const [err, setErr] = useState(false)


    return (
        <div className={isActive ? "modal active" : "modal"} onClick={() => dispatch(openStartModal())}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="project-name">{name}</div>
                <input
                    type="text"
                    placeholder="Enter an assignment title..."
                    className="input"
                    value={assignment}
                    onChange={e => {
                        setAssignment(e.target.value);
                        if (err) setErr(!err)
                    }}
                    style={{ borderBottom: err && '2px solid #D63301' }}
                />

                <div className="btn">
                    <button className="button"
                        onClick={() => {
                            if (!assignment.trim()) return setErr(!err)
                            dispatch(openStartModal())
                            setAssignment('')
                            dispatch(addProgressCard(name, assignment))
                        }}>
                        Start trackig time
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartModal