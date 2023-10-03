import { useState } from 'react';
import './CostForm.css';

const CostForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return (
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type="text" onChange={nameChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Sum</label>
                    <input
                        type="number"
                        onChange={amountChangeHandler}
                        nim="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input
                        type="date"
                        onChange={dateChangeHandler}
                        nim="2023-01-01"
                        step="2023-12-31"
                    />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;
