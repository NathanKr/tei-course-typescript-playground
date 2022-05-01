import { computePercentage, formatPercentage } from "../logic/gen-utils";

export function formatFinitePercentage(outcome : number ,income : number ) : string{
    const outcomesIncomesPercentage = computePercentage(outcome , income);
    const percentageFormated: string = Number.isFinite(outcomesIncomesPercentage)
    ? `${formatPercentage(outcomesIncomesPercentage)}%`
    : "--";

    return percentageFormated;
}