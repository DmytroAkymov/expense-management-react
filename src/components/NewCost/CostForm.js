import { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
    const [userInput, setUserInput] = useState({
        inputName: '',
        inputAmount: '',
        inputDate: '',
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
                inputName: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            inputAmount: event.target.value,
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            inputDate: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const costDate = {
            description: userInput.inputName,
            amount: userInput.inputAmount,
            date: new Date(userInput.inputDate),
        };
        props.onSaveCostData(costDate);
        setUserInput({
            inputName: '',
            inputAmount: '',
            inputDate: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input
                        type="text"
                        value={userInput.inputName}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Sum</label>
                    <input
                        type="number"
                        value={userInput.inputAmount}
                        onChange={amountChangeHandler}
                        nim="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={userInput.inputDate}
                        onChange={dateChangeHandler}
                        nim="2023-01-01"
                        step="2023-12-31"
                    />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Add expense</button>
                    <button type="button" onClick={props.cancelCostHandler}>
                        Сlear form
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;
