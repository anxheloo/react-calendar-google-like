import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineSegment } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setAllEvents } from "../store/slices/monthSlice";

import { MdSchedule } from "react-icons/md";
import dayjs from "dayjs";

const CreateEvent = () => {
  const dispatch = useDispatch();
  const daySelected = useSelector((state) => state.month.daySelected);
  const selectedEvent = useSelector((state) => state.month.selectedEvent);
  const allEvents = useSelector((state) => state.month.allEvents);

  const [formData, setFormData] = useState({
    title: selectedEvent ? selectedEvent.title : "",
    description: selectedEvent ? selectedEvent.description : "",
    category: selectedEvent ? selectedEvent.category : "",
    labelColor: selectedEvent ? selectedEvent.labelColor : "red",
    selectedDay: daySelected,
    // Converts milliseconds back to a date string
    // const readableDate = new Date(selectedDay).toLocaleDateString("en-US");
    id: selectedEvent ? selectedEvent.id : Date.now(),
  });

  const labelClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

  const hideModal = () => {
    dispatch(closeModal());
  };

  const handleChange = (event, index) => {
    const { id } = event.target;

    if (id === "labelColor") {
      setFormData((prevValue) => ({
        ...prevValue,
        [id]: labelClasses[index],
      }));
    } else {
      setFormData((prevValue) => ({
        ...prevValue,
        [id]: event.target.value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newEvents = [...allEvents, formData];

    try {
      dispatch(setAllEvents(newEvents));
      localStorage.setItem("allEvents", JSON.stringify(newEvents));
      dispatch(closeModal());
    } catch (error) {
      console.error("Failed to save events:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const updatedAfterDelete = allEvents.filter(
        (event) => event.id !== selectedEvent.id
      );
      dispatch(setAllEvents(updatedAfterDelete));
      localStorage.setItem("allEvents", JSON.stringify(updatedAfterDelete));
      dispatch(closeModal());
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    const indexOfItemToEdit = allEvents.indexOf(selectedEvent);
    console.log(indexOfItemToEdit);

    const ourEvents = [...allEvents];

    ourEvents.splice(indexOfItemToEdit, 1, formData);
    console.log(ourEvents);

    dispatch(setAllEvents(ourEvents));

    localStorage.setItem("allEvents", JSON.stringify(ourEvents));

    dispatch(closeModal());
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form
        className="bg-white rounded-md shadow-2xl w-1/4"
        onSubmit={handleSubmit}
      >
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span>Create Event Modal</span>
          <IoIosCloseCircleOutline onClick={hideModal} />
        </header>

        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              id="title"
              placeholder="Add title"
              value={formData.title}
              required
              onChange={handleChange}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0"
            ></input>

            <MdSchedule />

            <p className="text-black">
              {daySelected
                ? dayjs(daySelected)?.format("dddd, MMMM DD")
                : dayjs().format("dddd, MMMM DD")}
            </p>

            <MdOutlineSegment></MdOutlineSegment>

            <input
              type="text"
              id="description"
              placeholder="Add description"
              value={formData.description}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0"
              onChange={handleChange}
            ></input>

            <CiBookmark></CiBookmark>
            <div className="flex gap-x-2">
              {labelClasses.map((label, index) => (
                <span
                  id="labelColor"
                  name={label}
                  onClick={(event) => handleChange(event, index)}
                  key={index}
                  style={{ backgroundColor: label, opacity: 0.8 }}
                  className={`size-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {formData.labelColor === labelClasses[index] && (
                    <FaCheck color="white" size={12}></FaCheck>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex justify-end w-full border-t p-3 mt-5">
          {selectedEvent ? (
            <div className="flex gap-2 items-center">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white"
                onClick={handleEdit}
              >
                Save changes
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white"
            >
              Save
            </button>
          )}
        </footer>
      </form>
    </div>
  );
};

export default CreateEvent;
