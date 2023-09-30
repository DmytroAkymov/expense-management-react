import CostItem from './components/CostItem';

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
            <h1>Hallo word!</h1>
            <CostItem
                date={cost[0].date}
                description={cost[0].description}
                amount={cost[0].amount}
            ></CostItem>
            <CostItem
                date={cost[1].date}
                description={cost[1].description}
                amount={cost[1].amount}
            ></CostItem>
            <CostItem
                date={cost[2].date}
                description={cost[2].description}
                amount={cost[2].amount}
            ></CostItem>
        </div>
    );
}

export default App;
