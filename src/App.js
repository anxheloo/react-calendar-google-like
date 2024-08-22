import React, { useState, useEffect } from "react";

import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/sidebar/Sidebar";
import { getMonth } from "./utils/util";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/slices/monthSlice";

function App() {
  const monthIndex = useSelector((state) => state.month.monthIndex);
  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <div className=" h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
