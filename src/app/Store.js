import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counterApp/CounterSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

const StoreProvider = (children) => {
  return <Provider store={store}>{children}</Provider>;
};
