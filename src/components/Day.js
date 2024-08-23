import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { openModal, setDaySelected } from "../store/slices/monthSlice";
import useDayClassHook from "../utils/useDayClassHook";

const Day = ({ day, rowIndex }) => {
  const useDayClass = useDayClassHook(day);

  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.month.allEvents);
  const elementRef = useRef();

  const events = allEvents.filter(
    (event) => event.selectedDay === day.valueOf()
  );

  const handleDayClick = () => {
    dispatch(setDaySelected(day.valueOf()));
    dispatch(openModal());
  };

  const handleMouseOverHeader = () => {
    elementRef?.current?.classList.add("bg-white");
  };

  return (
    <div
      onMouseOver={handleMouseOverHeader}
      className="h-full border border-gray-200 flex flex-col justify-between cursor-pointer hover:bg-gray-100 overflow-hidden"
      onClick={handleDayClick}
    >
      <div className=" text-sm">
        {rowIndex === 0 && (
          <p className="text-center border-b" ref={elementRef}>
            {day.format("ddd")}
          </p>
        )}

        <div className="flex items-center p-2 h-[45px]">
          <p className={`flex justify-center items-center ${useDayClass}`}>
            {day.format("DD")}
          </p>
        </div>
      </div>

      {/* {rowIndex !== 0 && ( */}

      <div className="flex flex-col justify-end h-[80px] p-2 overflow-hidden">
        {events.map((item) => (
          <div className="flex justify-between items-center">
            <div key={item.id} className="flex items-center gap-1">
              <span
                className=" size-4 rounded-full"
                style={{ backgroundColor: item.labelColor }}
              ></span>
              <h1>{item.title}</h1>
            </div>

            <span>time</span>
          </div>
        ))}

        <span>+2 More</span>
      </div>

      {/* )} */}
    </div>
  );
};

export default Day;
