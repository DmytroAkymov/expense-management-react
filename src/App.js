import Costs from './components/Costs/Costs';
import './index.css';

function App() {
    const cost = [
        {
            date: new Date(2022, 11, 20),
            description: 'Fridge',
            amount: 199.99,
        },
        {
            date: new Date(2023, 2, 23),
            description: 'Laptop',
            amount: 1999.99,
        },
        {
            date: new Date(2023, 8, 18),
            description: 'Jeans',
            amount: 99.99,
        },
    ];

    return (
        <div>
            <h1>Expense application</h1>
            <Costs cost={cost}></Costs>{' '}
        </div>
    );
}

export default App;
