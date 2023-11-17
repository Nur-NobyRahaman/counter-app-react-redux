import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counterApp/CounterSlice";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

const ToolKitStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ToolKitStoreProvider;
