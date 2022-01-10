// converts a date object into an iso string of form yyyy-mm-dd
export const convertDatetoISO = (date: Date) => {
  return date.toISOString().split("T")[0];
};

// subtracts a certain number of days from a date
export const subtractDate = (date: Date, num: number) => {
  let newDate = date;
  newDate.setDate(date.getDate() - num);
  return newDate;
};
