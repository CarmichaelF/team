import dateFormat from "dateformat";

export const getDateFormat = (date: string) => {
  return dateFormat(date, "dd mmm. yyyy");
};
