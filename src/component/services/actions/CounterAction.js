import { DECREMENT, INCREMENT, RESET } from "../constant/Constant";

export const handleIncrementCount = () => {
  return { type: INCREMENT };
};
export const handleDecrementCount = () => {
  return { type: DECREMENT };
};
export const handleResetCount = () => {
  return { type: RESET };
};
