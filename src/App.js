import React, { useState, useEffect } from "react";

import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/sidebar/Sidebar";
import { getMonth } from "./utils/util";
import { useSelector } from "react-redux";
import CreateEvent from "./components/CreateEvent";

function App() {
  const monthIndex = useSelector((state) => state.month.monthIndex);
  const modal = useSelector((state) => state.month.createEventModal);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {modal && <CreateEvent></CreateEvent>}
      <div className=" h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
