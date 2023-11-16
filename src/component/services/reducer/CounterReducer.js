import { DECREMENT, INCREMENT, RESET } from "../constant/Constant";

const initialState = { count: 0 };
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      let newCount = 0;
      if (state.count > 0) {
        newCount = state.count - 1;
      }
      return {
        ...state,
        count: newCount,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
