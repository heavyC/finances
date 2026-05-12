
const MS_PER_HOUR = 60 * 60 * 1000;
const MS_PER_DAY = 24 * MS_PER_HOUR;
const EXPENSE = "expense";
const INCOME = "income";

export const Categories = {
    FOOD: {
        FOOD: { label: "food.food", displayName: "Food & Drink" },
        RESTAURANT: { label: "food.restaurant", displayName: "Restaurants & Takeout" },
        GROCERY: { label: "food.grocery", displayName: "Groceries" },
        COFFEE: { label: "food.coffee", displayName: "Coffee" },
    },
    AUTOMOTIVE: {
        AUTOMOTIVE: { label: "automotive.automotive", displayName: "General Automotive" },
        MAINTENANCE: { label: "automotive.maintenenace", displayName: "Car Maint" },
        GAS: { label: "automotive.gas", displayName: "Gasoline" },
    },
    ENTERTAINMENT: {
        ENTERTAINMENT: { label: "entertainment.entertainment", displayName: "Ents" },
        SHOWS: { label: "entertainment.shows", displayName: "Shows & Theatre" },
        SPORTS: { label: "entertainment.sports", displayName: "Sporting Events" },
    },
    GOODS: {
        GOODS: { label: "goods.goods", displayName: "Goodies" },
        OTHER_ONLINE: { label: "goods.other_online", displayName: "Online Purchase" },
        AMAZON: { label: "goods.amazon", displayName: "Amazon Purchase" },
    },
    INCOME: {
        INCOME: { label: "income.income", displayName: "Other Income" },
        PAYCHECK: { label: "income.paycheck", displayName: "Pay Day" },
        RENT: { label: "income.rental_income", displayName: "Rental Income" },
    }
}

export const getCategoryDisplayName = (value: string) => {
    for (const topLevel of Object.values(Categories)) {
        for (const leaf of Object.values(topLevel)) {
            if (leaf.label == value) {
                console.log("Found category: ", leaf);
                return leaf.displayName;
            }
        }
    }
    // return the raw value if not found
    return value;
}


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
        txn_id: "1", txn_type: EXPENSE, txn_title: "Starbucks", txn_amount: 17.95,
        date_posted: getMockDate(1, 4), date_updated: getMockDate(0, 4),
        category: Categories.FOOD.COFFEE.label
    },

    {
        txn_id: "2", txn_type: EXPENSE, txn_title: "Peet's", txn_amount: 137.90,
        date_posted: getMockDate(0, 4), date_updated: getMockDate(0, 4),
        category: Categories.FOOD.COFFEE.label
    },

    {
        txn_id: "3", txn_type: EXPENSE, txn_title: "Amazon", txn_amount: 198.00,
        date_posted: getMockDate(2, 0), date_updated: getMockDate(1, 9),
        category: Categories.GOODS.AMAZON.label
    },

    {
        txn_id: "4", txn_type: INCOME, txn_title: "Paycheck", txn_amount: 3198.00,
        date_posted: getMockDate(7, 0), date_updated: getMockDate(1, 4),
        category: Categories.INCOME.PAYCHECK.label
    },

    {
        txn_id: "5", txn_type: EXPENSE, txn_title: "Star Bird", txn_amount: 12.07,
        date_posted: getMockDate(3), date_updated: getMockDate(3),
        category: Categories.FOOD.RESTAURANT.label
    },
]
