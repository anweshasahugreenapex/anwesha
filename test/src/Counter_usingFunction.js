//life cycle of components using function based component

import React, { useEffect, useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      console.log("component did update");
    };
  }, [counter]);

  //render the counter and buttons
  return (
    <div>
      <h1>counter:{counter}</h1>
      <button
        onClick={() => {
          console.log("component will update");
          setCounter(counter + 1);
          console.log("added");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          console.log("component will update");
          setCounter(counter - 1);
          console.log("reduced");
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
