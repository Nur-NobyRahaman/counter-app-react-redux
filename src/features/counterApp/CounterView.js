import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy5, reset } from "./CounterSlice";

const CounterView = () => {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter app ty toolkit</h2>
      <h3>Count : {count}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementBy5(5))}>Increment By 5</button>
      </div>
    </div>
  );
};

export default CounterView;
