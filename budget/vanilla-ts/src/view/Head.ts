import { computeBudget, computeSum } from "../logic/budget-utils";
import { BudegtType } from "../logic/enums";
import { formatNumber } from "../logic/gen-utils";
import { getMonth, getYear } from "../logic/time-utils";
import "./Head.css";
import { formatFinitePercentage } from "./view-utils";

const DYNAMIC_CLASS_NAME = "dynamic";
const CLASS_NAME = "Head";

export default function Head(): string {
  const now = new Date();
  const dateElem = `<p class='date'>Available Budget in ${getMonth(
    now
  )} ${getYear(now)}</p>`;
  return `<div class=${CLASS_NAME}>${dateElem}${getDynamic()}</div>`;
}

function getDynamic(): string {
  const budget = computeBudget();
  const totalIncomes = computeSum(BudegtType.INCOME);
  const totalExpenses = computeSum(BudegtType.EXPENSE);
  const budgetElem = `<p class='budget number'>${formatNumber(budget)}</p>`;
  const incomeElem = `<div class='income income-expense'><span class='title'>INCOME</span><span class='number'><span>${formatNumber(
    totalIncomes
  )}</span><span></span></span></div>`; // dummy percentage span for flex (todo - can do without)
  const percentageElem = `<span>${formatFinitePercentage(
    totalExpenses,
    totalIncomes
  )}</span>`;
  const expenseElem = `<div class='expense income-expense'><span class='title'>EXPENSE</span><span class='number'><span>${formatNumber(
    totalExpenses,
    totalExpenses != 0 ? "-" : undefined
  )}</span><span class='percentage'>${percentageElem}</span></span></div>`;
  return `<div class=${DYNAMIC_CLASS_NAME}>${budgetElem}${incomeElem}${expenseElem}</>`;
}

export function updateHead(): void {
  // replace dynamic
  const dynamicNode = document.querySelector(
    `.${CLASS_NAME} > .${DYNAMIC_CLASS_NAME}`
  );
  dynamicNode!.innerHTML = getDynamic();
}
