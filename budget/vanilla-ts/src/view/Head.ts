import { computeBudget, computeSum } from "../logic/budget-utils";
import { BudgetType } from "../logic/enums";
import { formatNumber } from "../logic/gen-utils";
import { getMonth, getYear } from "../logic/time-utils";
import { ClassHead } from "./enums";
import "./Head.css";
import { formatFinitePercentage } from "./view-utils";

export default function Head() {
  // -- static
  const now = new Date();
  const dateElem = `<p class=${ClassHead.Date}>Available Budget in ${getMonth(
    now
  )} ${getYear(now)}</p>`;

  return `<div class=${ClassHead.Root}>${dateElem}${getDynamic()}</div>`;
}

function getDynamic(): string {
  const totalIncomes = computeSum(BudgetType.Income);
  const totalExpenses = computeSum(BudgetType.Expense);
  const budget = computeBudget();
  const budgetElem = `<p class='${ClassHead.Budget} ${
    ClassHead.Number
  }'>${formatNumber(budget)}</p>`;
  const incomeElem = `<div class='${ClassHead.IncomeExpense} ${
    ClassHead.Income
  }'><span class=${ClassHead.Title}>INCOME</span><span class=${
    ClassHead.Number
  }><span>${formatNumber(totalIncomes)}</span><span><span></span></div>`;
  const percentageElem = `<span>${formatFinitePercentage(
    totalExpenses,
    totalIncomes
  )}</span>`;
  const expenseElem = `<div class='${ClassHead.IncomeExpense} ${
    ClassHead.Expense
  }'><span class=${
    ClassHead.Title
  }>EXPENSE</span><span class='number'><span>${formatNumber(
    totalExpenses
  )}</span><span class=${
    ClassHead.Percentage
  }>${percentageElem}</span></span></div>`;

  return `<div class='${ClassHead.Dynamic}'>${budgetElem}${incomeElem}${expenseElem}<div>`;
}

export function UpdateHead() {
  const dynamicNode = document.querySelector(
    `.${ClassHead.Root} > .${ClassHead.Dynamic}`
  );
  dynamicNode!.innerHTML = getDynamic();
}
