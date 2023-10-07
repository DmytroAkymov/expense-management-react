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
                {props.costs
                    .filter(
                        (item) =>
                            selectedYear === item.date.getFullYear().toString()
                    )
                    .map((item) => {
                        return (
                            <CostItem
                                key={item.id}
                                date={item.date}
                                description={item.description}
                                amount={item.amount}
                            />
                        );
                    })}
            </Card>
        </div>
    );
}

export default Costs;
