import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increasement":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "userInput":
      return { ...state, userInput: action.payload };
    case "tgcolor":
      return { ...state, tgcolor: !state.tgcolor };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    tgcolor: false,
  });


  return (
    <>
      <main className="App" style={{ color: state.tgcolor ? "#FFF952" : "#FFF" }}>
        <input
          type="text"
          value={state.userInput}
          onChange={(e) => dispatch({type:'userInput' ,payload:e.target.value})}
        />
        <br />
        <br />
        <p>{state.count}</p>
        <section>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increasement" })}>+</button>
          <button onClick={() => dispatch({type:'tgcolor'})}>Color</button>
        </section>
        <br />
        <br />
        <p>{state.userInput}</p>
      </main>
    </>
  );
};

export default App;
