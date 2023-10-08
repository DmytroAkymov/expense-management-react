import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';
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
                <CostsDiagram costs={filteredCosts} />
                <CostList
                    year={selectedYear}
                    costs={props.costs}
                    filteredCosts={filteredCosts}
                />
            </Card>
        </div>
    );
}

export default Costs;
