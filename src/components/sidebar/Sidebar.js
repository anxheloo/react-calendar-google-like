import React from "react";
import CreateEventButton from "./components/CreateEventButton";
import SmallCalendar from "./components/SmallCalendar";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton></CreateEventButton>
      <SmallCalendar></SmallCalendar>
    </aside>
  );
};

export default Sidebar;
