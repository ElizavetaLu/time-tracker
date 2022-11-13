import React from "react";
import { useSelector } from "react-redux";
import DoneCard from "../../done-card/DoneCard";
import "./timesheet.scss"

const Timesheet = () => {

    const cards = useSelector(state => state.addDoneCard)

    return (
        <div className="timesheets">
            <div className="title">Timesheets</div>
            <div className="cards-info">
                <div className="header">

                    <div className="prj">
                        <div className="number-name">
                            <div className="numb"></div>
                            <div className="prj-name">Project Name</div>
                        </div>
                        <div className="prj-assignment border">Assignment</div>
                    </div>

                    <div className="prj-date">Date</div>
                    <div className="time border">Start time</div>
                    <div className="time">Stop time</div>
                    <div className="time border-left">Duration</div>

                </div>

                <div className="done-cards">

                    {cards && cards.map((card, indx) => <DoneCard
                        key={card.assignment}
                        indx={indx}
                        name={card.name}
                        assignment={card.assignment}
                        start={card.time.start}
                        end={card.time.end}
                        spent={card.time.spent}
                    />)}

                    {cards.length === 0 && <div className="dummy">...There's no done projects yet</div>}

                </div>
            </div>
        </div>
    )
}

export default Timesheet