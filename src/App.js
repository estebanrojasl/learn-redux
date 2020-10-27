import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiplier, reseter } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiplier(5))}>*5</button>
      <button onClick={() => dispatch(reseter())}>Reset</button>

      {isLogged ? <h2>Token required info</h2> : ""}
    </div>
  );
}

export default App;
