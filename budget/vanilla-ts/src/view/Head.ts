import { computeBudget, computeSum } from "../logic/budget-utils";
import { BudegtType } from "../logic/enums";
import { formatNumber, formatPercentage } from "../logic/gen-utils";
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
  const totalOutcomes = computeSum(BudegtType.OUTCOME);
  const budgetElem = `<p class='budget number'>${formatNumber(budget)}</p>`;
  const incomeElem = `<div class='income income-outcome'><span class='title'>INCOME</span><span class='number'>${formatNumber(
    totalIncomes
  )}</span></div>`;
  const percentage = formatFinitePercentage(totalOutcomes,totalIncomes);
  const outcomeElem = `<div class='outcome income-outcome'><span class='title'>OUTCOME</span><span class='number'><span>${formatNumber(
    totalOutcomes,
    totalOutcomes != 0 ? "-" : undefined  
  )}</span><span class='percentage'> ${percentage}</span></span></div>`;
  return `<div class=${DYNAMIC_CLASS_NAME}>${budgetElem}${incomeElem}${outcomeElem}</>`;
}

export function updateHead(): void {
  // replace dynamic
  const dynamicNode = document.querySelector(
    `.${CLASS_NAME} > .${DYNAMIC_CLASS_NAME}`
  );
  dynamicNode!.innerHTML = getDynamic();
}
