import React, { useState } from "react";
import dayjs from "dayjs";
import logo from "../assets/logo192.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  setDaySelected,
  setMonthIndex,
} from "../store/slices/monthSlice";

const monthsArray = [
  "January",
  "Feb",
  "Mars",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CalendarHeader = () => {
  const [toggleSelectMonth, setToggleSelectMonth] = useState(false);
  const [selectedMonthTitle, setSelectedMonthTitle] = useState("Month");
  const monthIndex = useSelector((state) => state.month.monthIndex);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { id } = event.target;

    if (id === "leftArrow") {
      dispatch(decrement());
    }

    if (id === "rightArrow") {
      dispatch(increment());
    }
  };

  const handleToday = () => {
    dispatch(reset());
    dispatch(setDaySelected(dayjs().valueOf()));
    setSelectedMonthTitle("Month");
  };

  const toggleMonthSelection = () => {
    setToggleSelectMonth((prevValue) => !prevValue);
  };

  const handleMonthSelection = (index) => {
    dispatch(setMonthIndex(index));
    setSelectedMonthTitle(monthsArray[index]);
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar-logo" className=" mr-2 size-12"></img>
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>

      <button
        className="border rounded-md py-2 px-4 mr-5"
        onClick={handleToday}
      >
        Today
      </button>

      <button className=" py-2 px-4 mr-5" onClick={handleClick} id="leftArrow">
        <span className=" cursor-pointer text-gray-600 mx-2 pointer-events-none">
          <FaArrowLeft></FaArrowLeft>
        </span>
      </button>

      <button className=" py-2 px-4 mr-5" onClick={handleClick} id="rightArrow">
        <span className=" cursor-pointer text-gray-600 mx-2 pointer-events-none">
          <FaArrowRight></FaArrowRight>
        </span>
      </button>

      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>

      <div
        className="border rounded-md p-2 ml-3 flex items-center gap-1 relative"
        onClick={toggleMonthSelection}
      >
        <span>{selectedMonthTitle}</span>
        <IoIosArrowDown />

        {toggleSelectMonth && (
          <div className="flex flex-col absolute top-12 left-0 right-0 bg-white border">
            {monthsArray.map((item, index) => (
              <button
                type="button"
                key={index}
                className={`p-1 text-left hover:bg-blue-200 ${
                  monthIndex === index && "bg-red-500"
                }`}
                onClick={() => handleMonthSelection(index)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default CalendarHeader;
