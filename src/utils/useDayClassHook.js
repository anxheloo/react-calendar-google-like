import dayjs from "dayjs";
import { useSelector } from "react-redux";

const useDayClassHook = (day) => {
  const daySelected = useSelector((state) => state.month.daySelected);

  const getCurrentDayClass = () => {
    const currentDayFormatted = day?.format("DD-MM-YY");
    const selectedDayFormatted = dayjs(daySelected).format("DD-MM-YY");

    if (currentDayFormatted === dayjs().format("DD-MM-YY")) {
      return "bg-blue-600 text-white rounded-full size-7";
    } else if (currentDayFormatted === selectedDayFormatted) {
      return "bg-blue-200 text-blue-600 font-bold rounded-full size-7";
    } else {
      return "";
    }
  };

  return getCurrentDayClass();
};

export default useDayClassHook;
