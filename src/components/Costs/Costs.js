import Card from '../UI/Card';
import CostItem from './CostItem';
import CostsFilter from './CostsFilter';
import './Costs.css';
import { useState } from 'react';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023');

    const onChangeYear = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="costs">
                <CostsFilter onChangeYear={onChangeYear} year={selectedYear} />
                {filteredCosts.length === 0 ? (
                    <p>No expenses this year</p>
                ) : (
                    filteredCosts.map((item) => {
                        return (
                            <CostItem
                                key={item.id}
                                date={item.date}
                                description={item.description}
                                amount={item.amount}
                            />
                        );
                    })
                )}
            </Card>
        </div>
    );
}

export default Costs;
