export const getDate = (date: Date = new Date()) => {
  return date.toISOString().slice(0, 10);
};

const whenIsSaturday = () => {
  const today = new Date();
  return today.getDate() + (6 - today.getDay());
};

export const getWeekendDate = () => {
  const weekendDay = whenIsSaturday()?.toString();
  const date = getDate();
  const result = date.split("-");
  result[2] = weekendDay.length < 2 ? "0" + weekendDay : weekendDay;
  return result.join("-");
};

export const formatedDate = (dateString: string) => {
  const date = new Date(dateString);
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const formatedDate =
    String(+date.getDate() + 1) +
    " " +
    meses[date.getMonth()] +
    " " +
    date.getFullYear();
  return formatedDate;
};
