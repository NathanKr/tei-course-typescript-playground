import {
  deleteBudgetItem,
  getLastBudgetItem,
  incomes,
} from "../logic/budget-utils";
import { BudegtType } from "../logic/enums";
import { formatNumber } from "../logic/gen-utils";
import IBudgetItem from "../logic/interfaces/IBudgetItem";
import {
  CLASS_INOUT_DELETE,
  CLASS_INOUT_HEADER,
  CLASS_INOUT_LEFT,
  CLASS_INOUT_RIGHT,
} from "./constants";
import "./Incomes.css";

const CLASS_NAME = "Incomes";

export default function Incomes(externalDeleteHandler: () => void): string {
  function deleteIncome(id: string): void {
    //logic : delete from array
    deleteBudgetItem(id, BudegtType.INCOME);

    //view : delete from dom
    document.getElementById(getDomItemId(id))?.remove();
    externalDeleteHandler();
  }

  (window as any).deleteIncome = deleteIncome;
  //const incomesElem = incomes.map((it) => ); this add comma
  let incomesElem = "";
  incomes.forEach((it) => {
    incomesElem += createIncomeElem(it);
  });

  return `<div class=${CLASS_NAME}><p class=${CLASS_INOUT_HEADER}>INCOMES</p> ${incomesElem}</div>`;
}

function getIncomesElement(): HTMLDivElement {
  return document.querySelector(`.${CLASS_NAME}`)!;
}

function getDomItemId(id: string): string {
  return `id_income_${id}`;
}

export function onIncomeAdded() {
  // --- add item is last on incomes
  const item = getLastBudgetItem();
  const newItemElement = createIncomeElem(item);
  getIncomesElement().innerHTML += newItemElement;
}

function createIncomeElem(it: IBudgetItem): string {
  const leftElem = `<span class=${CLASS_INOUT_LEFT}>${it.description}</span>`;
  const buttonElem = `<span class='${CLASS_INOUT_DELETE} fa fa-minus-circle' onclick=deleteIncome('${it.id}')></span>`;
  const rightElem = `<div class=${CLASS_INOUT_RIGHT}><span>${formatNumber(
    it.amount
  )} </span>${buttonElem}</div>`;
  return `<div class='item' id=${getDomItemId(
    it.id
  )}>${leftElem}${rightElem}</div>`;
}
