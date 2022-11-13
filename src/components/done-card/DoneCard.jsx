import React, { useEffect, useState } from "react";
import "./DoneCard.scss"
import formatTime from "../../formatTime"
import { useDispatch } from "react-redux";

const DoneCard = ({ name, assignment, start, end, spent, indx }) => {



    const dispatch = useDispatch()

    const [newStart, setNewStart] = useState(new Date(start).toString().slice(16, 24))
    const [newEnd, setNewEnd] = useState(new Date(end).toString().slice(16, 24))
    const [newSpent, setNewSpent] = useState(formatTime(spent))


    const changeTime = (newStart2, newEnd2) => {
        const changedDate = new Date(start).toString().replace(new Date(start).toString().slice(16, 24), newStart2)

        setNewSpent(formatTime(Math.floor((+new Date(new Date(end).toString().replace(new Date(end).toString().slice(16, 24), newEnd2)) - +new Date(changedDate)) / 1000)))
    }

    useEffect(() => { changeTime(newStart, newEnd) }, [newStart, newEnd])


    return (
        <div className="done-card" style={indx % 2 === 0 ? { backgroundColor: "#f0f0f1" } : null}>

            <div className="prj">
                <div className="number-name">
                    <div className="numb"  style={indx % 2 !== 0 ? { backgroundColor: "rgb(204 192 255 / 55%)" } : null}>{indx + 1}</div>
                    <div className="prj-name">{name}</div>
                </div>
                <div className="prj-assignment border">{assignment}</div>
            </div>

            <div className="prj-date">{new Date(end).toString().slice(0, 15)}</div>

            <div className="time border">
                <input
                    className="input"
                    type="text"
                    value={newStart}
                    onChange={e => {
                        setNewStart(e.target.value)
                    }}
                />
            </div>
            <div className="time">
                <input
                    className="input"
                    type="text"
                    value={newEnd}
                    onChange={e => {
                        setNewEnd(e.target.value)

                    }}
                />
            </div>
            <div className="time border-left">{newSpent}</div>
        </div>
    )
}

export default DoneCard
