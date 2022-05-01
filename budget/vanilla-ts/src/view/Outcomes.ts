import {
  computeSum,
  deleteBudgetItem,
  getLastBudgetItem,
  outcomes,
} from "../logic/budget-utils";
import { BudegtType } from "../logic/enums";
import { computePercentage, formatNumber } from "../logic/gen-utils";
import IBudgetItem from "../logic/interfaces/IBudgetItem";
import {
  CLASS_INOUT_DELETE,
  CLASS_INOUT_ITEM,
  CLASS_INOUT_LEFT,
  CLASS_INOUT_RIGHT,
} from "./constants";
import "./Outcomes.css";
import { formatFinitePercentage } from "./view-utils";

const CLASS_NAME = "Outcomes";
const CLASS_NAME_PERCENTAGE = "percentage";
//todo use common .ts , .css for incomes and outcomes because they are almost the same

export default function Outcomes(externalDeleteHandler: () => void): string {
  function deleteOutcome(id: string): void {
    //logic : delete from array
    deleteBudgetItem(id, BudegtType.OUTCOME);

    //view : delete from dom
    document.getElementById(getDomItemId(id))?.remove();
    externalDeleteHandler();
  }

  (window as any).deleteOutcome = deleteOutcome;
  //const incomesElem = incomes.map((it) => ); this add comma
  let outcomesElem = "";
  outcomes.forEach((it) => {
    outcomesElem += createOutcomeElem(it);
  });

  return `<div class=${CLASS_NAME}><p class='header'>OUTCOMES</p> ${outcomesElem}</div>`;
}

function getOutcomesElement(): HTMLDivElement {
  return document.querySelector(`.${CLASS_NAME}`)!;
}

function getDomItemId(id: string): string {
  return `id_outcome_${id}`;
}

export function updateAllOutcomePerecentage() {
  // --- relevant only on income change

  const totalIncome = computeSum(BudegtType.INCOME);
  const domElemPercentage = getOutcomesElement().querySelectorAll(
    `.${CLASS_INOUT_ITEM} .${CLASS_NAME_PERCENTAGE}`
  );
  outcomes.forEach((outcome, index) => {
    const percentage = formatFinitePercentage(outcome.amount, totalIncome);
    (domElemPercentage[index] as HTMLSpanElement).innerHTML = `${percentage}`;
  });
}

export function onOutcomeAdded() {
  // --- add item is last on outcomes
  const item = getLastBudgetItem();
  const newItemElement = createOutcomeElem(item);
  getOutcomesElement().innerHTML += newItemElement;
}

function createOutcomeElem(it: IBudgetItem): string {
  const leftElem = `<span class=${CLASS_INOUT_LEFT}>${it.description}</span>`;
  const buttonElem = `<span class='${CLASS_INOUT_DELETE} fa fa-minus-circle' onclick=deleteOutcome('${it.id}')></span>`;
  const totalIncomes = computeSum(BudegtType.INCOME);
  const outcome = it.amount;
  const percentageElem = `<span class=${CLASS_NAME_PERCENTAGE}>${formatFinitePercentage(
    outcome,
    totalIncomes
  )}</span>`;
  const rightElem = `<div class=${CLASS_INOUT_RIGHT}><span>${formatNumber(
    it.amount
  )} ${percentageElem}</span>${buttonElem}</div>`;
  return `<div class=${CLASS_INOUT_ITEM} id=${getDomItemId(
    it.id
  )}>${leftElem}${rightElem}</div>`;
}
