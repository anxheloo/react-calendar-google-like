import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedType } from "../../../../store/slices/monthSlice";

const ReservationType = ({ icon, type, text }) => {
  const dispatch = useDispatch();
  const selectedType = useSelector((state) => state.month.selectedType);

  const selectType = () => {
    dispatch(setSelectedType(type));
  };

  return (
    <div className="flex flex-col gap-1 cursor-pointe" onClick={selectType}>
      <span className={`border p-2 ${selectedType === type && "bg-blue-300"}`}>
        {icon}
      </span>
      <h3>{text}</h3>
    </div>
  );
};

export default ReservationType;
