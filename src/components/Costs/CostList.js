import CostItem from './CostItem';
import './CostList.css';

const CostList = (props) => {
    let costsContent = (
        <h2 className="cost-list__fallback">No expenses this year</h2>
    );
    if (props.filteredCosts.length > 0) {
        costsContent = props.filteredCosts.map((item) => {
            return (
                <CostItem
                    key={item.id}
                    date={item.date}
                    description={item.description}
                    amount={item.amount}
                />
            );
        });
    }

    return <ul className="cost-list">{costsContent}</ul>;
};

export default CostList;
