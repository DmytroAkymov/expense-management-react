import { useState } from 'react';
import './CostForm.css';

const CostForm = () => {
    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: '',
    });

    const nameChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value,
        // });
        //below is a safer way
        setUserInput((previousState) => {
            return {
                ...previousState,
                name: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value,
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value,
        });
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
