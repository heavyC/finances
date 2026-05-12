export default function Reports() {

    // type reportItem = {
    //     category: 
    // }

    const mockReports = [
        {
            title: "Monthly Spending",
            data: [
                { category: "Food", amount: 450.00 },
                { category: "Transportation", amount: 120.00 },
                { category: "Entertainment", amount: 80.00 },
                { category: "Utilities", amount: 200.00 },
            ]
        },
        {
            title: "Income vs Expenses",
            data: [
                { month: "January", income: 3200.00, expenses: 1840.25 },
                { month: "February", income: 3200.00, expenses: 1950.50 },
                { month: "March", income: 3200.00, expenses: 1700.75 },
            ]
        }
    ]

    return (
        <div>
            <div className="panel-header">
                <h3>Reports</h3>
            </div>
            {mockReports.map((report, index) => (
                < div key={index} className="report-section" >
                    <h4>{report.title}</h4>
                    {
                        report.title === "Monthly Spending" ? (
                            <ul>
                                {report.data.map((item, i) => (
                                    <li key={i}>{item.category}: ${item.amount.toFixed(2)}</li>
                                ))}
                            </ul>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Income</th>
                                        <th>Expenses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {report.data.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.month}</td>
                                            <td>${item.income.toFixed(2)}</td>
                                            <td>${item.expenses.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    }
                </div>
            ))}
        </div >
    )
}