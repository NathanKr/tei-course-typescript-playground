import {
  addBudgetItem,
  getCurrentBudgetType,
  setCurrentBudgetType,
} from "../logic/budget-utils";
import { BudegtType } from "../logic/enums";
import { createUniqueId } from "../logic/gen-utils";
import IBudgetItem from "../logic/interfaces/IBudgetItem";
import "./Input.css";

const CLASS_NAME = "Input";
const CLASS_BUTTON_INCOME = "button-income";
const CLASS_BUTTON_EXPENSES = "button-expense";
const CLASS_SELECTED_EXPENSES = "selected-expense";
const CLASS_SELECTED_INCOME = "selected-income";

enum SelectOption {
  INCOME = "income",
  EXPENSES = "expense",
}

export default function Input(
  externalAddBudgetItemClickHandler: () => void
): string {
  function addBudgetItemHandler() {
    const item: IBudgetItem = {
      description: getDescription(),
      amount: getAmount(),
      id: createUniqueId(),
    };

    addBudgetItem(item);
    externalAddBudgetItemClickHandler();
    clearForm();

    return false; // prevent default
  }

  (window as any).addBudgetItemHandler = addBudgetItemHandler;
  (window as any).focusHandler = focusHandler;
  (window as any).selectClickHandler = selectClickHandler;

  // --- can it be more elegant as Jonas did ?
  const buttonElem = `<button class="${CLASS_BUTTON_INCOME} fa fa-check-circle"></button>`;
  const inputElems = `<input  onfocus='focusHandler(this)' type='text' name='desc' required placeholder='Add Description'/>
                      <input  onfocus='focusHandler(this)' type='number' name='amount' min=0 step=0.01 placeholder='Add Amount'/>`;
  const selectElem = `<select class='${CLASS_SELECTED_INCOME}' onclick='selectClickHandler(this)' name='type'>
                        <option value=${SelectOption.INCOME}>+</option>
                        <option value=${SelectOption.EXPENSES}>-</option>
                      </select>`;
  const formElems = `${selectElem}${inputElems}${buttonElem}`;
  const formElem = `<form onsubmit='return addBudgetItemHandler()'>${formElems}</form>`;
  return `<div class=${CLASS_NAME}>${formElem}</div>`;
}

function selectClickHandler(elem: HTMLSelectElement) {
  // --- first set new budget
  setCurrentBudgetType(
    getSelectOption() == SelectOption.INCOME
      ? BudegtType.INCOME
      : BudegtType.EXPENSE
  );

  // --- second update ui
  toggleSelected(elem);
  toggleButton();
}

function toggleButton() {
  const elemButtonClassList =
    getFormElement().querySelector("button")?.classList;
  getSelectOption() == SelectOption.INCOME
    ? elemButtonClassList!.replace(CLASS_BUTTON_EXPENSES, CLASS_BUTTON_INCOME)
    : elemButtonClassList!.replace(CLASS_BUTTON_INCOME, CLASS_BUTTON_EXPENSES);
}

function focusHandler(elem: HTMLElement) {
  toggleSelected(elem);
}

function toggleSelected(elem: HTMLElement) {
  const formElem = getFormElement();
  for (var i = 0; i < formElem.children.length; i++) {
    const child = formElem.children[i];
    child.classList.remove(CLASS_SELECTED_EXPENSES);
    child.classList.remove(CLASS_SELECTED_INCOME);
  }
  elem.classList.add(
    getCurrentBudgetType() == BudegtType.INCOME
      ? CLASS_SELECTED_INCOME
      : CLASS_SELECTED_EXPENSES
  );
}

function getFormElement(): HTMLFormElement {
  return document.querySelector(`.${CLASS_NAME} form`)!;
}

function getSelectOption(): SelectOption {
  const selectElem: HTMLSelectElement = getFormElement().type;
  return selectElem.value as SelectOption;
}

function getDescription(): string {
  return getFormElement().desc.value;
}

function clearForm(): void {
  getFormElement().reset();
}

function getAmount(): number {
  return Number(getFormElement().amount.value);
}
