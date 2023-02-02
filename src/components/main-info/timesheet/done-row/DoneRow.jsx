import { useState } from "react";
import formatTime from "../../../../formatTime";
import "./DoneRow.scss";

const DoneRow = ({ name, assignment, start, end, spent }) => {

    const [newStart, setNewStart] = useState(new Date(start).toString().slice(16, 24));
    const [newEnd, setNewEnd] = useState(new Date(end).toString().slice(16, 24));
    const [newSpent, setNewSpent] = useState(null);

    const changeTime = (newStart2, newEnd2) => {
        const changedDate = new Date(start).toString().replace(new Date(start).toString().slice(16, 24), newStart2);
        setNewSpent(formatTime(Math.floor((+new Date(new Date(end).toString().replace(new Date(end).toString().slice(16, 24), newEnd2)) - +new Date(changedDate)) / 1000)));
    };


    return (
        <tr key={assignment}>
            <td>{name}</td>
            <td>{assignment}</td>
            <td>{new Date(end).toString().slice(0, 15)}</td>

            <td>
                <input
                    className="input"
                    type="text"
                    value={newStart}
                    onChange={e => {
                        setNewStart(e.target.value);
                        changeTime(newStart, newEnd)
                    }}
                />
            </td>
            <td>
                <input
                    className="input"
                    type="text"
                    value={newEnd}
                    onChange={e => {
                        setNewEnd(e.target.value);
                        changeTime(newStart, newEnd)
                    }}
                />
            </td>
            <td>
                {newSpent ? newSpent : formatTime(spent)}
            </td>
        </tr>
    )
}

export default DoneRow
