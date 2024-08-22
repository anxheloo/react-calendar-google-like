import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-row-5">
      {month.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((day, i) => (
              <Day day={day} key={i} rowIndex={index} />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Month;
