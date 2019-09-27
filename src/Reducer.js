import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state > 0) return state - 1;
      else return state;
    default:
      return state;
  }
}

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    document.title = "Reducer Test";
  });

  return (
    <>
      <div className="page">
        <h1>This is a page to try reducer</h1>
      </div>
      <div> count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  );
};

export default Reducer;
