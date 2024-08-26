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
  };

  return (
    <button onClick={handleClick} className={`my-1 text-sm ${useDayClass}`}>
      <span>{day.format("D")}</span>
    </button>
  );
};

export default SmallCalendarDay;
