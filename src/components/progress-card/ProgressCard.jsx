import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeProgressCard, addDoneCard } from "../../redux/actions";
import formatted from "../../formatTime";
import "./progressCard.scss";


const ProgressCard = ({ name, assignment }) => {

    const [task, setTask] = useState(assignment);
    const dispatch = useDispatch();

    const [start, setStart] = useState(+new Date());

    const [isCounting, setIsCounting] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            isCounting && setCounter(time => time + 1)
        }, 1000);

        return () => clearInterval(timerId)
    }, [isCounting])


    return (
        <div className="progress-card">
            <div className="day">
                <div className="number">{new Date(start).getDate()}</div>
                <div className="month">{new Date(start).toString().slice(4, 8)}</div>
            </div>

            <div className="project-info">
                <div className="prj-data">
                    <div className="assignment">{assignment}</div>
                    <div className="name">{name}</div>
                </div>
                <div className="time-counter">
                    <div className="counter">{formatted(counter)}</div>
                    <div className="btn">
                        <button
                            className="button"
                            onClick={() => isCounting ? setIsCounting(false) : setIsCounting(true)}
                        >{isCounting ? 'pause' : 'resume'}</button>
                        <button className="button" onClick={() => {
                            dispatch(removeProgressCard(task, assignment));
                            dispatch(addDoneCard(name, task, assignment, start, +new Date(), counter));
                        }}>done</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProgressCard