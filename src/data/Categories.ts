
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

export default Categories;
