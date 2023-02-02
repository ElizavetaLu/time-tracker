import { useSelector } from "react-redux";
import ProgressCard from "../../progress-card/ProgressCard";
import "./ProgressList.scss";

const ProgressList = () => {

    const cards = useSelector(state => state.addProgressCard);

    return (
        <div className="progress-list">
            <div className="title">In-progress list</div>
            <div className="progress-cards">

                {cards && cards.map(card => (<ProgressCard
                    key={card.assignment}
                    name={card.name}
                    assignment={card.assignment}
                />))}

                {cards.length === 0 && <div className="dummy">...None project is started</div>}
            </div>
        </div>
    )
}

export default ProgressList