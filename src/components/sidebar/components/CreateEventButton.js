import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/slices/monthSlice";

const CreateEventButton = () => {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(openModal());
  };

  return (
    <button
      className=" border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      onClick={showModal}
    >
      <FaPlus className="size-7"></FaPlus>
      <span className=" px-7">Create</span>
    </button>
  );
};

export default CreateEventButton;
