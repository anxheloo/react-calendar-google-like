import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  //   monthIndex: 7,
  monthIndex: dayjs().month(),
  smallCalendarMonth: null, // this is used in small calendar when we click on a date in a different month to update the month on both calendars
  daySelected: null, //Day selected is used in the small calendar when we click on a date there
  createEventModal: false,
  allEvents: [],
  selectedEvent: null,
  selectedType: "maintenance",
};

export const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    increment: (state) => {
      state.monthIndex += 1;
    },
    decrement: (state) => {
      state.monthIndex -= 1;
    },

    reset: (state) => {
      state.monthIndex =
        state.monthIndex === dayjs().month()
          ? dayjs().month() + 0.1
          : dayjs().month();
    },

    setSmallCalendarMonth: (state, action) => {
      state.smallCalendarMonth = action.payload;
    },

    setMonthIndex: (state, action) => {
      state.monthIndex = action.payload;
    },

    setDaySelected: (state, action) => {
      state.daySelected = action.payload;
    },

    openModal: (state) => {
      state.createEventModal = true;
    },

    closeModal: (state) => {
      state.createEventModal = false;
    },

    setAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },

    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  reset,
  setSmallCalendarMonth,
  setMonthIndex,
  setDaySelected,
  openModal,
  closeModal,
  setAllEvents,
  setSelectedEvent,
  setSelectedType,
} = monthSlice.actions;

export default monthSlice.reducer;
