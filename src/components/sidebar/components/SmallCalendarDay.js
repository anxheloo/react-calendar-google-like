import React from "react";

import { useDispatch } from "react-redux";
import useDayClassHook from "../../../utils/useDayClassHook";
import {
  setDaySelected,
  setSmallCalendarMonth,
} from "../../../store/slices/monthSlice";

const SmallCalendarDay = ({ day, currentMonthIndex }) => {
  const useDayClass = useDayClassHook(day);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSmallCalendarMonth(currentMonthIndex));
    dispatch(setDaySelected(day.valueOf()));
    console.log("This is day:", day);
  };

  return (
    <button
      onClick={handleClick}
      // key={j}
      className={`py-1 w-full ${useDayClass}`}
    >
      <span className="text-sm ">{day.format("D")}</span>
    </button>
  );
};

export default SmallCalendarDay;
