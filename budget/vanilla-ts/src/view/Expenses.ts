import {
  computeSum,
  deleteBudgetItem,
  getLastBudgetItem,
  expenses,
} from "../logic/budget-utils";
import { BudegtType } from "../logic/enums";
import { formatNumber } from "../logic/gen-utils";
import IBudgetItem from "../logic/interfaces/IBudgetItem";
import {
  CLASS_INOUT_DELETE,
  CLASS_INOUT_ITEM,
  CLASS_INOUT_LEFT,
  CLASS_INOUT_RIGHT,
} from "./constants";
import "./Expenses.css";
import { formatFinitePercentage } from "./view-utils";

const CLASS_NAME = "Expenses";
const CLASS_NAME_PERCENTAGE = "percentage";
//todo use common .ts , .css for incomes and expenses because they are almost the same

export default function Expenses(externalDeleteHandler: () => void): string {
  function deleteExpense(id: string): void {
    //logic : delete from array
    deleteBudgetItem(id, BudegtType.EXPENSE);

    //view : delete from dom
    document.getElementById(getDomItemId(id))?.remove();
    externalDeleteHandler();
  }

  (window as any).deleteExpense = deleteExpense;
  //const incomesElem = incomes.map((it) => ); this add comma
  let expensesElem = "";
  expenses.forEach((it) => {
    expensesElem += createExpenseElem(it);
  });

  return `<div class=${CLASS_NAME}><p class='header'>EXPENSES</p> ${expensesElem}</div>`;
}

function getExpensesElement(): HTMLDivElement {
  return document.querySelector(`.${CLASS_NAME}`)!;
}

function getDomItemId(id: string): string {
  return `id_expense_${id}`;
}

export function updateAllExpensePerecentage() {
  // --- relevant only on income change

  const totalIncome = computeSum(BudegtType.INCOME);
  const domElemPercentage = getExpensesElement().querySelectorAll(
    `.${CLASS_INOUT_ITEM} .${CLASS_NAME_PERCENTAGE} > span`
  );
  expenses.forEach((expense, index) => {
    const percentage = formatFinitePercentage(expense.amount, totalIncome);
    (domElemPercentage[index] as HTMLSpanElement).innerHTML = `${percentage}`;
  });
}

export function onExpenseAdded() {
  // --- add item is last on expenses
  const item = getLastBudgetItem();
  const newItemElement = createExpenseElem(item);
  getExpensesElement().innerHTML += newItemElement;
}

function createExpenseElem(it: IBudgetItem): string {
  const leftElem = `<span class=${CLASS_INOUT_LEFT}>${it.description}</span>`;
  const buttonElem = `<span class='${CLASS_INOUT_DELETE} fa fa-minus-circle' onclick=deleteExpense('${it.id}')></span>`;
  const totalIncomes = computeSum(BudegtType.INCOME);
  const expense = it.amount;
  const percentageElem = `<span class=${CLASS_NAME_PERCENTAGE}><span>${formatFinitePercentage(
    expense,
    totalIncomes
  )}</span></span>`;
  const amountElem = `<span class='amount'>${formatNumber(it.amount)}</span>`;
  const rightElem = `<div class=${CLASS_INOUT_RIGHT}><span class='number'> ${amountElem}  ${percentageElem}</span>${buttonElem}</div>`;
  return `<div class=${CLASS_INOUT_ITEM} id=${getDomItemId(
    it.id
  )}>${leftElem}${rightElem}</div>`;
}
