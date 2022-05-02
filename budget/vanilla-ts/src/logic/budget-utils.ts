import { BudegtType } from "./enums";
import IBudgetItem from "./interfaces/IBudgetItem";

export const incomes: IBudgetItem[] = [];
export const expenses: IBudgetItem[] = [];

let currentBudgetType: BudegtType = BudegtType.INCOME; // default

export function getCurrentBudgetType(): BudegtType {
  return currentBudgetType;
}

export function getLastBudgetItem(): IBudgetItem {
  const items: IBudgetItem[] =
    currentBudgetType == BudegtType.INCOME ? incomes : expenses;
  return items[items.length - 1];
}

export function setCurrentBudgetType(type: BudegtType) {
  console.log("setCurrentBudgetType", type);

  currentBudgetType = type;
}

export function deleteBudgetItem(id: string, type: BudegtType): void {
  const items: IBudgetItem[] = type == BudegtType.INCOME ? incomes : expenses;

  const index = items.findIndex((it) => it.id == id);
  if (index < 0) {
    throw Error(`id not found : ${id}`);
  }
  items.splice(index, 1);
}

export function addBudgetItem(item: IBudgetItem): void {
  const items: IBudgetItem[] =
    currentBudgetType == BudegtType.INCOME ? incomes : expenses;
  items.push(item);
}

export function computeSum(type: BudegtType): number {
  return computeTotal(type == BudegtType.INCOME ? incomes : expenses);
}

function computeTotal(items: IBudgetItem[]): number {
  let sum = 0;
  items.forEach((item) => {
    sum += item.amount;
  });
  return sum;
}

export function computeBudget(): number {
  return computeTotal(incomes) - computeTotal(expenses);
}
