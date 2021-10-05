import React from "react";
import notfound from "./notfound.png";

//page to show in case of pagenotfound
const Notfound = () => {
  return (
    <div>
      <img style={{ marginLeft: "25%" }} src={notfound} />
    </div>
  );
};

export default Notfound;
