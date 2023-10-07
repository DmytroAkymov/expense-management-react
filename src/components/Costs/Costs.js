import Card from '../UI/Card';
import CostItem from './CostItem';
import CostsFilter from './CostsFilter';
import './Costs.css';
import { useState } from 'react';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('');

    const onChangeYear = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            <Card className="costs">
                <CostsFilter onChangeYear={onChangeYear} year={selectedYear} />
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
            </Card>
        </div>
    );
}

export default Costs;
