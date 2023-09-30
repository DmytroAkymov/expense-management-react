import CostDate from './CostDate';
import './CostItem.css';

function CostItem(props) {
    return (
        <div className="cost-item">
            <CostDate date={props.date}></CostDate>
            <div className="cost-item__description">
                <h2>{props.description}</h2>
                <div className="cost-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default CostItem;
