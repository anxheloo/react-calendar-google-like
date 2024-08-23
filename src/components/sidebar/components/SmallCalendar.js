import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getMonth } from "../../../utils/util";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setMonthIndex } from "../../../store/slices/monthSlice";
import SmallCalendarDay from "./SmallCalendarDay";

const SmallCalendar = () => {
  const monthIndex = useSelector((state) => state.month.monthIndex);
  const smallCalendarMonth = useSelector(
    (state) => state.month.smallCalendarMonth
  );

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
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      dispatch(setMonthIndex(smallCalendarMonth));
    }
  }, [smallCalendarMonth]);

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
            {day.format("dd").toLowerCase().charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, j) => (
              <SmallCalendarDay
                key={j}
                day={day}
                currentMonthIndex={currentMonthIndex}
              ></SmallCalendarDay>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
