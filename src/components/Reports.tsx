
import { MockReportsData } from "../MockData";

export default function Reports() {
    return (
        <div>
            <div className="panel-header">
                <h3>Reports</h3>
            </div>
            {MockReportsData.map((report, index) => (
                <div key={index} className="report-section" >
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