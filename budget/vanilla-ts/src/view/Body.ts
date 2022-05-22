import { currentBudgetItem } from "../logic/budget-utils";
import { BudgetType } from "../logic/enums";
import "./Body.css";
import Exspenses, { onExpenseAdded, updateAllExpencesPercentage } from "./Exspenses";
import Incomes, { onIncomeAdded } from "./Incomes";

export default function Body(onDeleteBudgetItem: () => void) {
  return `<div class='Body'>${Incomes(onDeleteBudgetItem)} ${Exspenses(
    onDeleteBudgetItem
  )}</div>`;
}

export function updateBodyOnAdd() {
  if (currentBudgetItem == BudgetType.Income) {
    onIncomeAdded();
    updateAllExpencesPercentage();
  } else {
    onExpenseAdded();
  }
}

export function updateBodyOnDelete(){
  updateAllExpencesPercentage();
}