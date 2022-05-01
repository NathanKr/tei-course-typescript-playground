const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export  function getMonth(date: Date): string {
  return month[date.getMonth()];
}

export  function getYear(date: Date):number{
    return date.getFullYear();
}
