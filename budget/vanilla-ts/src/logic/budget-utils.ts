import IBudgetItem from "./interfaces/IBudgetItem";

export const incomes: IBudgetItem [] = [
  { description: "income1", amount: 11, id: "id1" },
  { description: "income2", amount: 22, id: "id2" }
];
export const expenses: IBudgetItem [] = [
  { description: "expense1", amount: 111, id: "id1" },
  { description: "expense2", amount: 222, id: "id2" },
];

export function computeTotal(items : IBudgetItem []) : number{
    let sum = 0;
    items.forEach(item => {
        sum += item.amount;
    });

    return sum;
}

export function computeBudget() : number{
    return computeTotal(incomes) - computeTotal(expenses);
}