import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };
        props.onAddCost(costData);
    };

    return (
        <div className="new-cost">
            <CostForm OnSaveCostData={saveCostDataHandler} />
        </div>
    );
};

export default NewCost;
