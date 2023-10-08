import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    };

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    };

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };
        props.onAddCost(costData);
        setIsFormVisible(false);
    };

    return (
        <div className="new-cost">
            {isFormVisible === true ? (
                <CostForm
                    onSaveCostData={saveCostDataHandler}
                    cancelCostHandler={cancelCostHandler}
                />
            ) : (
                <button onClick={inputCostDataHandler}>
                    Add a new expense
                </button>
            )}
        </div>
    );
};

export default NewCost;
