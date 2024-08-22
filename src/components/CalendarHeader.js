import React from "react";
import dayjs from "dayjs";
import logo from "../assets/logo192.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/slices/monthSlice";

const CalendarHeader = () => {
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
  };

  console.log("THis is monthIndex:", monthIndex);

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
    </header>
  );
};

export default CalendarHeader;
