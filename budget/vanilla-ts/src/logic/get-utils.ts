export function computePercentage(num : number,den : number) : number{
    return (num/den)*100;
}

export function formatPercentage(num : number) : number{
    return Math.round(num);
}