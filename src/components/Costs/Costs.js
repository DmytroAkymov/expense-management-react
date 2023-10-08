import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import './Costs.css';
import { useState } from 'react';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023');

    const onChangeYear = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            <Card className="costs">
                <CostsFilter onChangeYear={onChangeYear} year={selectedYear} />
                <CostList year={selectedYear} costs={props.costs} />
            </Card>
        </div>
    );
}

export default Costs;
