import React from "react";
import CreateEventButton from "./components/CreateEventButton";
import SmallCalendar from "./components/SmallCalendar";
import TypeSection from "./components/TypeSection/TypeSection";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-[1/4]">
      <CreateEventButton></CreateEventButton>
      <SmallCalendar></SmallCalendar>
      <TypeSection></TypeSection>
    </aside>
  );
};

export default Sidebar;
