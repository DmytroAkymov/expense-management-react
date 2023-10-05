import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';

import './index.css';

function App() {
    const cost = [
        {
            id: 'c1',
            date: new Date(2022, 11, 20),
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

    const addCostHandler = (cost) => {
        console.log(cost);
        console.log('App Component');
    };

    return (
        <div>
            <NewCost onAddCost={addCostHandler} />
            <Costs cost={cost}></Costs>{' '}
        </div>
    );
}

export default App;
