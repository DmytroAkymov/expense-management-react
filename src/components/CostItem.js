import './CostItem.css';

function CostItem() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const costDescription = 'Холодильник';
    const costAmount = 999.99;

    return (
        <div className="cost-item">
            <div>
                {date} {month} {year}
            </div>

            <div className="cost-item__description">
                <h2>{costDescription}</h2>
                <div className="cost-item__price">${costAmount}</div>
            </div>
        </div>
    );
}

export default CostItem;
