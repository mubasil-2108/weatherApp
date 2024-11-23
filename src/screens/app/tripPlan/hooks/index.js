import { useState } from "react";
import { appImages } from "../../../../services";
import { useRoute } from "@react-navigation/native";

export function useHooks() {
  const route = useRoute();
    const { editBooking } = route.params || {};
    const [isChecked, setIsChecked] = useState(false);
    const [counter, setCounter] = useState({
        adults: 0,
        toddler: 0,
        infant: 0,
      });
      const [pressed, setPressed] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

      // Function to handle increment
  const increment = (type) => {
    setCounter(prevCounters => ({
      ...prevCounters,
      [type]: prevCounters[type] + 1,
    }));
  };

  // Function to handle decrement
  const decrement = (type) => {
    setCounter(prevCounters => ({
      ...prevCounters,
      [type]: Math.max(prevCounters[type] - 1, 0), // Ensure value doesn't go below 0
    }));
  };
    return {
        toggleCheckbox,
       isChecked,
       setIsChecked,
       increment,
       decrement,
       counter,
       editBooking
    }
}