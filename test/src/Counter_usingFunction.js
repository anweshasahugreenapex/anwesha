//life cycle of components using function based component

import React, { useEffect, useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
 
  useEffect(() => {
    (counter===0?console.log("component did mount"):console.log("component did update"))
    
    return () => {
      console.log("component did unmount");
    };
  }, [counter]);

  return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={() => {setCounter(counter + 1)
    console.log("component did update")}}>+</button>
      <button onClick={() => {setCounter(counter - 1)
    console.log("component did update")}}>-</button>
    </div>
  );
};

export default Counter;
