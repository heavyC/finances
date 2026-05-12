import "/src/component-styles.css"
import { MockTransactionsData } from "../MockData";

console.log("---------");
MockTransactionsData.map((txn) => {
    console.log(txn);
})

export default function DashboardContent() {
    return (
        <>
            <div className="panel-header">
                <h3>Recent Transactions</h3>
            </div>
            <div className="transactions-list">
                {MockTransactionsData.map((item) => (
                    <div key={item.txn_id} className="transaction-item">
                        <div className="transaction-details">
                            <div className="transaction-name">
                                {item.txn_title}
                            </div>
                            <div className="transaction-date">
                                posted: {item.date_posted}
                            </div>
                        </div>
                        <div className="transaction-date">
                            updated: {item.date_updated}
                        </div>
                        <div className={`transaction-amount ${item.txn_type}`}>
                            {item.txn_amount}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}