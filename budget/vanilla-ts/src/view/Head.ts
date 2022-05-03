import {
  computeBudget,
  computeTotal,
  expenses,
  incomes,
} from "../logic/budget-utils";
import { computePercentage, formatPercentage } from "../logic/get-utils";
import { getMonth, getYear } from "../logic/time-utils";
import "./Head.css";

const CLASS_NAME = "Head";

export default function Head() {
  const now = new Date();

  const dateElem = `<p class='date'>Available Budget in ${getMonth(
    now
  )} ${getYear(now)}</p>`;
  const totalIncomes = computeTotal(incomes);
  const totalExpenses = computeTotal(expenses);
  const budgetElem = `<p class='budget number'>${computeBudget()}</p>`;
  const incomeElem = `<p>INCOME ${totalIncomes}</p>`;
  const percentage = computePercentage(totalExpenses, totalIncomes);
  const expenseElem = `<p>EXPENSE ${totalExpenses} ${formatPercentage(
    percentage
  )}%`;

  return `<div class=${CLASS_NAME}>${dateElem}${budgetElem}${incomeElem}${expenseElem}</div>`;
}
