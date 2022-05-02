import { computePercentage, formatPercentage } from "../logic/gen-utils";

export function formatFinitePercentage(
  expense: number,
  income: number
): string {
  const expensesIncomesPercentage = computePercentage(expense, income);
  const percentageFormated: string = Number.isFinite(expensesIncomesPercentage)
    ? `${formatPercentage(expensesIncomesPercentage)}%`
    : "--";

  return percentageFormated;
}
