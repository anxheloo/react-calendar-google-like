import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getMonth } from "../../../utils/util";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  setSmallCalendarMonth,
  setMonthIndex,
  setDaySelected,
} from "../../../store/slices/monthSlice";

const SmallCalendar = () => {
  const monthIndex = useSelector((state) => state.month.monthIndex);
  const smallCalendarMonth = useSelector(
    (state) => state.month.smallCalendarMonth
  );
  const daySelected = useSelector((state) => state.month.daySelected);
  const dispatch = useDispatch();

  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const handleClick = (event) => {
    const { id } = event.target;

    if (id === "leftArrow") {
      setCurrentMonthIndex((prevValue) => prevValue - 1);
    }

    if (id === "rightArrow") {
      setCurrentMonthIndex((prevValue) => prevValue + 1);
    }
  };

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  useEffect(() => {
    // setCurrentMonth(getMonth(monthIndex));
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      dispatch(setMonthIndex(smallCalendarMonth));
    }
  }, [smallCalendarMonth]);

  const getCurrentDayClass = (day) => {
    if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
      console.log("This is day.format(DD-MM-YY): ", day.format("DD-MM-YY"));
      return "bg-blue-600 text-white rounded-full w-7";
    } else if (day.format("DD-MM-YY") === daySelected) {
      return "bg-blue-200 text-blue-600 font-bold rounded-full";
    } else {
      return "";
    }
  };

  console.log("This is daySelected:", daySelected);

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>

        <button
          className=" py-2 px-4 mr-5"
          onClick={handleClick}
          id="leftArrow"
        >
          <span className=" cursor-pointer text-gray-600 mx-2 pointer-events-none">
            <FaArrowLeft></FaArrowLeft>
          </span>
        </button>

        <button
          className=" py-2 px-4 mr-5"
          onClick={handleClick}
          id="rightArrow"
        >
          <span className=" cursor-pointer text-gray-600 mx-2 pointer-events-none">
            <FaArrowRight></FaArrowRight>
          </span>
        </button>
      </header>

      <div className=" grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, index) => (
          <span key={index} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, j) => (
              <button
                onClick={() => {
                  dispatch(setSmallCalendarMonth(currentMonthIndex));
                  dispatch(setDaySelected(day.format("DD-MM-YY")));
                }}
                key={j}
                className={`py-1 w-full ${getCurrentDayClass(day)}`}
              >
                <span className="text-sm ">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
