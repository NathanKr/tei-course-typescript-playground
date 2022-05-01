import { BudegtType } from "./enums";
import IBudgetItem from "./interfaces/IBudgetItem";

export const incomes: IBudgetItem[] = [
  { description: "income1", amount: 11, id: "1" },
  { description: "income2", amount: 22, id: "2" },
  { description: "income3", amount: 33, id: "3" },
];
export const outcomes: IBudgetItem[] = [
  { description: "outcome1", amount: 7, id: "1" },
  { description: "outcome2", amount: 17, id: "2" },
];

let currentBudgetType: BudegtType = BudegtType.INCOME; // default

export function getCurrentBudgetType() : BudegtType {
  return currentBudgetType;
}

export function getLastBudgetItem(): IBudgetItem {
  const items: IBudgetItem[] =
    currentBudgetType == BudegtType.INCOME ? incomes : outcomes;
  return items[items.length - 1];
}

export function setCurrentBudgetType(type: BudegtType) {
  console.log('setCurrentBudgetType',type);
  
  currentBudgetType = type;
}

export function deleteBudgetItem(id: string, type: BudegtType): void {
  const items: IBudgetItem[] = type == BudegtType.INCOME ? incomes : outcomes;

  const index = items.findIndex((it) => it.id == id);
  if (index < 0) {
    throw Error(`id not found : ${id}`);
  }
  items.splice(index, 1);
}

export function addBudgetItem(item: IBudgetItem): void {
  const items: IBudgetItem[] =
    currentBudgetType == BudegtType.INCOME ? incomes : outcomes;
  items.push(item);
}

export function computeSum(type: BudegtType): number {
  return computeTotal(type == BudegtType.INCOME ? incomes : outcomes);
}

function computeTotal(items: IBudgetItem[]): number {
  let sum = 0;
  items.forEach((item) => {
    sum += item.amount;
  });
  return sum;
}

export function computeBudget(): number {
  return computeTotal(incomes) - computeTotal(outcomes);
}
