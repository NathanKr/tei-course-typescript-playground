import { v4 as uuidv4 } from "uuid";

export function createUniqueId(): string {
  return uuidv4();
}

// --- e.g. 10000 --> 10,000
export function formatNumber(
  num: number,
  forcedSign: string | undefined = undefined
): string {
  let sign = "";
  if (forcedSign) {
    sign = forcedSign;
  } else {
    if (num > 0) {
      sign = "+";
    } else if (num < 0) {
      sign = "-";
    }
  }
  num = Math.abs(num); // handled sign above
  return `${sign} ${num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatPercentage(num: number): number {
  return Math.round(num);
}

 
