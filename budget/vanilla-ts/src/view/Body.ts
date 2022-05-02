import { BudegtType } from "../logic/enums";
import Incomes, { onIncomeAdded } from "./Incomes";
import Expenses, {
  onExpenseAdded,
  updateAllExpensePerecentage,
} from "./Expenses";
import "./Body.css";
import { getCurrentBudgetType } from "../logic/budget-utils";

const CLASS_NAME = "Body";

export default function Body(externalDeleteHandler: () => void): string {
  const elems = `${Incomes(externalDeleteHandler)} ${Expenses(
    externalDeleteHandler
  )}`;
  return `<div class=${CLASS_NAME}>${elems}</div>`;
}

export function updateBodyOnAdd() {
  if (getCurrentBudgetType() == BudegtType.INCOME) {
    onIncomeAdded();
    updateAllExpensePerecentage();
  } else {
    onExpenseAdded();
  }
}

export function updateBodyOnDelete() {
  // --- todo identify if this is delete of income
  updateAllExpensePerecentage();
}
