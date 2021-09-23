import React, { useState } from "react";
import Counter from "./Counter_usingFunction"; //for function based
function App2() {
  const [mount, setMount] = useState(false);

  return (
    <div>
      <button
        //function to mount the counter on button click
        onClick={() => {
          setMount(true);
          console.log("component did mount");
        }}
        disabled={mount}
      >
        mount Counter
      </button>
      <button
        //function to unmount the counter on button click
        onClick={() => {
          setMount(false);
          console.log("component did unmount");
        }}
        disabled={!mount}
      >
        unmount Counter
      </button>

      {mount && <Counter />}
    </div>
  );
}

export default App2;
