import React from "react";
import ReservationType from "./ReservationType";

import { CiLocationArrow1 } from "react-icons/ci";

const scheduleTypes = [
  { icon: <CiLocationArrow1 />, text: "Maintenance", type: "maintenance" },
  { icon: <CiLocationArrow1 />, text: "Examination", type: "examination" },
  { icon: <CiLocationArrow1 />, text: "Insurance", type: "insurance" },
  { icon: <CiLocationArrow1 />, text: "Ticket", type: "ticket" },
  { icon: <CiLocationArrow1 />, text: "Allocation", type: "allocation" },
  { icon: <CiLocationArrow1 />, text: "Contract", type: "contract" },
];

const TypeSection = () => {
  return (
    <div className=" grid grid-cols-3 grid-rows-2 gap-1 gap-y-3 mt-10">
      {scheduleTypes.map((item) => (
        <ReservationType
          key={item.type}
          icon={item.icon}
          text={item.text}
          type={item.type}
        ></ReservationType>
      ))}
    </div>
  );
};

export default TypeSection;
