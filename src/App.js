import logo from "./logo.svg";
import "./App.css";
import CounterView from "./features/counterApp/CounterView";

function App() {
  return (
    <div className="App">
      <h2>welcome to react redux</h2>
      {/* <Counter></Counter> */}
      <CounterView></CounterView>
    </div>
  );
}

export default App;
