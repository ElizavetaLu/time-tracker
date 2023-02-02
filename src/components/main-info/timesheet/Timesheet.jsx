import { useSelector } from "react-redux";
import DoneRow from "./done-row/DoneRow";
import "./timesheet.scss";

const Timesheet = () => {

    const cards = useSelector(state => state.addDoneCard);

    return (
        <div className="timesheets">
            <div className="title">Timesheets</div>
            {cards.length === 0 
            ?<div className="dummy">...None project is finished</div>
            :<table>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Assignment</th>
                        <th>Date</th>
                        <th>Start time</th>
                        <th>Stop time</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.length > 0 &&
                        cards.map(data => <DoneRow
                            key={data.assignment}
                            name={data.name}
                            assignment={data.assignment}
                            start={data.time.start}
                            end={data.time.end}
                            spent={data.time.spent}
                        />)}
                </tbody>
            </table>}
        </div>
    )
}

export default Timesheet