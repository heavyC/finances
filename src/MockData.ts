
import { Categories } from "./data/Categories.ts";
import { TransactionTypes, MS_PER_DAY, MS_PER_HOUR } from "../src/constants/Constants.ts";


type monthlySpendingType = {
    title: "Monthly Spending"
    data: { category: string, amount: number }[]
};
type incomeVSExpensesType = {
    title: "Income vs Expenses"
    data: { month: string, income: number, expenses: number }[]
};
export const MockReportsData: Array<monthlySpendingType | incomeVSExpensesType> = [
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

export const MockSettingsData = [
    { label: "Theme", value: "Light", options: ["Light", "Dark"] },
    { label: "Notifications", value: "Enabled", options: ["Enabled", "Disabled"] },
    { label: "Currency", value: "USD", options: ["USD", "EUR", "GBP"] },
    { label: "Language", value: "English", options: ["English", "Spanish", "French"] },
];

const getMockDate = (hoursBack = 0, daysBack = 0) => {
    return new Date(Date.now() - (daysBack * MS_PER_DAY) - (hoursBack * MS_PER_HOUR)).toLocaleDateString();
}

export const MockTransactionsData = [
    {
        txn_id: "1", txn_type: TransactionTypes.EXPENSE, txn_title: "Starbucks", txn_amount: 17.95,
        date_posted: getMockDate(1, 4), date_updated: getMockDate(0, 4),
        category: Categories.FOOD.COFFEE.label
    },

    {
        txn_id: "2", txn_type: TransactionTypes.EXPENSE, txn_title: "Peet's", txn_amount: 137.90,
        date_posted: getMockDate(0, 4), date_updated: getMockDate(0, 4),
        category: Categories.FOOD.COFFEE.label
    },

    {
        txn_id: "3", txn_type: TransactionTypes.EXPENSE, txn_title: "Amazon", txn_amount: 198.00,
        date_posted: getMockDate(2, 0), date_updated: getMockDate(1, 9),
        category: Categories.GOODS.AMAZON.label
    },

    {
        txn_id: "4", txn_type: TransactionTypes.INCOME, txn_title: "Paycheck", txn_amount: 3198.00,
        date_posted: getMockDate(7, 0), date_updated: getMockDate(1, 4),
        category: Categories.INCOME.PAYCHECK.label
    },

    {
        txn_id: "5", txn_type: TransactionTypes.EXPENSE, txn_title: "Star Bird", txn_amount: 12.07,
        date_posted: getMockDate(3), date_updated: getMockDate(3),
        category: Categories.FOOD.RESTAURANT.label
    },
]
