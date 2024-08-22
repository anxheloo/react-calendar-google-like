import React from "react";
import { FaPlus } from "react-icons/fa";

const CreateEventButton = () => {
  return (
    <button className=" border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <FaPlus className="size-7"></FaPlus>
      <span className=" px-7">Create</span>
    </button>
  );
};

export default CreateEventButton;
