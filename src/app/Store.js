import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counterApp/CounterSlice";
import { Provider } from "react-redux";
import PostReducer from "../features/postApp/PostSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostReducer,
  },
});

const ToolKitStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ToolKitStoreProvider;
