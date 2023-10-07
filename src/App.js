import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';

import './index.css';
import { useState } from 'react';

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2021, 11, 20),
        description: 'Fridge',
        amount: 199.99,
    },
    {
        id: 'c2',
        date: new Date(2023, 2, 23),
        description: 'Laptop',
        amount: 1999.99,
    },
    {
        id: 'c3',
        date: new Date(2023, 8, 18),
        description: 'Jeans',
        amount: 99.99,
    },
];

function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS);
    const addCostHandler = (cost) => {
        setCosts((prevCosts) => {
            return [cost, ...prevCosts];
        });
    };
    return (
        <div>
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs}></Costs>{' '}
        </div>
    );
}

export default App;
