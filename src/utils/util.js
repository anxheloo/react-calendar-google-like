import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);

  console.log("Inside getMonth");

  console.log("Inside dayjs().month():", dayjs().month());

  const year = dayjs().year();

  console.log("Inside year:", year);

  const weekDay = dayjs(new Date(year, month, 1)).day();

  console.log("Inside firstDayOfMonth:", weekDay);

  let currentMonthCount = 0 - weekDay;

  console.log("Inside currentMonthCount:", currentMonthCount);

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  console.log("This is daysMatrix:", daysMatrix);

  return daysMatrix;
}
