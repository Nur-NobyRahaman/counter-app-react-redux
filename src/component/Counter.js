import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrementCount, handleIncrementCount, handleResetCount } from "./services/actions/CounterAction";

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    
//   const handleIncrementCount = () => {
//     setCount((currentCount) => currentCount + 1);
//   };
//   const handleDecrementCount = () => {
//     if (count > 0) {
//       setCount((currentCount) => currentCount - 1);
//     }
//   };

  return (
    <div>
      <h3>Counter app</h3>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(handleIncrementCount())}>Increment</button>
        <button onClick={()=>dispatch(handleDecrementCount())}>Decrement</button>
        <button onClick={()=>dispatch(handleResetCount())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
