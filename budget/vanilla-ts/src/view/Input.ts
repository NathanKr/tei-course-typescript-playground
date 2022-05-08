import {
  addBudgetItem,
  currentBudgetItem,
  setCurrentBudgetItem,
} from "../logic/budget-utils";
import { BudgetType } from "../logic/enums";
import { createUniqueId } from "../logic/gen-utils";
import IBudgetItem from "../logic/interfaces/IBudgetItem";
import { ClassInput } from "./enums";
import "./Input.css";

export default function Input(onAddBudgetItem: () => void) {
  function addBudgetSubmitHandler() {
    let item: IBudgetItem = {
      description: getFormElement().desc.value,
      amount: Number(getFormElement().amount.value),
      id: createUniqueId(),
    };

    addBudgetItem(item);
    onAddBudgetItem();
    getFormElement().reset();

    return false;
  }

  (window as any).addBudgetSubmitHandler = addBudgetSubmitHandler;
  (window as any).selectClickHandler = selectClickHandler;
  (window as any).focusHandler = focusHandler;

  const selectElem = `<select class='${ClassInput.SelectedIncome}' name='type' onclick='selectClickHandler(this)'><option>+</option><option>-</option></select>`;
  const inputElems = `
    <input type='text' name='desc' onfocus='focusHandler(this)' required placeholder='Add Description'/>
    <input type='number' name='amount' onfocus='focusHandler(this)' required min=0 placeholder='Add Amount'/>`;
  const buttonElem = `<button class='${ClassInput.ButtonIncome} fa fa-check-circle'></button>`;
  const formElems = `${selectElem}${inputElems}${buttonElem}`;
  return `<div class='${ClassInput.Root}'><form onsubmit='return addBudgetSubmitHandler()'>${formElems}</form></div>`;
}

function selectClickHandler(elem: HTMLElement) {
  const buttonClassList = getFormElement().querySelector("button")?.classList;

  let type: BudgetType;
  if (getFormElement().type.value == "+") {
    type = BudgetType.Income;
    buttonClassList?.replace(
      `${ClassInput.ButtonExpense}`,
      `${ClassInput.ButtonIncome}`
    );
  } else {
    type = BudgetType.Expense;
    buttonClassList?.replace(
      `${ClassInput.ButtonIncome}`,
      `${ClassInput.ButtonExpense}`
    );
  }
  setCurrentBudgetItem(type);
  focusHandler(elem);
}

function focusHandler(elem: HTMLElement) {
  for (let index = 0; index < getFormElement().children.length; index++) {
    const child = getFormElement().children[index];
    child.classList.remove(`${ClassInput.SelectedIncome}`);
    child.classList.remove(`${ClassInput.SelectedExpense}`);
  }

  elem.classList.add(
    currentBudgetItem == BudgetType.Income
      ? `${ClassInput.SelectedIncome}`
      : `${ClassInput.SelectedExpense}`
  );
}

function getFormElement(): HTMLFormElement {
  return document.querySelector(".Input > form")!;
}
