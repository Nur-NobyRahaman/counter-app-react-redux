import { createStore } from "redux";
import { CounterReducer } from "./component/services/reducer/CounterReducer";
import { Provider } from "react-redux";

const store = createStore(CounterReducer);
const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
