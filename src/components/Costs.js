import CostItem from './CostItem';
import './Costs.css';

function Costs(props) {
    return (
        <div className="costs">
            <CostItem
                date={props.cost[0].date}
                description={props.cost[0].description}
                amount={props.cost[0].amount}
            ></CostItem>
            <CostItem
                date={props.cost[1].date}
                description={props.cost[1].description}
                amount={props.cost[1].amount}
            ></CostItem>
            <CostItem
                date={props.cost[2].date}
                description={props.cost[2].description}
                amount={props.cost[2].amount}
            ></CostItem>
        </div>
    );
}

export default Costs;
