import React, { useEffect } from "react";
import Day from "./Day";
import { useDispatch } from "react-redux";
import { setAllEvents } from "../store/slices/monthSlice";

const Month = ({ month }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllEvents = () => {
      try {
        const storedEvents = localStorage.getItem("allEvents");

        if (storedEvents) {
          dispatch(setAllEvents(JSON.parse(storedEvents)));
        } else {
          dispatch(setAllEvents([]));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAllEvents();
  }, []);

  return (
    <div className="flex-1  grid grid-cols-7 justify-center items-center grid-row-5">
      {month.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((day, i) => (
              <Day day={day} key={i} keyIndex={i} rowIndex={index} />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Month;
