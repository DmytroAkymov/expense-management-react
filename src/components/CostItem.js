import './CostItem.css';

function CostItem(props) {
    return (
        <div className="cost-item">
            <div>
                <div>
                    {props.date.toLocaleString('en-US', { month: 'long' })}
                </div>
                <div>{props.date.getFullYear()}</div>
                <div>
                    {props.date.toLocaleString('en-US', { day: '2-digit' })}
                </div>
            </div>

            <div className="cost-item__description">
                <h2>{props.description}</h2>
                <div className="cost-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default CostItem;
