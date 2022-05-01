import {
  deleteBudgetItem,
  getLastBudgetItem,
  outcomes,
} from "../logic/budget-utils";
import { BudegtType } from "../logic/enums";
import { formatNumber } from "../logic/gen-utils";
import IBudgetItem from "../logic/interfaces/IBudgetItem";
import "./Outcomes.css";

const CLASS_NAME = "Outcomes";

function getOutcomesElement(): HTMLDivElement {
  return document.querySelector(`.${CLASS_NAME}`)!;
}

function getDomItemId(id: string): string {
  return `id_outcome_${id}`;
}

export function onOutcomeAdded() {
  // --- add item is last on outcomes
  const item = getLastBudgetItem();
  const newItemElement = createOutcomeElem(item);
  getOutcomesElement().innerHTML += newItemElement;
}

function createOutcomeElem(it: IBudgetItem): string {
  const leftElem = `<span class='left'>${it.description}</span>`;
  const buttonElem = `<span class='delete fa fa-minus-circle' onclick=deleteOutcome('${it.id}')></span>`;
  const rightElem = `<div class='right'><span>${formatNumber(
    it.amount
  )} </span>${buttonElem}</div>`;
  return `<div class='item' id=${getDomItemId(
    it.id
  )}>${leftElem}${rightElem}</div>`;
}

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
