import { BudegtType } from "../logic/enums";
import Incomes, { onIncomeAdded } from "./Incomes";
import Outcomes, { onOutcomeAdded } from "./Outcomes";
import "./Body.css";
import { getCurrentBudgetType } from "../logic/budget-utils";

const CLASS_NAME = "Body";

export function updateBody() {
  getCurrentBudgetType() == BudegtType.INCOME
    ? onIncomeAdded()
    : onOutcomeAdded();
}

export default function Body(externalDeleteHandler: () => void): string {
  const elems = `${Incomes(externalDeleteHandler)} ${Outcomes(
    externalDeleteHandler
  )}`;
  return `<div class=${CLASS_NAME}>${elems}</div>`;
}
