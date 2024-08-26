import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  setDaySelected,
  setSelectedEvent,
} from "../store/slices/monthSlice";
import useDayClassHook from "../utils/useDayClassHook";

const Day = ({ day, rowIndex }) => {
  const useDayClass = useDayClassHook(day);

  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.month.allEvents);
  const selectedType = useSelector((state) => state.month.selectedType);
  const elementRef = useRef();

  const events = allEvents.filter(
    (event) =>
      event.selectedDay === day.valueOf() && event.category === selectedType
  );

  const firstTwoEvents = events.slice(0, 2);

  const handleDayClick = () => {
    dispatch(setSelectedEvent(null));
    dispatch(setDaySelected(day.valueOf()));
    dispatch(openModal());
  };

  const handleMouseOverHeader = () => {
    elementRef?.current?.classList.add("bg-white");
  };

  const handleSpecificEventClick = (event, item) => {
    event.stopPropagation();
    dispatch(setSelectedEvent(item));
    dispatch(openModal());
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

      <div className="flex flex-col justify-end h-[80px] p-1 overflow-hidden">
        {firstTwoEvents.map((item) => (
          <div
            className="flex justify-between items-center hover:bg-blue-100"
            onClick={(event) => handleSpecificEventClick(event, item)}
          >
            <div
              key={item.id}
              className="flex items-center gap-1 truncate flex-nowrap"
            >
              <span
                className="size-3 min-w-[12px] min-h-[12px] rounded-full mt-[2px]"
                style={{ backgroundColor: item.labelColor }}
              ></span>
              <h1 className="truncate">{item.title}</h1>
            </div>

            <span>time</span>
          </div>
        ))}

        {events.length > firstTwoEvents.length && (
          <span
            onClick={() => {
              console.log("event clicked");
            }}
          >
            +{events.length - firstTwoEvents.length} More
          </span>
        )}
      </div>
    </div>
  );
};

export default Day;
