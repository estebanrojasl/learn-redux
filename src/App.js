import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadReducer } from "./actions";

function App() {
  const id = useSelector((state) => JSON.stringify(state));
  const owner = useSelector((state) => state.owner);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Id {id}</h1>
      <h1>Owner {owner}</h1>
      <button onClick={() => dispatch(loadReducer())}>+</button>
    </div>
  );
}

export default App;
